// function click menu và user
let user_list_menu = document.querySelector('.user_list-menu');

function click_menu_user() {
    user_list_menu.classList.toggle('open');
}


// funciton hiện chọn loại ngôn ngữ

let js_language = document.querySelector(".js-language");
let modal = document.querySelector(".modal");
let modal_currency = document.querySelector(".modal_currency");
let js_close = document.querySelector(".js-close");
let js_currency = document.querySelector(".js-currency");

function show_language() {
    modal.classList.add("open");
}

function hide_language() {
    modal.classList.remove("open");
}

function show_currency() {
    modal_currency.classList.add("open");
}

function hide_currency() {
    modal_currency.classList.remove("open");
}

js_language.addEventListener("click", show_language);
js_close.addEventListener("click", hide_language);
modal.addEventListener("click", hide_language)
js_currency.addEventListener("click", show_currency);
js_close.addEventListener("click", hide_currency);
modal_currency.addEventListener("click", hide_currency)


// show số lượng khách hàng

let user_quantity = document.querySelector(".js-quantity");

function click_show_quantity() {
    user_quantity.classList.toggle('open');
}

//show search 

let js_form_search = document.querySelector(".js_form-search");

function show_search() {
    js_form_search.classList.toggle('open');
}

// mobile owlcarousel
$('.owl-carousel').owlCarousel({
    loop: true,
    // margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1.7,
            nav: true
        },
        600: {
            items: 2.7,
            nav: false
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})