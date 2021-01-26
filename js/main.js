document.addEventListener("DOMContentLoaded", function(){    
    //ナビゲーションid
    const menuList = [
        'home',
        'profile',
        'skills',
        'items',
        'links'
    ]; 
    //猫の手アクティブ
    const catList = [
        '#cat {opacity : 1;}',
        '#hand_p {opacity : 1;}',
        '#hand_s {opacity : 1;}',
        '#hand_i {opacity : 1;}',
        '#hand_l {opacity : 1;}'
    ]; 
    //猫の手opacityリセット
    const resetHand = `
        #cat {opacity : 0;}
        #hand_p {opacity : 0;}
        #hand_s {opacity : 0;}
        #hand_i {opacity : 0;}
        #hand_l {opacity : 0;}`;
    
    //スムーズスクロール
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < smoothScrollTrigger.length; i++){
        smoothScrollTrigger[i].addEventListener('click', (e) => {
            e.preventDefault();
            let href = smoothScrollTrigger[i].getAttribute('href');
            let targetElement = document.getElementById(href.replace('#', ''));
            const rect = targetElement.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const gap = 100;
            const target = rect + offset - gap;
            window.scrollTo({
                top: target,
                behavior: 'smooth',
            });
        });
    }

    //メニュークリックで猫の手関数
    function catHand(num){
        let style = document.createElement('style');
        style.innerHTML = resetHand + "\n" + catList[num]
        document.body.appendChild(style);
    };
    //homeクリック時
    let homeClick = document.getElementById(menuList[0]);
    homeClick.addEventListener("click", () => {
        catHand(0);
    },false);
    //profileクリック時
    let profClick = document.getElementById(menuList[1]);
    profClick.addEventListener("click", () => {
        catHand(1);
    },false);
    //skillsクリック時
    let skillsClick = document.getElementById(menuList[2]);
    skillsClick.addEventListener("click", () => {
        catHand(2);
    },false);
    //itemsクリック時
    let itemsClick = document.getElementById(menuList[3]);
    itemsClick.addEventListener("click", () => {
        catHand(3);
    },false);
    //linksクリック時
    let linksClick = document.getElementById(menuList[4]);
    linksClick.addEventListener("click", () => {
        catHand(4);
    },false);
    
    //スクロールでふわっと
    window.addEventListener('scroll', function() {
        function addFade(id){
            document.getElementById(id).classList.add('fade_on');
        }
        if(1000 > window.scrollY) {
            addFade("prof_main");
        } else if( 1800 > window.scrollY ) {
            addFade("skills_main");
        } else if( 2600 > window.scrollY ) {
            addFade("items_main");
        } else if( 3200 > window.scrollY ) {
            addFade("links_main");   
        }
    });
});