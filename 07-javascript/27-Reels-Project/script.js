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
    isMuted: true,
    username: "rahul_codes",
    likeCount: 1240,
    isLiked: false,
    commentCount: 89,
    caption: "Late night coding hits different 💻🔥",
    video: "./reels/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 45,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "travelwithanya",
    likeCount: 9850,
    isLiked: true,
    commentCount: 412,
    caption: "Mountains > everything 🏔️✨",
    video: "./reels/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/44.jpg",
    shareCount: 233,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "fit_life_raj",
    likeCount: 4320,
    isLiked: true,
    commentCount: 156,
    caption: "No excuses. Just workout 💪",
    video: "./reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/65.jpg",
    shareCount: 98,
    isFollowed: true,
  },
  {
    isMuted: true,
    username: "foodie_diaries",
    likeCount: 12050,
    isLiked: false,
    commentCount: 540,
    caption: "Street food love ❤️🌮",
    video: "./reels/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 410,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "techwithsam",
    likeCount: 2150,
    isLiked: false,
    commentCount: 74,
    caption: "Frontend dev things 😌⚡",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/41.jpg",
    shareCount: 36,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "daily_vibes",
    likeCount: 6780,
    isLiked: true,
    commentCount: 298,
    caption: "Just vibing 🌈🎶",
    video: "./reels/video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/55.jpg",
    shareCount: 182,
    isFollowed: true,
  },
  {
    isMuted: true,
    username: "street_photog",
    likeCount: 8920,
    isLiked: false,
    commentCount: 367,
    caption: "Every street has a story 📸",
    video: "./reels/video7.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/19.jpg",
    shareCount: 255,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "music_mood",
    likeCount: 3560,
    isLiked: true,
    commentCount: 143,
    caption: "Headphones on, world off 🎧",
    video: "./reels/video8.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/29.jpg",
    shareCount: 90,
    isFollowed: true,
  },
  {
    isMuted: true,
    username: "minimal_life",
    likeCount: 1940,
    isLiked: false,
    commentCount: 61,
    caption: "Less stuff, more peace 🤍",
    video: "./reels/video9.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/8.jpg",
    shareCount: 28,
    isFollowed: false,
  },
  {
    isMuted: true,
    username: "funny_clips",
    likeCount: 15890,
    isLiked: true,
    commentCount: 812,
    caption: "Wait till the end 😂😂",
    video: "./reels/video10.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/73.jpg",
    shareCount: 640,
    isFollowed: false,
  },
];
let allReels = document.querySelector(".all-reels");

function addData() {
  let sum = "";
  reels.forEach(function (elem, idx) {
    // yeha liked aur follow ko same idx de diya hai although sabke liye alag alag hota hai. aise kaam nhi hota hai.
    sum += `<div class="reel">
            <video autoplay loop ${elem.isMuted ? "muted" : ""} src="${elem.video}"></video>
            <div class="mute" id="${idx}">
            ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'} 
            </div>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userprofile}"
                />
                <h4>${elem.username}</h4>
                <button id="${idx}" class="follow">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
              </div>
              <h3>
                ${elem.caption}
              </h3>
            </div>
            <div class="right">
              <div id="${idx}" class="like">
                <h4 class="like-icon icon">${elem.isLiked ? '<i class=" love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line">'}</i></h4>
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
  });
  allReels.innerHTML = sum;
}
addData();

allReels.addEventListener("click", function (dets) {
  // abb yeha pe jitna bar like unlike kr rhe hain pura array hi dobara chal rha hai isliye jhap jhup hora hai. Isko solve krne ke liye hi react hai taki sirf utna par jhap jhup ho jitna jruri hai.
  // if(!reels[dets.target.id].isLiked){
  //   reels[dets.target.id].likeCount++;
  //   reels[dets.target.id].isLiked = true;
  // } else{
  //   reels[dets.target.id].likeCount--;
  //   reels[dets.target.id].isLiked = false;
  // }

  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
    addData();
  }

  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
    addData();
  }

  if (dets.target.className == "mute") {
    if (!reels[dets.target.id].isMuted) {
      reels[dets.target.id].isMuted = true;
    } else {
      reels[dets.target.id].isMuted = false;
    }
    addData();
  }

});

// reels[dets.target.id] -> this is golden code

// waise toh ye easy hai but 2 chiz me problem ho sakti hai
// isLiked and isFollowed
// sol: use Ternary Operator
// condition ? expressionIfTrue : expressionIfFalse;

// -------------------------------------------
// 27 Reels Proect (Part-2)

// // CONCEPT OF ELEM & INDEX IN forEach:
// let arr = [10, 20, 30, 40];

// // yeha function ke andar ham elem ke alawa ek aur chiz pass kar sakte hain jo kaam krega index ka.
// // pehli chiz kaam kregi element ka, dusri kaam kregi index ka
// arr.forEach(function(elem, idx){
//   console.log(elem, idx);
// })

// Event Bubbling / Event Delegation


// Tips for improvement
// play pause (.play(), .pause())
// jis reel pe hu wahi sirf sound aaye baki sab muted.