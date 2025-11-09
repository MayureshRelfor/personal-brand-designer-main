export async function sendRequest(
    url: string,
    method: string = "POST",
    data: unknown = null
) {
    try {
        const options: RequestInit = {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        };

        if (data) {
            options.body = JSON.stringify(data);
        }
        url = `${import.meta.env.VITE_NODE_APP}` + url;
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `HTTP error! status: ${response.status}, message: ${errorText}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
}
