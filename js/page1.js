const container = document.querySelector("#container"); 
const pics = ["001.jpg","002.jpg","003.jpg","004.jpg","005.jpg","006.jpg","007.jpg","008.jpg","009.jpg","010.jpg"]; 
container.style.backgroundImage = `url(images1/${pics[0]})`;  // 첫번째 이미지 기본으로 표시
const arrows = document.querySelectorAll(".arrow");  // 화살표
let i = 0;  // 배열 인덱스

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
    container.style.backgroundSize = "contain";
    container.style.backgroundImage = `url(images1/${pics[i]})`; 
  });
});