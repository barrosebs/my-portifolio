const animeScroll = () => {
  const item = document.querySelectorAll("[data-anime]");
  console.log(item);
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  console.log(windowTop);
  item.forEach((element) => {
    console.log(element);
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});
