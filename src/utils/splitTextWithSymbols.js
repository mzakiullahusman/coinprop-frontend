export const splitTextWithSymbols = (text) => {
  const regex =
    /(\$[\d,]+(\.\d{1,2})?|[\d,]+(\.\d{1,2})?%|[\d,]+(\.\d{1,2})?)/g;
  const parts = text.split(regex).filter(Boolean);
  return parts;
};
