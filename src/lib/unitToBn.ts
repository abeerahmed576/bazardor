export const units = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
} as const;

export type Unit = keyof typeof units;

export default units;
