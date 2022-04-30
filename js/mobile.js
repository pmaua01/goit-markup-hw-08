(() => {
  const refs = {
    openMobilelBtn: document.querySelector("[data-mobile-open]"),
    closeMobilelBtn: document.querySelector("[data-mobile-close]"),
    mobile: document.querySelector("[data-mobile]"),
  };

  refs.openMobilelBtn.addEventListener("click", toggleMobile);
  refs.closeMobilelBtn.addEventListener("click", toggleMobile);

  function toggleMobile() {
    refs.mobile.classList.toggle("is-hidden");
  }
})();