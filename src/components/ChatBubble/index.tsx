import { ChatBubbleType } from "@/types/ChatBubbleType";

const ChatBubble = ({id, bubble_avatar: bubbleAvatar, bubble_name: bubbleName}: ChatBubbleType) => {
    console.log(id);
    return (
        <div className="flex justify-start items-center gap-4 hover:bg-primary hover:text-primary-foreground p-2 cursor-pointer rounded-lg transition-colors">
            <img src={bubbleAvatar} alt={bubbleName} className="w-16 rounded-full" />
            <div>
                <h3>{bubbleName}</h3>
                <small>{"something"}</small>
            </div>
        </div>
    );
};

export default ChatBubble;
