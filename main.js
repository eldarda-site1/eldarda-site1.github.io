const imgBlock = document.querySelector('#img'),
    btn1 = document.querySelector('#btn1'),
    btn2 = document.querySelector('#btn2'),
    btn3 = document.querySelector('#btn3'),
    btn4 = document.querySelector('#btn4'),
    arrow = document.querySelector('#arrow'),
    footerTextoneBlock = document.querySelector('#footer-text-oneblock'),
    footer_text_twoblock = document.querySelector('.footer-text-twoblock'),
    footer_text_oneblock = document.querySelector('#footer-text-oneblock');
     
    function time2() {
        imgBlock.src = '/img/content-1-2.png';
        btn1.className = "circle";
        btn2.className = "blue_circle";
        btn3.className = "circle";
        btn4.className = "circle";
        }
    function time1() {
        imgBlock.src = '/img/content-1.png';
        btn1.className = "blue_circle";
        btn2.className = "circle";
        btn3.className = "circle";
        btn4.className = "circle";
        }
    function time3() {
        imgBlock.src = '/img/content-1-3.png';
        btn1.className = "circle";
        btn2.className = "circle";
        btn3.className = "blue_circle";
        btn4.className = "circle";
        } 
    function time4() {
        imgBlock.src = '/img/content-1-4.png';
        btn1.className = "circle";
        btn2.className = "circle";
        btn3.className = "circle";
        btn4.className = "blue_circle";
        } 

    function lol () {
        setTimeout(time2, 2000);
        setTimeout(time3, 4000);
        setTimeout(time4, 6000);
        setTimeout(time1, 8000);
        setTimeout(time2, 10000);
        setTimeout(time3, 12000);
        setTimeout(time4, 14000);
        setTimeout(time1, 16000);
        setTimeout(time2, 18000);
        setTimeout(time3, 20000);
        setTimeout(time4, 22000);
        setTimeout(time1, 24000);
        setTimeout(time2, 26000);
        setTimeout(time3, 28000);
        setTimeout(time4, 30000);
        setTimeout(time1, 32000);
        setTimeout(time2, 34000);
        setTimeout(time3, 36000);
        setTimeout(time4, 38000);
        setTimeout(time1, 40000);
        setTimeout(time2, 42000);
        setTimeout(time3, 44000);
        setTimeout(time4, 46000);
        setTimeout(time1, 48000);
    }
    lol(); // типа переключатель по времени



    btn1.addEventListener('click', () => {
        imgBlock.src = '/img/content-1.png';
        btn1.className = "blue_circle";
        btn2.className = "circle";
        btn3.className = "circle";
        btn4.className = "circle";
    })
    btn2.addEventListener('click', () => {
        imgBlock.src = '/img/content-1-2.png';
        btn1.className = "circle";
        btn2.className = "blue_circle";
        btn3.className = "circle";
        btn4.className = "circle";

    })
    btn3.addEventListener('click', () => {
        imgBlock.src = '/img/content-1-3.png';
        btn1.className = "circle";
        btn2.className = "circle";
        btn3.className = "blue_circle";
        btn4.className = "circle";
    })
    btn4.addEventListener('click', () => {
        imgBlock.src = '/img/content-1-4.png';
        btn1.className = "circle";
        btn2.className = "circle";
        btn3.className = "circle";
        btn4.className = "blue_circle";
    })

arrow.addEventListener('click', () => {
    arrow.src = '/img/arrow_down.png';
    footerTextoneBlock.className = "footer-text-block_off";
    footer_text_twoblock.className = "footer-text-twoblock_mtnone";
})