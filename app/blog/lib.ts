const WP_API_BASE = 'https://asfaronline.com/wp-json/wp/v2'

export async function getPosts() {
  const res = await fetch(`${WP_API_BASE}/posts?_embed`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch posts')
  return res.json()
}

export async function getPostBySlug(slug: string) {
  const encodedSlug = encodeURIComponent(slug) // مهم
  const res = await fetch(`https://asfaronline.com/wp-json/wp/v2/posts?slug=${encodedSlug}&_embed`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch post')
  const data = await res.json()
  return data[0] || null
}

