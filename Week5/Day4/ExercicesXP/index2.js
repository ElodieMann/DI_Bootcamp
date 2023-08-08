let children = document.getElementById("animate");
let parent = document.getElementById("container");
let btn = document.querySelector("button");

let interval = 0;
let timer;

function anim() {
  interval += 1;
  children.style.transform = `translateX(${interval}px)`;
  console.log(interval);

  let wid = parent.clientWidth - children.clientWidth;
  if (interval === wid) {
    console.log(true);
    clearInterval(timer);
    return (children.style.transform = `translateX(0px)`);
  }
}

function myMove() {
  interval = 0;
  timer = setInterval(anim, 10);
}
