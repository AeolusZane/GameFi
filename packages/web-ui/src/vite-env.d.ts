/// <reference types="vite/client" />
declare module process {
    namespace env {
        const NODE_ENV: string;
        const DEV_CONTRACT_ADDRESS: string;
        const PRO_CONTRACT_ADDRESS: string;
    }
}


interface process {
    env: {
        NODE_ENV: string;
        DEV_CONTRACT_ADDRESS: string;
        PRO_CONTRACT_ADDRESS: string;
    }
}