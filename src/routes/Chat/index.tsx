import ChatMessage from "@/components/ChatMessage";
import { Input } from "@/components/ui/input";
import useChatBubbleService from "@/lib/services/chatBubbleService";
import useChatMessageService from "@/lib/services/chatMessageService";
import { DatabaseTables, supabase } from "@/lib/supabase";
import { ChatBubbleType } from "@/types/ChatBubbleType";
import { ChatMessageType } from "@/types/ChatMessageType";
import { useEffect, useRef, useState } from "react";
import { BsImage } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { useParams } from "react-router-dom";

const Chat = () => {
    const params = useParams();
    const { getChatBubbleById } = useChatBubbleService();
    const { getAllChatMessages, createNewChatMessage } = useChatMessageService();
    const [chatBubble, setChatBubble] = useState<ChatBubbleType | null>(null);
    const [messages, setMessages] = useState<ChatMessageType[] | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    supabase
        .channel(`chat:${params.id}`)
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: DatabaseTables.MESSAGES,
        }, async () => {
            const chatMessages = await getAllChatMessages(chatBubble?.reference_id as string);
            setMessages(chatMessages);
        })
        .subscribe();

    useEffect(() => {
        const getChatBubbleAndFetchMessages = async () => {
            const chatBubble = await getChatBubbleById(params.id as string);
            setChatBubble(chatBubble);
            const chatMessages = await getAllChatMessages(chatBubble?.reference_id as string);
            setMessages(chatMessages);
        };

        getChatBubbleAndFetchMessages();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSendMessage = async () => {
        const msg = inputRef.current?.value;
        if (!msg) return;
        await createNewChatMessage({
            sender_id: chatBubble?.owner_id as string,
            recipient_id: chatBubble?.reference_id as string,
            content: msg,
        });
        inputRef.current.value = "";
    };

    const handleTypeMessage = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleSendMessage();

    return (
        <section className="flex flex-col justify-end h-full p-4 gap-4">
            <ul className="flex flex-col gap-4">
                {messages?.map((message) => (
                    <li key={message.id}>
                        <ChatMessage {...message} />
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center gap-4">
                <div>
                    <BsImage size={24} className="cursor-pointer text-primary" />
                </div>
                <Input ref={inputRef} onKeyUp={handleTypeMessage} placeholder="Type your message here..." />
                <RiSendPlaneFill onClick={handleSendMessage} size={24} className="cursor-pointer text-primary" />
            </div>
        </section>
    );
};

export default Chat;
