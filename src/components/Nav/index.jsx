import * as Style from './styles'
import Link from 'next/link'

function Nav() {
  return (
    <Style.Nav>
      <Link href="/">
        <a>
          <h1 data-testid="logo">
            <span>WHERE IS</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>MY HERO?</span>
          </h1>
        </a>
      </Link>
    </Style.Nav>
  )
}

export default Nav
