export const API_BASE_URL = "https://api2.kidzapp.com/api/3.0";

export  const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

 const BANNER_DATA_API = getApiUrl('/experiences/curated-list/?list_name=featured_banner_uae&country_code=&page=1&page_size=10&city=&website=1');
 const COLLECTION_API = getApiUrl('/lists?country_code=ae');
 const KIDZAPPOLIS_API = getApiUrl('/categories?country_code=ae');
 const PARENTS_REVIEW_API = getApiUrl('/reviews/featured?page=1&page_size=20&country_code=ae');
 const TAB_OPTIONS_API = getApiUrl('/lists?country_code=ae');
 const BLOG_PICKS_API = getApiUrl('/blogs?page=1&limit=10&country_code=ae');
 const BLOG_PAGE_TABS_API = getApiUrl('/blogs?page=1&limit=10&country_code=ae');
 const BLOG_PAGE_CARDS_API = getApiUrl('/blogs/categories?country_code=ae');

export {BANNER_DATA_API,COLLECTION_API,KIDZAPPOLIS_API,PARENTS_REVIEW_API,TAB_OPTIONS_API,BLOG_PICKS_API,BLOG_PAGE_TABS_API,BLOG_PAGE_CARDS_API}