fetch('https://randomuser.me/api')
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0].email)
    updateCard(data)
  })

function updateCard (data) {
  const card = document.querySelector('.card')
  card.innerHTML = ''

  const img = document.createElement('div')
  img.style.backgroundImage = `url(${data.results[0].picture.large})`
  img.className = 'image'

  const details = document.createElement('div')
  details.className = 'details'

  const span = document.createElement('span')
  span.textContent = ` ${data.results[0].dob.age} years old`
  span.className = 'age'

  const fullName = document.createElement('div')
  fullName.className = 'fullName'
  fullName.textContent =
    data.results[0].name.first + ' ' + data.results[0].name.last

  fullName.append(span)

  const email = document.createElement('div')
  email.className = 'email'
  email.textContent = data.results[0].email

  details.append(fullName, email)
  card.append(img, details)
}
