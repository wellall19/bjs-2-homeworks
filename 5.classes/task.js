class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix(){
        this.state = this._state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        }
        else if (newState > 100) {
            this._state = 100;
        }
        else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            let bookInLibrary = this.books[i];
            if (bookInLibrary[type] == value) {
                return bookInLibrary;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            let bookInLibrary = this.books[i];
            if (bookInLibrary.name == bookName) {
                let newArrayBooks = []
                newArrayBooks.push(...this.books.slice(0,i));
                newArrayBooks.push(...this.books.slice(i+1));
                this.books = newArrayBooks;
                return bookInLibrary;
            }
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};

    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }
        return this.marks[subject].reduce((acc, cur) => acc + cur, 0) 
            / this.marks[subject].length;
    }

    getAverage() {
        if (Object.keys(this.marks).length == 0) { 
            return 0;
        }
        return Object.keys(this.marks).reduce((acc, curr) => 
            acc + this.getAverageBySubject(curr), 0) 
            / Object.keys(this.marks).length
    }
}
