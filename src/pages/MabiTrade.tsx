import { useState } from "react";

import Button from "../components/Button";
import Modal from "../components/Modal/Modal";
import Notification from "../components/Notification/Notification";

import tradeRouteImg from "../assets/물교경로.png";
import 페라 from "../assets/페라화산.png";
import 칼리다 from "../assets/칼리다호수.png";
import 오아시스 from "../assets/오아시스.png";
import 카루 from "../assets/카루숲.png";
import 전체 from "../assets/전체.png";

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

// 아이템 이름 복사 함수
const MabiTrade = () => {
  const [modal, setModal] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [copyText, setCopyText] = useState("");

  const copyToClipboard = async (text: string) => {
    navigator.clipboard.writeText(text);
    const copiedText =
      '"' + (await navigator.clipboard.readText()) + '" ' + "복사 완료";
    setCopyText(copiedText);
  };

  const toggleModal = (type: string | null): void => {
    setModal((prevState) => (prevState === type ? null : type));

    if (type === "route") {
      setImages([tradeRouteImg]);
    } else if (type === "barter") {
      setImages([페라, 칼리다, 오아시스, 카루, 전체]);
    }
  };

  return (
    <div className="p-4">
      <Notification text={copyText} timer={1} />
      <h1 className="text-xl font-bold mb-4">물물교역 아이템 리스트</h1>
      <Button label="교역루트" onClick={() => toggleModal("route")} />
      <Button label="구매할 목록" onClick={() => toggleModal("barter")} />
      {modal && (
        <Modal type="mabitrade" images={images} toggleModal={toggleModal} />
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
