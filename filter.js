const list = [
  {
    title: 'React',
    url: 'https://facebook.io/react',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Reduex',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
  {
    title: 'Javascript for Noobs',
    url: 'https://github.com/noobs',
    author: 'Matt White',
    num_comments: 0,
    points: 0,
    objectID: 2
  },
]

function isSearched(searchTerm){
  return function(item){

    return !searchTerm || item.author.toLowerCase().includes(searchTerm.toLowerCase())
  }
}


console.log(list.filter(isSearched('Ma')))
