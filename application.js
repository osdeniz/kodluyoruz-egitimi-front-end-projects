let userName = prompt("Lütfen İsim Giriniz");
let userQuery = document.querySelector("#userQuery") 
userQuery.innerHTML=`Hoşgeldiniz ${userName.toUpperCase()}!`

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = date.getDay();
    
    if (session == 1) {
        session = "Pazartesi";
      } else if (session == 2) {
        session = "Salı";
      } else if (session == 3) {
        session = "Çarşamba";
      } else if (session == 4) {
        session = "Perşembe";
      } else if (session == 5) {
        session = "Cuma";
      } else if (session == 6) {
        session = "Cumartesi";
      } else if (session == 7) {
        session = "Pazar";
      }
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

function showHistory(){
    var date = new Date();
    var session = date.getDay();
    
    if (session == 1) {
        session = "Pazartesi";
      } else if (session == 2) {
        session = "Salı";
      } else if (session == 3) {
        session = "Çarşamba";
      } else if (session == 4) {
        session = "Perşembe";
      } else if (session == 5) {
        session = "Cuma";
      } else if (session == 6) {
        session = "Cumartesi";
      } else if (session == 7) {
        session = "Pazar";
      }

    document.getElementById("MyHistoryDisplay").innerHTML = session;
}

showTime();
showHistory();