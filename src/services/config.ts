export const BASE_URL = process.env.BASE_URL;
export const PROTOCOL = process.env.PROTOCOL;

export const getBaseApi = () => `${PROTOCOL}://${BASE_URL}`;
