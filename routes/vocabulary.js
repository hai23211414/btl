const express = require('express');
const router = express.Router();

// Vocabulary lessons
const vocabularyLessons = {
    colors: [
        { english: 'Red', vietnamese: 'Đỏ', pronunciation: 'đỏ' },
        { english: 'Blue', vietnamese: 'Xanh dương', pronunciation: 'xanh dương' },
        { english: 'Green', vietnamese: 'Xanh lá', pronunciation: 'xanh lá' },
        { english: 'Yellow', vietnamese: 'Vàng', pronunciation: 'vàng' }
    ],
    animals: [
        { english: 'Dog', vietnamese: 'Chó', pronunciation: 'chó' },
        { english: 'Cat', vietnamese: 'Mèo', pronunciation: 'mèo' },
        { english: 'Elephant', vietnamese: 'Voi', pronunciation: 'voi' },
        { english: 'Tiger', vietnamese: 'Hổ', pronunciation: 'hổ' }
    ],
    fruits: [
        { english: 'Apple', vietnamese: 'Táo', pronunciation: 'táo' },
        { english: 'Banana', vietnamese: 'Chuối', pronunciation: 'chuối' },
        { english: 'Grapes', vietnamese: 'Nho', pronunciation: 'nho' },
        { english: 'Orange', vietnamese: 'Cam', pronunciation: 'cam' }
    ],
    officeVocabulary: [
        { english: 'Computer', vietnamese: 'Máy tính', pronunciation: 'máy tính' },
        { english: 'Desk', vietnamese: 'Bàn', pronunciation: 'bàn' },
        { english: 'Chair', vietnamese: 'Ghế', pronunciation: 'ghế' },
        { english: 'Notebook', vietnamese: 'Sổ tay', pronunciation: 'sổ tay' }
    ]
};

// Routes for vocabulary
router.get('/vocabulary/colors', (req, res) => {
    res.json(vocabularyLessons.colors);
});

router.get('/vocabulary/animals', (req, res) => {
    res.json(vocabularyLessons.animals);
});

router.get('/vocabulary/fruits', (req, res) => {
    res.json(vocabularyLessons.fruits);
});

router.get('/vocabulary/office', (req, res) => {
    res.json(vocabularyLessons.officeVocabulary);
});

module.exports = router;
