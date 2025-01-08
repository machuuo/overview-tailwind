import { pageActions } from "../../store/page-slice";
import { useDispatch } from "react-redux";
import NaviItem from "./NavItem";

const naviList = ["tailwind", "mabinogi"] as const;

export type NaviListType = (typeof naviList)[number];

const Nav = () => {
  const dispatch = useDispatch();

  const handlePage = (page: NaviListType) => {
    dispatch(pageActions.setPages(page));
  };

  return (
    <div className="">
      <ul className="flex items-center space-x-4">
        {naviList.map((item) => (
          <NaviItem key={item} title={item} clickHandler={handlePage} />
        ))}
      </ul>
    </div>
  );
};

export default Nav;
