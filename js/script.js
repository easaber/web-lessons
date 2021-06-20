const main = document.querySelector('.main')
const button = document.createElement('button')

button.textContent = 'Click me'
button.className = 'button'
main.appendChild(button)

const newBtn = button.cloneNode(true)
newBtn.textContent = 'New button'
main.appendChild(newBtn)






