const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
export const api = {
    get: async (path: string) => {
        console.log("BASE_URL:", BASE_URL)
        const response = await fetch(`${BASE_URL}/${path}`);
        return response.json();
    },
}
