import { Mail } from "lucide-react";

export default function MoreQuestionCard() {
    return (
        <div>
          <div className="flex gap-4 w-full max-w-2xl">
            <div className="bg-white flex flex-col text-center rounded-lg py-12 sm:px-6 px-12">
                <p className="text-base font-medium">Do you have more Questions?</p>
                <p className="text-xl font-bold">Just Drop a Message!</p>
                <div className="flex gap-4 mt-4">
                <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full">
                    <Mail />
                    WhatsApp
                </button>
                <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full">
                    <Mail />
                    Email
                </button>
                </div>
                </div>
          </div>
          {/* <MoreQuestionCard /> */}
        </div>
    )
}