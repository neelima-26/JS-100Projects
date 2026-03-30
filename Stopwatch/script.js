let time = 0;
        let interval;
        function updateDisplay(){
            let hours = Math.floor(time / 3600);
            let minutes =  Math.floor((time / 3600)/60);
            let seconds = time % 60;
            hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            document.getElementById("timer").innerText = hours +":"+ minutes + ":" + seconds;
        } 
        function startWatch(){
            if(interval)return;
            interval = setInterval(()=>{
                time++;
                updateDisplay();
            },100);
        }
        function stopWatch(){
            clearInterval(interval);
            interval = null;
        }
        function reset(){
            clearInterval(interval);
            interval = null;

time = 0;
updateDisplay();
        }