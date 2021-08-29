const fetch = require('node-fetch');

class Cielo {
    static compra(params){
       
       
 
return fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/', {
        method: 'post',
        body:    JSON.stringify(params),
        headers: { 'Content-Type': 'application/json',
        'MerchantId': '7458297e-51c1-4066-8d8d-c520a9b7423e',
        'MerchantKey': 'QWCCUPBHLUWSRGZGPVBZFFBYIBCPEAXARHVHKAKA'
     },
    })
    .then(res => res.json());
    }

    static captura(PaymentId){
        return fetch('https://api.cieloecommerce.cielo.com.br/1/sales/'+PaymentId + '/capture', {
                method: 'put',
                body:    JSON.stringify(params),
                headers: { 'Content-Type': 'application/json',
                'MerchantId': '7458297e-51c1-4066-8d8d-c520a9b7423e',
                'MerchantKey': 'QWCCUPBHLUWSRGZGPVBZFFBYIBCPEAXARHVHKAKA'
             },
            })
            .then(res => res.json());
            }
}
module.exports = Cielo;