// スクロール時に.lesson-inner にアニメーションをつける
window.addEventListener('scroll', function() {
        const scroll = window.scrollY;
        const windowHeight = window.innerHeight;
        const boxes = document.querySelectorAll('.lesson-inner');

        boxes.forEach(function(box) {
            const distancetoBox = box.offsetTop;
            if(scroll + windowHeight > distancetoBox) {
                box.classList.add('is-active');                
            }
        });
    });

// DOM読み込み後にスライドショーを開始
document.addEventListener("DOMContentLoaded", () =>{
    const slides = document.querySelectorAll(".studio-slideshow .slide");
    let currentIndex = 0;

    setInterval(() => {
        slides[currentIndex].classList.remove("slide-active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("slide-active");
    }, 3000); // ３秒ごとに切り替え
    });

// スクロール時に料金プランセクションをフェードイン
window.addEventListener("scroll", () =>{
    const plans = document.querySelectorAll(".plan-container, .plan-recommended, .plan");
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;

    plans.forEach(plan => {
        const dist = plan.offsetTop;
        if(scroll + windowHeight > dist + 100) {
            plan.classList.add("is-visible");
        }
    });
});