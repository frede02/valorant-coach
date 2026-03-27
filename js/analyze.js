// Toggle checkbox labels
document.querySelectorAll('.checkbox-label').forEach(label => {
    label.addEventListener('click', () => {
        const cb = label.querySelector('input[type="checkbox"]');
        cb.checked = !cb.checked;
        label.classList.toggle('checked', cb.checked);
    });
});

function generatePrompt() {
    const agent = document.getElementById('agent').value;
    const map = document.getElementById('map').value;
    const rank = document.getElementById('rank').value;
    const side = document.getElementById('side').value;
    const situation = document.getElementById('situation').value.trim();
    const score = document.getElementById('score').value.trim();

    const focusAreas = [];
    document.querySelectorAll('#focus-areas input:checked').forEach(cb => {
        focusAreas.push(cb.value);
    });

    if (!situation) {
        alert('Décris au moins la situation pour que l\'analyse soit utile !');
        return;
    }

    let prompt = `Tu es un coach Valorant de niveau Radiant / professionnel. Tu donnes des conseils concrets, précis et actionnables. Tu ne fais pas de blabla inutile — tu vas droit au but comme un vrai coach.

CONTEXTE DU JOUEUR :`;

    if (rank) prompt += `\n- Rang : ${rank}`;
    if (agent) prompt += `\n- Agent joué : ${agent}`;
    if (map) prompt += `\n- Map : ${map}`;
    if (side) prompt += `\n- Côté : ${side}`;
    if (score) prompt += `\n- Score / KDA : ${score}`;

    if (focusAreas.length > 0) {
        prompt += `\n\nLE JOUEUR VEUT PROGRESSER SUR :\n${focusAreas.map(a => `- ${a}`).join('\n')}`;
    }

    prompt += `

SITUATION DÉCRITE PAR LE JOUEUR :
"${situation}"

CONSIGNES POUR TON ANALYSE :
1. Identifie les 2-3 erreurs principales dans la situation décrite
2. Pour chaque erreur, explique POURQUOI c'est une erreur et ce que le joueur aurait dû faire à la place
3. Donne des conseils spécifiques à l'agent${agent ? ` (${agent})` : ''} et à la map${map ? ` (${map})` : ''}
4. Propose un plan d'action concret pour les prochaines games (2-3 points max)
5. Si possible, mentionne des positions ou timings précis

Sois direct, parle comme un coach, pas comme un prof. Le joueur est ${rank || 'en ranked'} donc adapte ton niveau d'explication.`;

    document.getElementById('prompt-text').textContent = prompt;
    const output = document.getElementById('prompt-output');
    output.classList.add('visible');
    output.scrollIntoView({ behavior: 'smooth' });
}

function copyPrompt() {
    const text = document.getElementById('prompt-text').textContent;
    navigator.clipboard.writeText(text).then(() => {
        const feedback = document.getElementById('copy-feedback');
        feedback.style.display = 'inline-flex';
        setTimeout(() => { feedback.style.display = 'none'; }, 2000);
    });
}
