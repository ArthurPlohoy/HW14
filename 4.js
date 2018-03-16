// Задание 4
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3', false);

xhr.send();

if (xhr.status != 200) {
  
  alert(xhr.status + ': ' + xhr.statusText );  
} else {
  
  alert(xhr.responseText );  
}