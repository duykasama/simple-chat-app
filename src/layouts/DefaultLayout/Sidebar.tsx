import { cn } from "@/lib/utils";

type Props = {
    className?: string;
};
const Sidebar = ({className}: Props) => {
    return (
        <div className={cn(className)}>
            <h1>Sidebar</h1>
        </div>
    )
};

export default Sidebar;
