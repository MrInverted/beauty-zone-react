const BACKEND_URL = process.env.REACT_APP_URL;

if (!BACKEND_URL) throw new Error("ENV URL IS NOT DEFINED!!!")

export { BACKEND_URL }