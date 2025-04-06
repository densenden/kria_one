import { client } from '../../lib/sanity'

export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)`)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Blog
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Insights, Tipps und Erfahrungen aus der Welt des ganzheitlichen Trainings.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {posts?.[0] && (
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                {posts[0].image && (
                  <img
                    src={posts[0].image}
                    alt={posts[0].title}
                    className="rounded-lg shadow-lg"
                  />
                )}
              </div>
              <div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <time dateTime={posts[0].publishedAt}>
                    {new Date(posts[0].publishedAt).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span className="mx-2">·</span>
                  <span>{posts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-lg text-gray-500 mb-8">
                  {posts[0].excerpt}
                </p>
                <a
                  href={`/blog/${posts[0].slug.current}`}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Weiterlesen
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.slice(1).map((post: any) => (
              <article key={post._id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug.current}`}
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

      {/* Categories */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Kategorien
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from(new Set(posts?.map((post: any) => post.category))).map(
              (category: string) => (
                <a
                  key={category}
                  href={`/blog/kategorie/${category}`}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-sm text-gray-700 hover:bg-gray-50"
                >
                  {category}
                </a>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  )
} 