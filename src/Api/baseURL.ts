//  const domainHTTPS = `https://`;
const hostName = window.location.hostname;
const isDev = hostName === "abc";

export const baseUrl = isDev
  ? process.env.TEST_REACT_APP_DEV_BASE
  : process.env.TEST_REACT_APP_DEV_BASE;
//  export const baseUrl = isDev ? process.env.REACT_APP_DEV_BASE : process.env.REACT_APP_DEV_BASE
