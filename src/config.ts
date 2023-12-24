import { getEnvVar } from "./misc/utils";

const config = {
    backendApi: getEnvVar('BACKEND_API')
}

export default config;