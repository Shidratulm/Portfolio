document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".track");
    const Homedots = document.querySelectorAll(".dot");
    const sliderElement = document.querySelector(".slider");

    let current = 0;

    if (track && sliderElement && Homedots.length > 0){
        const slideWidth = sliderElement.clientWidth;

        function showHomeSlide(index) {
            current = index;

            track.style.transform = `translateX(-${slideWidth * current}px)`;

            Homedots.forEach(dot => dot.classList.remove("active"));
            Homedots[current].classList.add("active");
        }

        Homedots.forEach((dot, index) => {
            dot.addEventListener("click", () => showHomeSlide(index));
        });
        // Recalculates for resized windows
        window.addEventListener("resize", () => {
            const newWidth = sliderElement.clientWidth;
            track.style.transform = `translateX(-${newWidth * current}px)`;
        });
    }

    const allProjectSliders = document.querySelectorAll(".project-slider");

    allProjectSliders.forEach((sliderContainer) => {
        const projectTrack = sliderContainer.querySelector(".slider-track");
        const projectDots = sliderContainer.querySelectorAll(".project-slider-dots .dot");

        function moveProjectSlider(index) {
            const slideWidth = sliderContainer.clientWidth;
            projectTrack.style.transform = `translateX(-${slideWidth * index}px)`;

            projectDots.forEach(d => d.classList.remove("active"));
            projectDots[index].classList.add("active");
        }

        if (projectTrack && projectDots.length > 0){
            projectDots.forEach((dot, index) => {
                dot.addEventListener("click", () => moveProjectSlider(index));
            });
        }
    });
    window.addEventListener("resize", () => {
        allProjectSliders.forEach((sliderContainer) => {
            const projectTrack = sliderContainer.querySelector(".slider-track");
            const activeDot = sliderContainer.querySelector(".project-slider-dots .dot.active");

            if (projectTrack && activeDot) {
                const dots = Array.from(sliderContainer.querySelectorAll(".project-slider-dots .dot"));
                const currentIndex = dots.indexOf(activeDot);
                
                // Recalculate width and snap the track to the correct position
                const currentWidth = sliderContainer.clientWidth;
                projectTrack.style.transform = `translateX(-${currentWidth * currentIndex}px)`;
            }
        });
    });
});