import { DatabaseTables, supabase } from "../supabase";
import { ChatBubbleType } from "@/types/ChatBubbleType";

const useChatBubbleService = () => {
    const getAllChatBubbles = async (): Promise<ChatBubbleType[]> => {
        const response = await supabase
            .from(DatabaseTables.CHAT_BUBBLES)
            .select("*");
        if (response.data) {
            return response.data;
        } else {
            return [];
        }
    };

    const getMyChatBubbles = async (): Promise<ChatBubbleType[]> => {
        const authObjectAsString = localStorage.getItem('sb-xlcvtbudygbiuzzagcoz-auth-token');
        const authObject = JSON.parse(authObjectAsString as string);
        const myId = authObject.user.id;
        const response = await supabase
            .from(DatabaseTables.CHAT_BUBBLES)
            .select("*")
            .eq("owner_id", myId);
        if (response.data) {
            return response.data;
        } else {
            return [];
        }
    };

    const getChatBubbleById = async (id: string): Promise<ChatBubbleType | null> => {
        const response = await supabase
            .from(DatabaseTables.CHAT_BUBBLES)
            .select("*")
            .eq("id", id);
        if (response.data) {
            return response.data[0];
        } else {
            return null;
        }
    };
    
    return { getAllChatBubbles, getMyChatBubbles, getChatBubbleById };
};

export default useChatBubbleService;
