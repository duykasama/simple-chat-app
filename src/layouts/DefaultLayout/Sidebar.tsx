import ChatBubble from "@/components/ChatBubble";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import useFetch from "@/hooks/useFetch";
import { DatabaseTables } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { ChatBubbleType } from "@/types/ChatBubbleType";

type Props = {
    className?: string;
};

const Sidebar = ({className}: Props) => {
    const { data: chatBubbles } = useFetch<ChatBubbleType[]>(DatabaseTables.CHAT_BUBBLES, "*");

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
