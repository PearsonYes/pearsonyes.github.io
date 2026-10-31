const customEmojis = {
  ":grumpychugou:": "emojies/grumpychugou.png",
  ":hetaolove:": "emojies/hetaolove.png",
  ":hetapeak:": "emojies/hetapeak.png",
  ":moji:": "emojies/moji.png",
  ":oushisibu:": "emojies/oushisibuqilin.png",
  ":shanque:": "emojies/shanque.png",
  ":sibuhappy:": "emojies/sibuhappy.png"
};

const p = document.getElementById("my-paragraph");
const pattern = new RegExp(Object.keys(customEmojis).join("|"), "g");

// Replace the text content with parsed HTML
p.innerHTML = p.innerHTML.replace(pattern, (match) => {
  return `<img src="${customEmojis[match]}" alt="${match}" class="custom-emoji" />`;
});