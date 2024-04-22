import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/supabase";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { useNavigate } from "react-router";
import FormError from "@/components/FormError";

const formSchema = z.object({
    email: z
    .string()
    .min(1, {
        message: 'Email is required',
    })
    .email({
        message: 'Invalid email address',
    }),
    password: z
    .string()
    .min(8, {
        message: 'Password must be at least 8 characters',
    }),
    confirmPassword: z
    .string()
    .min(8, {
        message: 'Password must be at least 8 characters',
    }),
});

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const navigate = useNavigate();

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const credentials: SignUpWithPasswordCredentials = {
            email: data.email,
            password: data.password,
        };
        const response = await supabase.auth.signUp(credentials);
        if (response?.data) {
           navigate('/sign-in');
        } else if (response?.error) {
            console.error(response.error);
        }
    };

    return (
        <main className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="w-1/3 min-h-[50%] py-16 flex flex-col justify-center items-center gap-4 border-2 rounded-xl relative">
                <Button onClick={() => navigate('/sign-in')} type="button" className="bg-secondary-foreground hover:bg-secondary-foreground/90 absolute top-8 right-8">Sign in</Button>
                <div className="flex flex-col gap-1 justify-center items-center">
                    <h1 className="text-2xl font-semibold">Sign up</h1>
                    <p className="text-sm font-light">Enter your email below to create your account</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 flex flex-col justify-between gap-2">
                    <Input type="email" placeholder="Email" {...register('email')} />
                    {errors.email?.message && <FormError message={errors.email?.message}/>}
                    <Input type="password" placeholder="Password" {...register('password')}/>
                    {errors.password?.message && <FormError message={errors.password?.message}/>}
                    <Input type="password" placeholder="Confirm password" {...register('confirmPassword')}/>
                    {errors.confirmPassword?.message && <FormError message={errors.confirmPassword?.message}/>}
                    <Button type="submit" className="bg-secondary-foreground hover:bg-secondary-foreground/90">Sign up with Email</Button>
                </form>
                <div className="flex justify-center items-center gap-2">
                    <Separator />
                    <p className="text-nowrap text-sm">Or continue with</p>
                    <Separator />
                </div>
                <Button type="button" className="flex justify-center items-center gap-2 w-1/2 bg-secondary-foreground hover:bg-secondary-foreground/90">
                    <Icons.gitHub className="w-6 h-6" />
                    <span>GitHub</span>
                </Button>
            </div>
        </main>
    );
};

export default Register;
