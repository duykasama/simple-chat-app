import { supabase } from "../supabase";

const isAuthenticated = () => {
    const authObjectAsString = localStorage.getItem('sb-xlcvtbudygbiuzzagcoz-auth-token');
    if (!authObjectAsString) return false;
    const authObject = JSON.parse(authObjectAsString);
    const token = authObject.access_token;
    if (!token) return false;
    if (authObject.expires_at * 1000 < Date.now()) {
        supabase.auth.signOut();
        return false;
    }

    return true;
};

export { isAuthenticated };
