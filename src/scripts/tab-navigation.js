// src/scripts/tab-navigation.js
window.addEventListener("load", () => {
    const botones = [
      { id: "experiencia", label: "Experiencia" },
      { id: "proyectos",  label: "Proyectos"   },
      { id: "sobre-mi",   label: "Sobre mí"    },
    ];
  
    let currentIndex = 0;
  
    const btn     = document.getElementById("nav-mobile-btn");
    const prevBtn = document.getElementById("nav-prev");
    const nextBtn = document.getElementById("nav-next");
  
    if (!btn || !prevBtn || !nextBtn) return;
  
    const updateMobileTab = () => {
      const current = botones[currentIndex];
      btn.dataset.tab = current.id;
      btn.querySelector(".btn-gmail-text").textContent = current.label;
  
      document.querySelectorAll(".tab-panel").forEach(panel => {
        panel.classList.add("hidden");
      });
  
      const target = document.getElementById(current.id);
      if (target) target.classList.remove("hidden");
    };
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + botones.length) % botones.length;
      updateMobileTab();
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % botones.length;
      updateMobileTab();
    });
  
    document.querySelectorAll(".nav-tab-button").forEach(el => {
      el.addEventListener("click", () => {
        const tabId = el.dataset.tab;
        if (!tabId) return;
  
        document.querySelectorAll(".tab-panel").forEach(panel => {
          panel.classList.add("hidden");
        });
  
        const target = document.getElementById(tabId);
        if (target) target.classList.remove("hidden");
      });
    });
  });
  