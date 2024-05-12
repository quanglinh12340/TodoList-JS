const inputBox = document.querySelector('#input-box')
const listContainer = document.querySelector('#list-container')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert('Please write something')
    } else {
        const li = document.createElement('li')
        li.innerText = inputBox.value
        listContainer.appendChild(li)

        const span = document.createElement('span')
        span.innerText = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData ()
})

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')

    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
    saveData ()
})

inputBox.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        const li = document.createElement('li')
        li.innerText = inputBox.value
        listContainer.appendChild(li)

        const span = document.createElement('span')
        span.innerText = "\u00d7"
        li.appendChild(span)
        inputBox.value = ''
    }
    saveData ()
})

function saveData () {
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTasks () {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTasks()