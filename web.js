let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");

console.log(card);
let blog = document.querySelector(".trends");
let mainpage = document.querySelector(".main")

function homes(){
    mainpage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";

document.getElementsById("blog").style.color="black";
document.getElementsById("home").style.color="rgb(2, 173, 173)";
document.getElementsById("shop").style.color="black";
document.getElementsById("contact").style.color="black";
document.getElementsById("about").style.color="black";

}

function shops(){
mainpage.style.display="none";
blog.style.display="none";
about.style.display="none";
card.style.display="block";
 card2.style.display="block";

document.getElementsById("blog").style.color="black";  
document.getElementsById("home").style.color="black";
document.getElementsById("shop").style.color="rgb(2, 173, 173" ;
document.getElementsById("contact").style.color="black";
document.getElementsById("about").style.color="black";

}

function blogs(){
    mainpage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";


 document.getElementsById("blog").style.color="rgb(2, 173, 173)"; 
 document.getElementsById("home").style.color="black";
 document.getElementsById("shop").style.color="black";
 document.getElementsById("contact").style.color="black";
 document.getElementsById("about").style.color="black";
 
   
   
}

function abouts(){
    mainpage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="block";

 document.getElementsById("blog").style.color="black";
 document.getElementsById("home").style.color="black";
 document.getElementsById("shop").style.color="black";
 document.getElementsById("contact").style.color="black";
 document.getElementsById("about").style.color="rgb(2, 173, 173)"; 
}

function contacts(){
    mainpage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="block";

   document.getElementsById("blog").style.color="black";
 document.getElementsById("home").style.color="black";
 document.getElementsById("shop").style.color="black";
 document.getElementsById("contact").style.color="black";
 document.getElementsById("about").style.color="black";
 document.getElementsById("contact").style.color="rgb(2, 173, 173)";
}
// cart

function show(img){
    let newImg = document.getElementsById("newImg");
    console.log(img);
    newImg.src=img.src;

    mainpage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
   blog.style.display="none";
   about.style.display="none";
   contact.style.display="none";
   document.querySelector(".cart").style.display="flex"
}


function addCart(){
    alert("Added To Cart");
    location.reload()
}