function clicked() {
  let h1 = document.querySelector("h1");
  let ptag = document.querySelector("p");
  h1.setAttribute("class", "active");
  h1.style.backgroundColor = "yellow";
  ptag.innerHTML = h1.getAttribute("class");
}
