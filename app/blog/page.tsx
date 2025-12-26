import { getPosts } from './lib'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div>
      <h2>All Posts</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post: any) => (
          <li key={post.id} style={{ marginBottom: '2rem' }}>
            <Link
              href={`/blog/${post.slug}/`}
              style={{ textDecoration: 'none', color: 'blue' }}
            >
              <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Link>

            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                style={{ maxWidth: '100%', marginTop: '0.5rem' }}
              />
            )}

            <div
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              style={{ marginTop: '0.5rem' }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
