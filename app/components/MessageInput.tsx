import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { FaceSmileIcon, PaperClipIcon, MicrophoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

export function MessageInput({ onSendMessage }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="bg-[#202c33] px-4 py-2.5">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <button 
          type="button" 
          className="p-2 text-[#8696a0] hover:text-[#e9edef] transition-colors"
          aria-label="Escolher emoji"
        >
          <FaceSmileIcon className="h-6 w-6" />
        </button>
        
        <button 
          type="button" 
          className="p-2 text-[#8696a0] hover:text-[#e9edef] transition-colors"
          aria-label="Anexar arquivo"
        >
          <PaperClipIcon className="h-6 w-6" />
        </button>
        
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite uma mensagem"
            className="w-full bg-[#2a3942] text-[#d1d7db] placeholder-[#8696a0] rounded-lg px-4 py-[9px] text-[15px] leading-5 focus:outline-none focus:ring-0"
          />
        </div>

        {message.trim() ? (
          <button
            type="submit"
            className="p-2 text-[#00a884] hover:text-[#06cf9c] transition-colors"
            aria-label="Enviar mensagem"
          >
            <PaperAirplaneIcon className="h-6 w-6" />
          </button>
        ) : (
          <button
            type="button"
            className="p-2 text-[#00a884] hover:text-[#06cf9c] transition-colors"
            aria-label="Gravar áudio"
          >
            <MicrophoneIcon className="h-6 w-6" />
          </button>
        )}
      </form>
    </div>
  );
} 