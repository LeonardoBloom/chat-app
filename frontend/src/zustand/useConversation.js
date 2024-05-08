import { create } from "zustand";

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }), // Corrected
    messages: [],
    setMessages: (messages) => set({ messages }), // Corrected
}));

export default useConversation;
