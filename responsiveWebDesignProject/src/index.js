var root = document.documentElement;

if ("textShadow" in root.style) {
  root.classList.add("textshadow");
} else {
  root.classList.add("no-textshadow");
}
