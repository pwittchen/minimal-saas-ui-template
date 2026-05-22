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

  // ─── mobile drawer ──────────────────────────────────────────
  const menuToggle = document.querySelector(".menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.querySelector(".backdrop");
  const mobileMQ = window.matchMedia("(max-width: 720px)");

  function openDrawer() {
    sidebar.classList.add("is-open");
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add("is-visible"));
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    sidebar.classList.remove("is-open");
    backdrop.classList.remove("is-visible");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    setTimeout(() => {
      if (!backdrop.classList.contains("is-visible")) backdrop.hidden = true;
    }, 220);
  }

  if (menuToggle && sidebar && backdrop) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.contains("is-open") ? closeDrawer() : openDrawer();
    });
    backdrop.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && sidebar.classList.contains("is-open")) {
        closeDrawer();
      }
    });
    navRows.forEach((row) => {
      row.addEventListener("click", () => {
        if (mobileMQ.matches) closeDrawer();
      });
    });
    mobileMQ.addEventListener("change", (e) => {
      if (!e.matches) closeDrawer();
    });
  }

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

  // ─── theme toggle ───────────────────────────────────────────
  // Initial theme is applied by an inline <head> script in each
  // page to avoid a flash of the wrong theme before paint.
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.getAttribute("data-theme")
      || (prefersDark.matches ? "dark" : "light");
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (_) {}
  }

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  });

  // Follow the OS preference until the user makes an explicit choice.
  prefersDark.addEventListener("change", (e) => {
    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (_) {}
    if (!saved) setTheme(e.matches ? "dark" : "light");
  });
})();
