import { ChatUserType } from "@/types/ChatUserType";
import { DatabaseTables, supabase } from "../supabase";

const createNewChatUser = async ({id, email, phone}: ChatUserType) => {
    const { data, error } = await supabase
        .from(DatabaseTables.USERS)
        .insert([{ id, email, phone, user_name: email, user_avatar: ""}]);
    if (error) {
        console.error(error);
    }
    return data;
};

export default createNewChatUser;
