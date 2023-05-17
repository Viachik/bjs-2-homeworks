// Задача 1

// 1. Создайте базовый класс `PrintEditionItem` со следующими свойствами:

class PrintEditionItem {
  debugger;  
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  // 2. Испорченное издание можно подклеить и улучшить его состояние.

 fix() {
    this.state *= 1.5;
  }

// 3. Cоздайте «сеттер» для свойства `state`

  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }

  // 4. Создайте «геттер», который позволит читать значение свойства `state`

 get state() {
    return this._state;
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

// 5. Создайте класс `Magazine`

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.type = 'magazine';
  }
}

// 6. Создайте класс `Book`

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);

    this.author = author;
    this.type = 'book';
  }
}

// 7. Создайте классы `NovelBook`, `FantasticBook` и `DetectiveBook`

class NovelBook extends Book {
  constructor(name, author, releaseDate, pagesCount) {
    super(name, author, releaseDate, pagesCount);

    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(name, author, releaseDate, pagesCount) {
    super(name, author, releaseDate, pagesCount);

    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(name, author, releaseDate, pagesCount) {
    super(name, author, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// Задача 2

// 1. Создайте класс `Library`

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

// 2. Реализуйте метод `addBook(book)`

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

 // 3. Создайте метод `findBookBy(type, value)`

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

// 4. Создайте метод `giveBookByName(bookName)`

  giveBookByName(bookName) {
    let findingBook = null;
    this.books = this.books.filter(book => {
      if (book.name === bookName) {
        findingBook = book;
        return false;
      }
      return true;
    })

    return findingBook;
  }
}

// 5. Протестируйте корректность работы классов и методов, разыграв тестовый сценарий:

const library = new Library("Библиотека имени Ленина");

 library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

 console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

 console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

