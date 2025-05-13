import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckIcon } from "@heroicons/react/24/solid";

interface MessageProps {
  content: string;
  timestamp: Date;
  isBot?: boolean;
}

export function Message({ content, timestamp, isBot = false }: MessageProps) {
  // Função para formatar o conteúdo com quebras de linha
  const formatContent = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index} className="block">
        {line}
      </span>
    ));
  };

  return (
    <div
      className={cn(
        "flex w-full mb-[5px]",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div 
        className={cn(
          "relative max-w-[85%] px-[9px] py-[6px] rounded-[7.5px] shadow-sm",
          isBot 
            ? "bg-[#202c33] rounded-tl-[0px] before:absolute before:left-[-8px] before:top-0 before:border-t-[8px] before:border-r-[8px] before:border-b-0 before:border-l-0 before:border-[#202c33] before:border-solid" 
            : "bg-[#005c4b] rounded-tr-[0px] before:absolute before:right-[-8px] before:top-0 before:border-t-[8px] before:border-l-[8px] before:border-b-0 before:border-r-0 before:border-[#005c4b] before:border-solid"
        )}
      >
        <div className="text-[14.2px] text-[#e9edef] leading-[19px] break-words whitespace-pre-wrap">
          {formatContent(content)}
        </div>
        <div className="flex items-center justify-end gap-1 mt-[4px] min-h-[15px]">
          <span className="text-[11px] text-[#8696a0] leading-[15px] mt-[2px]">
            {format(timestamp, "HH:mm", { locale: ptBR })}
          </span>
          {!isBot && (
            <div className="flex items-center ml-[2px]">
              <CheckIcon className="h-[15px] w-[15px] text-[#53bdeb] -mr-[5px]" />
              <CheckIcon className="h-[15px] w-[15px] text-[#53bdeb]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 