const container = document.querySelector("#container"); 
const pics = [`001.jpg`, "002.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg"];  
const pics_link = ["page1.html","page2.html","page3.html","page4.html","page5.html","page6.html"]
container.style.backgroundImage = `url(images/${pics[0]})`;  
const arrows = document.querySelectorAll(".arrow");  
let i = 0; 

setInterval(function() {
  i++;
  if ( i >= pics.length ) {  
    i = 0;  
  }
  if (i < 0) {  
    i = pics.length - 1;  
  }  
  container.style.backgroundImage = `url(images/${pics[i]})`; 
}, 4000); 

container.addEventListener("click", ()=>{
    window.location.href = pics_link[i];
});

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left") {  
      i--; 
      if (i < 0) {  
        i = pics.length - 1;  
      }      
    }
    else if (e.target.id == "right") {  
      i++;  
      if ( i >= pics.length ) {  
        i = 0;  
      }
    }
    container.style.backgroundSize = "cover";
    container.style.backgroundImage = `url(images/${pics[i]})`;  
  });
});
