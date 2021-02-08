import * as Style from './styles'
import Link from 'next/link'

function Nav() {
  return (
    <Style.Nav>
      <Link href="/">
        <a>
          <img
            src="/img/where-is-my-hero-logo.svg"
            alt="Where Is My Hero Logo"
          />
        </a>
      </Link>
    </Style.Nav>
  )
}

export default Nav
