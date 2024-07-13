let toggle = document.querySelector(".modeToggle");

toggle.addEventListener("change", () => {
  let bg = document.querySelector(".main");
  let txt = document.querySelector('h1')
  if (toggle.checked) {
    bg.classList.add("dark-mode");
    txt.textContent = 'Dark mode'
  } else {
    bg.classList.remove("dark-mode");
    txt.textContent = 'Light mode'
  }
});
