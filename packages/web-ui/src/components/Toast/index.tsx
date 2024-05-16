import React from 'react'
import { Button, YStack } from 'tamagui'
import { Toast, ToastProvider, ToastViewport } from '@tamagui/toast'
import { atom, useAtom } from 'jotai'

const toastAtom = atom(false)

const useToast = () => {
    const [open, setOpen] = useAtom(toastAtom)

    return {
        open,
        setOpen,
    }

}

// 用jotai的原子状态管理库
export default () => {
    const { open, setOpen } = useToast()
    const timerRef = React.useRef(0)

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])

    return (
        <YStack ai='center'>
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
                <ToastViewport top={0} left={0} right={0} />
                <Toast
                    // onOpenChange={setOpen}
                    open={open}
                    animation="100ms"
                    enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
                    exitStyle={{ opacity: 0, scale: 1, y: -20 }}
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