const express = require('express');
const router = express.Router();

// Grammar lessons data
const grammarLessons = [
  {
    id: 1,
    title: 'Present Simple Tense',
    level: 'Beginner',
    description: 'Learn how to form and use the present simple tense',
    rules: [
      {
        rule: 'Affirmative Form',
        explanation: 'Subject + Verb + Object',
        examples: [
          'I play football.',
          'She reads books.',
          'They work in an office.'
        ]
      },
      {
        rule: 'Negative Form',
        explanation: 'Subject + do/does + not + Verb + Object',
        examples: [
          'I do not play football.',
          'She does not read books.',
          'They do not work in an office.'
        ]
      },
      {
        rule: 'Question Form',
        explanation: 'Do/Does + Subject + Verb + Object?',
        examples: [
          'Do I play football?',
          'Does she read books?',
          'Do they work in an office?'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Present Continuous Tense',
    level: 'Beginner',
    description: 'Learn how to form and use the present continuous tense',
    rules: [
      {
        rule: 'Affirmative Form',
        explanation: 'Subject + am/is/are + Verb-ing',
        examples: [
          'I am studying English.',
          'She is playing the piano.',
          'They are watching TV.'
        ]
      },
      {
        rule: 'Negative Form',
        explanation: 'Subject + am/is/are + not + Verb-ing',
        examples: [
          'I am not studying English.',
          'She is not playing the piano.',
          'They are not watching TV.'
        ]
      },
      {
        rule: 'Question Form',
        explanation: 'Am/Is/Are + Subject + Verb-ing?',
        examples: [
          'Am I studying English?',
          'Is she playing the piano?',
          'Are they watching TV?'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Past Simple Tense',
    level: 'Intermediate',
    description: 'Learn how to form and use the past simple tense',
    rules: [
      {
        rule: 'Affirmative Form (Regular)',
        explanation: 'Subject + Verb-ed + Object',
        examples: [
          'I worked yesterday.',
          'She played tennis last week.',
          'They studied hard.'
        ]
      },
      {
        rule: 'Affirmative Form (Irregular)',
        explanation: 'Subject + Irregular Verb + Object',
        examples: [
          'I went to the store.',
          'She ate lunch.',
          'They saw a movie.'
        ]
      },
      {
        rule: 'Negative Form',
        explanation: 'Subject + did + not + Verb + Object',
        examples: [
          'I did not work yesterday.',
          'She did not play tennis.',
          'They did not study.'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Articles (A, An, The)',
    level: 'Beginner',
    description: 'Learn when to use articles in English',
    rules: [
      {
        rule: 'Indefinite Article (A)',
        explanation: 'Use "a" before consonant sounds',
        examples: [
          'a dog',
          'a book',
          'a car',
          'a house'
        ]
      },
      {
        rule: 'Indefinite Article (An)',
        explanation: 'Use "an" before vowel sounds',
        examples: [
          'an apple',
          'an elephant',
          'an orange',
          'an umbrella'
        ]
      },
      {
        rule: 'Definite Article (The)',
        explanation: 'Use "the" for specific or known nouns',
        examples: [
          'the sun',
          'the moon',
          'the book on the table',
          'the president'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Adjectives',
    level: 'Beginner',
    description: 'Learn how to use adjectives to describe nouns',
    rules: [
      {
        rule: 'Position of Adjectives',
        explanation: 'Adjectives usually come before the noun',
        examples: [
          'a beautiful girl',
          'a big house',
          'a cold day',
          'a delicious meal'
        ]
      },
      {
        rule: 'Adjectives with Linking Verbs',
        explanation: 'After verbs like be, seem, feel, look',
        examples: [
          'She is tall.',
          'The weather seems nice.',
          'I feel happy.',
          'The food looks delicious.'
        ]
      },
      {
        rule: 'Comparative Adjectives',
        explanation: 'Use -er or more to compare two things',
        examples: [
          'taller than',
          'more beautiful than',
          'bigger than',
          'more intelligent than'
        ]
      }
    ]
  }
];

// Get all grammar lessons
router.get('/', (req, res) => {
  res.json(grammarLessons);
});

// Get grammar lesson by ID
router.get('/:id', (req, res) => {
  const lesson = grammarLessons.find(l => l.id === parseInt(req.params.id));
  if (!lesson) {
    return res.status(404).json({ message: 'Lesson not found' });
  }
  res.json(lesson);
});

// Get lessons by level
router.get('/level/:level', (req, res) => {
  const lessons = grammarLessons.filter(l => l.level.toLowerCase() === req.params.level.toLowerCase());
  if (lessons.length === 0) {
    return res.status(404).json({ message: 'No lessons found for this level' });
  }
  res.json(lessons);
});

module.exports = router;
