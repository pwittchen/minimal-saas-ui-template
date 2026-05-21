// Minimal interactions for the template.
// Keep this file small — only behaviors that need JS belong here.

(function () {
  "use strict";

  // ─── active nav row ─────────────────────────────────────────
  const navRows = document.querySelectorAll(".sidebar__nav .nav-row");
  navRows.forEach((row) => {
    row.addEventListener("click", (e) => {
      e.preventDefault();
      navRows.forEach((r) => {
        r.classList.remove("is-active");
        r.removeAttribute("aria-current");
      });
      row.classList.add("is-active");
      row.setAttribute("aria-current", "page");
    });
  });

  // ─── ⌘K / Ctrl-K focuses search ─────────────────────────────
  const searchInput = document.querySelector(".search input");
  if (searchInput) {
    document.addEventListener("keydown", (e) => {
      const isModK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isModK) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  // ─── sign-out stub ──────────────────────────────────────────
  const signOut = document.getElementById("signOut");
  if (signOut) {
    signOut.addEventListener("click", (e) => {
      e.preventDefault();
      // Replace with real auth logout call.
      console.log("[template] sign-out clicked");
    });
  }

  // ─── tabs: single-active toggle ─────────────────────────────
  document.querySelectorAll(".tabs").forEach((group) => {
    const tabs = group.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");
      });
    });
  });

  // ─── segmented control ──────────────────────────────────────
  document.querySelectorAll(".segmented").forEach((group) => {
    const btns = group.querySelectorAll(".segmented__btn");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
      });
    });
  });

  // ─── alert dismiss ──────────────────────────────────────────
  document.querySelectorAll(".alert__close").forEach((btn) => {
    btn.addEventListener("click", () => {
      const alert = btn.closest(".alert");
      if (alert) alert.remove();
    });
  });
})();
