import Button from '.'

export default {
  title: 'Button',
  component: Button,
}

export const Primary = (args) => <Button {...args} />

Primary.args = {
  primary: true,
  children: 'Primary Button'
}

export const Secondary = (args) => <Button {...args} />

Secondary.args = {
  secondary: true,
  children: 'Primary Button'
}
