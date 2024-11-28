import axios from "axios";

export const getLiveNews = async ({ search }) => {
  try {
    let res = await axios.get(
      `https://forexnewsapi.com/api/v1?currencypair=EUR-USD&search=${search}&items=100&token=${
        import.meta.env.VITE_APP_NEWS_FEED_API
      }`
    );
    return res;
  } catch (e) {
    console.log(e, "failed");
  }
};

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
