window.addEventListener("load", Init);

function Init() {
    const registerBtn = document.querySelector(".registerBtn");
    registerBtn.addEventListener("click", SingIn);
}

function SingIn(event) {
    event.preventDefault();
    const login = document.querySelector('.login').value;
    const password = document.querySelector('.password').value;
    Request(login, password);
}

function Request(login, password) {
   
    const URL = "http://localhost:3000/login"
    var req = new XMLHttpRequest();

    var params = `login=${login}&password=${password}`;

    req.open('POST', URL, true); 
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    req.onreadystatechange = function (aEvt) {
      if (req.readyState == 4) {
         if(req.status == 200)
            ShowMassage(req.responseText)
         else
          console.log("Error loading page\n");
      }
    };
    req.send(params); 
}

function ShowMassage(message){
    console.log(message);
    let msg = document.querySelector(".msg");
    msg.innerHTML = message;
}