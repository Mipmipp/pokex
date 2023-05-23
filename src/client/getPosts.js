export const getPosts = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error("Error getting posts", error);
        throw error;
    }
};
