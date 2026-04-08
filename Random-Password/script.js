 const  input = document.getElementById("input");
     const btn = document.querySelector(".btn");
     const copied = document.querySelector("i");
     const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
     
        btn.addEventListener("click",function(){
            let password = "";

            for(let i=0; i<8; i++){
                let randomNumber = Math.floor(Math.random()*character.length);
                password += character[randomNumber];
 }
                input.value = password;
 })
                copied.addEventListener("click",function(){
                    navigator.clipboard.writeText(input.value);
                    alert(input.value)
               
           
        })