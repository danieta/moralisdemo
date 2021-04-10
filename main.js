Moralis.initialize("JUBYOOrKDNvxGgI8MIjp2GEudkVwaW3m91l4e58g"); // Application id from moralis.io. Spin up server and retrieve this value from server credentials
Moralis.serverURL = "https://0jzcboaeti5e.moralis.io:2053/server"; // Server url from moralis.io. Spin up server and retrieve this value from server credentials



async function login() {
    try {
        user = await Moralis.Web3.authenticate();
        console.log(user);
        alert("User logged in")
    } catch (error) {
        console.log(error);
    }
}

async function flip(side){
    alert(side);
}

document.getElementById("login_button").onclick = login; // execute login() when login button is clicked
document.getElementById("heads_button").onclick = function(){flip("heads")}; // execute flip() when login button is clicked. explanation of syntax at 8:30 in pt1
document.getElementById("tails_button").onclick = function(){flip("tails")};