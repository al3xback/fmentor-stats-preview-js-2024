const cardEl = document.querySelector('.card');

/* Map.groupBy() */
const images = [
	{ path: './images/meeting.jpg', alt: 'People at a meeting' },
	{ path: './images/teacher.jpg', alt: 'Teaching a book' },
];

const groupedImages = Map.groupBy(images, function ({ path }) {
	return path.includes('meeting') ? 'used' : 'unused';
});
const { path: imagePath, alt: imageAlt } = groupedImages.get('used')[0];

const cardImageEl = cardEl.querySelector('.card__image img');
cardImageEl.src = imagePath;
cardImageEl.alt = imageAlt;

/* Object.groupBy() */
const marks = [
	{ id: 'm1', text: 'see' },
	{ id: 'm2', text: 'sight' },
	{ id: 'm3', text: 'insights' },
];

const groupedMarks = Object.groupBy(marks, function ({ text }) {
	return text.length > 5 ? 'good' : 'bad';
});
const { text: markText } = groupedMarks.good[0];

const cardTitleSpanEl = cardEl.querySelector('.card__title mark');
cardTitleSpanEl.textContent = markText;
