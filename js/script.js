const myBtn1 = document.getElementById("AboutMeBtn");
const myBtn2 = document.getElementById("InternshipBtn");
const myBtn3 = document.getElementById("ContactMeBtn");
myBtn1.addEventListener("click", function(e){
    window.scrollBy({
        top: 600,
        left: 100,
        behavior: 'smooth'
      });
})

myBtn2.addEventListener("click", function(e){
    window.scrollBy({
        top: 1150,
        left: 100,
        behavior: 'smooth'
      });
})

myBtn3.addEventListener("click", function(e){
    window.scrollBy({
        top: 1800,
        left: 100,
        behavior: 'smooth'
      });
})