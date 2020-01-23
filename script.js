const books = [{title: 'book1',author:'Jung'},{title:'book2', author:'Choi'} ];
function getTheTitles(book) {
    let titles = [];
    for(let i=0; i < book.length;i++) {
        titles.push(book[i].title);
    }
    return titles;
}
var titlearray = getTheTitles(books);
console.log(titlearray);