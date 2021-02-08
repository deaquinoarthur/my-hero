import * as Style from './styles'

function Button({ children, ...props }) {
  return <Style.Button {...props}>{children}</Style.Button>
}

export default Button
