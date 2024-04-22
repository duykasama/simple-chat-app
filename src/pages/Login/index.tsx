import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Login = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <main className="h-screen w-screen flex flex-col justify-center items-center">
            <div className="w-1/3 min-h-[50%] py-16 flex flex-col justify-center items-center gap-4 border-2 rounded-xl">
                <div className="flex flex-col gap-1 justify-center items-center">
                    <h1 className="text-2xl font-semibold">Sign in</h1>
                    <p className="text-sm font-light">Enter your email below to log in your account</p>
                </div>
                <form onSubmit={handleSubmit} className="w-1/2 flex flex-col justify-between gap-2">
                    <Input type="email" placeholder="name@example.com" />
                    <Button type="submit" className="bg-secondary-foreground hover:bg-secondary-foreground/90">Sign in with Email</Button>
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

export default Login;
