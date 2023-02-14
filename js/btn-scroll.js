const goTop = function() {
    window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const goTopEl = document.querySelector('.go-top');
    if (scrollTop > 800) {
    goTopEl.classList.add('show');
    } else {
    goTopEl.classList.remove('show');
    }
    })};

const goTopEl = document.querySelector('.go-top');
goTopEl.addEventListener('click', function() {            
document.querySelector('html, body').animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
return false;
});    

window.addEventListener('load', function() {
goTop();
});