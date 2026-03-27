// === GUESS MY RANK — Data & Logic ===

const RANK_ICON_BASE = 'https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04';
const RANKS = [
    { name: 'Iron',      img: `${RANK_ICON_BASE}/4/largeicon.png` },
    { name: 'Bronze',    img: `${RANK_ICON_BASE}/7/largeicon.png` },
    { name: 'Silver',    img: `${RANK_ICON_BASE}/10/largeicon.png` },
    { name: 'Gold',      img: `${RANK_ICON_BASE}/13/largeicon.png` },
    { name: 'Platinum',  img: `${RANK_ICON_BASE}/16/largeicon.png` },
    { name: 'Diamond',   img: `${RANK_ICON_BASE}/19/largeicon.png` },
    { name: 'Ascendant', img: `${RANK_ICON_BASE}/22/largeicon.png` },
    { name: 'Immortal',  img: `${RANK_ICON_BASE}/25/largeicon.png` },
    { name: 'Radiant',   img: `${RANK_ICON_BASE}/27/largeicon.png` }
];

// =============================================
// CLIPS : 100% anonymes, no-commentary, petites chaînes
// Aucun pro, aucun coaching, juste du gameplay brut
// rank: 0=Iron 1=Bronze 2=Silver 3=Gold 4=Plat 5=Diamond 6=Ascendant 7=Immortal 8=Radiant
// =============================================
const CLIPS = [
    // === IRON === (no commentary, joueurs anonymes)
    { videoId: '5zDj_1Xu80c', start: 200, end: 250, rank: 0, hint: 'Observez le crosshair placement' },
    { videoId: '5zDj_1Xu80c', start: 700, end: 750, rank: 0, hint: 'Regardez les décisions prises' },
    { videoId: 'qdUuMTV_fJ4', start: 300, end: 350, rank: 0, hint: 'Analysez le mouvement' },
    { videoId: 'XgioHUGfm00', start: 250, end: 300, rank: 0, hint: 'Focus sur le spray control' },
    { videoId: 'fvj5a9iZYGQ', start: 200, end: 250, rank: 0, hint: 'Regardez le positionnement' },

    // === BRONZE === (no commentary, petites chaînes)
    { videoId: 'c_OS3iI1m2o', start: 200, end: 250, rank: 1, hint: 'Observez le strafing' },
    { videoId: 'c_OS3iI1m2o', start: 600, end: 650, rank: 1, hint: 'Analysez les décisions' },
    { videoId: 'guM3EygB2M8', start: 300, end: 350, rank: 1, hint: 'Focus sur le mouvement' },
    { videoId: 'M79lEPHw2-0', start: 400, end: 450, rank: 1, hint: 'Regardez le crosshair placement' },

    // === SILVER === (no commentary, joueurs silver anonymes)
    { videoId: '6Cso5DQ1vxk', start: 200, end: 250, rank: 2, hint: 'Analysez les peeks' },
    { videoId: '6Cso5DQ1vxk', start: 600, end: 650, rank: 2, hint: 'Observez le game sense' },
    { videoId: 'h9y3tCOV6RE', start: 150, end: 200, rank: 2, hint: 'Regardez le spray' },
    { videoId: 'U2zWQom3gME', start: 250, end: 300, rank: 2, hint: 'Focus sur le positionnement' },

    // === GOLD === (no commentary, gameplay ranked gold)
    { videoId: 'bTbvzT7xUqY', start: 200, end: 250, rank: 3, hint: 'Analysez le trading' },
    { videoId: 'bTbvzT7xUqY', start: 700, end: 750, rank: 3, hint: 'Observez les rotations' },
    { videoId: 'ooI58QUl37U', start: 300, end: 350, rank: 3, hint: 'Focus sur les décisions' },

    // === PLATINUM === (no commentary, small channel)
    { videoId: 'kcFmpoilNqo', start: 150, end: 200, rank: 4, hint: 'Regardez le timing des peeks' },
    { videoId: 'kcFmpoilNqo', start: 500, end: 550, rank: 4, hint: 'Analysez le positionnement' },
    { videoId: '_uYzRUL5p3E', start: 300, end: 350, rank: 4, hint: 'Observez l\'utilisation des skills' },

    // === DIAMOND === (no commentary, diamond gameplay anonyme)
    { videoId: '5d83SJfXEFA', start: 150, end: 200, rank: 5, hint: 'Focus sur le aim et le placement' },
    { videoId: '5d83SJfXEFA', start: 500, end: 550, rank: 5, hint: 'Analysez les micro-décisions' },
    { videoId: 'peJ77UBYACg', start: 300, end: 350, rank: 5, hint: 'Observez la coordination' },

    // === ASCENDANT === (no commentary, Sova gameplay ascendant)
    { videoId: 'EwOJHZVUDZY', start: 150, end: 200, rank: 6, hint: 'Regardez le game sense avancé' },
    { videoId: 'EwOJHZVUDZY', start: 500, end: 550, rank: 6, hint: 'Analysez les décisions rapides' },

    // === IMMORTAL === (no commentary, ranked immortal anonyme)
    { videoId: 'W2Tj7dhdqao', start: 150, end: 200, rank: 7, hint: 'Focus sur la vitesse de réaction' },
    { videoId: 'W2Tj7dhdqao', start: 500, end: 550, rank: 7, hint: 'Observez la précision' },
    { videoId: 't3_KQRr92PE', start: 300, end: 350, rank: 7, hint: 'Analysez le positionnement' },

    // === RADIANT === (no commentary, high elo anonymous gameplay)
    { videoId: 'mwSwkVxG12Q', start: 200, end: 250, rank: 8, hint: 'Focus sur le aim' },
    { videoId: 'mwSwkVxG12Q', start: 800, end: 850, rank: 8, hint: 'Regardez le niveau de jeu global' },
    { videoId: 'mwSwkVxG12Q', start: 1500, end: 1550, rank: 8, hint: 'Analysez la précision et le game sense' },
];

