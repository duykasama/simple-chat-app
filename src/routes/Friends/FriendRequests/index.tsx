import { Button } from "@/components/ui/button";
import { acceptFriendRequest, getAllMyFriendRequests, rejectFriendRequest } from "@/lib/services/friendshipService";
import FriendshipType from "@/types/Friendship";
import { useEffect, useState } from "react";

type FriendRequestProps = {
    id: string;
};

const FriendRequest = ({id}: FriendRequestProps) => {
    const handleAccept = async () => {
        await acceptFriendRequest(id);
    };

    const handleReject = async () => {
        await rejectFriendRequest(id);
    };

    return (
        <div className="flex justify-between items-center border rounded-md p-2 hover:scale-[1.02] transition-all">
            <div className="flex justify-between items-center gap-2">
                <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" className="w-12 aspect-square rounded-full" />
                <p className="text-lg font-semibold">John Doe</p>
            </div>
            <div className="flex justify-between items-center gap-2">
                <Button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white">Accept</Button>
                <Button onClick={handleReject} className="bg-red-500 hover:bg-red-700 text-white">Reject</Button>
            </div>
        </div>
    );
};

const FriendRequests = () => {
    const [friendRequests, setFriendRequests] = useState<FriendshipType[]>([]);

    useEffect(() => {
        const getFriendRequests = async () => {
            const requests = await getAllMyFriendRequests();
            setFriendRequests(requests as FriendshipType[]);
        };

        getFriendRequests();
    }, []);

    return (
        <div className="p-4 flex flex-col justify-center items-center gap-8">
            <p className="text-2xl font-semibold self-start">Friends Requests</p>
            <div className="w-1/2">
                <menu className="flex flex-col gap-2">
                    {friendRequests.map((request) => (
                        <li key={request.id}>
                            <FriendRequest id={request.id} />
                        </li>
                    ))}
                </menu>
            </div>
        </div>
    );
};

export default FriendRequests;
