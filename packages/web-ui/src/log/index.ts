export const enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3
}

export default function log(info: string, level: LogLevel = LogLevel.INFO) {
    switch (level) {
        case LogLevel.DEBUG:
            console.debug(info)
            break
        case LogLevel.INFO:
            console.info(info)
            break
        case LogLevel.WARN:
            console.log(`%c${info}`,'color: yellow; font-size: 12px; font-weight: 600; background-color: black; padding: 2px 4px; border-radius: 4px;')
            break
        case LogLevel.ERROR:
            console.error(info)
            break
        default:
            console.log(`%c${info}`,'color: red; font-size: 16px; font-weight: 600;')
            break
    }
}