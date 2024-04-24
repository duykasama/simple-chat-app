import FriendRequestStatus from "@/constants/friendRequestStatus";
import { DatabaseTables, supabase } from "../supabase";
import FriendshipType from "@/types/Friendship";
import { ChatUserType } from "@/types/ChatUserType";

const sendFriendRequest = async (sender_id: string, recipient_id: string) => {
    try {
        await supabase
            .from(DatabaseTables.FRIENDSHIP)
            .insert({
                sender_id: sender_id,
                recipient_id: recipient_id,
                status: FriendRequestStatus.PENDING,
            });
    } catch (error) {
        alert(error);
    }
};

const getAllMyFriendRequests = async () => {
    const authObjectAsString = localStorage.getItem('sb-xlcvtbudygbiuzzagcoz-auth-token');
    const authObject = JSON.parse(authObjectAsString as string);
    const myId = authObject.user.id;
    try {
        const { data } = await supabase
            .from(DatabaseTables.FRIENDSHIP)
            .select("*")
            .eq("recipient_id", myId)
            .eq("status", FriendRequestStatus.PENDING);

        return data;
    } catch (error) {
        alert(error);
    }
};

const acceptFriendRequest = async (id: string) => {
    try {
        const { data } = await supabase
            .from(DatabaseTables.FRIENDSHIP)
            .update({
                status: FriendRequestStatus.ACCEPTED,
            })
            .eq("id", id)
            .select("*");
        const friendship = (data as FriendshipType[])[0];
        const { data: userResponse } = await supabase
            .from(DatabaseTables.USERS)
            .select("id,user_avatar,user_name")
            .or(`id.eq.${friendship.sender_id},id.eq.${friendship.recipient_id}`);
        const users = (userResponse as unknown) as ChatUserType[];
        console.log(users);
        await supabase
            .from(DatabaseTables.CHAT_BUBBLES)
            .insert([
                {
                    owner_id: users[0].id,
                    reference_id: users[1].id,
                    bubble_avatar: users[1].user_avatar,
                    bubble_name: users[1].user_name,
                },
                {
                    owner_id: users[1].id,
                    reference_id: users[0].id,
                    bubble_avatar: users[0].user_avatar,
                    bubble_name: users[0].user_name,
                },
            ]);
    } catch (error) {
        alert(error);
    }
};

const rejectFriendRequest = async (id: string) => {
    try {
        await supabase
            .from(DatabaseTables.FRIENDSHIP)
            .update({
                status: FriendRequestStatus.REJECTED,
            })
            .eq("id", id);
    } catch (error) {
        alert(error);
    }
};

export default "";
export {
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    getAllMyFriendRequests,
};
