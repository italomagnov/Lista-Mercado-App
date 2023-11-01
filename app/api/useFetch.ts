type userData = {
    avatarUrl: string;
    name: string;
    username: string;
    email: string;
    password: string;
};

export function useFetch(url: string) {
    const urlDefault = 'http://localhost:8080/api/';

    const POST = async (userData: userData) => {
        console.log('User Data >>> ', userData);

        const newUser = await fetch(urlDefault + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        return newUser;
    };

    return {
        POST,
    };
}
