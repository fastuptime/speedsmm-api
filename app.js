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
        this.api = options.api || "https://speedsmm.com/api/v2";
    }

    async getBalance() {
        try {
            let res = await axios.post(this.api,
            {
                key: this.key,
                action: "balance"
            });

            return res.data;
        } catch (e) {
            return { status: "error", error: e };
        }
    };

    async getServices() {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "services"
                });
            return res.data;
        } catch (e) {
            return { status: "error", error: e };
        }
    };

    async getStatus({ order }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "status",
                    order: order
                });
            return res.data;
        } catch (e) {
            return { status: "error", error: e };
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
                });
            return res.data;
        } catch (e) {
            return { status: "error", error: e };
        }
    };

    async orderCancel({ order }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "cancel",
                    orders: order
                });
            return res.data;
        } catch (e) {
            return { status: "error", error: e };
        }
    };

    async refill({ order }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "refill",
                    order: order
                });
            return res.data;
        } catch (e) {
            return { status: "error", error: e };
        }
    };

    async refillStatus({ order }) {
        try {
            let res = await axios.post(this.api,
                {
                    key: this.key,
                    action: "refill_status",
                    order: order
                });
            return res.data;
        } catch (e) {
            return { status: "error", error: e };
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
