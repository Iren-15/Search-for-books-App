const inputBox = document.querySelector('.input-box');
const books = document.querySelectorAll('.book');

inputBox.addEventListener('keyup', function(event) {
    const userWord = event.target.value.toLowerCase();
     if (userWord === ""){
         books.forEach(function(item) {
            const bookWriter = item.querySelector('.writer');
            const bookName = item.querySelector('.name');
            const bookIcon = item.querySelector('.icon');
            const bookLink = item.querySelector('.link');
            bookIcon.style.display = "none";
            bookWriter.style.display = "none"; 
            bookName.style.display = "none";
            bookLink.style.display = "none";
        })
     }

    books.forEach(function(item) {
        const bookWriter = item.querySelector('.writer');
        const bookName = item.querySelector('.name');
        const bookIcon = item.querySelector('.icon');
        const bookLink = item.querySelector('.link');
        
        ((bookWriter.textContent.toLowerCase().includes(userWord) || 
        bookName.textContent.toLowerCase().includes(userWord)) &&
        (userWord !== ""))
        ||
        ((bookWriter.textContent.toLowerCase().concat(" ",bookName.textContent.toLowerCase().replace('"','')).includes(userWord)) &&
        (userWord !== ""))

        ? (bookIcon.style.display = "inline", bookWriter.style.display = "inline", bookName.style.display = "inline", bookLink.style.display = "inline")
        : (bookIcon.style.display = "none", bookWriter.style.display = "none", bookName.style.display = "none", bookLink.style.display = "none");
        
    })
    
})


//console.log(books)
//const booksSort = books.sort('.writer');
// как отсортировать результаты?
//если брать просто item.style.display ="none" и т.п., то не работает правильно!????
//работает только если каждый элемент в item отдельно прописать видимость



