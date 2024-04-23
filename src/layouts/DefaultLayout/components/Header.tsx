import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="px-4 py-2 flex justify-end items-center gap-4">
            <NavigationMenu className="border h-fit rounded-md">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Friends</NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col">
                            <NavigationMenuLink onClick={() => navigate('/friends')} className="text-nowrap cursor-pointer hover:bg-primary hover:text-primary-foreground px-2 py-1 transition-colors">Friends List</NavigationMenuLink>
                            <NavigationMenuLink onClick={() => navigate('/friends/new')} className="text-nowrap cursor-pointer hover:bg-primary hover:text-primary-foreground px-2 py-1 transition-colors">Add New Friend</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Avatar />
        </header>
    );
};

export default Header;
