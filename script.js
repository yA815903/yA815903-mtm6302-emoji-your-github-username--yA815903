// script.js
function showEmojiCode(event) {
  const emojiCode = event.target.querySelector('code').textContent;
  alert(`Emoji code: ${emojiCode}`);
}