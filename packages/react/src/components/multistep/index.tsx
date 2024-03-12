import { Label, Container, Step, Steps } from './styles'

export interface MultistepProps {
  size: number
  currentStep?: number
}

export function Multistep({ size, currentStep = 1 }: MultistepProps) {
  return (
    <Container>
      <Label>
        Step {currentStep} of {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </Container>
  )
}

Multistep.displayName = 'Multistep'
