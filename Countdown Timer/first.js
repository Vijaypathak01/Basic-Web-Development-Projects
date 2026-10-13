let interval;

function startCountdown(){
    const input = document.getElementById('date').value;
    const result = document.getElementById('result');

    const targetTime = new Date(input).getTime();

    if (targetTime <= Date.now()) {
    result.textContent = "Please select a future date and time!";
    return;
    }

    //stop the prev countdown if one exist;
    clearInterval(interval);

    function updateCountdown(){
        let timer = targetTime - Date.now();

        if(timer<=0){
            result.textContent = "Countdown Finished!!";
            clearInterval(interval);
            return;
        }
        const day = Math.floor((timer) / (1000 * 60 * 60 * 24));
        timer %= 1000 * 60 * 60 * 24;

        const hour = Math.floor((timer) / (1000 * 60 * 60));
        timer %= 1000 * 60 * 60;

        const min = Math.floor((timer) / (1000 * 60));
        timer %= 1000 * 60;

        const sec = Math.floor((timer) / (1000));
        
        result.textContent = ` ${day}: Days ${hour}: Hour ${min}: Minute ${sec}: second`;
        
    }
    updateCountdown();

    interval = setInterval(updateCountdown,1000);
}
