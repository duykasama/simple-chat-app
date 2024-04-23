import ChatBubble from "@/components/ChatBubble";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useChatBubbleService from "@/lib/services/chatBubbleService";
import { cn } from "@/lib/utils";
import { ChatBubbleType } from "@/types/ChatBubbleType";
import { useEffect, useState } from "react";

type Props = {
    className?: string;
};

const Sidebar = ({className}: Props) => {
    const { getMyChatBubbles } = useChatBubbleService();
    const [chatBubbles, setChatBubbles] = useState<ChatBubbleType[]>([]);

    useEffect(() => {
        const getChatBubles = async () => {
            const chatBubbles = await getMyChatBubbles();
            setChatBubbles(chatBubbles);
        };

        getChatBubles();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={cn("p-2", className)}>
            <Input placeholder="Search..." />
            <Separator className="my-2" />
            <menu>
                {chatBubbles?.map((chatBubble: ChatBubbleType) => (
                    <li key={chatBubble.id}>
                        <ChatBubble {...chatBubble} />
                    </li>
                ))}
            </menu>
        </div>
    )
};

export default Sidebar;
