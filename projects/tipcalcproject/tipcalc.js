function calcTip () {
    let billAmount = document.getElementById('billAmount').value;
    let serviceSelect = document.getElementById('serviceSelect').value;
    let numOfPeople = document.getElementById('numOfPeople').value;


    //input
    if (billAmount == 0) {
        alert("Please enter a valid amount")
        return;
    }
    if (numOfPeople === "" || numOfPeople <= 1) {
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }
    var total = (billAmount * serviceSelect) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').innerHTML = total;
}
document.getElementById('each').style.display = "none";
document.getElementById('totalTip').style.display = "none";

document.getElementById('calculate').onclick = function () {
    chaching();
    calcTip();
}; 

function chaching () {
    var audio = new Audio('chaching.wav')
    audio.play();
}