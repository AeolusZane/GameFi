import React from 'react'
import { YStack } from 'tamagui'
import { Toast, ToastProvider, ToastViewport } from '@tamagui/toast'
import { atom, useAtom } from 'jotai'

type ToastType = 'default' | 'warn'

const toastAtom = atom(false)
const toastTextAtom = atom('')
const toastTitleAtom = atom('')
const toastTypeAtom = atom<ToastType>('default')

export const useToast = () => {
    const [open, setOpen] = useAtom(toastAtom)
    const [text, setText] = useAtom(toastTextAtom)
    const [title, setTitle] = useAtom(toastTitleAtom)
    const [type, setType] = useAtom(toastTypeAtom)
    const timerRef = React.useRef(0)

    const show = ({
        text,
        title,
        type = 'default'
    }: { text: string, title: string, type?: ToastType }) => {
        setOpen(false)
        setText(text)
        setTitle(title)
        setType(type)
        window.clearTimeout(timerRef.current)
        timerRef.current = window.setTimeout(() => {
            setOpen(true)
        }, 150)
    }

    return {
        open,
        show,
        text,
        title,
        type
    }
}

const TOAST_BACKGROUND = {
    DEFAULT: '',
    WARN: "#e57373"
}

const TOAST_TEXT = {
    DEFAULT: '',
    WARN: '#fff'
}

const getToastStyle = (type: ToastType) => {
    switch (type) {
        case 'warn':
            return {
                background: TOAST_BACKGROUND.WARN,
                color: TOAST_TEXT.WARN
            }
        case 'default':
            return {
                background: TOAST_BACKGROUND.DEFAULT,
                color: TOAST_TEXT.DEFAULT
            }
        default:
            return {
                background: TOAST_BACKGROUND.DEFAULT,
                color: TOAST_TEXT.DEFAULT
            }
    }

}

// 用jotai的原子状态管理库
export default () => {
    const { open, text, title, type } = useToast()
    const timerRef = React.useRef(0)

    React.useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])

    const { color, background } = getToastStyle(type)

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
                    background={background}
                    x={0}
                >
                    <Toast.Title style={{ color }}>{title}</Toast.Title>
                    <Toast.Description style={{ color }}>{text}</Toast.Description>
                </Toast>
            </ToastProvider>
        </YStack>
    )
}