window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
    "#d48d2f",
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3",
    "#d48d2f",
    "#aaa49d"
  ];
  let count = 20;
  var click = 0;

  const playB = document.querySelectorAll(".play");
  const pauseB = document.querySelectorAll(".pause");

  //lets get going with the sound here
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      if (count === 20) {
        sounds[index].currentTime = 0;

        sounds[index].play();

        count = index;

        createBubbles(index);
        click++;
        playB[index].classList.add("fadeOut");
        pauseB[index].classList.add("fadeIn");
      } else {
        if (index === count && click % 2 === 1) {
          console.log("bang roi kia");
          sounds[index].pause();
          click++;
          //   playB[count].classList.add("fadeOut");
          playB[index].classList.add("fadeIn");
          pauseB[index].classList.remove("fadeIn");
        } else if (index === count && click % 2 === 0) {
          console.log(count);
          console.log(index);
          sounds[index].play();

          count = index;

          createBubbles(index);
          click = 1;
          playB[index].classList.remove("fadeIn");
          pauseB[index].classList.add("fadeIn");
        } else {
          sounds[index].currentTime = 0;
          sounds[count].pause();
          sounds[index].play();
          console.log("count #1 " + count);
          console.log("count #2 " + index);

          createBubbles(index);
          click = 1;
          playB[count].classList.add("fadeIn");
          pauseB[count].classList.remove("fadeIn");
          playB[index].classList.add("fadeOut");
          pauseB[index].classList.add("fadeIn");
          count = index;
        }
      }
      console.log("click la" + click);
    });
  });
  //create a function that makes bubbles
  const createBubbles = index => {
    const bubble = document.createElement("div");
    // const img = document.createElement("img");
    // img.style.width = "80px";
    // img.src = "asset/image1.jpg";
    // bubble.classList.add(".border");
    // bubble.appendChild(img);
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
