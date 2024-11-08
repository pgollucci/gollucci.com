import type { ReactElement } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'P6M7G8 Inc.', href: 'https://www.p6m7g8.com' },
  { name: 'Continuous Learning', href: 'https://www.youtube.com/channel/UC6mOzHytcWLRJInP5B_Qg6g' },
]

function Nav(): ReactElement {
  const pathname = usePathname()

  return (
    <nav className="text-center" aria-label="TopBar" role="navigation">
      {navigation.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href
            ? 'rounded-md bg-primary px-4 text-center text-tertiary'
            : 'rounded-md px-4 text-secondary hover:bg-primary hover:text-tertiary'}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
