function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mock API response");
        }, 1000);
    });
}

export default getResponseFromAPI;
