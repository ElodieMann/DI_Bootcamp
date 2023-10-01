const selectEmoji = document.getElementById('selectEmoji')

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

emojis.forEach(emoji => {
    const option = document.createElement('option')
    option.textContent = emoji
    selectEmoji.appendChild(option)
})