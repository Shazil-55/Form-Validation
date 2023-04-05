console.log("project 1");
 let name1 = document.getElementById('name1');
 let email = document.getElementById('email');
 let phone = document.getElementById('phone');
let nvalid =false;
let evalid =false;
let pvalid =false;


name1.addEventListener('blur', ()=>{
    console.log("name is blur");
    //validation
    let regex= /(^[A-Za-z\s]+$)/;
     let str = name1.value;
     console.log(regex,str);
     if (regex.test(str)){
        // console.log("it matched");//is-invalid
        name1.classList.remove('is-invalid')
        nvalid=true;
     }
     else{
        name1.classList.add('is-invalid')
        // console.log("no match");
        
     }
})


email.addEventListener('blur', ()=>{
    console.log("email is blur");
    //validation
    let regex= /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
    let str = email.value;
    console.log(regex,str);
    if (regex.test(str)){
       // console.log("it matched");//is-invalid
       email.classList.remove('is-invalid')
       evalid=true;

    }
    else{
       email.classList.add('is-invalid')
       // console.log("no match"phone
      
    }
})


phone.addEventListener('blur', ()=>{
    console.log("phone is blur");
    //validation
    let regex= /(^(92)([0-9]{10})+$)/;
    let str = phone.value;
    console.log(regex,str);
    if (regex.test(str)){
       // console.log("it matched");//is-invalid
       phone.classList.remove('is-invalid')
       pvalid=true;

    }
    else{
       phone.classList.add('is-invalid')
       // console.log("no match"email
       

    }
})

let submit=document.getElementById('submit');
submit.addEventListener('click',()=>{

if (pvalid && nvalid && evalid)
{
    alert("you submit the form ");
}
else{
    alert("Form can't be submitted due to missing elements  ");

}
})