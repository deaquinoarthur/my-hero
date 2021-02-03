import * as Style from './styles'

function Button({ children, primary, secondary, ...props }) {
  return (
    <Style.Button
      primary={primary}
      secondary={secondary}
      {...props}
    >
      {children}
    </Style.Button>
  )
}

export default Button
