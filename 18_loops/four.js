const myObject = {
  js: 'JavaScript',
  cpp: 'C++',
  rb: 'Ruby',
  swift: 'Swift by apple',
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}


