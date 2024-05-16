import React from 'react'
import { YStack } from 'tamagui'
import { Toast, ToastProvider, ToastViewport } from '@tamagui/toast'
import { atom, useAtom } from 'jotai'

const toastAtom = atom(false)
const toastTextAtom = atom('')

export const useToast = () => {
    const [open, setOpen] = useAtom(toastAtom)
    const [text, setText] = useAtom(toastTextAtom)
    const timerRef = React.useRef(0)

    const show = (text: string) => {
        setOpen(false)
        setText(text)
        window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(() => {
            setOpen(true)
        }, 150)
    }

    return {
        open,
        show,
        text
    }

}

// 用jotai的原子状态管理库
export default () => {
    const { open, text } = useToast()
    const timerRef = React.useRef(0)

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])

    return (
        <YStack ai='center'>
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
                    <Toast.Title>Transaction Succeed!</Toast.Title>
                    <Toast.Description>{text}</Toast.Description>
                </Toast>
            </ToastProvider>
        </YStack>
    )
}