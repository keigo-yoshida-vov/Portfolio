document.addEventListener("DOMContentLoaded", function(){    
    //ナビゲーションid
    const menuList = [
        'home',
        'profile',
        'skills',
        'items',
        'links'
    ]; 
    //猫の手
    const resetHand = `
        #cat {
            opacity : 0;
        }
        #hand_p {
            opacity : 0;
        }
        #hand_s {
            opacity : 0;
        }
        #hand_i {
            opacity : 0;
        }
        #hand_l {
            opacity : 0;
        }`;
    
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

    //homeクリックで猫の手
    let clickElement0 = document.getElementById(menuList[0]);
    clickElement0.addEventListener("click", (event) => {
        let eventID = event.currentTarget.id;
        if(eventID = clickElement0) {
            let style = document.createElement('style');
            style.innerHTML = resetHand + `
            #cat {
                opacity : 1;
            }`
            document.body.appendChild(style);
        }
    },false);

    //profileクリックで猫の手
    let clickElement1 = document.getElementById(menuList[1]);
    clickElement1.addEventListener("click", (event) => {
        let eventID = event.currentTarget.id;
        if(eventID = clickElement1) {
            let style = document.createElement('style');
            style.innerHTML = resetHand + `
            #hand_p {
                opacity : 1;
            }`
            document.body.appendChild(style);
        } 
    },false);

    //skillsクリックで猫の手
    let clickElement2 = document.getElementById(menuList[2]);
    clickElement2.addEventListener("click", (event) => {
        let eventID = event.currentTarget.id;
        if(eventID = clickElement2) {
            let style = document.createElement('style');
            style.innerHTML = resetHand + `
            #hand_s {
                opacity : 1;
            }`
            document.body.appendChild(style);
        } 
    },false);

    //itemsクリックで猫の手
    let clickElement3 = document.getElementById(menuList[3]);
    clickElement3.addEventListener("click", (event) => {
        let eventID = event.currentTarget.id;
        if(eventID = clickElement3) {
            let style = document.createElement('style');
            style.innerHTML = resetHand + `
            #hand_i {
                opacity : 1;
            }`
            document.body.appendChild(style);
        } 
    },false);

    //linksクリックで猫の手
    let clickElement4 = document.getElementById(menuList[4]);
    clickElement4.addEventListener("click", (event) => {
        let eventID = event.currentTarget.id;
        if(eventID = clickElement4) {
            let style = document.createElement('style');
            style.innerHTML = resetHand + `
            #hand_l {
                opacity : 1;
            }`
            document.body.appendChild(style);
        } 
    },false);
    
    //スクロールイベント
    window.addEventListener('scroll', function(){
        //profileフェードイン
        if( 200 < window.scrollY ) {
            document.getElementById('prof_main').classList.add('fade_on');
        } else {
            document.getElementById('prof_main').classList.remove('fade_on');
        }
        //skillsフェードイン
        if( 1000 < window.scrollY ) {
            document.getElementById('skills_main').classList.add('fade_on');
        } else {
            document.getElementById('skills_main').classList.remove('fade_on');
        }
        //itemsフェードイン
        if( 1800 < window.scrollY ) {
            document.getElementById('items_main').classList.add('fade_on');
        } else {
            document.getElementById('items_main').classList.remove('fade_on');
        }
        //linksフェードイン
        if( 2600 < window.scrollY ) {
            document.getElementById('links_main').classList.add('fade_on');
        } else {
            document.getElementById('links_main').classList.remove('fade_on');
        }
    });
});