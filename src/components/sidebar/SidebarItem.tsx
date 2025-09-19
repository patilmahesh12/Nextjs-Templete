import Link from "next/link";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
  item: {
    name: string;
    path: string;
    icon: React.ElementType;
  };
  isActive: boolean;
  onClick?: () => void;
};

export default function SidebarItem({
  item,
  isActive,
  onClick,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.path}
      onClick={onClick}
      className={cn(
        "flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors",
        isActive
          ? "bg-gray-800 text-white"
          : "text-gray-400 hover:bg-gray-700 hover:text-white"
      )}
    >
      <Icon className="mr-3 h-5 w-5 shrink-0" />
      <span className="truncate">{item.name}</span>
    </Link>
  );
}