// =============================
// GAME STATE
// =============================

let gameState = {
    clips: [],
    currentIndex: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    exactCount: 0,
    guesses: []
};

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function initGame() {
    gameState.clips = shuffleArray(CLIPS).slice(0, 10);
    gameState.currentIndex = 0;
    gameState.score = 0;
    gameState.streak = 0;
    gameState.bestStreak = 0;
    gameState.exactCount = 0;
    gameState.guesses = [];

    renderRankGrid();
    loadClip(0);
    updateStats();

    document.getElementById('gmr-container').classList.remove('hidden');
    document.getElementById('gmr-end').classList.remove('visible');
}

function renderRankGrid() {
    const grid = document.getElementById('rank-grid');
    grid.innerHTML = RANKS.map((r, i) => `
        <button class="rank-btn" onclick="submitGuess(${i})">
            <img class="rank-icon-img" src="${r.img}" alt="${r.name}">
            <span class="rank-name">${r.name}</span>
        </button>
    `).join('');
}

function loadClip(index) {
    if (index >= gameState.clips.length) {
        endGame();
        return;
    }

    const clip = gameState.clips[index];

    const videoWrap = document.querySelector('.gmr-video-wrap');
    videoWrap.innerHTML = `
        <div class="video-overlay-top"></div>
        <iframe
            src="https://www.youtube-nocookie.com/embed/${clip.videoId}?start=${clip.start}&end=${clip.end}&autoplay=1&rel=0&modestbranding=1&iv_load_policy=3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="video-overlay-bottom"></div>`;

    const hints = document.getElementById('gmr-hints');
    hints.innerHTML = `
        <span class="hint-chip"><strong>Clip ${index + 1}/${gameState.clips.length}</strong></span>
        <span class="hint-chip">${clip.hint}</span>
    `;

    document.getElementById('gmr-pick').classList.remove('hidden');
    document.getElementById('gmr-result').classList.remove('visible');
    document.getElementById('stat-clip').textContent = `${index + 1}/${gameState.clips.length}`;
}

