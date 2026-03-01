import type { ReactElement } from 'react'
import packageJson from '../../package.json'

const social = [
  { name: 'Dev.to', href: 'https://dev.to/pgollucci', icon: () => (<p>Dev.to</p>) },
  { name: 'GitHub', href: 'https://github.com/pgollucci', icon: () => (<p>Github</p>) },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/pgollucci/', icon: () => (<p>LinkedIn</p>) },
  { name: 'Medium', href: 'https://medium.com/@pgollucci', icon: () => (<p>Medium</p>) },
  { name: 'Twitter', href: 'https://twitter.com/p6m7g8', icon: () => (<p>Twitter</p>) },
  { name: 'Youtube', href: 'https://www.youtube.com/@p6m7g8', icon: () => (<p>Youtube</p>) },
]

function Footer(): ReactElement {
  const nextVersion = packageJson.dependencies.next
  const tailwindVersion = packageJson.devDependencies.tailwindcss

  return (
    <>
      <footer className="w-full">
        <div className="m-4 border-t border-gray-700 p-4">
          <div className="flex justify-between">
            <div className="flex space-x-6">
              {
                social.map(item => (
                  <span key={item.name}>
                    <a className="hover:text-primary" href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
                  </span>
                ))
              }
            </div>
            <ul className="text-right">
              <li><a className="hover:text-primary" href="https://github.com/pgollucci/gollucci.com" target="_blank" rel="noopener noreferrer">{`Next.js ${nextVersion}`}</a></li>
              <li><a className="hover:text-primary" href="https://github.com/p6m7g8/p6-cdk-website-plus-app" target="_blank" rel="noopener noreferrer">AWS CDK 2.234.1</a></li>
              <li>{`TailwindCSS ${tailwindVersion}`}</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
