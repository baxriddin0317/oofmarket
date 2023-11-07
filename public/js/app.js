const sidebarBtns = document.querySelectorAll(".sidebar-btn");
const sidebar = document.querySelector("#sidebar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");

sidebarBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const svgIcon = btn.querySelectorAll("svg");
    document.body.classList.toggle("overflow-hidden");
    sidebar.classList.toggle("hidden");
    sidebarOverlay.classList.toggle("hidden");

    if (e.currentTarget.classList.contains("sidebar-overlay")) {
      const svgs = sidebarBtns[1].querySelectorAll("svg");
      svgs[0].classList.toggle("hidden");
      svgs[1].classList.toggle("hidden");
    } else {
      svgIcon[0].classList.toggle("hidden");
      svgIcon[1].classList.toggle("hidden");
    }
  })
);

// CUSTOM SELECT DROPDWON
const selectedOptions = document.querySelectorAll(".selected");

selectedOptions.forEach((selected) => {
  const selectedList = selected.previousElementSibling;
  const options = selectedList.querySelectorAll("li");
  const selectedSpan = selected.querySelector("span");

  selected.addEventListener("click", (e) => {
    selectedList.classList.toggle("active");
    selected.children[1].classList.add("-rotate-180");
  });

  options.forEach((option) =>
    option.addEventListener("click", (e) => {
      selectedSpan.innerHTML = e.target.textContent.trim();
      selected.children[1].classList.remove("-rotate-180");
      selectedList.classList.remove("active");
    })
  );
});

// More Button
const btnMore = document.querySelector(".btn-more");
const contentMore = document.querySelector(".content-more");

btnMore.addEventListener("click", (e) => {
  contentMore.classList.toggle("hidden");
});

window.onclick = (e) => {
  if (
    !e.target.classList.contains("content-more") &&
    !e.target.classList.contains("btn-more")
  ) {
    contentMore.classList.add("hidden");
  }
};

// slide
const rangeInput = document.querySelectorAll(".range-input input"),
// priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1000;

// priceInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minPrice = parseInt(priceInput[0].value),
//         maxPrice = parseInt(priceInput[1].value);
        
//         if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
//             if(e.target.className === "input-min"){
//                 rangeInput[0].value = minPrice;
//                 range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
//             }else{
//                 rangeInput[1].value = maxPrice;
//                 range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//             }
//         }
//     });
// });

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";  
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});