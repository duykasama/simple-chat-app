import { DatabaseSchemas, supabase } from "../supabase";
import { ChatBubbleType } from "@/types/ChatBubbleType";

const useChatBubbleService = () => {
    const getAllChatBubbles = async (): Promise<ChatBubbleType[]> => {
        const response = await supabase
            .from(DatabaseSchemas.CHAT_BUBBLES)
            .select("*");
        if (response.data) {
            return response.data;
        } else {
            return [];
        }
    };

    const getChatBubbleById = async (id: string): Promise<ChatBubbleType | null> => {
        const response = await supabase
            .from(DatabaseSchemas.CHAT_BUBBLES)
            .select("*")
            .eq("id", id);
        if (response.data) {
            return response.data[0];
        } else {
            return null;
        }
    };
    
    return { getAllChatBubbles, getChatBubbleById };
};

export default useChatBubbleService;
