import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  length: number;
  readTime: string;
}

// Function to calculate reading time (assuming 200 words per minute)
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Function to generate excerpt from content
function generateExcerpt(content: string, maxLength: number = 200): string {
  // Remove markdown syntax and get plain text
  const plainText = content.replace(/[#*`_~]/g, "").replace(/\n/g, " ");
  return plainText.length > maxLength
    ? plainText.substring(0, maxLength) + "..."
    : plainText;
}

export const posts: Record<
  string,
  Omit<Post, "content" | "length" | "excerpt" | "readTime">
> = {
  "the-importance-of-marginal-intelligence": {
    id: "the-importance-of-marginal-intelligence",
    title: "The Importance of Marginal Intelligence [This is a demo post]",
    date: "2024-04-05",
  },
  // Add more posts here
};

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function getPost(id: string): Promise<Post | null> {
  try {
    const post = posts[id];
    if (!post) return null;

    const fullPath = path.join(process.cwd(), "content/posts", `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content } = matter(fileContents);
    const htmlContent = await markdownToHtml(content);
    const length = content.split(/\s+/).length;
    const excerpt = generateExcerpt(content);
    const readTime = calculateReadingTime(content);

    return {
      ...post,
      content: htmlContent,
      length,
      excerpt,
      readTime,
    };
  } catch (error) {
    console.error(`Error loading post ${id}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const postPromises = Object.keys(posts).map(getPost);
  const allPosts = await Promise.all(postPromises);
  return allPosts.filter((post): post is Post => post !== null);
}
