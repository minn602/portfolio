import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "My personal blog posts",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen pb-16">
      <div className="flex gap-2">
        <h2 className="mb-12 text-2xl font-eiko font-bold tracking-tight">
          All Posts
        </h2>
        <span className="font-eiko font-medium">( {posts.length} )</span>
      </div>

      <div className="mx-auto max-w-[800px] flex flex-col gap-8 lg:gap-12">
        {posts.map((post) => (
          <article key={post.slug} className="py-6 border-b">
            <Link href={`/blog/${post.slug}`} className="block">
              <p className="mb-1 text-xl font-bold">{post.title}</p>
              <p className="mb-4">{post.description}</p>
              <div className="flex items-center justify-between gap-2 text-sm">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 font-semibold">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-2 py-1 bg-pink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <p className="text-center py-8">No blog posts found.</p>
        )}
      </div>
    </main>
  );
}
