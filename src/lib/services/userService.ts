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

const getChatUserById = async (id: string) => {
    const { data, error } = await supabase
        .from(DatabaseTables.USERS)
        .select("*")
        .eq("id", id);
    if (error) {
        console.error(error);
    }
    return data;
};

const getChatUserByEmail = async (email: string) => {
    const { data, error } = await supabase
        .from(DatabaseTables.USERS)
        .select("*")
        .eq("email", email);
    if (error) {
        console.error(error);
    }
    return data;
};

const serviceName = "userService";

export default serviceName;
export {
    createNewChatUser,
    getChatUserById,
    getChatUserByEmail
};
