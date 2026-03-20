function calculate(){
            let amount = document.getElementById("price").value;
            let tip = document.getElementById("tip").value;

        let price = (amount*tip)/100;
        
        let total = Number(amount) + Number(price) ;
        document.getElementById("result").innerHTML = total.toFixed(2);

        }