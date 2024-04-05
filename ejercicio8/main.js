document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    var color;

    if (scrollTop >= 0 && scrollTop < 500) {
      color = "red";
    } else if (scrollTop >= 501 && scrollTop < 1000) {
      color = "green";
    } else if (scrollTop >= 1001 && scrollTop < 1500) {
      color = "blue";
    } else if (scrollTop >= 1501 && scrollTop <= 2000) {
      color = "orange";
    }

    document.body.style.backgroundColor = color;
  });
});
