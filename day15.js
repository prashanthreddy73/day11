// let form=document.querySelector("form");
// let username = document.getElementById("uName");

// let password = document.getElementById("uPass");

// let gen = document.getElementsByName("gender");
// // console.log(gen);

form.addEventListener("submit",event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})

let password=document.getElementById("uPasss");
let check=document.getElementById("check");
let show=document.getElementById("show");
let gen=document.getElementsByName("gender");
check.addEventListener("click",event=>{
    if(event.target.checked===true){
        password.setAttribute("type","text");
        show.innerText="hide password";
    }else{
        password.setAttribute("type","password");
        
    }
})
 form.addEventListener("submit",event=>{
    event.preventDefault();
    let un= username.value;
    let up = password.value;
    // console.log(un , up);
    let gender = "";
   
   for(let i=0;i<=gen.length-1;i++){
    if(gen[i].checked == true){
        // console.log("true" , gen[i].value);
        gender += gen[i].value;
    }
   }
//    console.log(ele);
let userDetails={
    un,up,gender
};
console.log(userDetails);
})
 