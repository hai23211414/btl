const express = require('express');
const router = express.Router();

// Present Simple
router.get('/present-simple', (req, res) => {
    res.json({
        lesson: 'Present Simple',
        explanation: 'The present simple tense is used to describe habits, unchanging situations, general truths, and fixed arrangements.',
        examples: [
            'I eat breakfast every day.',
            'She works at a bank.',
            'They play football on weekends.'
        ]
    });
});

// Present Continuous
router.get('/present-continuous', (req, res) => {
    res.json({
        lesson: 'Present Continuous',
        explanation: 'The present continuous tense is used to describe actions happening at the moment of speaking or ongoing actions.',
        examples: [
            'I am eating breakfast right now.',
            'She is working on a project.',
            'They are playing football at the moment.'
        ]
    });
});

// Past Simple
router.get('/past-simple', (req, res) => {
    res.json({
        lesson: 'Past Simple',
        explanation: 'The past simple tense is used to describe actions that were completed in the past.',
        examples: [
            'I ate breakfast yesterday.',
            'She worked at a bank last year.',
            'They played football last weekend.'
        ]
    });
});

// Articles
router.get('/articles', (req, res) => {
    res.json({
        lesson: 'Articles',
        explanation: 'Articles are words that define a noun as specific or unspecific. The two types are definite (the) and indefinite (a, an).',
        examples: [
            'I saw a dog.',
            'The dog barked loudly.',
            'Can I have an apple?'
        ]
    });
});

// Adjectives
router.get('/adjectives', (req, res) => {
    res.json({
        lesson: 'Adjectives',
        explanation: 'Adjectives are words that describe nouns. They can specify qualities, quantities, or states, or give more information about a noun.',
        examples: [
            'The tall building is new.',
            'They have three dogs.',
            'She is very happy.'
        ]
    });
});

module.exports = router;