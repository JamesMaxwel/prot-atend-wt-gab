import { create } from 'zustand';

export interface Message {
  id: string;
  content: string;
  timestamp: Date;
  isBot: boolean;
}

interface MessagesState {
  messages: Message[];
  addMessage: (content: string, isBot: boolean) => void;
}

export const useMessages = create<MessagesState>((set) => ({
  messages: [],
  addMessage: (content: string, isBot: boolean) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Math.random().toString(36).substring(7),
          content,
          timestamp: new Date(),
          isBot,
        },
      ],
    })),
})); 