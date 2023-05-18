// main swiper
const main_bg = new Swiper(".bg", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    // mousewheel: true
});
//팔찌 변수
const btacelet_a = document.querySelectorAll('.btacelet .pagenation > a')
const btacelet_img = document.querySelectorAll('.btacelet .btacelet_img > div')
console.log(btacelet_a, btacelet_img)
// 장바구니 변수
const buy = document.querySelector('.my > .buy')
const buy_open = document.querySelector('.buy_open')
const close_btn = document.querySelector('.buy_open .close')
console.log(buy, buy_open, close_btn)

buy_open.style.transform = 'translateX(500px)'
let popup_boolean = true
buy.addEventListener('click',function(e){
    e.preventDefault()
    buy_open.style.transition = 'all 1s'
    if(popup_boolean){
        buy_open.style.transform = 'translateX(0)'
    }else {
        buy_open.style.transform = 'translateX(500px)'
    }
    popup_boolean = !popup_boolean
})
close_btn.addEventListener('click',function(e){
    e.preventDefault()
    buy_open.style.transition = 'all 1s'
    if(popup_boolean){
        buy_open.style.transform = 'translateX(500px)'
    }else {
        buy_open.style.transform = 'translateX(0)'
    }
    popup_boolean = !popup_boolean
})

// 시계 swiper
const watch2 = new Swiper(".swiper-watch", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});


// 팔찌 swiper
const btacelet_slide = new Swiper(".btacelet > .btacelet_slide", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
    delay: 2000,
    disableOnInteraction: false
},
    pagination: {
    el: ".swiper-pagination",
    clickable: true
}
});
