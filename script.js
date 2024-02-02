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

let num1 = true;
let num2 = false;

let result = !(num1 && num2);

console.log(result);
