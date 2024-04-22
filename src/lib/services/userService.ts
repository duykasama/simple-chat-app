import { ChatUserType } from "@/types/ChatUserType";
import { DatabaseSchemas, supabase } from "../supabase";

const createNewChatUser = async ({id, email, phone}: ChatUserType) => {
    const { data, error } = await supabase
        .from(DatabaseSchemas.USERS)
        .insert([{ id, email, phone, user_name: email, user_avatar: ""}]);
    if (error) {
        console.error(error);
    }
    return data;
};

export default createNewChatUser;
