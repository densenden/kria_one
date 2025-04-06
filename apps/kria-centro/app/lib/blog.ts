import fs from 'fs';
import path from 'path';

export interface BlogPost {
  title: string;
  date: string;
  author: string;
  gallery: {
    src: string;
    alt: string;
    caption: string;
  }[];
  content: {
    type: 'paragraph' | 'heading';
    text: string;
  }[];
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'app/data/blog');
  const files = fs.readdirSync(blogDir);
  
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(blogDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content) as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(process.cwd(), 'app/data/blog', `${slug}.json`);
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content) as BlogPost;
  } catch (error) {
    return null;
  }
} 