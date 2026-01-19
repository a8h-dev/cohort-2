// API ka data kaise show karate hain frontend pe (basic)
// waise JSON me hota hai API ka data and same array of objects jaisa dikhta hai

// Free API
// https://jsonplaceholder.typicode.com/
// https://picsum.photos/

// ChatGPT prompt to generate array of objects data:
// make an array of objects of 5 users with properties like fullname, image, profession, description, tags.  Use real images.

// What to do? :
// 1. Make an array of objects and name it users
// 2. Make a card in html
// 3. users par lagao forEach and print hello n times
// 4. make a variable sum and give it a value "" (empty string)
// 5. add on "hello" in sum and print it outside loop
// 6. add on card(html code) in sum print it too.
// 7. select parent (main) and put sum in its innerHTML
// 8. replace sample data with real data of array of objects

const users = [
  {
    fullname: "Aarav Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Frontend Developer",
    description:
      "UI-focused frontend developer who loves animations, clean layouts aur modern CSS.",
    tags: "JavaScript",
  },
  {
    fullname: "Sneha Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "UI/UX Designer",
    description:
      "Designs intuitive user experiences with strong focus on typography and color systems.",
    tags: "Figma",
  },
  {
    fullname: "Rohan Mehta",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    profession: "Backend Developer",
    description:
      "Backend engineer working with APIs, databases aur scalable server-side systems.",
    tags: "API",
  },
  {
    fullname: "Pooja Singh",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    profession: "Full Stack Developer",
    description:
      "Handles frontend aur backend dono, loves building complete products end-to-end.",
    tags: "FullStack",
  },
  {
    fullname: "Kunal Raj",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    profession: "Content Creator",
    description:
      "Creates tech content, tutorials aur coding reels for social media platforms.",
    tags: "Content",
  },
  {
    fullname: "Neha Kapoor",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    profession: "Product Manager",
    description:
      "Bridges the gap between business and tech, ensuring products solve real problems.",
    tags: "Strategy",
  },
  {
    fullname: "Aditya Malhotra",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    profession: "DevOps Engineer",
    description:
      "Automates deployments, manages cloud infrastructure aur ensures system reliability.",
    tags: "CI/CD",
  },
  {
    fullname: "Isha Gupta",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    profession: "Data Analyst",
    description:
      "Turns raw data into meaningful insights using analytics and visualization tools.",
    tags: "Python",
  },
];


let con = document.querySelector(".container");

let sum = ``;
users.forEach(function(elem){
    sum = sum + `<div class="card">
      <img
        src=${elem.image}
        alt="user"
        class="avatar"
      />

      <h2 class="name">${elem.fullname}</h2>
      <p class="profession">${elem.profession}</p>

      <p class="description">
        ${elem.description}
      </p>

      <div class="tags">
        <span>${elem.tags}</span>
      </div>
    </div>`;

    con.innerHTML = sum;
})