import Line from "./Line";
export default function GameBoard() {
  return (
    <div >
      <Line />
      <Line negative />
      <Line />
      <Line negative />
      <Line />
      <Line negative />
      <Line />
      <Line negative />
    </div>
  );
}
