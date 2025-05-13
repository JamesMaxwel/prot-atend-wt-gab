"use client";

import { useEffect, useRef } from "react";
import { ChatHeader } from "./components/ChatHeader";
import { Message } from "./components/Message";
import { MessageInput } from "./components/MessageInput";
import { useMessages } from "./store/messages";
import { gerarResposta, RESPOSTAS_PADRAO } from "./services/ai";

export default function Home() {
  const { messages, addMessage } = useMessages();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialMessageSentRef = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Verifica se é a primeira renderização e se não há mensagens
    if (!initialMessageSentRef.current && messages.length === 0) {
      initialMessageSentRef.current = true;
      // Usa a mensagem de saudação do arquivo ai.ts
      addMessage(RESPOSTAS_PADRAO.saudacao[0], true);
    }
    scrollToBottom();
  }, [messages.length, addMessage]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    
    // Adiciona a mensagem do usuário
    addMessage(content, false);

    // Simula um pequeno delay para parecer mais natural
    setTimeout(() => {
      const resposta = gerarResposta(content);
      addMessage(resposta, true);
    }, 1000);
  };

  // Conteúdo do chat
  const ChatContent = () => (
    <div className="flex flex-col h-full bg-[#0b141a]">
      <ChatHeader />
      <div 
        className="flex-1 overflow-y-auto bg-[#0b141a] bg-chat-pattern"
        style={{
          backgroundSize: "100% auto",
          backgroundPosition: "center",
        }}
      >
        <div className="px-[5%] md:px-[10%] py-4 space-y-1">
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#eae6df]">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[#eae6df] bg-chat-pattern opacity-[0.06]" />
      
      {/* Versão Mobile (tela cheia) */}
      <div className="md:hidden w-full h-screen flex flex-col">
        <ChatContent />
      </div>

      {/* Versão Desktop (com frame de smartphone) */}
      <div className="hidden md:block relative max-w-[1600px] w-full mx-auto">
        <div className="smartphone max-w-[480px] mx-auto bg-[#111b21] rounded-[3rem] shadow-2xl overflow-hidden">
          {/* Status bar */}
          <div className="h-7 bg-[#1f1f1f] flex items-center justify-between px-6 text-xs text-white">
            <span>22:29</span>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rounded-full" />
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rounded-full" />
              </div>
            </div>
          </div>
          <ChatContent />
        </div>
      </div>
    </div>
  );
} 