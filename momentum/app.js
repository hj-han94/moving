const title = document.querySelector(".title h1")

console.dir(title)

const superEventHandler ={

    mouseover :function(){
        title.innerText="Mouse is here!";
        title.style.color="#1abc9c";
    },

    mouseleave :function(){
        title.innerText="Mouse is gone!";
        title.style.color="#3498db";
    },

    windowresize :function(){
        title.innerText="You just resize!";
        title.style.color="purple";
    },

    contextmenu : function(){
        title.innerText="That was a right click!";
        title.style.color="tomato";
    },

   
}

title.addEventListener("mouseover",superEventHandler.mouseover)
title.addEventListener("mouseleave",superEventHandler.mouseleave)
window.addEventListener("contextmenu",superEventHandler.contextmenu)
window.addEventListener("resize",superEventHandler.windowresize)