const axios = require('axios');

/*

   _____                     _______ __  _____  ____    ____ __        ___    ____  ____
  / ___/____  ___  ___  ____/ / ___//  |/  /  |/  / |  / / // /       /   |  / __ \/  _/
  \__ \/ __ \/ _ \/ _ \/ __  /\__ \/ /|_/ / /|_/ /| | / / // /_______/ /| | / /_/ // /  
 ___/ / /_/ /  __/  __/ /_/ /___/ / /  / / /  / / | |/ /__  __/_____/ ___ |/ ____// /   
/____/ .___/\___/\___/\__,_//____/_/  /_/_/  /_/  |___/  /_/       /_/  |_/_/   /___/   
    /_/            

*/

class smmAPI {
    constructor(options) {
        this.key = options.key;
        this.api = options.api;
        this.proxy = options.proxy || [];
        if(!this.key) throw new Error("Please provide an API key.");
        if(!this.api) throw new Error("Please provide an API URL.");
    }

    getRandomProxyConfig() {
        if (this.proxy.length === 0) return {};

        const randomIndex = Math.floor(Math.random() * this.proxy.length);
        const proxy = this.proxy[randomIndex];
        return {
            proxy: {
                host: proxy.host,
                port: proxy.port,
                auth: {
                    username: proxy.auth.username,
                    password: proxy.auth.password
                }
            }
        };
    }

    async getBalance() {
        try {
            let res = await axios.post(this.api,
            {
                key: this.key,
                action: "balance"
            }, this.getRandomthis.getRandomProxyConfig()());

            return res.data;
        } catch (e) {
            return { status: "error", error: e?.response?.data };
        }
    };

    async getServices() {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "services"
                }, this.getRandomProxyConfig());
            return res.data;
        } catch (e) {
            return { status: "error", error: e?.response?.data };
        }
    };

    async getStatus({ order }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "status",
                    order: order
                }, this.getRandomProxyConfig());
            return res.data;
        } catch (e) {
            return { status: "error", error: e?.response?.data };
        }
    };

    async addOrder({ service, link, quantity, custom }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "add",
                    service: service,
                    link: link,
                    quantity: quantity,
                    custom: custom
                }, this.getRandomProxyConfig());
            return res.data;
        } catch (e) {
            return { status: "error", error: e?.response?.data };
        }
    };

    async orderCancel({ order }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "cancel",
                    orders: order
                }, this.getRandomProxyConfig());
            return res.data;
        } catch (e) {
            return { status: "error", error: e?.response?.data };
        }
    };

    async refill({ order }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "refill",
                    order: order
                }, this.getRandomProxyConfig());
            return res.data;
        } catch (e) {
            return { status: "error", error: e?.response?.data };
        }
    };

    async refillStatus({ order }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "refill_status",
                    order: order
                }, this.getRandomProxyConfig());
            return res.data;
        } catch (e) {
            return { status: "error", error: e?.response?.data };
        }
    };
}

module.exports = smmAPI;

/*

   _____                     _______ __  _____  ____    ____ __        ___    ____  ____
  / ___/____  ___  ___  ____/ / ___//  |/  /  |/  / |  / / // /       /   |  / __ \/  _/
  \__ \/ __ \/ _ \/ _ \/ __  /\__ \/ /|_/ / /|_/ /| | / / // /_______/ /| | / /_/ // /  
 ___/ / /_/ /  __/  __/ /_/ /___/ / /  / / /  / / | |/ /__  __/_____/ ___ |/ ____// /   
/____/ .___/\___/\___/\__,_//____/_/  /_/_/  /_/  |___/  /_/       /_/  |_/_/   /___/   
    /_/            

*/
