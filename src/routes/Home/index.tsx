import ChatMessage from "@/components/ChatMessage";
import { Input } from "@/components/ui/input";
import { ChatMessageType } from "@/types/ChatMessageType";
import { BsImage } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const messages: ChatMessageType[] = [
    {
        id: "1",
        userId: "1",
        userAvatar: "https://i.pravatar.cc/300",
        content: "Hello alsdfjalsdf lsdjf asldfjls flsjdf lsjdkfl slf sdf slfdj sfsHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj d",
        createdAt: "2021-09-01T12:00:00",
    },
    {
        id: "2",
        userId: "2",
        userAvatar: "https://i.pravatar.cc/300",
        content: "Hi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj dHi alkdsjf aldfjla dflaj sfdsdjf lasdfj asdfj ldsfj afdljsdklfj d",
        createdAt: "2021-09-01T12:00:00",
    },
];

const Home = () => {
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

export default Home;
