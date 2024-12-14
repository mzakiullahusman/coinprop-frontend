import axios from "axios";

// export const getLiveNews = async ({ search }) => {
//   try {
//     let res = await axios.get(
//       `https://cryptopanic.com/api/v1/posts/?auth_token=${
//         import.meta.env.VITE_APP_NEWS_FEED_API
//       }`
//     );
//     return res;
//   } catch (e) {
//     console.log(e, "failed");
//   }
// };
export const getLiveNews = async () => {
  try {
    const res = await axios.get(
      `https://thingproxy.freeboard.io/fetch/https://cryptopanic.com/api/v1/posts/?auth_token=${import.meta.env.VITE_APP_NEWS_FEED_API}`
    );
    return res.data;
  } catch (e) {
    console.log(e, "failed");
  }
};

// export const getLiveNews = async () => {
//   try {
//     const res = await axios.get(
//       `https://api.allorigins.win/get?url=${encodeURIComponent(
//         `https://cryptopanic.com/api/v1/posts/?auth_token=${import.meta.env.VITE_APP_NEWS_FEED_API}`
//       )}`
//     );
//     // The response data will be in the "contents" field
//     return JSON.parse(res.data.contents.results);
//   } catch (e) {
//     console.log(e, "failed");
//   }
// };

export const getStockNewsNew = async () => {
  try {
    let res = await axios.get(
      `https://financialmodelingprep.com/api/v3/economic_calendar?from=2023-09-10&to=2023-09-15&apikey=${
        import.meta.env.VITE_APP_NEWS_CALENDAR_API
      }`
    );
    return res;
  } catch (e) {
    console.log(e, "failed");
  }
};
