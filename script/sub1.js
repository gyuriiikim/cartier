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

// best swiper
const swiper1 = new Swiper(".best_slide", {
    slidesPerView:4,
    spaceBetween:30,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// best QR
const qr = document.querySelectorAll('.best .swiper-slide > .qr')
const box = document.querySelectorAll('.best .swiper-slide > .box')
const close_box = document.querySelectorAll('.best .swiper-slide > .box > .close')
console.log(qr, box, close_box)

for(let i=0; i<box.length; i++){
    box[i].style.display = 'none'
};

qr.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        console.log(box[i],i)
        e.preventDefault()
        box[i].style.display = 'flex'
    })
})
close_box.forEach((t,i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault()
        box[i].style.display = 'none'
    })
})


// qr.forEach((t,i){
//     t.addEventListener('click',(e)=>{
//         e.preventDefault()
//         box[i+1].style.display = 'flex'
//     })
// });


// QR 클릭했을때
// for(let i=0; i<box.length; i++){
//     qr[i].addEventListener('click',(e)=>{
//         e.preventDefault()
//         for(let i=0; i<box.length; i++){
//             box[i].style.display = 'block'
//         }
//     })
// }

// for(let i=0; i<box.length; i++){
//     close_box[i].addEventListener('click',(e)=>{
//         e.preventDefault()
//         for(let i=0; i<box.length; i++){
//             box[i].style.display = 'none'
//         }
//     })
// };


// 닫기 클릭했을때
