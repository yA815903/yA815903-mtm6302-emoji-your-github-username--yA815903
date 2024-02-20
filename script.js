emojiList.forEach(row => {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('emoji-row');
    row.forEach(emoji => {
        const emojiBox = document.createElement('div');
        emojiBox.classList.add('emoji-box');
        emojiBox.innerHTML = `<span class="emoji">${emoji}</span><br><code>${emoji.codePointAt(0)}</code>`;
        rowContainer.appendChild(emojiBox);
    });
    emojiContainer.appendChild(rowContainer);
});
