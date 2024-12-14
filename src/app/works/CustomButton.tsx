'use client'
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent} from "@radix-ui/react-dropdown-menu";
import { ArrowUpRight } from "lucide-react";
interface NavButtonProps {
    key: number
    label: string;
    items: string[];
    isActive?: boolean;
  }
  
export default function CustomButton({ key, label, items, isActive = false }: NavButtonProps) {
    return <DropdownMenu key={key}>
          <DropdownMenuTrigger asChild onClick={() => console.log('avx')}>
            <button
                    className={cn(
                      "px-6 py-2 rounded-full md:text-base text-sm font-medium transition-all",
                      isActive 
                        ? "bg-white text-primary border-2 border-[#F1DEBB]" 
                        : "bg-[#F4F4F4] text-[#312D42]"
                    )}
                  >
                    {label}
                  </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="md:w-screen w-[360px] mx-6 bg-[#F1DEBB] z-20 md:mt-5 mt-3 md:max-w-2xl rounded-md">
            <div className={`md:grid-cols-4 grid-cols-3 p-2 md:py-5 grid grid-rows-2 gap-x-1 md:gap-y-1`} role="menu">
                {items.map((item, index) => (
                <button 
                    key={index}
                    className="flex items-center w-full md:px-4 py-2 text-sm text-gray-700 hover:text-primary"
                    role="menuitem"
                >
                    <span className="h-4 w-4 mr-2 rounded-full bg-black flex justify-center items-center hover:bg-primary" >
                        <ArrowUpRight color="white" size={14} />
                    </span>
                    {item}
                </button>
                ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
}