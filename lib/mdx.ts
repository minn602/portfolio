import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import MDXComponents from "@/app/_components/common/MDXComponents";

const contentDirectory = path.join(process.cwd(), "content");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  content: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const blogDir = path.join(contentDirectory, "blog");
  const files = fs.readdirSync(blogDir);

  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const post = await getPostBySlug(slug);
      return post;
    })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(contentDirectory, "blog", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const title = data.title || "Untitled Post";
  const date = data.date || new Date().toISOString();
  const description = data.description || "";
  const tags = data.tags || [];

  return {
    slug,
    title,
    date,
    description,
    tags,
    content,
  };
}

export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,
    components: MDXComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
  });

  return content;
}

export function getAllPostSlugs() {
  const blogDir = path.join(contentDirectory, "blog");
  const files = fs.readdirSync(blogDir);

  return files.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}
