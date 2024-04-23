import FriendRequestStatus from "@/constants/friendRequestStatus";
import { DatabaseTables, supabase } from "../supabase";

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
        await supabase
            .from(DatabaseTables.FRIENDSHIP)
            .update({
                status: FriendRequestStatus.ACCEPTED,
            })
            .eq("id", id);
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
