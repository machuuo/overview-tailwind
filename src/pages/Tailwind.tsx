import Span from "../components/Span";
import Button from "../components/Button";

// 테일윈드 props를 선택 시 하위 props만 나열하도록 작업 진행(?)
const Tailwind = () => {
  // 아직 할 내용 없어서 추가만
  const handleButton = () => {};

  return (
    <div>
      <Span label="리스트 선택" />
      {/* TODO: 리스트 추가 */}
      <Button label="추가" onClick={handleButton} />
    </div>
  );
};

export default Tailwind;