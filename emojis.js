const customEmojis = {
  ":grumpychugou:": "emojis/grumpychugou.png",
  ":hetaolove:": "emojis/hetaolove.png",
  ":hetapeak:": "emojis/hetapeak.png",
  ":moji:": "emojis/moji.png",
  ":oushisibu:": "emojis/oushisibuqilin.png",
  ":shanque:": "emojis/shanque.png",
  ":sibuhappy:": "emojis/sibuhappy.png"
};

function renderCustomEmojis() {
  const p = document.getElementById("my-paragraph");
  if (!p) return;

  const pattern = new RegExp(Object.keys(customEmojis).join("|"), "g");

  // Sostituisce i shortcode con i tag immagine
  p.innerHTML = p.innerHTML.replace(pattern, (match) => {
    return `<img src="${customEmojis[match]}" alt="${match}" class="custom-emoji" />`;
  });
}

// Esegui la funzione all'avvio
document.addEventListener("DOMContentLoaded", renderCustomEmojis);