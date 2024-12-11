// ---------------&& list-images &&-------------------------

function initSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  const listImages = slider.querySelector(".list-images");
  const imgs = slider.querySelectorAll(".list-images img");
  const btnLeft = slider.querySelector(".btn-left");
  const btnRight = slider.querySelector(".btn-right");
  const indexItems = slider.querySelectorAll(".index-item");

  let currentIndex = 0;

  const updateIndexItems = () => {
    indexItems.forEach((item, index) => {
      if (index === currentIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  const handleChangeSlide = () => {
    let width = imgs[0].offsetWidth;
    currentIndex = (currentIndex + 1) % imgs.length;
    listImages.style.transform = `translateX(${width * -currentIndex}px)`;
    updateIndexItems();
  };

  let handleEventChangeSlide = setInterval(handleChangeSlide, 3000);

  btnRight.addEventListener("click", () => {
    clearInterval(handleEventChangeSlide);
    handleChangeSlide();
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000);
  });

  btnLeft.addEventListener("click", () => {
    clearInterval(handleEventChangeSlide);
    let width = imgs[0].offsetWidth;
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    listImages.style.transform = `translateX(${width * -currentIndex}px)`;
    updateIndexItems();
    handleEventChangeSlide = setInterval(handleChangeSlide, 3000);
  });

  // Khởi tạo trạng thái ban đầu của các mục chỉ số
  updateIndexItems();
}

// Khởi tạo các slider
initSlider("slider1");
initSlider("slider2");

// User
function toggleTooltip() {
  var tooltip = document.querySelector("#small .tooltip");
  var overlay = document.querySelector(".overlay");
  tooltip.classList.toggle("show");
  overlay.classList.toggle("show");
}

function hideTooltip() {
  var tooltip = document.querySelector("#small .tooltip");
  var overlay = document.querySelector(".overlay");
  tooltip.classList.remove("show");
  overlay.classList.remove("show");
}

function ChonMau(obj, tt){
  var a = obj.id;
  var m;
  if(tt == "color") m = 4;
  else m = 3;
  for(var i=1; i<=m; i++){
    var tmp = tt+i;
    if(tmp == a) continue;
    // document.getElementById(tmp).style.backgroundColor = 'white';
    // document.getElementById(tmp).style.color = 'black';
    document.getElementById(tmp).className = 'variant';
  }
  // document.getElementById(a).style.backgroundColor = '#297be0b1';
  // document.getElementById(a).style.color = 'white';
  document.getElementById(a).className = 'variant active';
}
