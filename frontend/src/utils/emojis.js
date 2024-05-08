export const Emojis = [
    "🏇",
    "🏊‍♀️",
    "🏄‍♂️",
    "🤾‍♀️",
    "🏋️‍♀️",
    "🦵",
    "🤸‍♀️",
    "🎪",
    "🎞",
    "🎐",
    "🎍",
    "🎃",
    "🎉",
    "🧨",
    "👕",
    "🥽",
    "🥼",
    "🧥",
    "🎪",
    "👓"
]

export const getRandomEmoji = () => {
    return Emojis[Math.floor(Math.random() * Emojis.length)]
}