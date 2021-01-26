document.addEventListener("DOMContentLoaded", function(){    
    
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
        
    //メニュークリックで猫の手関数
    function catHand(num){
        let style = document.createElement('style');
        style.innerHTML = resetHand + "\n" + catList[num]
        document.body.appendChild(style);
    };
    
    //スクロールでふわっと&猫の手セット
    window.addEventListener('scroll', function() {
        function addFade(id){
            document.getElementById(id).classList.add('fade_on');
        }
        if(200 > window.scrollY) {
            catHand(0);
        } else if(1000 > window.scrollY) {
            catHand(1);
            addFade("prof_main");
        } else if( 1800 > window.scrollY ) {
            catHand(2);
            addFade("skills_main");
        } else if( 2600 > window.scrollY ) {
            catHand(3);
            addFade("items_main");
        } else if( 3200 > window.scrollY ) {
            catHand(4);
            addFade("links_main");
        }
    });
});