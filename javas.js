const circle1 = document.getElementsByClassName("circle1")[0];
const circle2 = document.getElementsByClassName("circle2")[0];
const circle3 = document.getElementsByClassName("circle3")[0];
const btn_id = document.getElementById("btn_id");
function getRandomNo(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let currentRotatedDegree = 0

btn_id.onclick = function() {
  const randomCount = getRandomNo(4, 8);
  const randomDegree = getRandomNo(20, 361);
 const randomTime = getRandomNo(1.5, 4)
  // console.log("ffffffffff", circle1.style)
  circle1.style.transition = `all ${randomTime}s cubic-bezier(.57, .96, .25, .93)`;
  circle2.style.transition = `all ${randomTime}s cubic-bezier(.57, .96, .25, .93)`;
  circle3.style.transition = `all ${randomTime}s cubic-bezier(.57, .96, .25, .93)`;

  circle1.style.transform = `rotate(${currentRotatedDegree + (randomCount * randomDegree)}deg)`;
  circle2.style.transform = `rotate(${currentRotatedDegree + (randomCount * randomDegree)}deg)`;

  circle3.style.transform = `rotate(${currentRotatedDegree + (randomCount * randomDegree)}deg)`;
  currentRotatedDegree = (randomCount * randomDegree)
};
