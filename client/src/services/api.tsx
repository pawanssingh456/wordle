// api.ts
const BASE_URL = 'https://wordle-backend-pi.vercel.app/';

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const getHeaders = () => {
    return defaultHeaders;
};

export const apiGetTodaysWord = async (endpoint: string) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }

    return response.json();
};

export const apiPost = async (endpoint: string, data: unknown) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
    }

    return response.json();
};
