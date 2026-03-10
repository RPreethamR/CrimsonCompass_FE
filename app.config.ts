const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    "https://ccmain-hzcbg5c8hzh4dwfc.centralus-01.azurewebsites.net";

export const ServerConfig = {
    backendUrl: BACKEND_URL,
};

export const ClientConfig = {
    backendUrl: BACKEND_URL,
};