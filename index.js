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

    games.forEach((game) => {
        const li = document.createElement('li')
        
    });
}