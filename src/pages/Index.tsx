import Tailwind from "./Tailwind";

interface PageProps {
  pageName: string;
}

const Pages: React.FC<PageProps> = ({ pageName }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-40 bg-blue-200 p-4">
        <p>Tailwind CSS list</p>
        {pageName === "tailwind" && <Tailwind />}
        {/* 추후에 추가될 페이지가 생기면 이런식으로 추가 */}
        {/* {pageName === "tailwind" && <Tailwind />} */}
      </div>
      <div className="flex-1 bg-green-200 p-4">Content</div>
    </div>
  );
};

export default Pages;
