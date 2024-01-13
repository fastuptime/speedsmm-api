const axios = require('axios');

/*

   _____                     _______ __  _____  ____    ____ __        ___    ____  ____
  / ___/____  ___  ___  ____/ / ___//  |/  /  |/  / |  / / // /       /   |  / __ \/  _/
  \__ \/ __ \/ _ \/ _ \/ __  /\__ \/ /|_/ / /|_/ /| | / / // /_______/ /| | / /_/ // /  
 ___/ / /_/ /  __/  __/ /_/ /___/ / /  / / /  / / | |/ /__  __/_____/ ___ |/ ____// /   
/____/ .___/\___/\___/\__,_//____/_/  /_/_/  /_/  |___/  /_/       /_/  |_/_/   /___/   
    /_/            

*/

class smmApi {
    constructor(options) {
        this.key = options.key;
        this.api = options.api || "https://speedsmm.com/api/v2";
    }

    async getBalance() {
        let res = await axios.post(this.api,
            {
                key: this.key,
                action: "balance"
            });
        return res.data;
    };

    async getServices() {
        let res = await axios.post(this.api,
            {
                key: this.key,
                action: "services"
            });
        return res.data;
    };

    async getStatus({ order }) {
        let res = await axios.post(this.api,
            {
                key: this.key,
                action: "status",
                order: order
            });
        return res.data;
    };

    async addOrder({ service, link, quantity, custom }) {
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
    };

    async orderCancel({ order }) {
        let res = await axios.post(this.api,
            {
                key: this.key,
                action: "cancel",
                orders: order
            });
        return res.data;
    };

    async refill({ order }) {
        let res = await axios.post(this.api,
            {
                key: this.key,
                action: "refill",
                order: order
            });
        return res.data;
    };

    async refillStatus({ order }) {
        let res = await axios.post(this.api,
            {
                key: this.key,
                action: "refill_status",
                order: order
            });
        return res.data;
    };
}

module.exports = smmApi;

/*

   _____                     _______ __  _____  ____    ____ __        ___    ____  ____
  / ___/____  ___  ___  ____/ / ___//  |/  /  |/  / |  / / // /       /   |  / __ \/  _/
  \__ \/ __ \/ _ \/ _ \/ __  /\__ \/ /|_/ / /|_/ /| | / / // /_______/ /| | / /_/ // /  
 ___/ / /_/ /  __/  __/ /_/ /___/ / /  / / /  / / | |/ /__  __/_____/ ___ |/ ____// /   
/____/ .___/\___/\___/\__,_//____/_/  /_/_/  /_/  |___/  /_/       /_/  |_/_/   /___/   
    /_/            

*/