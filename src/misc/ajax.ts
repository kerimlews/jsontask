import config from "../config";

export const get = (path: string, options?: RequestInit) => fetch(`${config.backendApi}/${path}`, options)
    .then(res => res.json());