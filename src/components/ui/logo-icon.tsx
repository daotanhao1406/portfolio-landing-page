type LogoIconProps = {
    size: number
    icon: React.ReactNode
    backgroundColor: string
}
export default function LogoIcon(props: LogoIconProps) {
    return (
        <div className={`w-${props.size} h-${props.size} rounded-3xl flex items-center justify-center bg-[${props.backgroundColor}]`}>{props.icon}</div>
    )
}