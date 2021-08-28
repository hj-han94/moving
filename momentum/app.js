const h1 = document.querySelector(".title h1")

console.dir(h1)

function handleMouseEnter(){
    h1.classList.toggle("active")

}

h1.addEventListener("click",handleMouseEnter);