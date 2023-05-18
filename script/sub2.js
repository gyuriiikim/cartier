// 장바구니 변수
const buy = document.querySelector('.my > .buy')
const buy_open = document.querySelector('.buy_open')
const close_btn = document.querySelector('.buy_open .close')
console.log(buy, buy_open, close_btn)
// 장바구니 js
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