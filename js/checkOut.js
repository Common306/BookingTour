function openLogin() {
    var login = document.getElementsByClassName('cout-form')[0];

    if (login.style.display == 'block') {
        login.style.display = 'none'
    } else {
        login.style.display = 'block';
    }
}

var pays = document.querySelectorAll('.cout-pay-item input');
var paysDescription = document.querySelectorAll('.cout-pay-description');

pays.forEach((pay, index) => {
    pay.onchange = function() {
        var payTextDisplay = document.getElementsByClassName('block')[0];
        payTextDisplay.classList.remove('block');
        paysDescription[index].classList.add('block');
    }
})