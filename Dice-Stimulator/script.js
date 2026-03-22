 const dice = document.getElementById("dice");
const btn = document.getElementById("rollBtn");

btn.addEventListener("click", () => {
    let count = 0;

    const interval = setInterval(() => {
        const random = Math.floor(Math.random() * 6) + 1;
        dice.innerHTML = "&#" + (9855 + random) + ";";
        count++;

       
        if (count > 10) {
            clearInterval(interval);

           
            const final = Math.floor(Math.random() * 6) + 1;
            dice.innerHTML = "&#" + (9855 + final) + ";";
        }
        document.getElementById("result").innerText ="Roll :"+final;
    }, 100); 
});