 function ageCalculate(){
            let date = document.getElementById("dob").value;
           let currentDate = new Date();
           let birthDate = new Date(date)
           let age = currentDate.getFullYear() - birthDate.getFullYear();
           document.getElementById("result").innerText = age;
        }