// let element=document.getElementById("demo");
// element.innerText="DOM";
// console.log(element);

// let div=document.getElementById("test");
// div.innerText ="<h1>Header</h1>"
// div.innerHTML="<h1>Header</h1>"
// console.log(div);

//let ele=document.getElementByClassName("test");
//console.log(ele);
//console.log(Array.isArray(ele));
// ele[0].style.backgroundColor="yellow"

// let x=[...ele];
// console.log(x ,Array.isArray(x));
// x.map((element)=>{
//     element.style.backgroundColor="teal";
// })

// let ele=document.getElementByTagName("div");
// console.log(ele);

// let ele=document.querySelectorAll(".test");
//console.log(ele)
// [...ele].map(element=>{
//     console.log(element.innerText);
// })

// let bgColor = document.querySelectorAll(".bgColor");
// [...bgColor].map((element)=>{
//     element.addEventListener("mouseover",()=>{
//         element.stylebackgroundColor=element.innerText;
//     });

//     element.addEventListener("mouseleave",()=>{
//         element.stylebackgroundColor="transparent";
//     })
// })


// let x=document.createElement("h1");
// x.innerText="Dynamic creation of html element from JS";
// x.setAttribute("id","demo");
// console.log(x);

// document.body.appendChild(x);

// let image=document.createElement("img");
// image.src="./3606208.jpg";
// console.log(image);

// document.body.appendChild(image);

let mainEle=document.createElement("div");
mainEle.setAttribute("class","topBlock");
console.log(mainEle);

let topEle=document.createElement("div");
topEle.setAttribute("class","topBlock");

let image=document.createElement("img");
image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoF9f8Y4lwQeOnLijmMajma9CtCkOEs7MgSA&s";
image.width="300"
image.height="300"

let bottomEle=document.createElement("div");
bottomEle.setAttribute("class","bottomBlock");

let h1=document.createElement("h1");
h1.innerText="Heading";

let btn=document.createElement("button");
btn.innerText="View More";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image)
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);
document.body.appendChild(mainEle);