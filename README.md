# HW14
Задание 3, 4
var request = require('request');

request.post(
    'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3',
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
