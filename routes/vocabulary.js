const express = require('express');
const router = express.Router();

// Vocabulary lessons data
const vocabularyLessons = [
  {
    id: 1,
    title: 'Basic Colors',
    level: 'Beginner',
    words: [
      { word: 'Red', pronunciation: '/red/', translation: 'Màu đỏ', example: 'The apple is red.' },
      { word: 'Blue', pronunciation: '/bluː/', translation: 'Màu xanh dương', example: 'The sky is blue.' },
      { word: 'Green', pronunciation: '/griːn/', translation: 'Màu xanh lá', example: 'The grass is green.' },
      { word: 'Yellow', pronunciation: '/ˈjeloʊ/', translation: 'Màu vàng', example: 'The sun is yellow.' },
      { word: 'Black', pronunciation: '/blæk/', translation: 'Màu đen', example: 'The cat is black.' }
    ]
  },
  {
    id: 2,
    title: 'Common Animals',
    level: 'Beginner',
    words: [
      { word: 'Dog', pronunciation: '/dɔːg/', translation: 'Chó', example: 'I have a dog.' },
      { word: 'Cat', pronunciation: '/kæt/', translation: 'Mèo', example: 'She has a cat.' },
      { word: 'Bird', pronunciation: '/bɜːrd/', translation: 'Chim', example: 'The bird can fly.' },
      { word: 'Fish', pronunciation: '/fɪʃ/', translation: 'Cá', example: 'Fish swim in water.' },
      { word: 'Elephant', pronunciation: '/ˈelɪfənt/', translation: 'Voi', example: 'The elephant is big.' }
    ]
  },
  {
    id: 3,
    title: 'Daily Fruits',
    level: 'Beginner',
    words: [
      { word: 'Apple', pronunciation: '/ˈæpəl/', translation: 'Táo', example: 'I eat an apple every day.' },
      { word: 'Banana', pronunciation: '/bəˈnænə/', translation: 'Chuối', example: 'Bananas are yellow.' },
      { word: 'Orange', pronunciation: '/ˈɔːrɪndʒ/', translation: 'Cam', example: 'Orange juice is healthy.' },
      { word: 'Grape', pronunciation: '/greɪp/', translation: 'Nho', example: 'I like eating grapes.' },
      { word: 'Watermelon', pronunciation: '/ˈwɔːtərmelən/', translation: 'Dưa hấu', example: 'Watermelon is sweet.' }
    ]
  },
  {
    id: 4,
    title: 'Office Vocabulary',
    level: 'Intermediate',
    words: [
      { word: 'Desk', pronunciation: '/desk/', translation: 'Bàn làm việc', example: 'I work at my desk.' },
      { word: 'Computer', pronunciation: '/kəmˈpjuːtər/', translation: 'Máy tính', example: 'I use a computer at work.' },
      { word: 'Meeting', pronunciation: '/ˈmiːtɪŋ/', translation: 'Cuộc họp', example: 'We have a meeting at 9 AM.' },
      { word: 'Project', pronunciation: '/ˈprɑːdʒekt/', translation: 'Dự án', example: 'I am working on a new project.' },
      { word: 'Deadline', pronunciation: '/ˈdedlaɪn/', translation: 'Hạn chót', example: 'The deadline is next Friday.' }
    ]
  }
];

// Get all vocabulary lessons
router.get('/', (req, res) => {
  res.json(vocabularyLessons);
});

// Get vocabulary lesson by ID
router.get('/:id', (req, res) => {
  const lesson = vocabularyLessons.find(l => l.id === parseInt(req.params.id));
  if (!lesson) {
    return res.status(404).json({ message: 'Lesson not found' });
  }
  res.json(lesson);
});

// Get lessons by level
router.get('/level/:level', (req, res) => {
  const lessons = vocabularyLessons.filter(l => l.level.toLowerCase() === req.params.level.toLowerCase());
  if (lessons.length === 0) {
    return res.status(404).json({ message: 'No lessons found for this level' });
  }
  res.json(lessons);
});

module.exports = router;
