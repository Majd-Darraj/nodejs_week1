// modules
const util = require('util');
const fs = require('fs');
const os = require('os');
const perf = require('execution-time')();


// assign promisify (read file from system)
const readFileP = util.promisify(fs.readFile);

// measure excution time (START)
perf.start();

// define files variables (promises)
const chapterOne = readFileP('./story_chapter_1.txt', 'utf8');
const chapterTwo = readFileP('./story_chapter_2.txt', 'utf8');
const chapterThree = readFileP('./story_chapter_3.txt', 'utf8');

// excute three promises (chapters)
Promise.all([chapterOne, chapterTwo, chapterThree])
	.then((data) => {
		// console.log(data);
		// concatenate promises output to variable
		const fullStory = [data[0]].concat(data[1]).join();
		let wordCount = fullStory.match(/mouse/gi).length;
	
		console.log(`2- The word "mouse" repeated ${wordCount} times in this story.\n\n`);
		console.log(`${fullStory}\n\n`);
		console.log(`**** It took ${asyncTimerEnd} milliseconds to excute your code. *****\n\n`);


	})
	.catch((err) => {
		throw err;
});


// measure excution time (END)
let asyncTimerEnd = perf.stop().time;




















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