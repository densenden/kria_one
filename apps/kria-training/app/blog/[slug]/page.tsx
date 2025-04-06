import { client } from '../../../lib/sanity'

interface Props {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: params.slug }
  )

  if (!post) {
    return (
      <main className="min-h-screen bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Beitrag nicht gefunden
          </h1>
          <p className="mt-4 text-gray-500">
            Der gesuchte Blogbeitrag existiert leider nicht.
          </p>
          <a
            href="/blog"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Zurück zum Blog
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-gray-50">
        {post.image && (
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-60" />
          </div>
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center text-sm text-white mb-4">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span className="mx-2">·</span>
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <article className="prose prose-lg max-w-prose mx-auto px-4 sm:px-6 lg:px-8">
          {post.content}
        </article>
      </section>

      {/* Author Section */}
      {post.author && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-8">
              {post.author.image && (
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="h-20 w-20 rounded-full"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {post.author.name}
                </h3>
                <p className="mt-1 text-gray-500">{post.author.bio}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Weitere Artikel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {post.relatedPosts?.map((relatedPost: any) => (
              <article
                key={relatedPost._id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                {relatedPost.image && (
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-500 mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <a
                    href={`/blog/${relatedPost.slug.current}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Weiterlesen →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 