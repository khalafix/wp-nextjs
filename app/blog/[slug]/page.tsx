import { getPostBySlug } from '../lib'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params   // ✅ مهم

  const post = await getPostBySlug(slug)

  if (!post) {
    return <h1>Post not found</h1>
  }

  const featuredImage =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null

  return (
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

      {featuredImage && (
        <img
          src={featuredImage}
          alt={post.title.rendered}
          style={{ maxWidth: '100%' }}
        />
      )}

      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        style={{ marginTop: '1rem' }}
      />
    </article>
  )
}
