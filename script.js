var user = prompt('Введите ваше имя');
var a = +prompt('Введите нынешний год');
var b = +prompt('Ииудите год вашего рождения');


function minus(a,b,user){
    var minus =  user + ", Ваш возраст " + (a - b);
    return minus;
}
alert(minus(a,b,user))