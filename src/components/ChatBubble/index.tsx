import { ChatBubbleType } from "@/types/ChatBubbleType";

const ChatBubble = ({id, avatar, username, lastMessage}: ChatBubbleType) => {
    console.log(id);
    return (
        <div className="flex justify-start items-center gap-4 hover:bg-primary hover:text-primary-foreground p-2 cursor-pointer rounded-lg transition-colors">
            <img src={avatar} alt={username} className="w-16 rounded-full" />
            <div>
                <h3>{username}</h3>
                <small>{lastMessage}</small>
            </div>
        </div>
    );
};

export default ChatBubble;
