export const getEnvVar = (name: string, defaultValue = undefined) => {
    const envVar = `REACT_APP_${name}`
    if (envVar in process.env) return process.env[envVar];
    if (defaultValue !== undefined) return defaultValue;
    const msg = `getEnvVar error: ${name} not defined. Did you forget to set it in .env?`;
    console.error(msg);
};

export const getUrlParam = (param: string) => {
    // eslint-disable-next-line no-restricted-globals
    const url = new URL(location.href);
    return url.searchParams.get(param) || '';
}

export const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};