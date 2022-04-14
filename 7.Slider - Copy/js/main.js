let buttons = document.querySelectorAll('.tab-links button');
let content = document.querySelectorAll('.tab-content div');

for(let btn of buttons) {
    btn.addEventListener('click',function() {
        let active = document.querySelector('.active');

        active.classList.remove('active');
        this.classList.add('active');

        let index = this.getAttribute('data-index');

        for(let div of content) {
            if(div.getAttribute('data-index') === index) {
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }
        }

    })
}


// focus / blur


// input.addEventListener('focus',function() {
//     input.style.border = "1px solid red";
// })

// input.addEventListener('blur',function() {
//     input.style.border = "none";
//     input.style.borderBottom = "1px solid red";
// })


// let input = document.querySelector('#input');
// let label = document.querySelector('#lbl');
// input.addEventListener('focus',function(){
//     label.style.left = "-15%";
//     label.style.top = "50%";
//     label.style.transform = "rotate(-90deg) translateY(-50%)";
// })

// input.addEventListener('blur',function(){
//     label.style.top = "50%";
// })


let header = document.getElementById('header')
let btn = document.getElementById('top')

window.onscroll = function() {
    if(document.documentElement.scrollTop > 100) {
        header.style.backgroundColor = 'red';
        header.style.padding = '15px 0';
        btn.style.opacity = '1'
    }
    else{
        header.style.backgroundColor = 'blueviolet';
        header.style.padding = '25px 0';
        btn.style.opacity = '0'
    }
}