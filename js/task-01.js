const list = document.querySelector('#categories')
const listItemsCounter = list.children.length;
console.log(`Number of categories: ${listItemsCounter}`)

const titleNames = document.querySelectorAll('h2')
titleNames.forEach(function (title) {
    console.log(`Category: ${title} 
Elements:`)})
for (let i = 0; i < titleNames.length; i += 1) { 
    const title = titleNames[i].textContent; 
    
    console.log(`Category: ${title} 
Elements:`);
  }
const items = document.querySelectorAll('.item > ul')
console.log(items)