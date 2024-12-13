export type ColumnCardProps = {
  title: string
  description: string
}

export default function ColumnCard(props: ColumnCardProps) {
    return (
    <div className="w-auto h-auto text-center space-y-4 p-8 bg-[#F1DEBB] rounded-lg">
            <div className="h-36 w-full bg-[#7553F5] rounded-lg"></div>
            <h2 className="text-lg md:text-xl font-bold pt-2">{props.title}</h2>
            <p className="text-gray-600 text-xs md:text-sm">
            {props.description}
          </p>

        </div>
    )
}