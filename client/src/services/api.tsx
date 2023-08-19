// api.ts
// const BASE_URL = 'https://wordle-backend-pi.vercel.app/api';
const BASE_URL = 'http://localhost:3001/api';

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

export const apiAuth = async (endpoint: string, data: unknown) => {
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

// export const apiLogin = async (endpoint: string, data: unknown) => {
//     const response = await fetch(`${BASE_URL}${endpoint}`, {
//         method: 'POST',
//         headers: getHeaders(),
//         body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//         throw new Error(`Request failed with status: ${response.status}`);
//     }

//     return response.json();
// };
