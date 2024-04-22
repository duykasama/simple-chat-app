import { formatTime } from "@/lib/utils";
import { ChatMessageType } from "@/types/ChatMessageType";

const ChatMessage = ({userId, userAvatar, content, createdAt}: ChatMessageType) => {
    const isMyMessage = userId === "2";

    return (
        <div className={`flex ${isMyMessage ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end gap-2 max-w-[75%] ${isMyMessage && 'flex-row-reverse'}`}>
                <img src={userAvatar} alt="avatar" className="w-8 h-8 rounded-full" />
                <div className={`px-4 py-2 rounded-xl  ${isMyMessage ? 'rounded-ee-none bg-blue-500' : 'rounded-es-none bg-gray-300'}`}>
                    <p>{content}</p>
                    <small className={`text-xs ${isMyMessage ? 'text-start' : 'text-end'}`}>{formatTime(createdAt)}</small>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
