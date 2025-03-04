import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug, renderMDX } from "@/lib/mdx";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getPostBySlug(params.slug);
    const content = await renderMDX(post.content);

    return (
      <main className="pb-16">
        <article className="prose lg:prose-xl max-w-none">
          <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
          <div className="text-sm font-medium sm:text-base text-center">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <hr className="mt-4 border-1 w-full" />
          <div className="py-8">{content}</div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2 py-1 bg-pink font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
    );
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    notFound();
  }
}
