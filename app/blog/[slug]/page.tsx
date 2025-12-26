import { getPostBySlug } from '../lib'

interface PostPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await fetch('https://asfaronline.com/wp-json/wp/v2/posts').then(res => res.json())
  return posts.map((post: any) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) return <h1>Post not found</h1>

  const featuredImage =
    post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null

  return (
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      {featuredImage && <img src={featuredImage} alt={post.title.rendered} style={{ maxWidth: '100%' }} />}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} style={{ marginTop: '1rem' }} />
    </article>
  )
}
