class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	get state() {
		return this._state;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	fix() {
		this.state = this.state * 1.5;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);

console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);

const picknick = new FantasticBook(
	"Аркадий и Борис Стругацкие",
	"Пикник на обочине",
	1972,
	168
);

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const foundBook = this.books.find((book) => book[type] === value);
		return foundBook || null;
	}

	giveBookByName(bookName) {
		const bookIndex = this.books.findIndex((book) => book.name === bookName);
		if (bookIndex !== -1) {
			return this.books.splice(bookIndex, 1)[0];
		}
		return null;
	}
}

const library = new Library("Городская библиотека");

library.addBook(new NovelBook("Франц Кафка", "Превращение", 1915, 120));
library.addBook(new DetectiveBook("Артур Конан Дойл", "Этюд в багровых тонах", 1887, 220));
library.addBook(new FantasticBook("Рэй Брэдбери", "451° по Фаренгейту", 1953, 256));
library.addBook(new Magazine("Наука и жизнь", 2020, 80));

let book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
	book1919 = new NovelBook("Уильям Сомерсет Моэм", "Луна и грош", 1919, 350);
	library.addBook(book1919);
}

const issuedBook = library.giveBookByName("451° по Фаренгейту");

issuedBook.state = 20;

issuedBook.fix();

library.addBook(issuedBook);

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {
		if (typeof mark !== "number" || mark < 2 || mark > 5) {
			return;
		}

		if (!this.marks.hasOwnProperty(subject)) {
			this.marks[subject] = [];
		}

		this.marks[subject].push(mark);
	}

	getAverageBySubject(subject) {
		if (!this.marks.hasOwnProperty(subject) || this.marks[subject].length === 0) {
			return 0;
		}

		const sum = this.marks[subject].reduce((acc, curr) => acc + curr, 0);
		return sum / this.marks[subject].length;
	}

	getAverage() {
		const subjects = Object.keys(this.marks);

		if (subjects.length === 0) {
			return 0;
		}

		const totalAverageSum = subjects.reduce(
			(acc, subject) => acc + this.getAverageBySubject(subject),
			0
		);

		return totalAverageSum / subjects.length;
	}
}

// Пример использования:
const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика");