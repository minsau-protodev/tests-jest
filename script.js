const googleDatabase = [
  'cats.com',
  'soupsrecipes.com',
  'flowes.com',
  'dogs.com',
  'pictures.com',
  'weirdphotos.com'
];

const googleSearch = (search, db = googleDatabase) => {
  const matches = db.filter(website => website.includes(search));
  return matches.length > 3 ? matches.slice(0, 3) : matches;
}

module.exports = googleSearch