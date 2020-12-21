

export const GET = (url: string, headers = {}) => {
  headers["Authorization"] = "";
  return fetch(url, {
    headers,
  });
};