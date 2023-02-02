import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$code',
  backgroundColor: '$izuka300',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return <Button>Hello World</Button>
}
