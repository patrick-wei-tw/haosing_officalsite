const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const staticForm = document.querySelector("[data-static-form]");

if (staticForm) {
  staticForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = staticForm.querySelector(".form-note");
    if (note) {
      note.textContent = "第一階段表單尚未串接後端，請先使用 Email 或電話聯絡昊星科技。";
    }
  });
}
