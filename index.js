// modules
const util = require('util');
const fs = require('fs');

// assign promisify (read file from system)
const readFileP = util.promisify(fs.readFile);

// define files variables (promises)
const chapterOne = readFileP('./story_chapter_1.txt', 'utf8');
const chapterTwo = readFileP('./story_chapter_2.txt', 'utf8');
const chapterThree = readFileP('./story_chapter_3.txt', 'utf8');

// excute two promises (chapters)
Promise.all([chapterOne, chapterTwo, chapterThree])
	.then((data) => {
				// console.log(data);
		// concatenate promises output to variable
		const fullStory = [data[0]].concat(data[1]);
		// console.log(fullStory);

		// console.log("THE STORY IS", fullStory);
		// write concatenated promises to file
		fs.writeFile('story.txt', fullStory);
	})
	.catch((err) => {
		throw err;
});





















/*
*** CLASS ASSIGNMENT ***
// modules
const util = require('util');
const fs = require('fs');

// assign promisify (read file from system)
const readFileP = util.promisify(fs.readFile);

// define files variables (promises)
const chapterOne = readFileP('./story_chapter_1.txt', 'utf8')
const chapterTwo = readFileP('./story_chapter_2.txt', 'utf8')

// excute two promises (chapters)
Promise.all([chapterOne, chapterTwo])
	.then((data) => {
		// concatenate promises output to variable
		const fullStory = [data[0]].concat(data[1]).join('\n\n');
		console.log("THE STORY IS", fullStory);
		// write concatenated promises to file
		fs.writeFile('story.txt', fullStory);
	})
	.catch((err) => {
		throw err;
});
*/