var menu=document.querySelector(".mobile-icon");
var list=document.querySelector(".left");
var searchbar=document.querySelector("#search");
var searchIcon=document.querySelector(".right i");
var flag=0;
menu.addEventListener("click",function(){
if(flag==0){

    list.style.left=0;
    menu.innerHTML=`<i class="ri-close-fill"></i>`;
  
    menu.style.transition=`all easeIn 1s`;
    flag=1;
}
else{

    list.style.left="-100%";
   
    menu.innerHTML=`<i class="ri-menu-line"></i>`;
    flag=0;
}
})
searchIcon.addEventListener("click",function(){
    if(flag==0){
    
        searchbar.style.top=`100px`;
       
        menu.style.transition=`all easeIn 1s`;
        flag=1;
    }
    else{
        searchbar.style.top="-100px";
        menu.innerHTML=`<i class="ri-menu-line"></i>`;
        flag=0;
    }
    })
    /////////////////// slide motion animation using gsap

    var proSlideParent=document.querySelector(".product_slide");
    var product=document.querySelectorAll(".product")
  
   