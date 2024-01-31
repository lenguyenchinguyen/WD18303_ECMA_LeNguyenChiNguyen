export default class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint) {
            let response = await fetch(`${this.baseUrl}/${endpoint}`);
            let data = await response.json();
            return data;
    }
}