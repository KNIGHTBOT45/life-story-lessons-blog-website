import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPostsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "admin") {
    redirect("/");
  }

  const { data: posts } = await supabase
    .from("posts")
    .select(`
      id,
      title,
      slug,
      status,
      created_at,
      categories (
        name
      )
    `)
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="admin-page">

      <div className="editor-header">

        <div>
          <span className="eyebrow">
            CONTENT
          </span>

          <h1>Articles</h1>
        </div>

        <a
          href="/admin/posts/new"
          className="button button-dark"
        >
          + New Article
        </a>

      </div>


      <div className="posts-table">

        {posts?.map((post: any) => (
          <div
            className="post-row"
            key={post.id}
          >

            <div>
              <h3>{post.title}</h3>

              <span>
                {post.categories?.name ?? "Uncategorized"}
              </span>
            </div>

            <span className={`status status-${post.status}`}>
              {post.status}
            </span>

            <a
              href={`/posts/${post.slug}`}
              target="_blank"
            >
              View
            </a>

          </div>
        ))}

      </div>

    </main>
  );
}