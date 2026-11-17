(() => {
  const pages = [...document.querySelectorAll("[data-page]")];
  const pageLinks = [...document.querySelectorAll("[data-page-link]")];

  function showPage(name) {
    const target = pages.find(page => page.dataset.page === name) || pages[0];
    pages.forEach(page => {
      const active = page === target;
      page.hidden = !active;
      page.classList.toggle("active-page", active);
    });
    pageLinks.forEach(link => {
      const active = link.dataset.pageLink === target.dataset.page;
      link.classList.toggle("active", active);
      if (active && link.classList.contains("nav-link")) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    if (target.id) history.replaceState(null, "", `#${target.id}`);
  }

  pageLinks.forEach(link => {
    link.addEventListener("click", event => {
      const name = link.dataset.pageLink;
      if (!name) return;
      event.preventDefault();
      showPage(name);
    });
  });

  const initial = location.hash === "#about" ? "about" : "home";
  showPage(initial);
})();
