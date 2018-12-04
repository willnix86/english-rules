export const UPDATE_SENTENCE = 'UPDATE_SENTENCE';
export const updateSentence = sentence => ({
    type: UPDATE_SENTENCE,
    sentence
});

export const SHOW_RESPONSE = 'SHOW_RESPONSE';
export const showResponse = (message, mood) => ({
    type: SHOW_RESPONSE,
    message,
    mood
})

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
    type: RESET_GAME
})