const games = [
    {title: 'Каркассон', players: 4, copies: 3, borrowers: []},
    {title: 'Доббль', players: 6, copies: 5, borrowers: ['Аня']},
    {title: 'Шахматы', players: 2, copies: 2, borrowers: []}
];
const gameList = document.getElementById('gameList');
const gameSelect = document.getElementById('gameSelect');
const borrowerName = document.getElementById('borrowerName');
const borrowButton = document.getElementById('borrowButton');
const returnButton = document.getElementById('returnButton');
const message = document.getElementById('message');

const onlyFree = document.getElementById('onlyFree');
const gameTitle = document.getElementById('gameTitle');
const gamePlayers = document.getElementById('gamePlayers');
const gameCopies = document.getElementById('gameCopies');
const addGameButton = document.getElementById('addGameButton');
const addCopyButton = document.getElementById('addCopyButton');

function renderGames() {
    gameList.innerHTML = '';
    let count = 0;
    games.forEach(function(game) {
        const freeCopies = game.copies - game.borrowers.length;
        if (onlyFree.checked && freeCopies === 0) {
            return;
        }
        const li = document.createElement('li');
        li.textContent = game.title + ' · ' + game.players +
            ' игроков · Свободно: ' + freeCopies +
            ' из ' + game.copies;
        if (game.borrowers.length > 0) {
            li.textContent += ' · Взяли: ' + game.borrowers.join(', ');
        }
        gameList.append(li);
        count++;
    });
    if (count === 0) {
        gameList.textContent = 'Свободных игр пока нет';
    }
}

function renderGameOptions() {
    gameSelect.innerHTML = '';
    games.forEach(function(game, index) {
        const option = document.createElement('option');
        option.textContent = game.title;
        option.value = index;
        gameSelect.append(option);
    });
}

borrowButton.addEventListener('click', function() {
    const name = borrowerName.value.trim();
    if (name === '') {
        message.textContent = 'Введите имя';
        return;
    }
    const index = Number(gameSelect.value);
    const game = games[index];
    if (game.borrowers.length >= game.copies) {
        message.textContent = 'Все копии игры выданы';
        return;
    }
    game.borrowers.push(name);
    message.textContent = 'Игра выдана';
    renderGames();
});

returnButton.addEventListener('click', function() {
    const index = Number(gameSelect.value);
    const game = games[index];
    if (game.borrowers.length === 0) {
        message.textContent = 'Все копии игры свободны';
        return;
    }
    game.borrowers.pop();
    message.textContent = 'Игра возвращена';
    renderGames();
});

onlyFree.addEventListener('change', function() {
    renderGames();
});

addGameButton.addEventListener('click', function() {
    const title = gameTitle.value.trim();
    const players = Number(gamePlayers.value);
    const copies = Number(gameCopies.value);
    if (title === '') {
        message.textContent = 'Введите название игры';
        return;
    }
    if (players <= 0) {
        message.textContent = 'Введите число игроков';
        return;
    }
    if (copies <= 0) {
        message.textContent = 'Введите количество копий';
        return;
    }
    const newGame = {
        title: title,
        players: players,
        copies: copies,
        borrowers: []
    };
    games.push(newGame);
    gameTitle.value = '';
    gamePlayers.value = '';
    gameCopies.value = '';
    renderGames();
    renderGameOptions();
    message.textContent = 'Игра добавлена';
});
 
addCopyButton.addEventListener('click', function() {
    const index = Number(gameSelect.value);
    const game = games[index];
    game.copies++;
    message.textContent = 'Количество копий увеличено';
    renderGames();
});

renderGameOptions(); 
renderGames();