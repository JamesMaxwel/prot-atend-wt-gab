import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PhoneIcon, VideoCameraIcon, MagnifyingGlassIcon, EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export function ChatHeader() {
  return (
    <div className="bg-[#202c33] border-b border-[#8696a026]">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-1 text-[#8696a0] hover:text-[#e9edef] transition-colors">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/gabiju-logo.png" alt="Gabiju" />
              <AvatarFallback className="bg-[#6a7175] text-white">GB</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-[#e9edef] font-medium text-base leading-6">Atendimento Gabiju</h2>
              <p className="text-[13px] text-[#8696a0] leading-4">online</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            <button className="p-2 text-[#8696a0] hover:text-[#e9edef] transition-colors">
              <VideoCameraIcon className="h-[24px] w-[24px]" />
            </button>
            <button className="p-2 text-[#8696a0] hover:text-[#e9edef] transition-colors">
              <PhoneIcon className="h-[24px] w-[24px]" />
            </button>
            <div className="h-5 w-[1px] bg-[#8696a026] mx-2"></div>
          </div>
          <button className="p-2 text-[#8696a0] hover:text-[#e9edef] transition-colors">
            <MagnifyingGlassIcon className="h-[24px] w-[24px]" />
          </button>
          <button className="p-2 text-[#8696a0] hover:text-[#e9edef] transition-colors">
            <EllipsisVerticalIcon className="h-[24px] w-[24px]" />
          </button>
        </div>
      </div>
    </div>
  );
} 