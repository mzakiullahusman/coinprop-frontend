import dayjs from "dayjs";

export const formatDate = (date) =>
  date ? dayjs(date).format("DD MM YYYY") : "";

export const getMonth = (date) => (date ? dayjs(date).format("MMMM") : "");
