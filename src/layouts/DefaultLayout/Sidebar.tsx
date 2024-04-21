import ChatBubble from "@/components/ChatBubble";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChatBubbleType } from "@/types/ChatBubbleType";

type Props = {
    className?: string;
};

const chatBubbles: ChatBubbleType[] = [
    {
        id: "1",
        avatar: "https://i.pravatar.cc/300",
        username: "John Doe",
        lastMessage: "Hello, world!",
    },
    {
        id: "2",
        avatar: "https://i.pravatar.cc/300",
        username: "John Doe",
        lastMessage: "Hello, world!",
    },
];

const Sidebar = ({className}: Props) => {
    return (
        <div className={cn("p-2", className)}>
            <Input placeholder="Search..." />
            <Separator className="my-2" />
            <menu>
                {chatBubbles.map((chatBubble) => (
                    <li key={chatBubble.id}>
                        <ChatBubble {...chatBubble} />
                    </li>
                ))}
            </menu>
        </div>
    )
};

export default Sidebar;
