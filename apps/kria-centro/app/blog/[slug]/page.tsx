import { getBlogPostBySlug } from '../../lib/blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex justify-between items-center text-gray-500 mb-8">
              <span>Von {post.author}</span>
              <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
            </div>
            
            <div className="relative h-96 mb-8">
              <Image
                src={post.gallery[0].src}
                alt={post.gallery[0].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </header>

          <div className="prose max-w-none">
            {post.content.map((section, index) => (
              <div key={index}>
                {section.type === 'heading' ? (
                  <h2 className="text-2xl font-semibold mb-4">{section.text}</h2>
                ) : (
                  <p className="text-gray-600 mb-4">{section.text}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Galerie</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {post.gallery.map((image, index) => (
                <div key={index} className="relative h-48">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                    {image.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 