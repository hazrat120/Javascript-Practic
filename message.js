// console.log("Hazrat Ali");
// export let H = 10;
// export let A = 20;
// console.log("H * A: " + H * A);
// const name = "Hazrat";
// const age = 23;

// const width = document.querySelector(".width");
// const height = document.querySelector(".height");

// width.innerHTML = "Window inner width is:" + window.innerWidth;
// height.innerHTML = "Window inner height is: " + window.innerHeight;

// let myWindow;
// function openWindow() {
//   myWindow = window.open("https://google.com");
// }

// function closeWindow() {
//   myWindow.close();
// }

// let myWindow;

// function openWindow() {
//   myWindow = window.open("https://google.com", "", "width=200, height=100");
// }

// function closeWindow() {
//   myWindow.close();
// }

// function myFunction() {
//   var myWindow = window.open("", "MsgWindow", "width= 200, height=100");
//   myWindow.document.write(
//     "<p>This is a 'MsgWindow'. I am 200px wide and 100px tall!</p> "
//   );
// }

// function myFunction() {
//   var myWindow = window.open("", "_self");
//   myWindow.document.write("<p>I replaced the current window.</p>");
// }

// function myFunction() {
//   window.open(
//     "https://www.w3schools.com",
//     "_blank",
//     "toolbar= yes,scrollbars=yes,resizable=yes, top=500, width=400, height=400"
//   );
// }

// function myFunction() {
//   window.open(
//     "https://google.com",
//     "_blank",
//     "toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=400, height=400"
//   );
// }

// function myFunction() {
//   const myWindow = window.open("", "", "width=300, height=300");
//   myWindow.opener.document.querySelector("#demo").innerHTML = "Hello!";
// }

// let myWindow;

// function openWin() {
//   myWindow = window.open("", "", "width=400, height=200");
// }

// function moveWin() {
//   myWindow.moveTo(500, 100);
// }

// let myWindow;

// function openWin() {
//   myWindow = window.open("https://google.com", "", "width=400, height=400");
// }

// function moveWinTo() {
//   myWindow.moveTo(150, 150);
// }

// function moveWinBy() {
//   myWindow.moveBy(75, 75);
// }

// document.querySelector("#demo").innerHTML = "Screen width is " + screen.width;

// document.querySelector("#demo").innerHTML = "Screen Height: " + screen.height;

// document.querySelector("#demo").innerHTML =
//   "Available Screen Width: " + screen.availWidth;

// document.querySelector("#demo").innerHTML =
//   "Available Screen Height: " + screen.availHeight;

// document.querySelector("#demo").innerHTML =
//   "Screen Color Depth: " + screen.colorDepth;

// document.querySelector("#demo").innerHTML =
//   "Screen Pixel Depth: " + screen.pixelDepth;

// document.querySelector("#demo").innerHTML =
//   "Page Location is: " + window.location.href;

// document.querySelector("#demo1").innerHTML =
//   "Page hostname is: " + window.location.hostname;

// document.querySelector("#demo2").innerHTML =
//   "Page path is " + window.location.pathname;

// document.querySelector("#demo3").innerHTML =
//   "Page protocol is: " + window.location.protocol;

// document.querySelector("#demo4").innerHTML =
//   "Port number is: " + window.location.port;

// function newDoc() {
//   window.location.assign("https://www.google.com");
// }

// function newDoc() {
//   window.location.assign("https://www.google.com");
// }

// document.querySelector("#demo").innerHTML = "History is: " + window.history;

// function newDoc() {
//   window.history.back();
// }

// const confirms = document.querySelector(".confirm");
// const prompt = document.querySelector(".prompt");

// function showAlert() {
//   window.alert("Hello World!");
// }

// function showconfarm() {
//   let txt;
//   if (window.confirm("Hello Mr.Ali")) {
//     txt = "You pressed ok!";
//   } else {
//     txt = "You pressed cancel!";
//   }
//   confirm.innerHTML = txt;
// }

// function showPrompt() {
//   let txt;
//   let person = window.prompt("Enter your name: ", "Write");

//   if (person === null || person === "") {
//     txt = "User cancleed the prompt!";
//   } else {
//     txt = "Hello " + person + "! How are you?";
//   }

//   prompt.innerHTML = txt;
// }

// function showconfarm() {
//   let txt;
//   if (confirm("Press a button!")) {
//     txt = "You press Ok!";
//   } else {
//     txt = "You pressed Cancle!";
//   }
//   confirms.innerHTML = txt;
// }

// function showconfarm() {
//   let txt;
//   if (confirm("Press a Button!")) {
//     txt = "You press OK!";
//   } else {
//     txt = "You pressed Cancle!";
//   }
//   confirms.innerHTML = txt;
// }

// const timeouts = document.querySelector(".timeout");

// const intervals = document.querySelector(".interval");

// let timeoutInstance;
// let instervalInstance;

// function startTimeout() {
//   timeoutInstance = setTimeout(function () {
//     timeouts.innerHTML = "3 seconds over!";
//   }, 3000);
// }

// function stopTimeout() {
//   clearTimeout(timeoutInstance);
// }

// function startInterval() {
//   instervalInstance = setInterval(function () {
//     intervals.innerHTML = new Date().toLocaleTimeString();
//   }, 1000);
// }

// function stopInterval() {
//   clearInterval(instervalInstance);
// }

// setInterval(myTime, 1000);

// function myTime() {
//   const d = new Date();
//   document.querySelector(".demo1").innerHTML = d.toLocaleTimeString();
// }

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();

//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let ca = document.cookie.split(";");

//   let c;
//   for (let i = 0; i < ca.length; i++) {
//     c = ca[i].trim();
//   }
//   console.log(c);
//   if (c.indexOf(name) === 0) {
//     return c.substring(name.length);
//   }

//   return "";
// }

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "Expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

setCookie();
