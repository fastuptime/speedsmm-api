# 🚀 speedsmm-api

`speedsmm-api`, Sosyal Medya Pazarlama (SMM) panelleri ile kolayca etkileşime geçmenizi sağlayan bir Node.js modülüdür. Bu modül, API anahtarınızı ve proxy ayarlarınızı kullanarak çeşitli SMM hizmetlerine erişim sağlar.

## 📦 Kurulum

```bash
npm install speedsmm-api
```

## 📚 Kullanım

Modülü kullanmak için, önce `smmAPI` sınıfını içe aktarın ve gerekli seçeneklerle yeni bir örnek oluşturun.

```javascript
const smmAPI = require('speedsmm-api');

const smm = new smmAPI({
    key: 'YOUR_API_KEY',
    api: 'https://example.com/api',
    proxy: [
        {
            host: 'proxy_host',
            port: 8080,
            auth: {
                username: 'proxy_user',
                password: 'proxy_pass'
            }
        }
    ]
});
```

### 🌟 API Metodları

#### 💰 `getBalance()`

API bakiyenizi sorgular.

```javascript
smm.getBalance().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

#### 🛠️ `getServices()`

Mevcut hizmetleri listeler.

```javascript
smm.getServices().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

#### 📊 `getStatus({ order })`

Belirtilen siparişin durumunu sorgular.

```javascript
smm.getStatus({ order: '12345' }).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

#### ➕ `addOrder({ service, data })`

Yeni bir sipariş ekler.

```javascript
smm.addOrder({
    service: 'service_id',
    data: {
        link: 'https://example.com',
        quantity: 100,
        custom: 'custom_data'
    }
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

#### ❌ `ordersCancel({ orders })`

Bir veya birden fazla siparişi iptal eder.

```javascript
smm.ordersCancel({ orders: ['12345', '67890'] }).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

#### 🔄 `refill({ order })`

Bir siparişi doldurur.

```javascript
smm.refill({ order: '12345' }).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

#### 🔍 `refillStatus({ order })`

Doldurma durumunu sorgular.

```javascript
smm.refillStatus({ order: '12345' }).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

#### 🔄 `refillMultipleStatus({ orders })`

Birden fazla siparişin doldurma durumlarını sorgular.

```javascript
smm.refillMultipleStatus({ orders: ['12345', '67890'] }).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

#### 🌐 `getMyIP()`

Kendi IP adresinizi sorgular.

```javascript
smm.getMyIP().then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});
```

## 📝 Lisans

- ⚖️ Its protected by Creative Commons ([CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/))

<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" title="BYNCSA40"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png"></a>
