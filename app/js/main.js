SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 400,
    // Размер шага в пикселях 
    stepSize         : 45,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 1,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 100,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})



function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


$('.series__body-tab-item').on('click', function(e){
    $(this).addClass('active')
    $('.series__body-tab-item').not(this).removeClass('active')
    let Show = $(this).attr('data-tab')
    $('.series__body-box').each(function(e){
        if ($(this).attr('data-tab') == Show){
            $(this).removeClass('none')
        }else{
            $(this).addClass('none')
        }
    })
})

$('.player__body-tap span').on('click', function(e){
    $(this).addClass('active')
    $('.player__body-tap span').not(this).removeClass('active')
    let Show = $(this).attr('data-tab')
    $('.player__body-box div').each(function(e){
        if ($(this).attr('data-tab') == Show){
            $(this).removeClass('none')
        }else{
            $(this).addClass('none')
        }
    })
})

$(document).on('load', function(e){
    if($(this).scrollTop() >= 300){
        console.log(1)
    }
})

$('.sc__top').on('click', function(e){
    $(document).scrollTop(0)
})

window.addEventListener('scroll', function () {
    const scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition >= 300){
        document.querySelector('.sc__top').classList.add('active')
    }else{
        document.querySelector('.sc__top').classList.remove('active')
    }
});

document.querySelectorAll(".acc").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.header__body-menu-links-item-acc');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.header__body-menu-links-item-acc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.acc').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.header__body-menu-links-item-acc').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.acc').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})



jQuery(function($){
	$(document).mouseup( function(e){
        if (!$('.menu__btn-open').is(e.target) && $('.menu__btn-open').has(e.target).length=== 0){
            if (!$('.footer__menu').is(e.target) && $('.footer__menu').has(e.target).length=== 0){
                
            }
        }else if ($('.closest__list-menu').is(e.target) && $('.closest__list-menu').has(e.target).length=== 0){
            
        }
        else{
            
        }
    });
});

$('.header').on('click', function(e){
    if ($('.burger').is(e.target) || $('.burger svg').is(e.target) || $('.burger svg path').is(e.target)){
        $('.header__mobile-bot').addClass('open')
        $('body').addClass('hidden')
    }else if ($('.close').is(e.target) || $('.close svg').is(e.target) || $('.close svg path').is(e.target)){
        $('.header__mobile-bot').removeClass('open')
        $('body').removeClass('hidden')
    }
})

