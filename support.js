
(() => {
  const supportHTML = `
    <section id="kofi-support"
      class="mx-auto max-w-4xl px-4 py-8 w-full">
      <div class="rounded-3xl border border-amber-200
        bg-gradient-to-r from-amber-50 via-orange-50 to-sky-50
        p-6 sm:p-8 text-center shadow-sm">

        <div class="text-2xl mb-2" aria-hidden="true">☕ ✨</div>

        <h2 id="kofi-title"
          class="text-xl sm:text-2xl font-black text-amber-900 mb-2">
          Ti va di supportare il progetto?
        </h2>

        <p id="kofi-description"
          class="text-sm sm:text-base text-gray-600 max-w-lg mx-auto mb-5">
          Se ti piace questo piccolo progetto fan-made, puoi sostenermi
          su Ko-fi! Ogni supporto mi aiuta a continuare a lavorarci. ♡
        </p>

        <a href="https://ko-fi.com/pearsoncool"
          target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2
          rounded-full bg-[#f5e6cf] hover:bg-[#ead3b0]
          border border-amber-200 px-6 py-3 text-amber-950
          font-bold text-sm transition-all hover:-translate-y-0.5
          shadow-sm">
          <img src="kofi_symbol.png"
            alt="" class="w-6 h-6 object-contain">
          <span id="kofi-button-text">Supportami su Ko-fi</span>
          <span aria-hidden="true">♡</span>
        </a>

        <p class="mt-4 text-xs text-amber-800/70">
          Made with love for the YouShouYan fandom ♡
        </p>
      </div>
    </section>
  `;

  const translations = {
    it: {
      title: "Ti va di supportare il progetto?",
      description:
        "Se ti piace questo piccolo progetto fan-made, puoi sostenermi su Ko-fi! Ogni supporto mi aiuta a continuare a lavorarci. ♡",
      button: "Supportami su Ko-fi"
    },
    en: {
      title: "Enjoying the project?",
      description:
        "If you enjoy this little fan-made project, you can support me on Ko-fi! Every contribution helps me keep working on it. ♡",
      button: "Support me on Ko-fi"
    }
  };

  function updateSupportLanguage(lang) {
    const text = translations[lang] || translations.it;

    document.getElementById("kofi-title").textContent = text.title;
    document.getElementById("kofi-description").textContent =
      text.description;
    document.getElementById("kofi-button-text").textContent =
      text.button;
  }

  function initSupport() {
    if (document.getElementById("kofi-support")) return;

    const footer = document.querySelector("footer");
    if (!footer) return;

    footer.insertAdjacentHTML("beforebegin", supportHTML);

    const selector = document.getElementById("globalLangSelect");

    updateSupportLanguage(
      selector?.value || localStorage.getItem("ysy_lang") || "it"
    );

    selector?.addEventListener("change", event => {
      updateSupportLanguage(event.target.value);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSupport);
  } else {
    initSupport();
  }
})();
