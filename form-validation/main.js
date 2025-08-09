document.querySelector("#signUp").addEventListener('click',(event)=>{
    event.preventDefault()
   const name =document.querySelector('#name').value.trim()
   const email =document.querySelector('#email').value.trim()
   const mobile =document.querySelector('#mobile').value.trim()
   const password =document.querySelector('#password').value.trim()
   console.log(name);
   console.log(email);
   console.log(password);
   console.log(mobile);

   if(name ==""){
    alert("plase enter your name") 
   }
      if(email ==""){
    alert("plase enter your name")
   }
})
