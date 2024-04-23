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

export default "";
export {
    sendFriendRequest
};
