


// require modules
const util = require('util');
const fs = require('fs');

// WRITE PROMISES
/*
// assign promisify writeFile
const writeFileP = util.promisify(fs.writeFile);

// declare text variables
let firstText, secondText;

// write to first file (promise)
const file1_p = writeFileP('writeme_1.txt', firstText)
	.then(() => {
		console.log('file 1 completed');
	})
	.catch((err) => {
		throw err;
})
// write to second file (promise)
const file2_p = writeFileP('writeme_2.txt', secondText)
	.then(() => {
		console.log('file 2 completed');
	})
	.catch((err) => {
		throw err;
});

// excute all promises
Promise.all([file1_p, file2_p])
	.then(() => {
		console.log('all files completed');
	})
	.catch((err) => {
		throw err;
});

// define text variables
firstText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, recusandae. Quaerat eaque assumenda sunt odit voluptas. Architecto delectus aspernatur similique quod nisi, minima corporis quam magni sint temporibus nulla sapiente sed in dignissimos libero amet laborum! Officiis eos id, magnam esse accusamus quae, nemo numquam nam ad dignissimos, eaque iste cum eligendi sed a quod sit. Cupiditate ut voluptatum sed voluptates in beatae dicta distinctio quibusdam repellat corporis autem magni similique suscipit dolor harum consequatur, eligendi molestias ipsa, sequi rerum et quam vel voluptate! Maxime ipsam cupiditate, atque velit impedit ab, exercitationem, odit molestias ducimus aperiam illo eos labore? Voluptate quaerat dolore similique quasi porro tenetur sunt dolor aperiam voluptatem dolorum sapiente ipsum, distinctio enim beatae laboriosam facilis assumenda perspiciatis? Magni nulla laborum impedit minus quae velit repellat dicta voluptatum accusantium quaerat quasi odio neque vero laboriosam, enim voluptatem hic tenetur amet labore facilis illum iusto qui mollitia dolore. Eaque nesciunt obcaecati suscipit quam architecto perferendis iste, praesentium veritatis odio, magni unde debitis beatae facere fugit repudiandae impedit minus voluptatum excepturi dolor adipisci consectetur quasi error a illum. Recusandae voluptas id culpa, perferendis itaque explicabo saepe, porro excepturi deserunt fugiat nulla, eum odio repellendus! Vero similique impedit iusto pariatur praesentium.';
secondText = 'The text in the second file';
*/



/// Read files prmise
const readFileP = util.promisify(fs.readFile);

const chapterOne = readFileP('./story_chapter_1.txt', 'utf8')
	.then(() => {
		console.log('First chapter done');
	})
	.catch((err) => {
		throw err;
});
const chapterTwo = readFileP('./story_chapter_2.txt', 'utf8')
	.then(() => {
		console.log('Second chapter done');
	})
	.catch((err) => {
		throw err;
});


Promise.all([chapterOne].concat[chapterTwo])
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		throw err;
});


// fs.readFile('textfile.txt', 'uktf8', (err, data) => {
// 	if(err) {
// 		throw err;
// 	}
// 	fs.writeFile('writeme.txt', data);
// });






// fs.readFile('textfile.txt', 'utf8', (err, data) => {
// 	if(err) {
// 		throw err;
// 	}
// 	fs.writeFile('writeme.txt', data);
// });




// fs.writeFile('writeme.txt', myFile);

// console.log(myFile);

// http.createServer(function (request, response) {
// 	fs.readFile('index.html', function es(error, data) {
// 		response.writeHead(200, {'Content-Type:': 'text/html'});
// 		response.end(data);
// 	})
// }).listen(52273, function () {
// 	console.log('server running at http://127.0.0.1:52273/')
// });
