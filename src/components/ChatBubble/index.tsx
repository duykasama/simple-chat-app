import { ChatBubbleType } from "@/types/ChatBubbleType";
import { useNavigate } from "react-router-dom";

const ChatBubble = ({id, bubble_avatar: bubbleAvatar, bubble_name: bubbleName}: ChatBubbleType) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/chat/${id}`);
    };

    return (
        <button onClick={handleClick} className="w-full flex justify-start items-center gap-4 hover:bg-primary hover:text-primary-foreground p-2 cursor-pointer rounded-lg transition-colors">
            <img src={bubbleAvatar} alt={bubbleName} className="w-16 aspect-square rounded-full" />
            <div className="flex flex-col items-start">
                <h3>{bubbleName}</h3>
                <small>{"something"}</small>
            </div>
        </button>
    );
};

export default ChatBubble;
