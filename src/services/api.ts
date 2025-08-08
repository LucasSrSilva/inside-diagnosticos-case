const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
export const api = {
    get: async (path: string) => {
        const response = await fetch(`${BASE_URL}/${path}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    },
}
