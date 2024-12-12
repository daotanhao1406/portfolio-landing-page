import { Glasses } from "lucide-react";

interface WorkProcessCardProps {
  title: string;
  description: string;
  backgroundColor: string;
}

const WorkProcessCard = ({ title, description, backgroundColor }: WorkProcessCardProps) => {
  return (
    <div className={`${backgroundColor} flex flex-col p-6 w-[470px] rounded-xl h-[270px]`}>
      <div className="mb-4"><Glasses size={40}/></div>
      <h3 className="font-semibold text-2xl mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default WorkProcessCard;