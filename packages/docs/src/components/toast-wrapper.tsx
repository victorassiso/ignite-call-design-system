import {
  Box,
  Button,
  Toast,
  ToastProvider,
  ToastViewport,
  useToast,
} from '@victorassis/react'

export function ToastWrapper() {
  const { open, setOpen, trigger } = useToast()

  return (
    <ToastProvider>
      <Box
        css={{
          height: '$40',
          display: 'flex',
        }}
      >
        <Button onClick={trigger}>Add to calendar</Button>
        <Toast
          open={open}
          setOpen={setOpen}
          title="Agendamento realizado"
          description="Quarta-feira, 23 de Outubro às 16h"
        ></Toast>
      </Box>
      <ToastViewport />
    </ToastProvider>
  )
}
