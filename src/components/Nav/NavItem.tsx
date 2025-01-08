import { NaviListType } from "./Nav";

interface NavItemProps {
  title: NaviListType;
  clickHandler: (page: NaviListType) => void;
}

const NavItem: React.FC<NavItemProps> = ({ title, clickHandler }) => {
  return (
    <li
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => clickHandler(title)}
    >
      <svg
        className="w-5 h-5 text-blue-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 2a1 1 0 01.993.883L11 3v10a1 1 0 01-1.993.117L9 13V3a1 1 0 011-1zm0 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
      </svg>
      <span>{title}</span>
    </li>
  );
};

export default NavItem;