function submitGuess(guessIndex) {
    const clip = gameState.clips[gameState.currentIndex];
    const realRank = clip.rank;
    const diff = Math.abs(guessIndex - realRank);

    let points = 0;
    let resultClass = 'wrong';
    let title = '';
    let text = '';

    if (diff === 0) {
        points = 100;
        resultClass = 'perfect';
        title = 'EXACT !';
        text = 'Tu as trouvé le rang exact. GG !';
        gameState.streak++;
        gameState.exactCount++;
    } else if (diff === 1) {
        points = 60;
        resultClass = 'close';
        title = 'Presque !';
        text = 'À 1 rang près. Pas mal du tout.';
        gameState.streak++;
    } else if (diff === 2) {
        points = 30;
        resultClass = 'close';
        title = 'Pas loin';
        text = 'À 2 rangs près. Tu y es presque.';
        gameState.streak = 0;
    } else {
        points = 0;
        resultClass = 'wrong';
        title = 'Raté';
        text = `À ${diff} rangs de différence. C'est dur !`;
        gameState.streak = 0;
    }

    gameState.score += points;
    gameState.bestStreak = Math.max(gameState.bestStreak, gameState.streak);
    gameState.guesses.push({ guess: guessIndex, real: realRank, points });

    const resultEl = document.getElementById('gmr-result');
    const cardEl = document.getElementById('result-card');
    cardEl.className = `result-card ${resultClass}`;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-text').textContent = text;

    document.getElementById('result-guess').innerHTML = `
        <img class="result-rank-img" src="${RANKS[guessIndex].img}" alt="${RANKS[guessIndex].name}">
        ${RANKS[guessIndex].name}`;
    document.getElementById('result-real').innerHTML = `
        <img class="result-rank-img" src="${RANKS[realRank].img}" alt="${RANKS[realRank].name}">
        ${RANKS[realRank].name}`;

    resultEl.classList.add('visible');
    document.getElementById('gmr-pick').classList.add('hidden');
    updateStats();
}

function nextClip() {
    gameState.currentIndex++;
    if (gameState.currentIndex >= gameState.clips.length) {
        endGame();
    } else {
        loadClip(gameState.currentIndex);
    }
}

function updateStats() {
    document.getElementById('stat-score').textContent = gameState.score;
    document.getElementById('stat-streak').textContent = gameState.streak;
}

function endGame() {
    document.getElementById('gmr-container').classList.add('hidden');

    const endEl = document.getElementById('gmr-end');
    document.getElementById('end-score').textContent = gameState.score;
    document.getElementById('end-exact').textContent = gameState.exactCount;
    document.getElementById('end-best').textContent = gameState.bestStreak;

    const maxScore = gameState.clips.length * 100;
    const pct = Math.round((gameState.score / maxScore) * 100);

    let verdict = '';
    if (pct >= 80) verdict = 'Tu es un vrai analyste ! Ton game sense est incroyable.';
    else if (pct >= 60) verdict = 'Bien joué ! Tu sais reconnaître les différences entre les rangs.';
    else if (pct >= 40) verdict = 'Pas mal, mais il y a de la marge pour progresser.';
    else if (pct >= 20) verdict = "C'est compliqué... Regarde plus de VOD reviews pour améliorer ton oeil.";
    else verdict = "Aïe. C'est pas facile de deviner les rangs, continue à t'entraîner !";

    document.getElementById('end-verdict').textContent = `${pct}% de score — ${verdict}`;
    endEl.classList.add('visible');
}

function restartGame() {
    document.getElementById('gmr-end').classList.remove('visible');
    initGame();
}

initGame();
