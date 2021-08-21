export const moveScrollToId = (id) => {
  let target = document.querySelector(id);
  if (target) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: target.offsetTop,
    });
  }
};
