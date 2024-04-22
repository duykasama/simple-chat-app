import { createClient } from "@supabase/supabase-js";

const DatabaseSchemas = {
    USERS: "chat_user",
    CHAT_BUBBLES: "chat_bubble",
    MESSAGES: "chat_message",
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { DatabaseSchemas, supabase };
