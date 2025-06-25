import Link from 'next/link';

type SidebarItemProps = {
  item: {
    name: string;
    path: string;
    icon: React.ElementType;
  };
  isActive: boolean;
  onClick?: () => void;
};

export default function SidebarItem({ item, isActive, onClick }: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <Link
      href={item.path}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:text-white hover:bg-gray-800'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{item.name}</span>
    </Link>
  );
}
