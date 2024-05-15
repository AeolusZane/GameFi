import React from 'react'
import { Button, YStack } from 'tamagui'
import { Toast, ToastProvider, ToastViewport } from '@tamagui/toast'

export default () => {
    const [open, setOpen] = React.useState(false)
    const timerRef = React.useRef(0)

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])

    return (
        <YStack ai="center">
            <Button
                onPress={() => {
                    setOpen(false)
                    window.clearTimeout(timerRef.current)
                    timerRef.current = window.setTimeout(() => {
                        setOpen(true)
                    }, 150)
                }}
            >
                Single Toast
            </Button>
            <ToastProvider>
                <ToastViewport />
                <Toast
                    onOpenChange={setOpen}
                    open={open}
                    animation="100ms"
                    enterStyle={{ x: -20, opacity: 0 }}
                    exitStyle={{ x: -20, opacity: 0 }}
                    opacity={1}
                    x={0}
                >
                    <Toast.Title>Subscribed!</Toast.Title>
                    <Toast.Description>We'll be in touch.</Toast.Description>
                </Toast>
            </ToastProvider>
        </YStack>
    )
}