import FormError from "@/components/FormError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendFriendRequest } from "@/lib/services/friendshipService";
import { getChatUserByEmail } from "@/lib/services/userService";
import { ChatUserType } from "@/types/ChatUserType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    email: z.string()
    .min(1, "Email is required")
    .email(),
});

const AddFriend = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const user = ((await getChatUserByEmail(data.email)) as ChatUserType[])[0];
        if (user) {
            const authObjectAsString = localStorage.getItem('sb-xlcvtbudygbiuzzagcoz-auth-token');
            const authObject = JSON.parse(authObjectAsString as string);
            const myId = authObject.user.id;
            await sendFriendRequest(myId, user.id);
            alert("Request has been sent");
        } else {
            alert("User not found");
        }
    };

    return (
        <div className="h-full p-4 flex flex-col justify-start items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between gap-2">
                <Input placeholder="Enter your friend's email" {...register('email')} />
                <Button type="submit">Send</Button>
            </form>
            {errors.email?.message && <FormError message={errors.email?.message} className="-translate-x-20 translate-y-2"/>}
        </div>
    );
};

export default AddFriend;
