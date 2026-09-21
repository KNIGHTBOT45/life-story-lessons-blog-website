import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    redirect("/");
  }

  const { count: postCount } = await supabase
    .from("posts")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: publishedCount } = await supabase
    .from("posts")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "published");

  const { count: draftCount } = await supabase
    .from("posts")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "draft");

  return (
    <main className="admin-page">

      <header className="admin-header">

        <div>
          <span className="eyebrow">
            ADMINISTRATION
          </span>

          <h1>
            Welcome, {profile.full_name}
          </h1>
        </div>

        <a
          href="/"
          className="button button-dark"
        >
          View Website
        </a>

      </header>


      <section className="admin-stats">

        <div className="admin-stat">
          <span>Total Posts</span>
          <strong>{postCount ?? 0}</strong>
        </div>

        <div className="admin-stat">
          <span>Published</span>
          <strong>{publishedCount ?? 0}</strong>
        </div>

        <div className="admin-stat">
          <span>Drafts</span>
          <strong>{draftCount ?? 0}</strong>
        </div>

      </section>


      <section className="admin-actions">

        <a href="/admin/posts/new">
          <strong>New Article</strong>
          <span>Create a new blog post</span>
        </a>

        <a href="/admin/posts">
          <strong>Manage Articles</strong>
          <span>Edit and delete posts</span>
        </a>

        <a href="/admin/comments">
          <strong>Comments</strong>
          <span>Moderate reader comments</span>
        </a>

        <a href="/admin/settings">
          <strong>Settings</strong>
          <span>Website settings</span>
        </a>

      </section>

    </main>
  );
}