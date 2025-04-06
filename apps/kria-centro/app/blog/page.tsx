import { getAllBlogPosts } from '../lib/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={post.gallery[0].src}
                  alt={post.gallery[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-semibold">{post.title}</h2>
                  <span className="text-gray-500">{new Date(post.date).toLocaleDateString('de-DE')}</span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {post.content.find(c => c.type === 'paragraph')?.text}
                </p>
                
                <Link 
                  href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Weiterlesen →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 