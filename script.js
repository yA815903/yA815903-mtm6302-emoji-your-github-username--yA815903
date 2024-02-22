document.addEventListener('DOMContentLoaded', function() {
    const emojiContainer = document.querySelector('.emoji-container');
    const emojis = [
        { decimal: 129409, hexadecimal: '&#129409;' },
        { decimal: 128507, hexadecimal: '&#128507;' },
        { decimal: 129398, hexadecimal: '&#129398;' },
        { decimal: 128520, hexadecimal: '&#128520;' },
        { decimal: 128514, hexadecimal: '&#128514;' },
        { decimal: 128526, hexadecimal: '&#128526;' },
        { decimal: 128531, hexadecimal: '&#128531;' },
        { decimal: 128060, hexadecimal: '&#128060;' },
        { decimal: 128006, hexadecimal: '&#128006;' },
        { decimal: 128009, hexadecimal: '&#128009;' },
        { decimal: 128024, hexadecimal: '&#128024;' },
        { decimal: 129421, hexadecimal: '&#129421;' },
    ];

    emojis.forEach(emoji => {
        const emojiBox = document.createElement('div');
        emojiBox.classList.add('emoji-box');
        emojiBox.innerHTML = `
            <p> <span class="emoji">${emoji.hexadecimal}</span><br> <code>${emoji.decimal}</code> </p>
        `;
        emojiBox.addEventListener('click', showEmojiCode);
        emojiContainer.appendChild(emojiBox);
    });
});

function showEmojiCode(event) {
    const emojiCode = event.target.querySelector('code');
    alert(`Emoji Code: ${emojiCode.textContent}`);
}