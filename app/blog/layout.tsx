export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <h1>Blog</h1>
        <p>Welcome to our blog powered by WordPress & Next.js</p>
      </header>
      <main style={{ padding: '1rem' }}>{children}</main>
      <footer style={{ padding: '1rem', borderTop: '1px solid #ccc' }}>
        &copy; 2025 My Blog
      </footer>
    </div>
  )
}
