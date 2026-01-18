const iplTeams = [
  {
    team: "CSK",
    primary: "yellow",
    secondary: "blue",
    fullName: "Chennai Super Kings",
    trophies: 5,
    caption: "Thala for a reason"
  },
  {
    team: "MI",
    primary: "blue",
    secondary: "gold",
    fullName: "Mumbai Indians",
    trophies: 4,
    caption: "Hitman legacy"
  },
  {
    team: "RCB",
    primary: "red",
    secondary: "black",
    fullName: "Royal Challengers Bangalore",
    trophies: 7,
    caption: "Ee sala cup namde"
  },
  {
    team: "KKR",
    primary: "purple",
    secondary: "gold",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    caption: "Korbo lorbo jeetbo"
  },
  {
    team: "RR",
    primary: "pink",
    secondary: "blue",
    fullName: "Rajasthan Royals",
    trophies: 2,
    caption: "Original champions"
  },
  {
    team: "SRH",
    primary: "orange",
    secondary: "black",
    fullName: "Sunrisers Hyderabad",
    trophies: 8,
    caption: "Rise up to every challenge"
  },
  {
    team: "DC",
    primary: "blue",
    secondary: "red",
    fullName: "Delhi Capitals",
    trophies: 3,
    caption: "This is new Delhi"
  },
  {
    team: "PBKS",
    primary: "red",
    secondary: "silver",
    fullName: "Punjab Kings",
    trophies: 6,
    caption: "Always entertaining"
  },
  {
    team: "LSG",
    primary: "teal",
    secondary: "orange",
    fullName: "Lucknow Super Giants",
    trophies: 7,
    caption: "Nayi team naya swag"
  },
  {
    team: "GT",
    primary: "darkblue",
    secondary: "gold",
    fullName: "Gujarat Titans",
    trophies: 8,
    caption: "Instant dominance"
  }
];

let team = document.querySelector(".team");
let fullName = document.querySelector(".fullName");
let trophies = document.querySelector(".trophies");
let caption = document.querySelector(".caption");
let btn = document.querySelector("button");

let main = document.querySelector("main");
let div = document.querySelector("div");

btn.addEventListener("click", function(){
    let num = Math.floor(Math.random()*iplTeams.length);

    team.innerHTML = iplTeams[num].team;
    fullName.innerHTML = iplTeams[num].fullName;
    trophies.innerHTML = iplTeams[num].trophies;
    caption.innerHTML = iplTeams[num].caption;

    main.style.backgroundColor = iplTeams[num].primary;
    div.style.backgroundColor = iplTeams[num].secondary;
})