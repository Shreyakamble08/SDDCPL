//heros slider script
const heroSlider = document.getElementById("heroSlider");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".hero-dot");
let index = 0;

function showSlide(i){
  if(i >= slides.length) index = 0;
  else if(i < 0) index = slides.length - 1;
  else index = i;

  heroSlider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

document.getElementById("nextBtn").addEventListener("click",()=>showSlide(index+1));
document.getElementById("prevBtn").addEventListener("click",()=>showSlide(index-1));

dots.forEach((dot,i)=>{
  dot.addEventListener("click", ()=> showSlide(i));
});

setInterval(()=>showSlide(index+1), 5000);

//WHY CHOOSE US SECTION SCRIPT
     //============Why choose us animation==================
      document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll("#why-choose .opacity-0");

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, i) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.remove("opacity-0", "translate-y-10");
                }, i * 200); // delay for row-by-row effect
              }
            });
          },
          { threshold: 0.1 }
        );

        cards.forEach((card) => observer.observe(card));
      });
   

      // Counter Animation
       const counters = document.querySelectorAll('.counter');
  let started = false;

  const startCounter = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const update = () => {
        const increment = target / 40; // speed

        if (count < target) {
          count += increment;
          counter.innerText = Math.floor(count) + (counter.innerText.includes('%') ? '%' : '+');
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
        }
      };

      update();
    });
  };

  // Trigger on view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        startCounter();
        started = true;
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector('.counter').parentElement);

