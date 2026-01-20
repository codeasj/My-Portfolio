import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex gap-4 p-6 bg-slate-900 text-white">
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/projects">Projects</Link>
  </nav>
  )
}

export default Navbar