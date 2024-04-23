import { ChatMessageType, CreateMessageType } from "@/types/ChatMessageType";
import { DatabaseTables, supabase } from "../supabase";

const useChatMessageService = () => {
    const getAllChatMessages = async (recipientId: string): Promise<ChatMessageType[]> => {
        const authObjectAsString = localStorage.getItem('sb-xlcvtbudygbiuzzagcoz-auth-token');
        const authObject = JSON.parse(authObjectAsString as string);
        const myId = authObject.user.id;
        const response = await supabase
            .from(DatabaseTables.MESSAGES)
            .select("*")
            .or("recipient_id.eq." + recipientId + ", recipient_id.eq." + myId)
            .or("sender_id.eq." + recipientId + ", sender_id.eq." + myId)
            .order("created_at", { ascending: true });
        if (response.data) {
            return response.data;
        } else {
            return [];
        }
    };

    const getChatMessageById = async (id: string): Promise<ChatMessageType | null> => {
        const response = await supabase
            .from(DatabaseTables.MESSAGES)
            .select("*")
            .eq("id", id);
        if (response.data) {
            return response.data[0];
        } else {
            return null;
        }
    };

    const createNewChatMessage = async ({ sender_id, recipient_id, content }: CreateMessageType) => {
        await supabase
            .from(DatabaseTables.MESSAGES)
            .insert({ 
                sender_id,
                recipient_id,
                content
            });
    };
    
    return { getAllChatMessages, getChatMessageById, createNewChatMessage };
};

export default useChatMessageService;
