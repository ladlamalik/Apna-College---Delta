const coding = ['js', 'ruby', 'java', 'Python', 'cpp'];

coding.forEach((element) => {
  console.log(element);
});

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = mynums.filter((num) => num > 5);
console.log(newNums);

const books = [
  {
    title: 'To Kill a Mockingbird',
    genre: 'Fiction',
    publish: 1960,
    edition: 2020,
  },
  {
    title: '1984',
    genre: 'Dystopian',
    publish: 1949,
    edition: 2016,
  },
  {
    title: 'The Great Gatsby',
    genre: 'Fiction',
    publish: 1925,
    edition: 2023,
  },
  {
    title: 'Pride and Prejudice',
    genre: 'Romance',
    publish: 1813,
    edition: 2020,
  },
  {
    title: 'The Catcher in the Rye',
    genre: 'Fiction',
    publish: 1951,
    edition: 2018,
  },
  {
    title: 'To the Lighthouse',
    genre: 'Modernist',
    publish: 1927,
    edition: 2021,
  },
  {
    title: 'Moby-Dick',
    genre: 'Adventure',
    publish: 1851,
    edition: 2019,
  },
  {
    title: 'The Hobbit',
    genre: 'Fantasy',
    publish: 1937,
    edition: 2022,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: 'Fantasy',
    publish: 1997,
    edition: 2020,
  },
  {
    title: 'The Lord of the Rings',
    genre: 'Fantasy',
    publish: 1954,
    edition: 2023,
  },
];

let userBooks = books.filter((book) => book.genre === 'Fantasy');

userBooks = books.filter((bk) => {
  return bk.publish >= 1950 && bk.genre === 'Fantasy';
});

console.log(userBooks);
