import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray500',
  borderRadius: '$md',
})

export function App() {
  return (
    <div>
      <Button>App</Button>
    </div>
  )
}
