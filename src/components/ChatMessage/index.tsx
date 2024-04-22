import { formatTime } from "@/lib/utils";
import { ChatMessageType } from "@/types/ChatMessageType";

const ChatMessage = ({sender_id, content, created_at}: ChatMessageType) => {
    const placeHolderAvatar = "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg";
    const isMyMessage = () => {
        const authObjectAsString = localStorage.getItem('sb-xlcvtbudygbiuzzagcoz-auth-token');
        const authObject = JSON.parse(authObjectAsString as string);
        return authObject.user.id === sender_id;
    };

    return (
        <div className={`flex ${isMyMessage() ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-end gap-2 max-w-[75%] ${isMyMessage() && 'flex-row-reverse'}`}>
                <img src={placeHolderAvatar} alt="avatar" className="w-8 h-8 rounded-full" />
                <div className={`px-4 py-2 rounded-xl  ${isMyMessage() ? 'rounded-ee-none bg-blue-500' : 'rounded-es-none bg-gray-300'}`}>
                    <p>{content}</p>
                    <small className={`text-xs ${isMyMessage() ? 'text-start' : 'text-end'}`}>{formatTime(created_at)}</small>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
