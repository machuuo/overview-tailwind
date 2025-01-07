import MabiTrade from "./MabiTrade";
import Tailwind from "./Tailwind";

interface PageProps {
  pageName: string;
}

const Pages: React.FC<PageProps> = ({ pageName }) => {
  return (
    <div>
      {pageName === "tailwind" && <Tailwind />}
      {pageName === "mabinogi" && <MabiTrade />}
    </div>
  );
};

export default Pages;
