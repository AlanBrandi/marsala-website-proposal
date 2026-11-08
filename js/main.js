document.documentElement.classList.remove("no-js");
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const SCROLL_THRESHOLD = 24;

function setNavOpen(isOpen) {
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("is-open", isOpen);
  header.classList.toggle("is-open", isOpen);
}

function updateHeaderOnScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > SCROLL_THRESHOLD);
}

function selectTab(tabs, selectedTab) {
  tabs.forEach((tab) => {
    const isSelected = tab === selectedTab;
    tab.setAttribute("aria-selected", String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !isSelected;
  });
}

function initTabs(container) {
  const tabs = [...container.querySelectorAll('[role="tab"]')];
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tabs, tab));
    tab.addEventListener("keydown", (event) => {
      const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
      if (!step) return;
      const nextTab = tabs[(index + step + tabs.length) % tabs.length];
      selectTab(tabs, nextTab);
      nextTab.focus();
    });
  });
}

function initCarousel(container) {
  const track = container.querySelector("[data-carousel-track]");
  const previousButton = container.querySelector("[data-carousel-previous]");
  const nextButton = container.querySelector("[data-carousel-next]");
  const getSlideStep = () => track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
  const updateButtons = () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth - 1;
    previousButton.disabled = track.scrollLeft <= 1;
    nextButton.disabled = track.scrollLeft >= maxScrollLeft;
  };
  previousButton.addEventListener("click", () => track.scrollBy({ left: -getSlideStep() }));
  nextButton.addEventListener("click", () => track.scrollBy({ left: getSlideStep() }));
  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });
  elements.forEach((element) => observer.observe(element));
}

navToggle.addEventListener("click", () => setNavOpen(navToggle.getAttribute("aria-expanded") !== "true"));
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNavOpen(false);
});
window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
document.querySelectorAll("[data-tabs]").forEach(initTabs);
document.querySelectorAll("[data-carousel]").forEach(initCarousel);
document.querySelector("[data-year]").textContent = new Date().getFullYear();
updateHeaderOnScroll();
initReveal();
