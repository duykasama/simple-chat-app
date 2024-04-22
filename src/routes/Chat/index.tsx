import ChatMessage from "@/components/ChatMessage";
import { Input } from "@/components/ui/input";
import { ChatMessageType } from "@/types/ChatMessageType";
import { useEffect } from "react";
import { BsImage } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { useParams } from "react-router-dom";

const Chat = () => {
    const params = useParams();
    const messages: ChatMessageType[] = [];

    useEffect(() => {
        console.log(params);
    }, [params]);

    return (
        <section className="flex flex-col justify-end h-full p-4 gap-4">
            <ul className="flex flex-col gap-4">
                {messages.map((message) => (
                    <li key={message.id}>
                        <ChatMessage {...message} />
                    </li>
                ))}
            </ul>
            <div className="flex justify-between items-center gap-4">
                <div>
                    <BsImage size={24} className="cursor-pointer text-primary" />
                </div>
                <Input placeholder="Type your message here..." />
                <RiSendPlaneFill size={24} className="cursor-pointer text-primary" />
            </div>
        </section>
    );
};

export default Chat;
