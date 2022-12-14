let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

}

// Display modal and close modal when submit

function showModal(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('is-active')
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.id == 'close-button') {
            modal.classList.remove('is-active');
        }
    });   
}
function closeModal() {
    const modal = document.getElementById('modal-background');
    modal.classList.remove('is-active');

}

const addBtn = document.getElementById('btnAddBook');
btnAddBook.addEventListener('click', () => showModal('modal-background'))

// Create book

const booksGrid = document.getElementById('booksGrid')

function render() { 
    crearElement(booksGrid)
    
    myLibrary.forEach((book, index) => {
    const newBook = document.createElement('div')
    newBook.classList.add("card")
    booksGrid.appendChild(newBook) 
    const title = document.createElement('p')
    title.innerText = `Title: ${book.title}`
    newBook.appendChild(title) 
    const author = document.createElement('p')
    author.innerText = `Author: ${book.author}`
    newBook.appendChild(author) 
    const pages = document.createElement('p')
    pages.innerText = `Pages: ${book.pages}`
    newBook.appendChild(pages) 
    const read = document.createElement('p')
    if (book.read) {
        read.innerText = 'Read';
        read.classList.add('has-text-success')
    } else {
        read.innerText = 'To Be Read'
        read.classList.add('has-text-danger')
    }
    newBook.appendChild(read) 
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove','button','is-danger', 'is-medium', 'mt-2')
    removeBtn.innerText = 'Remove'
    newBook.appendChild(removeBtn)
    removeBtn.addEventListener('click', () => removeBook(index))
    })
}

function crearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }

}

const addNewBook= document.getElementById('form')

function populate() {
    addNewBook.addEventListener('submit', (e) => {
        e.preventDefault()
        const newBook = getBookFromInput()
        myLibrary.push(newBook)
        render()
        removeInput()
        closeModal()
        }
    );
}

populate()

// get input 
    
function getBookFromInput () {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked
    return  new Book(title, author, pages, isRead)
}

// const newBook = getBookFromInput()
// myLibrary.push(newBook)

// remove input 
function removeInput () {

document.getElementById('title').value = ''
document.getElementById('author').value = ''
document.getElementById('pages').value = ''
document.getElementById('isRead').checked = null

}

// removeBook



function removeBook(index) {
    myLibrary.splice(index, 1);
    render()
}