import axios from "axios";
import {
  BANNER_DATA_API,
  COLLECTION_API,
  KIDZAPPOLIS_API,
  PARENTS_REVIEW_API,
  TAB_OPTIONS_API,
  BLOG_PICKS_API,
  BLOG_PAGE_TABS_API,
  BLOG_PAGE_CARDS_API,
} from "../APIs/apis";

const BannerDataAxios = () => {
    return axios.get(BANNER_DATA_API);
  };
  
  const CollectionAxios = () => {
    return axios.get(COLLECTION_API);
  };
  const KidzappolisAxios = () => {
    return axios.get(KIDZAPPOLIS_API);
  };
  const ParentsReviewAxios = () => {
    return axios.get(PARENTS_REVIEW_API);
  };
  const TabOptionsAxios = () => {
    return axios.get(TAB_OPTIONS_API);
  };
  const TabResponseAxios = (activeTab) => {
    return axios.get( `https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=${activeTab}&country_code=&page=1&page_size=10&city=&website=1`);
  };
  const BlogPicksAxios = () => {
    return axios.get(BLOG_PICKS_API);
  };
  const BlogPageTabsAxios = () => {
    return axios.get(BLOG_PAGE_TABS_API);
  };
  const BlogPageCardsAxios = () => {
    return axios.get(BLOG_PAGE_CARDS_API);
  };
export {
    BannerDataAxios,CollectionAxios,KidzappolisAxios,ParentsReviewAxios,TabResponseAxios,TabOptionsAxios,
    BlogPicksAxios,BlogPageTabsAxios,BlogPageCardsAxios
}