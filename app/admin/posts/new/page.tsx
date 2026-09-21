"use client";

import { FormEvent, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface Category {
  id: string;
  name: string;
}

export default function NewPostPage() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");

  const [status, setStatus] = useState("draft");

  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const supabase = createClient();

      const { data } = await supabase
        .from("categories")
        .select("id,name")
        .order("name");

      if (data) {
        setCategories(data);
      }
    }

    loadCategories();
  }, []);

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  function handleTitleChange(value: string) {
    setTitle(value);

    if (!slug) {
      setSlug(generateSlug(value));
    }
  }

  async function createPost(e: FormEvent) {
    e.preventDefault();

    setSaving(true);
    setError("");

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/admin/login");
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if (profile?.role !== "admin") {
      setError("You are not authorized.");
      setSaving(false);
      return;
    }

    const { error } = await supabase
      .from("posts")
      .insert({
        title,
        slug,
        excerpt,
        content,
        category_id: categoryId || null,
        featured_image: featuredImage || null,
        status,
        author_id: user.id,
        published_at:
          status === "published"
            ? new Date().toISOString()
            : null,
      });

    if (error) {
      setError(error.message);
      setSaving(false);
      return;
    }

    router.push("/admin/posts");
    router.refresh();
  }

  return (
    <main className="admin-editor">

      <div className="editor-header">
        <div>
          <span className="eyebrow">
            CONTENT MANAGEMENT
          </span>

          <h1>New Article</h1>
        </div>

        <a href="/admin">
          ← Dashboard
        </a>
      </div>


      <form
        onSubmit={createPost}
        className="post-editor"
      >

        <label>
          Title

          <input
            value={title}
            onChange={(e) =>
              handleTitleChange(e.target.value)
            }
            placeholder="Article title"
            required
          />
        </label>


        <label>
          URL Slug

          <input
            value={slug}
            onChange={(e) =>
              setSlug(generateSlug(e.target.value))
            }
            placeholder="article-url"
            required
          />
        </label>


        <label>
          Category

          <select
            value={categoryId}
            onChange={(e) =>
              setCategoryId(e.target.value)
            }
            required
          >
            <option value="">
              Select category
            </option>

            {categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
        </label>


        <label>
          Featured Image URL

          <input
            value={featuredImage}
            onChange={(e) =>
              setFeaturedImage(e.target.value)
            }
            placeholder="https://..."
          />
        </label>


        <label>
          Excerpt

          <textarea
            value={excerpt}
            onChange={(e) =>
              setExcerpt(e.target.value)
            }
            placeholder="Short description of the article"
            rows={4}
          />
        </label>


        <label>
          Article Content

          <textarea
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            placeholder="Write your article..."
            rows={20}
            required
          />
        </label>


        <label>
          Status

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option value="draft">
              Draft
            </option>

            <option value="published">
              Publish
            </option>
          </select>
        </label>


        {error && (
          <div className="form-error">
            {error}
          </div>
        )}


        <button
          type="submit"
          className="button button-dark"
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Article"}
        </button>

      </form>

    </main>
  );
}