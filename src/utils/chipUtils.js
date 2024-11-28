export const POSITIVE_CHIP_TEXTS = [
  "Paid",
  "Active",
  "active",
  "funded",
  "funded active",
  "Sell",
  "Buy",
  "Self",
];
export const NEGATIVE_CHIP_TEXTS = [
  "Unpaid",
  "Inactive",
  "inactive",
  "Suspended",
  "Breached",
  "breached",
];

export const getChipType = (text) => {
  if (POSITIVE_CHIP_TEXTS.includes(text)) {
    return "positive";
  } else if (NEGATIVE_CHIP_TEXTS.includes(text)) {
    return "negative";
  }
  return null;
};
