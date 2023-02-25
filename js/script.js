$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1
    });
})

$('.card-img-top').magnificPopup({
    type: 'image',
});

$(function () {
    $('#accordion').accordion({
        collapsible: true,
        heightStyle: 'content'
    });

    let nameUser = $('#firstName');
    let secondNameUser = $('#secondName');
    let phoneUser = $('#phone');
    let countryUser = $('#country');
    let indexUser = $('#index');
    let addressUser = $('#address');


    indexUser.inputmask({"mask": "999999"});
    phoneUser.inputmask({"mask": "+9 999 999-99-99"});


    $('#order').click(function () {
        if (!nameUser.val()) {
            alert('Заполните имя');
            return;
        }
        if (!secondNameUser.val()) {
            alert('Заполните фамилию');
            return;
        }
        if (!phoneUser.val()) {
            alert('Заполните телефон');
            return;
        }
        if (!countryUser.val()) {
            alert('Выберите страну');
            return;
        }
        if (!indexUser.val()) {
            alert('Заполните индекс');
            return;
        }
        if (!addressUser.val()) {
            alert('Заполните адрес');
            return;
        }
        $('.container__order').remove();
        $('.success').removeClass('hide');
    });
});

