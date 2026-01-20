// Handle querySelectorAll()
// nodeList
// childNodes

// let allElems = document.querySelectorAll("div");
// allElems.forEach(function(elem){
//     elem.childNodes[3].addEventListener("click", function(){
//         console.log("clicked");
//     })
// })

// let allElems = document.querySelectorAll("button");
// allElems.forEach(function(elem){
//     elem.addEventListener("click", function(){
//         if(elem.innerHTML == "Add Friend"){
//             elem.innerHTML = "Remove";
//             elem.style.backgroundColor = "red";
//         }else{
//             elem.innerHTML = "Add Friend";
//             elem.style.backgroundColor = "";
//         }
//     })
// })


// -----------------------------------------------

// var arr = [10, 20, 30, 40];

// // forEach returns nothing
// arr.forEach(function(elem){
//     console.log("hello", elem);
// })

// // map returns a new array
// let newArr = arr.map(function(elem){
//     return elem;
// })
// console.log(newArr);


// ----------------------------------
// Reel Project

// Event Bubbling
// Snapping

// chatGPT prompt:
// Create an array of objects of 10 reels, they will contain userame, likeCount, isLiked, commentCount, caption, video, userprofile, shareCount, isFollowed
// keep the video property empty and data must be fine

// Free Videos:
// https://www.pexels.com/videos/

// JavaScript
const reels = [
  {
    username: "rahul_codes",
    likeCount: 1240,
    isLiked: false,
    commentCount: 89,
    caption: "Late night coding hits different 💻🔥",
    video: "./reels/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 45,
    isFollowed: false
  },
  {
    username: "travelwithanya",
    likeCount: 9850,
    isLiked: true,
    commentCount: 412,
    caption: "Mountains > everything 🏔️✨",
    video: "./reels/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 233,
    isFollowed: false
  },
  {
    username: "fit_life_raj",
    likeCount: 4320,
    isLiked: true,
    commentCount: 156,
    caption: "No excuses. Just workout 💪",
    video: "./reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/65.jpg",
    shareCount: 98,
    isFollowed: true
  },
  {
    username: "foodie_diaries",
    likeCount: 12050,
    isLiked: false,
    commentCount: 540,
    caption: "Street food love ❤️🌮",
    video: "./reels/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 410,
    isFollowed: false
  },
  {
    username: "techwithsam",
    likeCount: 2150,
    isLiked: false,
    commentCount: 74,
    caption: "Frontend dev things 😌⚡",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/41.jpg",
    shareCount: 36,
    isFollowed: false
  },
  {
    username: "daily_vibes",
    likeCount: 6780,
    isLiked: true,
    commentCount: 298,
    caption: "Just vibing 🌈🎶",
    video: "./reels/video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/55.jpg",
    shareCount: 182,
    isFollowed: true
  },
  {
    username: "street_photog",
    likeCount: 8920,
    isLiked: false,
    commentCount: 367,
    caption: "Every street has a story 📸",
    video: "./reels/video7.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/19.jpg",
    shareCount: 255,
    isFollowed: false
  },
  {
    username: "music_mood",
    likeCount: 3560,
    isLiked: true,
    commentCount: 143,
    caption: "Headphones on, world off 🎧",
    video: "./reels/video8.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/29.jpg",
    shareCount: 90,
    isFollowed: true
  },
  {
    username: "minimal_life",
    likeCount: 1940,
    isLiked: false,
    commentCount: 61,
    caption: "Less stuff, more peace 🤍",
    video: "./reels/video9.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/8.jpg",
    shareCount: 28,
    isFollowed: false
  },
  {
    username: "funny_clips",
    likeCount: 15890,
    isLiked: true,
    commentCount: 812,
    caption: "Wait till the end 😂😂",
    video: "./reels/video10.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/73.jpg",
    shareCount: 640,
    isFollowed: false
  }
];

let sum = "";
reels.forEach(function(elem){
    sum += `<div class="reel">
            <video autoplay loop muted src="${elem.video}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userprofile}"
                />
                <h4>${elem.username}</h4>
                <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
              </div>
              <h3>
                ${elem.caption}
              </h3>
            </div>
            <div class="right">
              <div class="like">
                <h4 class="like-icon icon">${elem.isLiked?'<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line">'}</i></h4>
                <h6>${elem.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;
})

let allReels = document.querySelector(".all-reels");
allReels.innerHTML = sum;


// waise toh ye easy hai but 2 chiz me problem ho sakti hai
// isLiked and isFollowed
// sol: use Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse;