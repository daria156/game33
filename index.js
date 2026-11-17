const games = [
    {title: 'Каркассон', players: 4, borrower: null },
    {title: 'Доббль', players: 6, borrower:'Аня'}, 
    {title: 'Шахматы', players: 2, borrower: null}
]

const gameList = document.getElementById('gameList')
const gameSelect = document.getElementById('gameSelect')
const borrowerName = document.getElementById('borrowerName')
const borrowButton = document.getElementById('borrowButton')
const returnButton = document.getElementById('returnButton')
const message = document.getElementById('message')


function renderGames() {
    gameList.innerHTML = " "

    games.forEach(function(game) {
        const li = document.createElement('li');

        if (game.borrower === null) {
            li.textContent = game.title + "· " + game.players + "игрока · свободна "
        } else {
            li.textContent = game.title + "· " + game.players + "игрока · У  " + game.borrower
        }
        gameList.append(li)
    });
}
renderGames()

borrowButton.addEventListener("click", () => {
    const name = borrowerName.value.trim 
    if (name === "") {
        message.textContent = "Введите имя"
        return
    } 
   const index = Number(gameSelect.value)
   const game = games[index]

   if (game.borrower !== null) {
      message.textContent = "Игра уже выдана"
      return
   }

   game.borrower = name
   message.textContent = "Игра выдана"

   renderGames()
})