import { ColumnCardProps } from "./column-card";

export default function RowCard(props: ColumnCardProps) {
    return (
        <div style={{ backgroundImage: "url('/information-bg.svg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center top" }} className="w-full lg:h-96 h-80 flex items-center p-8 bg-[#F1DEBB] rounded-lg">
            <div className="w-1/2 text-left flex flex-col justify-center pr-4 space-y-2">
            <p className="text-sm md:text-xl font-bold pr-4">{props.title}</p>
            <p className="text-gray-600 text-xs md:text-sm pt-2 pr-4">
            {props.description}
          </p>
          </div>
        <div className="h-full w-1/2 bg-[#7553F5] rounded-lg"></div>
            

        </div>
    )
}