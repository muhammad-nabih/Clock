const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let now = new Date();
  let hourDegree = now.getHours() * 30;
  // 360 / 12 = 30 
  let minuteDegree = now.getMinutes() * deg;
  // minuteDegree = 20 * 6 = 120 
  // 360 / 60 = 6
  let secondDegree = now.getSeconds() * deg;
  // 360 / 60 = 6 
console.log(hourDegree, minuteDegree, secondDegree);

  hr.style.transform = `rotateZ(${hourDegree + minuteDegree / 12}deg)`;
  
// 10 degree [minuteDegree/12] = تلت ساعة
//20 degree [minuteDegree/12] = ثلثي ساعة 
// 30 degree [minuteDegree/12] = ساعة 
  mn.style.transform = `rotateZ(${minuteDegree}deg)`;

  sc.style.transform = `rotateZ(${secondDegree}deg)`;
}, 1000);
