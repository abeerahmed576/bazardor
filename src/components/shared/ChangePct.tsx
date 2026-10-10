import numToBn from "@/lib/numToBn";

interface IChangePctProps {
  dir: "up" | "down" | "flat";
  pct: number;
}

function ChangePct({ dir, pct }: IChangePctProps) {
  const jsx =
    dir === "up" ? (
      <span className="font-extrabold text-red-600">{`▲ ${numToBn(Math.abs(pct))}%`}</span>
    ) : dir === "down" ? (
      <span className="font-extrabold text-green-600">{`▼ ${numToBn(Math.abs(pct))}%`}</span>
    ) : (
      <span className="font-extrabold">{`-- ${numToBn(Math.abs(pct))}%`}</span>
    );
  return jsx;
}

export default ChangePct;
