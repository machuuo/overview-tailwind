import { useState } from "react";
import Button from "../components/Button";
import tradeRouteImg from "../assets/물교경로.png";

import 페라 from "../assets/페라화산.png";
import 칼리다 from "../assets/칼리다호수.png";
import 오아시스 from "../assets/오아시스.png";
import 카루 from "../assets/카루숲.png";
import 전체 from "../assets/전체.png";

// 아이템 이름 복사 함수
const MabiTrade = () => {
  const [isRouteVisible, setIsRouteVisible] = useState(false);
  const [isBarterVisible, setIsBarterVisible] = useState(false);

  const items = [
    { name: "고급 실크", quantity: 32 },
    { name: "중급 나무장작", quantity: 40 },
    { name: "스핀기어", quantity: 8 },
    { name: "에너지 증폭 장치", quantity: 6 },
    { name: "튼튼한 고리", quantity: 3 },
    { name: "마법의 깃털펜", quantity: 15 },
    { name: "고급옷감", quantity: 32 },
    { name: "은판", quantity: 16 },
    { name: "정령의 리큐르", quantity: 8 },
    { name: "펫 놀이세트", quantity: 3 },
    { name: "건초더미", quantity: 9 },
    { name: "마력이 깃든 나무장작", quantity: 15 },
    { name: "발리스타용 독묻은 와이번 볼트", quantity: 9 },
    { name: "최고급 나무장작", quantity: 9 },
    { name: "미스릴 대못", quantity: 9 },
    { name: "최고급 옷감", quantity: 40 },
    { name: "생명력 500 포션", quantity: 16 },
    { name: "빤짝이 종이", quantity: 40 },
    { name: "뮤턴트", quantity: 3 },
    { name: "조화의 코스모스 퍼퓸", quantity: 6 },
    { name: "특급 나무장작", quantity: 9 },
  ];

  const copyToClipboard = (text: string) => {
    console.log(text);
    navigator.clipboard.writeText(text);
  };

  const toggleRoute = (): void => {
    setIsRouteVisible((prevState) => !prevState);
  };

  const toggleBarter = (): void => {
    setIsBarterVisible((prevState) => !prevState);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">물물교역 아이템 리스트</h1>
      <Button label="교역루트" onClick={toggleRoute} />
      <Button label="구매할 목록" onClick={toggleBarter} />
      {isRouteVisible && (
        <img src={tradeRouteImg} className="w-screen h-screen" />
      )}
      {isBarterVisible && (
        <div className="flex w-full overflow-auto">
          <h1 className="text-xl font-bold mb-4">페라</h1>
          <img src={페라} className="transform scale-80" />
          <h1 className="text-xl font-bold mb-4">칼리다</h1>
          <img src={칼리다} className="transform scale-80" />
          <h1 className="text-xl font-bold mb-4">오아시스</h1>
          <img src={오아시스} className="transform scale-80" />
          <h1 className="text-xl font-bold mb-4">카루</h1>
          <img src={카루} className="transform scale-80" />
          <h1 className="text-xl font-bold mb-4">전체</h1>
          <img src={전체} className="transform scale-80" />
        </div>
      )}
      <div className="m-2">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => copyToClipboard(item.name)}
              className="cursor-pointer bg-gray-100 p-2 rounded hover:bg-gray-200"
            >
              <span className="font-semibold">{item.name}</span>:{" "}
              {item.quantity}개
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MabiTrade;
