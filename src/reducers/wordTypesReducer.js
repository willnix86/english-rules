import * as actions from '../actions/wordTypeActions';
import update from 'immutability-helper';

const initialState = {
    words: [{
        word: 'house',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'eggs',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'children',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'football',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'glass',
        wordType: 'Nouns',
        target: 'Container',
        answer: ''
    },
    {
        word: 'red',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'yummy',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'wooden',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'quick',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'rough',
        wordType: 'Adjectives',
        target: 'Container',
        answer: ''
    },
    {
        word: 'play',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    },
    {
        word: 'going',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    },
    {
        word: 'skipped',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    },
    {
        word: 'eat',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    },
    {
        word: 'read',
        wordType: 'Verbs',
        target: 'Container',
        answer: ''
    }],
    startTime: 0,
    finishTime: 0
}

initialState.words = initialState.words.sort(() => 0.5 - Math.random());

export const wordTypesReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_WORD) {
        return Object.assign({}, state, {
            words: [...state.words, {
                word: action.word.word,
                wordType: action.word.wordType,
                target: 'Container',
                answer: ''
            }]
        });
    } else if (action.type === actions.DROP_WORD) {
        const index = state.words.findIndex((wordObj => wordObj.word === action.word))
        const updatedWord = update(state.words[index], {
            target: {$set: action.target},
            answer: {$set: action.answer}
        });

        const newState = update(state, {words: { $splice: [[index, 1]]} });

        newState.words = update(newState.words, {$push: [updatedWord]});

        return newState;
    } else if (action.type === actions.RESET_GAME) {
        return initialState;
    }
    return state;
}