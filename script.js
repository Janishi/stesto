function clicked() {
  let h1 = document.querySelector("h1");
  let ptag = document.querySelector("p");
  h1.setAttribute("class", "active");
  h1.style.backgroundColor = "yellow";
  ptag.innerHTML = h1.getAttribute("class");
}

const foo = () => {
  let input = document.getElementById("myInput").value;
  let paragraph = document.getElementById("input_p");
  paragraph.textContent = input;
};

// let array = [1, 2, 3, 4, 5];
// let result = array.push(6);
// for (let item of array) {
//   console.log((item = item + 1) * 2);
// }

// let counter = 5;
// while (counter < 10) {
//   counter++;
//   console.log(counter);
// }

let array1 = [1, 2, 3, 4, 5, 6];
let count = 0;

for (let item of array1) {
  count += item;
}

console.log(count);
