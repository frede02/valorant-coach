const guides = [
    // === FONDAMENTAUX ===
    {
        cat: "Fondamentaux",
        title: "Crosshair placement",
        tag: "Essentiel",
        diff: "debutant",
        preview: "La compétence #1 qui sépare les rangs bas des rangs hauts.",
        content: `
            <h2>Crosshair Placement — La base de tout</h2>
            <h3>C'est quoi ?</h3>
            <p>Le crosshair placement, c'est le fait de toujours garder ton viseur à hauteur de tête, là où un ennemi peut apparaître. Ça réduit la distance que ta souris doit parcourir pour tuer.</p>
            <h3>Les règles d'or</h3>
            <ul>
                <li><strong>Toujours à hauteur de tête</strong> — Jamais au sol, jamais au plafond. La hauteur de tête change selon la distance : plus l'ennemi est loin, plus la tête est "haute" sur ton écran.</li>
                <li><strong>Pré-aim les angles</strong> — Avant de passer un angle, place ton crosshair exactement là où la tête de l'ennemi serait s'il était là. Colle le mur.</li>
                <li><strong>Bouge ton crosshair avec ta position</strong> — Quand tu bouges, ton crosshair doit "glisser" le long des angles au lieu de rester fixe au milieu de l'écran.</li>
                <li><strong>Un angle à la fois</strong> — Ne te mets jamais dans une position où tu peux être pris de 2 côtés. Clear les angles un par un.</li>
            </ul>
            <h3>Exercice</h3>
            <ul>
                <li>Va en custom sur n'importe quelle map, marche lentement et force-toi à garder le crosshair à hauteur de tête en permanence</li>
                <li>En Deathmatch, concentre-toi UNIQUEMENT sur le crosshair placement, pas sur les kills</li>
            </ul>
        `
    },
    {
        cat: "Fondamentaux",
        title: "Peeking : comment prendre un angle",
        tag: "Essentiel",
        diff: "debutant",
        preview: "Jiggle peek, wide peek, shoulder peek — quand utiliser quoi.",
        content: `
            <h2>Peeking — L'art de prendre un angle</h2>
            <h3>Les types de peek</h3>
            <ul>
                <li><strong>Jiggle peek</strong> — Tu sors très rapidement et tu reviens. Sert à récupérer de l'info sans te faire tuer. Utilise A/D rapidement.</li>
                <li><strong>Wide peek (wide swing)</strong> — Tu sors large et loin du mur. Utile quand tu sais où est l'ennemi et que tu veux le surprendre. Surtout en attaque.</li>
                <li><strong>Shoulder peek</strong> — Tu montres juste ton épaule pour baiter un tir, puis tu re-peek quand l'ennemi a tiré. Très utile contre un Operator.</li>
                <li><strong>Crouch peek</strong> — Tu sors en t'accroupissant. À utiliser rarement car ça te rend lent. Utile uniquement pour surprendre en close range.</li>
            </ul>
            <h3>Règles importantes</h3>
            <ul>
                <li><strong>Ne reste JAMAIS immobile</strong> après un peek raté — si tu n'as pas le kill, reviens en couvert immédiatement</li>
                <li><strong>Counter-strafe</strong> — Quand tu arrêtes de bouger pour tirer, appuie brièvement sur la touche opposée pour stopper net et être précis</li>
                <li><strong>Peeker's advantage</strong> — Celui qui bouge a un avantage réseau. C'est pour ça qu'en attaque, il faut être agressif sur les peeks, pas passif</li>
            </ul>
        `
    },
    {
        cat: "Fondamentaux",
        title: "Économie : quand acheter, quand save",
        tag: "Important",
        diff: "debutant",
        preview: "Comprendre l'éco pour ne plus jamais acheter au mauvais moment.",
        content: `
            <h2>Économie — Le nerf de la guerre</h2>
            <h3>Les bases</h3>
            <ul>
                <li><strong>Pistol round (round 1)</strong> — Achète soit un Ghost, soit des skills. Ne garde jamais 800 crédits.</li>
                <li><strong>Si tu perds le pistol</strong> — Save round 2, full buy round 3. Ne force PAS round 2.</li>
                <li><strong>Si tu gagnes le pistol</strong> — Tu peux acheter léger round 2 (Spectre/Marshal + skills) car les ennemis seront en eco.</li>
                <li><strong>Full buy</strong> = Vandal/Phantom + bouclier lourd + toutes tes skills. Environ 3900-4500 crédits.</li>
            </ul>
            <h3>Les règles</h3>
            <ul>
                <li><strong>Achète en équipe</strong> — Si 3 joueurs ne peuvent pas full buy, tout le monde save. Un half-buy en équipe vaut mieux que 2 full buy et 3 pistolets.</li>
                <li><strong>Ne force jamais si tu peux full buy le round suivant en savant</strong></li>
                <li><strong>Le bonus round</strong> — Après un round gagné, tu gardes tes armes et skills non utilisées. Ça économise énormément.</li>
                <li><strong>Operator</strong> — 4700 crédits. Ne l'achète que si tu peux te permettre de le perdre ou si tu as un plan pour le garder.</li>
            </ul>
        `
    },
    // === GAME SENSE ===
    {
        cat: "Game sense",
        title: "Lire la minimap",
        tag: "Game changer",
        diff: "intermediaire",
        preview: "La minimap te donne toute l'info dont tu as besoin, encore faut-il la regarder.",
        content: `
            <h2>La minimap — Ton meilleur allié</h2>
            <h3>Pourquoi c'est crucial</h3>
            <p>Les joueurs hauts rangs regardent la minimap toutes les 3-5 secondes. C'est comme le rétroviseur en voiture. La minimap te dit où sont tes coéquipiers, où il y a de l'info ennemie, et où il y a des trous dans ta défense.</p>
            <h3>Ce qu'il faut surveiller</h3>
            <ul>
                <li><strong>Positions de tes mates</strong> — Si tu vois que personne ne couvre B, quelqu'un doit rotate (peut-être toi).</li>
                <li><strong>Cônes de vision</strong> — Les cônes sur la minimap montrent ce que tes coéquipiers voient. Si aucun cône ne couvre mid, mid est ouvert.</li>
                <li><strong>Infos sur les ennemis</strong> — Quand un ennemi est spottéé, il apparaît sur la minimap. Ça te dit où est la pression.</li>
                <li><strong>Qui est en vie</strong> — Regarde le nombre de joueurs en vie de chaque côté. 3v5 ? Ne peek pas, joue le temps.</li>
            </ul>
            <h3>Exercice</h3>
            <ul>
                <li>Pendant 5 games, force-toi à regarder la minimap entre chaque action (après avoir clear un angle, après un kill, pendant une rotation)</li>
            </ul>
        `
    },
    {
        cat: "Game sense",
        title: "Quand rotate en défense",
        tag: "Important",
        diff: "intermediaire",
        preview: "La plus grosse erreur en ranked : rotate trop tôt ou trop tard.",
        content: `
            <h2>Rotations en défense</h2>
            <h3>Les erreurs classiques</h3>
            <ul>
                <li><strong>Rotate trop tôt</strong> — Tu entends du bruit A, toute l'équipe rotate A, ils plantent B. C'est le piège #1 en ranked.</li>
                <li><strong>Rotate trop tard</strong> — Le spike est déjà planté depuis 10 secondes quand tu arrives.</li>
                <li><strong>Rotate sans info</strong> — Tu laisses ton site sur une intuition, sans vraie info.</li>
            </ul>
            <h3>Les bonnes pratiques</h3>
            <ul>
                <li><strong>1 joueur rotate, pas tous</strong> — Quand il y a de la pression sur un site, UN joueur rotate en renfort. Les autres restent en place jusqu'à confirmation.</li>
                <li><strong>Confirme avant de rotate</strong> — 3+ ennemis vus sur un site = rotate. Du bruit + 1 ennemi vu = c'est peut-être un fake, reste en place.</li>
                <li><strong>Utilise les skills pour retarder</strong> — Molly, smoke, slow orb... Ça te donne 5-10 secondes supplémentaires, assez pour que le rotate arrive.</li>
                <li><strong>Le "lurker"</strong> — En attaque, souvent 1 joueur va de l'autre côté pour fake. Sois conscient que ça existe avant de quitter ton site.</li>
            </ul>
        `
    },
    {
        cat: "Game sense",
        title: "Le trading : ne meurs jamais pour rien",
        tag: "Essentiel",
        diff: "debutant",
        preview: "Si ton mate meurt, tu dois immédiatement tuer celui qui l'a tué.",
        content: `
            <h2>Le trading — Règle #1 du teamplay</h2>
            <h3>C'est quoi ?</h3>
            <p>Le trade, c'est quand ton coéquipier meurt et que tu tues immédiatement l'ennemi qui l'a tué. Ça transforme un 4v5 en 4v4. Si personne ne trade, chaque mort est un pur désavantage.</p>
            <h3>Comment bien trader</h3>
            <ul>
                <li><strong>Reste proche de ton mate</strong> — Si tu es à 2 secondes de course, tu ne pourras jamais trade. Reste à 1 seconde max.</li>
                <li><strong>Ne regarde pas le même angle</strong> — Si vous êtes 2, un regarde l'angle et l'autre est prêt à trade depuis un angle différent.</li>
                <li><strong>Sois prêt AVANT</strong> — Quand ton mate peek, ton crosshair doit déjà être sur l'angle. Tu ne réfléchis pas, tu tires.</li>
                <li><strong>En attaque, toujours entrer à 2 minimum</strong> — Le premier qui entre va peut-être mourir. Le deuxième DOIT trade.</li>
            </ul>
            <h3>Mauvais trade vs Bon trade</h3>
            <ul>
                <li>Mauvais : ton mate meurt, tu te précipites, tu meurs au même endroit = double kill pour l'ennemi</li>
                <li>Bon : ton mate meurt, tu peek depuis un angle DIFFÉRENT et tu trade = échange 1 pour 1</li>
            </ul>
        `
    },
    // === PAR RÔLE ===
    {
        cat: "Rôles",
        title: "Jouer Duelliste correctement",
        tag: "Par rôle",
        diff: "intermediaire",
        preview: "Être duelliste ne veut pas dire chasser les kills. Ton job c'est créer de l'espace.",
        content: `
            <h2>Le rôle du Duelliste</h2>
            <h3>Ton vrai job</h3>
            <p>Beaucoup de joueurs pensent que duelliste = top fragger. Non. Ton job c'est de <strong>créer de l'espace pour ton équipe</strong>. Tu entres en premier sur le site, tu utilises tes skills pour prendre de l'espace, et ton équipe suit derrière.</p>
            <h3>Ce que tu dois faire</h3>
            <ul>
                <li><strong>ENTRY</strong> — Tu es le premier à entrer sur le site. Pas le deuxième, pas le troisième. LE PREMIER. Tes skills sont faites pour ça.</li>
                <li><strong>Utilise tes skills avant d'entrer</strong> — Jett : dash in après un smoke/updraft. Raze : nade + roomba pour clear. Phoenix : flash + entre. Pas juste dry peek.</li>
                <li><strong>Prends le first contact</strong> — Ton équipe a besoin de savoir où sont les ennemis. C'est toi qui vas chercher cette info.</li>
                <li><strong>Si tu meurs mais que ton équipe a l'info et l'espace, tu as fait ton job</strong></li>
            </ul>
            <h3>Les erreurs du mauvais duelliste</h3>
            <ul>
                <li>Rester derrière l'équipe et "lurk" au lieu d'entrer</li>
                <li>Garder ses skills pour les kills au lieu de les utiliser pour l'équipe</li>
                <li>Être le dernier en vie avec 0 entry mais 15 kills</li>
            </ul>
        `
    },
    {
        cat: "Rôles",
        title: "Jouer Contrôleur correctement",
        tag: "Par rôle",
        diff: "intermediaire",
        preview: "Les smokes c'est pas juste pour bloquer la vue. C'est pour contrôler le tempo.",
        content: `
            <h2>Le rôle du Contrôleur</h2>
            <h3>Ton vrai job</h3>
            <p>Tu contrôles le rythme du round. Tes smokes décident quels angles sont safe, quand l'équipe peut avancer, et quels chemins sont coupés pour les ennemis.</p>
            <h3>Ce que tu dois faire</h3>
            <ul>
                <li><strong>Smoke quand l'équipe en a besoin</strong> — Pas trop tôt (elles expirent avant l'execute), pas trop tard (l'équipe est déjà morte).</li>
                <li><strong>Apprends les one-way smokes</strong> — Des smokes qui te permettent de voir les pieds des ennemis mais pas eux. Game changer.</li>
                <li><strong>Ne gaspille pas tes smokes</strong> — En défense, garde au moins 1 smoke pour le retake. Ne les utilise pas toutes dans les 30 premières secondes.</li>
                <li><strong>Communique</strong> — Dis à ton équipe quand tu smoke, combien il t'en reste, et quand elles vont expirer.</li>
            </ul>
            <h3>Smokes en attaque vs défense</h3>
            <ul>
                <li><strong>Attaque</strong> : smoke les angles dangereux du site pour que l'équipe entre safe (ex: heaven, CT)</li>
                <li><strong>Défense</strong> : smoke les entrées pour ralentir les rushs, ou smoke pour isoler les ennemis qui push</li>
            </ul>
        `
    },
    {
        cat: "Rôles",
        title: "Jouer Sentinelle correctement",
        tag: "Par rôle",
        diff: "intermediaire",
        preview: "Tu es l'ancre de la défense. Ton site ne doit pas tomber facilement.",
        content: `
            <h2>Le rôle de la Sentinelle</h2>
            <h3>Ton vrai job</h3>
            <p>Tu verrouilles un site. Tes gadgets ralentissent, informent et punissent les ennemis qui essaient de prendre ton site. Tu es le dernier à rotate.</p>
            <h3>Ce que tu dois faire</h3>
            <ul>
                <li><strong>Setup tes gadgets intelligemment</strong> — Pas toujours au même endroit. Varie entre les rounds sinon les ennemis vont les détruire systématiquement.</li>
                <li><strong>Donne l'info</strong> — Tes tripwires/alarmbots te disent quand les ennemis arrivent. COMMUNIQUE cette info à ton équipe.</li>
                <li><strong>Joue le temps</strong> — Tu n'as pas besoin de tuer tout le monde. Retarde, fais perdre du temps, et attends les rotations de tes coéquipiers.</li>
                <li><strong>En attaque, sécurise le post-plant</strong> — Place tes gadgets pour couvrir les flancs et les retakes après le plant.</li>
            </ul>
            <h3>Erreurs fréquentes</h3>
            <ul>
                <li>Rotate trop vite et laisser ton site ouvert</li>
                <li>Ne pas varier les setups</li>
                <li>Jouer agressivement comme un duelliste au lieu de jouer le temps</li>
            </ul>
        `
    },
    {
        cat: "Rôles",
        title: "Jouer Initiateur correctement",
        tag: "Par rôle",
        diff: "intermediaire",
        preview: "Tu ouvres le chemin pour le duelliste. Flash, scan, info — dans cet ordre.",
        content: `
            <h2>Le rôle de l'Initiateur</h2>
            <h3>Ton vrai job</h3>
            <p>Tu récupères de l'info et tu facilites l'entrée sur site. Tes flashs, drones et scans permettent à l'équipe de savoir ce qu'il y a derrière chaque angle.</p>
            <h3>Ce que tu dois faire</h3>
            <ul>
                <li><strong>Flash POUR ton duelliste</strong> — Time tes flashs juste avant que le duelliste entre. Pas 3 secondes avant, pas pendant qu'il est déjà mort.</li>
                <li><strong>Récupère l'info AVANT l'execute</strong> — Drone/scan le site pour savoir combien d'ennemis sont dessus et où ils sont.</li>
                <li><strong>Ne gaspille pas tes skills en début de round</strong> — Si tu utilises tout en 10 secondes, t'as plus rien pour le mid-round.</li>
                <li><strong>En défense, utilise tes skills pour retarder</strong> — Un Sova dart ou un Fade haunt en début de round te donne l'info nécessaire sans prendre de risque.</li>
            </ul>
            <h3>La combo magique en attaque</h3>
            <ul>
                <li>1. Initiateur scan/drone le site → info</li>
                <li>2. Contrôleur smoke les angles dangereux → couverture</li>
                <li>3. Initiateur flash → aveuglement</li>
                <li>4. Duelliste entre → entry kill</li>
                <li>5. Le reste de l'équipe suit → prise de site</li>
            </ul>
        `
    },
    // === MENTAL & HABITUDES ===
    {
        cat: "Mental",
        title: "Le tilt : comment ne pas perdre 5 games de suite",
        tag: "Mindset",
        diff: "debutant",
        preview: "Le tilt te fait perdre plus de games que ton aim. Apprends à le gérer.",
        content: `
            <h2>Gérer le tilt</h2>
            <h3>Pourquoi tu tiltes</h3>
            <p>Le tilt c'est quand tes émotions prennent le dessus sur ta logique. Tu commences à faire des peeks stupides, à blâmer ton équipe, à force buy chaque round. Résultat : tu perds encore plus, et tu tiltes encore plus.</p>
            <h3>Les signes</h3>
            <ul>
                <li>Tu commences à blâmer tes coéquipiers pour tout</li>
                <li>Tu fais des peeks agressifs sans raison "pour montrer"</li>
                <li>Tu ne communiques plus ou tu deviens toxique</li>
                <li>Tu re-queue immédiatement après une défaite sans pause</li>
            </ul>
            <h3>Les solutions</h3>
            <ul>
                <li><strong>Règle des 2 défaites</strong> — Après 2 défaites de suite, prends une pause de 15 minutes minimum. Va boire de l'eau, marche un peu.</li>
                <li><strong>Mute les toxiques</strong> — Ne te laisse pas entraîner. Un mute rapide sauve ta game.</li>
                <li><strong>Focus sur toi</strong> — Tu ne peux pas contrôler tes teammates. Concentre-toi sur tes propres décisions.</li>
                <li><strong>Dédramatise</strong> — C'est un jeu. Tu ne perds pas d'argent, tu ne perds rien de réel. Un rang ça remonte.</li>
            </ul>
        `
    },
    {
        cat: "Mental",
        title: "Routine de warm-up efficace",
        tag: "Habitudes",
        diff: "debutant",
        preview: "15 minutes de warm-up bien faites valent mieux qu'une heure de DM sans focus.",
        content: `
            <h2>Warm-up — Bien se chauffer avant de jouer ranked</h2>
            <h3>La routine 15 minutes</h3>
            <ul>
                <li><strong>5 min — The Range</strong> — Mode entraînement, bots en mode "Eliminate 50". Concentre-toi sur le headshot, pas la vitesse. Prends ton temps, vise la tête, accélère progressivement.</li>
                <li><strong>5 min — Deathmatch</strong> — Un seul objectif : crosshair placement. Pas de spray, que des taps et bursts. Ne regarde pas ton score.</li>
                <li><strong>5 min — Deathmatch</strong> — Maintenant joue normalement, avec des sprays et du mouvement. L'objectif c'est de te mettre en "mode combat".</li>
            </ul>
            <h3>Les erreurs de warm-up</h3>
            <ul>
                <li>Faire 1h de DM et être fatigué avant même de jouer ranked</li>
                <li>Ne pas warm-up du tout et "se chauffer en game" — tu gâches les 3-4 premiers rounds</li>
                <li>Warm-up avec Sheriff uniquement — c'est pas les mêmes mécaniques que Vandal/Phantom</li>
            </ul>
        `
    },
    // === AVANCÉ ===
    {
        cat: "Avancé",
        title: "Jouer les post-plant",
        tag: "Strats",
        diff: "avance",
        preview: "Le round ne se gagne pas au plant. Il se gagne dans les 45 secondes après.",
        content: `
            <h2>Post-plant — Gagner après le spike</h2>
            <h3>Le concept</h3>
            <p>Une fois le spike planté, le rapport de force change. C'est maintenant aux DÉFENSEURS de prendre des risques pour retake. Toi, tu dois juste rester en vie et retarder le défuse.</p>
            <h3>Positions post-plant</h3>
            <ul>
                <li><strong>Ne reste PAS à côté du spike</strong> — C'est la première chose que les ennemis vont viser. Recule et prends un angle sur le spike.</li>
                <li><strong>Crossfire</strong> — Si vous êtes 2+, prenez des angles OPPOSÉS sur le spike. L'ennemi ne peut pas check les deux en même temps.</li>
                <li><strong>Joue les mollys/nades</strong> — Viper, Brimstone, KAY/O, Killjoy... beaucoup d'agents ont des skills qui retardent le défuse de loin.</li>
                <li><strong>Joue le son</strong> — Le son du défuse est audible. Si tu entends le défuse, tu peux re-peek. Le défuse prend 7 secondes (3.5 à moitié).</li>
            </ul>
            <h3>Le timing du spike</h3>
            <ul>
                <li>Le spike met 45 secondes à exploser après le plant</li>
                <li>Le défuse prend 7 secondes (3.5 si half)</li>
                <li>Si il reste 8 secondes et l'ennemi n'a pas commencé le défuse, tu as gagné le round — ne peek surtout pas</li>
            </ul>
        `
    },
    {
        cat: "Avancé",
        title: "Jouer les anti-eco",
        tag: "Strats",
        diff: "avance",
        preview: "Gagner un round d'éco adverse semble facile. Pourtant, beaucoup d'équipes les perdent.",
        content: `
            <h2>Anti-eco — Ne donne pas de rounds gratuits</h2>
            <h3>Le problème</h3>
            <p>L'équipe adverse est en eco (pistolets/Spectre). Ton équipe a des Vandal/Phantom. Tu devrais gagner 95% du temps. Pourtant, les eco rounds sont souvent perdus par excès de confiance.</p>
            <h3>Les règles</h3>
            <ul>
                <li><strong>Ne te bats PAS en close range</strong> — Un Classic/Shorty à bout portant tue aussi vite qu'un Vandal. Garde tes distances.</li>
                <li><strong>Ne rush pas</strong> — Ils veulent que tu push dans leurs positions proches. Joue lent, garde la distance, et utilise ton avantage de range.</li>
                <li><strong>Check TOUS les coins</strong> — Les joueurs en eco se cachent dans les coins les plus improbables pour un kill gratuit.</li>
                <li><strong>Ne donne pas ton arme</strong> — Si tu meurs, l'ennemi récupère ton Vandal. Un round perdu + une arme donnée = double peine.</li>
            </ul>
        `
    },
    {
        cat: "Avancé",
        title: "Le lurk : quand et comment",
        tag: "Strats",
        diff: "avance",
        preview: "Lurker c'est pas 'aller de l'autre côté tout seul'. C'est une vraie stratégie.",
        content: `
            <h2>Le lurk — L'art de la pression silencieuse</h2>
            <h3>C'est quoi un lurk ?</h3>
            <p>Le lurk, c'est quand un joueur se sépare de l'équipe pour créer de la pression sur une autre zone de la map, récupérer de l'info, ou couper les rotations adverses.</p>
            <h3>Quand lurker</h3>
            <ul>
                <li><strong>Quand ton équipe execute un site</strong> — Tu vas de l'autre côté pour couper les rotations. Si 4 joueurs push A, tu es mid ou B pour tuer les défenseurs qui rotate.</li>
                <li><strong>Pour info</strong> — Tu écoutes les pas, tu utilises des skills d'info si tu en as, et tu communiques ce que tu entends.</li>
                <li><strong>En fin de round</strong> — Si le spike est planté, un lurk peut couper les retakers qui arrivent par derrière.</li>
            </ul>
            <h3>Quand NE PAS lurker</h3>
            <ul>
                <li>Si tu es le duelliste — ton job c'est d'entrer premier, pas de lurk</li>
                <li>Si ton équipe perd tous les 4v5 parce que tu n'es jamais là</li>
                <li>Si tu lurkes juste pour "chasser des kills" au lieu d'aider l'équipe</li>
                <li>Plus d'1 lurker par équipe = trop de joueurs dispersés</li>
            </ul>
        `
    },
    // === TECHNIQUE ===
    {
        cat: "Technique",
        title: "Spray control & spray transfer",
        tag: "Mécanique",
        diff: "avance",
        preview: "Le spray pattern du Vandal et du Phantom sont prévisibles. Apprends à les dompter.",
        content: `
            <h2>Spray Control & Spray Transfer</h2>
            <h3>Les spray patterns</h3>
            <p>Chaque arme a un spray pattern fixe. Les 6-7 premières balles montent verticalement, puis le pattern part à gauche et à droite. Ce n'est PAS aléatoire — c'est toujours le même schéma.</p>
            <h3>Vandal vs Phantom</h3>
            <ul>
                <li><strong>Vandal</strong> — Le recul monte plus vite et plus haut. Le pattern latéral est plus large. Plus dur à contrôler mais 1 tap headshot à toutes les distances (160 dégâts).</li>
                <li><strong>Phantom</strong> — Recul plus doux, pattern plus serré. Plus facile à spray. Mais fait 140 dégâts en headshot au-delà de 15m (ne tue pas en 1 balle avec bouclier lourd).</li>
            </ul>
            <h3>Spray control : la technique</h3>
            <ul>
                <li><strong>Balles 1-6</strong> — Tire ton crosshair vers le bas progressivement. C'est la partie la plus importante.</li>
                <li><strong>Balles 7-15</strong> — Continue de tirer vers le bas ET commence à compenser le mouvement latéral (gauche-droite selon l'arme).</li>
                <li><strong>Au-delà de 15 balles</strong> — Arrête de spray, reset. Si t'as pas tué en 15 balles, lâche le clic, repositionne, et recommence.</li>
                <li><strong>Astuce</strong> — En situation réelle, les sprays de plus de 10 balles sont rares. Maîtriser les 8 premières balles couvre 90% des situations.</li>
            </ul>
            <h3>Spray transfer</h3>
            <p>C'est le fait de tuer un ennemi en spray puis de déplacer le spray sur un deuxième ennemi SANS lâcher le clic.</p>
            <ul>
                <li>Fonctionne en close/mid range uniquement — en long range, reset et tap</li>
                <li>Tu dois anticiper le recul actuel : si tu es à la 8ème balle et tu transfer, ton crosshair doit être SOUS la tête du deuxième ennemi car ton recul compense</li>
                <li>Le Phantom est bien meilleur pour ça que le Vandal grâce à son recul plus doux</li>
            </ul>
            <h3>Exercice</h3>
            <ul>
                <li>Au Range, tire sur un mur sans bouger la souris pour mémoriser le pattern. Puis essaie de le compenser.</li>
                <li>Place 2 bots côte à côte et entraîne-toi au spray transfer</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Le jeu audio : lire les sons",
        tag: "Game changer",
        diff: "avance",
        preview: "Les pas, les reloads, les skills — chaque son raconte une histoire si tu sais écouter.",
        content: `
            <h2>Le jeu audio — L'info invisible</h2>
            <h3>Les distances de son</h3>
            <ul>
                <li><strong>Pas en courant</strong> — Audibles à environ 40m. C'est ÉNORME. Si tu cours, tout le monde autour sait où tu es.</li>
                <li><strong>Pas en marchant (shift)</strong> — Silencieux. Aucun bruit de pas. Mais tu es très lent.</li>
                <li><strong>Sauter / Atterrir</strong> — Toujours audible, même en marchant. Un saut se fait entendre à 12m environ.</li>
                <li><strong>Reload</strong> — Audible à ~15m. Ne reload JAMAIS à côté d'un angle ennemi si tu as encore des balles.</li>
                <li><strong>Planter/défuser le spike</strong> — Son global distinctif. Tu peux entendre le plant et le défuse de loin.</li>
                <li><strong>Scope (Operator/Marshal)</strong> — Le son du scope est audible à ~40m. Un bon joueur sait quand tu es scopé.</li>
            </ul>
            <h3>Techniques audio avancées</h3>
            <ul>
                <li><strong>Faux bruits de pas</strong> — Cours dans une direction puis shift dans une autre. L'ennemi pense que tu vas quelque part alors que tu vas ailleurs.</li>
                <li><strong>Compter les skills</strong> — Si tu entends Raze utiliser sa nade et son roomba, elle n'a plus que son satchel et son ulti. Ça change comment tu la peek.</li>
                <li><strong>Le timing du silence</strong> — Si tu n'entends rien côté ennemi après 20-30 secondes, deux possibilités : ils marchent (shift) ou ils ne sont pas là. Utilise du son ou de l'info pour départager.</li>
                <li><strong>Différencier les armes</strong> — Le son d'un Vandal est différent d'un Phantom. Un Operator a un son unique. Un Sheriff aussi. Ça te dit ce que l'ennemi a en main avant de le voir.</li>
            </ul>
            <h3>Setup audio</h3>
            <ul>
                <li>Joue avec un casque. TOUJOURS. Pas des enceintes.</li>
                <li>Active HRTF dans les paramètres Valorant pour un meilleur son 3D</li>
                <li>Baisse ta musique in-game à 0, monte les effets sonores</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Counter-strafing & mouvement",
        tag: "Mécanique",
        diff: "avance",
        preview: "La précision au tir dépend directement de ton mouvement. Maîtrise le counter-strafe.",
        content: `
            <h2>Counter-strafing — La base du gunplay propre</h2>
            <h3>Le problème</h3>
            <p>Dans Valorant, quand tu bouges, ton arme est imprécise (sauf le Spectre/Stinger en close range et le Judge). Tu DOIS être immobile pour avoir une précision parfaite. Mais s'arrêter naturellement prend du temps — ton personnage "glisse" pendant ~80ms.</p>
            <h3>La solution : counter-strafe</h3>
            <ul>
                <li>Si tu vas à droite (D), tape brièvement A pour t'arrêter net instantanément</li>
                <li>Si tu vas à gauche (A), tape brièvement D</li>
                <li>Ça annule ta vélocité immédiatement au lieu d'attendre la décélération naturelle</li>
                <li>Tu peux tirer avec précision dès le counter-strafe, soit ~40-50ms plus tôt qu'en lâchant juste la touche</li>
            </ul>
            <h3>Le deadzone</h3>
            <p>Valorant a une "deadzone" de mouvement : en dessous d'une certaine vélocité (~30% de la vitesse max), tu es considéré comme immobile pour la précision. Ça veut dire :</p>
            <ul>
                <li>Tu n'as pas besoin d'être 100% immobile pour tirer précis</li>
                <li>Le counter-strafe n'a pas besoin d'être parfait — un léger mouvement résiduel est ok</li>
                <li>C'est pour ça que le jeu est plus "accessible" que CS2 sur ce point</li>
            </ul>
            <h3>Mouvement avancé</h3>
            <ul>
                <li><strong>A-D strafe</strong> — Alterne A et D entre chaque burst/tap. Ça te rend difficile à toucher tout en gardant la précision à chaque arrêt.</li>
                <li><strong>Ne crouch pas en premier réflexe</strong> — Le crouch réduit ton recul MAIS te rend immobile et plus facile à headshot pour les joueurs qui visent le corps. Utilise-le uniquement en mid-spray, pas comme premier mouvement.</li>
                <li><strong>Ferrari peek</strong> — Wide swing à pleine vitesse + counter-strafe + tir. Tu sors très large, tu surprends l'ennemi, et tu counter-strafe pour être précis. Utilisé en pro play constamment.</li>
            </ul>
            <h3>Exercice</h3>
            <ul>
                <li>En DM, force-toi à toujours counter-strafe avant de tirer. Même si tu rates, le but c'est le réflexe.</li>
                <li>Entraîne-toi au A-D peek : strafe gauche, tire 2 balles, strafe droite, tire 2 balles. Répète.</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Angle advantage & isolation",
        tag: "Positionnement",
        diff: "avance",
        preview: "L'angle advantage c'est pourquoi tu meurs en peeking sans comprendre. La géométrie te tue.",
        content: `
            <h2>Angle Advantage — La géométrie du FPS</h2>
            <h3>Le principe fondamental</h3>
            <p>Plus tu es LOIN d'un angle (mur/coin), plus tu vois l'ennemi tôt quand il sort. Plus tu es PROCHE d'un angle, plus l'ennemi te voit en premier. C'est de la pure géométrie.</p>
            <h3>Concrètement</h3>
            <ul>
                <li><strong>En défense (tu tiens un angle)</strong> — Éloigne-toi du mur. Si tu es collé au mur, l'attaquant te voit avant toi. Recule de 2-3 mètres et tu as l'avantage.</li>
                <li><strong>En attaque (tu peek un angle)</strong> — Le défenseur a souvent l'angle advantage parce qu'il est loin du mur. C'est pour ça qu'il faut peek wide : tu forces le fight à une distance où l'angle advantage est réduit.</li>
                <li><strong>Off-angle</strong> — Un position inattendue, pas sur l'angle habituel. L'ennemi pré-aim l'angle classique, tu es ailleurs. Ça te donne un avantage de réaction de 200-400ms.</li>
            </ul>
            <h3>Isoler les duels (angle isolation)</h3>
            <ul>
                <li><strong>Règle #1</strong> — Ne prends JAMAIS un fight contre 2 joueurs en même temps. Positionne-toi pour n'en voir qu'un à la fois.</li>
                <li><strong>Comment isoler</strong> — Utilise les murs, les caisses, les smokes pour couper les lignes de vue. Si tu vois 2 ennemis, recule jusqu'à n'en voir qu'un.</li>
                <li><strong>Slice the pie</strong> — En entrant sur un site, tourne lentement autour de chaque angle pour les clear un par un au lieu de sprinter au milieu.</li>
            </ul>
            <h3>Pourquoi tu meurs en peeking</h3>
            <ul>
                <li>Tu es trop proche de l'angle = l'ennemi te voit d'abord</li>
                <li>Tu peek dans 2+ ennemis à la fois = tu ne peux pas tous les tuer</li>
                <li>Tu te repositionnes pas après un kill = le deuxième ennemi te refrag</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Valorant à 128 tick : les timings exacts",
        tag: "Data",
        diff: "avance",
        preview: "Temps de dégainer, planter, défuser, les distances exactes — les chiffres que les pros connaissent.",
        content: `
            <h2>Les chiffres de Valorant — Données techniques</h2>
            <h3>Timing des armes</h3>
            <ul>
                <li><strong>Temps de sortie du couteau → arme</strong> — ~0.75s pour rifles, ~1.0s pour l'Operator. Ne cours JAMAIS couteau en main près d'un angle ennemi.</li>
                <li><strong>Operator re-scope</strong> — ~1.3s entre deux tirs scopés. Assez long pour que l'ennemi te re-peek.</li>
                <li><strong>Temps de reload</strong> — Vandal : 2.5s / Phantom : 2.5s / Operator : 3.7s / Sheriff : 2.25s</li>
                <li><strong>Rate of fire</strong> — Vandal : 9.75 balles/sec / Phantom : 11 balles/sec / Spectre : 13.33 balles/sec</li>
            </ul>
            <h3>Timing du spike</h3>
            <ul>
                <li><strong>Planter</strong> — 4 secondes. Tu es vulnérable pendant ce temps.</li>
                <li><strong>Timer du spike</strong> — 45 secondes après le plant</li>
                <li><strong>Défuse complet</strong> — 7 secondes</li>
                <li><strong>Half défuse</strong> — 3.5 secondes (visible par la barre à 50%)</li>
                <li><strong>Le spike bipe</strong> — Les bips accélèrent. Le dernier bip rapide commence à ~12 secondes de l'explosion.</li>
                <li><strong>Calcul clé</strong> — Si il reste ≤7 secondes, l'ennemi DOIT être déjà en train de défuser sinon il perd. Si il reste ≤3.5 secondes, même un half défuse ne suffit plus.</li>
            </ul>
            <h3>Vitesse de déplacement</h3>
            <ul>
                <li><strong>Couteau</strong> — 6.75 m/s (le plus rapide)</li>
                <li><strong>Sidearm (pistol)</strong> — 5.73 m/s</li>
                <li><strong>Rifle (Vandal/Phantom)</strong> — 5.4 m/s</li>
                <li><strong>Operator</strong> — 5.13 m/s (le plus lent)</li>
                <li><strong>Marche (shift)</strong> — 40% de ta vitesse normale</li>
                <li><strong>Crouch walk</strong> — ~35% de ta vitesse normale et silencieux</li>
            </ul>
            <h3>Dégâts — Ce qu'il faut retenir</h3>
            <ul>
                <li><strong>Vandal headshot</strong> — 160 à TOUTES distances = kill à travers bouclier lourd (150 HP)</li>
                <li><strong>Phantom headshot</strong> — 156 (0-15m) / 140 (15-30m) / 124 (30-50m). Au-delà de 15m ça ne one-shot plus un bouclier lourd !</li>
                <li><strong>Sheriff headshot</strong> — 159 (0-30m) / 145 (30m+). One-shot uniquement en close-mid range</li>
                <li><strong>Ghost headshot</strong> — 105 (0-30m). Ne one-shot pas un bouclier lourd, mais tue un bouclier léger (125 HP)</li>
                <li><strong>Classic right-click</strong> — 3 balles × 78 dégâts = instant kill en close range (< 8m) si au moins 2 touchent la tête</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Utiliser le son de ses propres pas",
        tag: "Mindgame",
        diff: "avance",
        preview: "Tes pas c'est pas juste du bruit — c'est un outil de manipulation si tu sais t'en servir.",
        content: `
            <h2>Manipuler avec le son — Le faux jeu</h2>
            <h3>Fake footsteps</h3>
            <ul>
                <li><strong>Le fake rotate</strong> — En attaque, cours bruyamment vers A, puis shift vers B. L'ennemi entend les pas A et rotate, tu exécutes B. Fonctionne 1-2 fois par match max avant qu'ils comprennent.</li>
                <li><strong>Le fake push</strong> — En défense, cours vers l'avant comme si tu push agressif, puis shift et repositionne-toi. L'ennemi attend ton peek mais tu es plus là.</li>
                <li><strong>Le fake defuse</strong> — Commence le défuse (audible), lâche après 0.5s, l'ennemi peek pour te stopper, tu le tues. Puis tu défuses pour de vrai.</li>
            </ul>
            <h3>Le silence tactique</h3>
            <ul>
                <li><strong>Shift timing</strong> — En début de round, personne n'a d'info. Si tu marches (shift) sur un site en défense, tu peux surprendre un rush ennemi avec un timing inattendu.</li>
                <li><strong>Le "dead zone"</strong> — Chaque map a des zones où le bruit ne porte pas de manière utile. Sur Ascent, si tu cours en A main pendant que ton équipe fait du bruit mid, le son est noyé.</li>
                <li><strong>Masquer ses pas</strong> — Cours pendant les moments bruyants : une smoke qui se déploie, un drone Sova, un Raze satchel, un round start. Les ennemis n'entendront pas tes pas à travers le bruit des skills.</li>
            </ul>
            <h3>Lire les pas ennemis</h3>
            <ul>
                <li><strong>Compter les pas</strong> — Si tu entends 3 sets de pas côté A, il y en a probablement 1-2 ailleurs. Pas 5.</li>
                <li><strong>La direction</strong> — Les pas indiquent non seulement la position mais aussi la direction. S'ils s'éloignent = rotate. S'ils se rapprochent = push imminent.</li>
                <li><strong>Le silence soudain</strong> — Si tu entendais des pas et d'un coup plus rien, l'ennemi est passé en shift. Il est TOUT PRÈS. Prépare-toi.</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Peeking avancé : les techniques de pro",
        tag: "Mécanique",
        diff: "avance",
        preview: "Ferrari peek, jiggle peek avec info, double swing, swing timing — les peeks de haut niveau.",
        content: `
            <h2>Peeking de haut niveau</h2>
            <h3>Ferrari peek (wide swing)</h3>
            <ul>
                <li>Tu cours à pleine vitesse, tu swings TRÈS large autour de l'angle, tu counter-strafe et tu tires</li>
                <li>L'ennemi qui tient l'angle a pré-aim PRÈS du mur. En swingant large, tu es loin de son crosshair</li>
                <li>Combine avec du strafing : tu swings large puis tu continues de strafe pendant que tu tires</li>
                <li>Meilleur avec un Phantom (first bullet accuracy meilleure en mouvement résiduel)</li>
            </ul>
            <h3>Double swing (swing synchronisé)</h3>
            <ul>
                <li>Deux joueurs peek le même ennemi en même temps depuis des angles différents</li>
                <li>L'ennemi ne peut physiquement pas viser les deux à la fois — il en tue 1 max, l'autre le trade</li>
                <li>Nécessite de la communication : "3, 2, 1, go" ou un signal visuel/audio</li>
                <li>C'est le counter #1 contre un Operator en défense. L'Op ne peut tuer qu'un joueur avant le re-scope.</li>
            </ul>
            <h3>Jiggle peek pour info</h3>
            <ul>
                <li>Peek ultra rapide avec A-D, tu ne tires PAS. Le but c'est juste de voir.</li>
                <li>Tu peux jiggle 2-3 fois pour clear un angle sans risque. Si tu vois quelqu'un, tu sais où il est pour le vrai peek.</li>
                <li>Contre un Operator : jiggle → l'Op tire et miss → re-peek LARGE pendant son re-scope (1.3s de fenêtre).</li>
            </ul>
            <h3>Crouch peeking : quand l'utiliser vraiment</h3>
            <ul>
                <li>UNIQUEMENT en close range quand tu sais où est l'ennemi</li>
                <li>UNIQUEMENT si tu spray — un crouch peek + tap ça n'a aucun sens</li>
                <li>Le crouch change ta tête de position, ce qui peut esquiver un headshot si l'ennemi a pré-aim la hauteur debout</li>
                <li>Ne crouch PAS par défaut. En Diamond+ les joueurs visent souvent le corps, et ton crouch met ta tête exactement au niveau de leur crosshair</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Retake : reprendre un site planté",
        tag: "Strats",
        diff: "avance",
        preview: "Les retakes se gagnent avec du timing, de l'utilité et de la coordination — pas en rushant.",
        content: `
            <h2>Retake — L'art de reprendre un site</h2>
            <h3>Avant le retake</h3>
            <ul>
                <li><strong>Attends tes coéquipiers</strong> — Ne retake PAS seul en 1v3. Attends les rotations. Mieux vaut retake 3v3 avec 25 secondes que 1v3 avec 40 secondes.</li>
                <li><strong>Compte les ennemis</strong> — Combien sont sur site ? Où ont été vus les derniers ? Y a-t-il un lurker derrière toi ?</li>
                <li><strong>Économise tes skills</strong> — Si tu as utilisé toutes tes skills au début du round, tu n'as rien pour retake. Grave erreur.</li>
            </ul>
            <h3>Pendant le retake</h3>
            <ul>
                <li><strong>Utilité d'abord</strong> — Balance tout avant d'entrer : smokes pour couper, mollys/nades sur le spike, flashes pour aveugler. Le retake se prépare avec les skills.</li>
                <li><strong>Entre de plusieurs côtés</strong> — Si 3 joueurs retake, ils doivent venir de 2-3 angles différents. Pas tous par la même porte.</li>
                <li><strong>Le timing de l'utilité</strong> — Molly le spike PENDANT que tes mates entrent. L'ennemi doit choisir : éviter la molly ou se battre. Il ne peut pas faire les deux.</li>
            </ul>
            <h3>Retake vs save</h3>
            <ul>
                <li><strong>1v3 ou pire avec un Vandal</strong> — Souvent mieux de save l'arme (se cacher et garder le gun pour le prochain round) plutôt que de tenter un retake suicide</li>
                <li><strong>Éco round</strong> — Si ton équipe est en eco, ne tente pas le retake. Save.</li>
                <li><strong>Exception</strong> — Match point ou score très serré, tu dois tenter même si les chances sont faibles</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Map control et default",
        tag: "Strats",
        diff: "avance",
        preview: "Un default c'est pas 'on fait rien'. C'est une prise de contrôle méthodique de la map.",
        content: `
            <h2>Map Control & Default — Jouer méthodique</h2>
            <h3>C'est quoi un default ?</h3>
            <p>Un default, c'est quand l'équipe en attaque ne rush pas directement un site mais se répartit sur la map pour prendre du contrôle, récupérer de l'info, et décider ensuite où execute. C'est le style de jeu dominant en haut niveau.</p>
            <h3>Comment jouer un default</h3>
            <ul>
                <li><strong>2-1-2 ou 1-3-1</strong> — Répartis l'équipe sur 2-3 zones. Exemple sur Ascent : 2 joueurs A main, 1 mid, 2 B main. Vous prenez de l'espace partout.</li>
                <li><strong>Prends du contrôle early</strong> — Les 30 premières secondes servent à prendre du map control : mid control, prise de main, info avec skills.</li>
                <li><strong>Communique l'info</strong> — "Personne A short", "J'entends 2 joueurs B", "Mid est libre". L'IGL (le shotcaller) décide ensuite où execute.</li>
                <li><strong>Execute tard</strong> — Un default se conclut souvent par un execute avec 30-40 secondes restantes. Plus tu exécutes tard, moins le défenseur a le temps de rotate.</li>
            </ul>
            <h3>Map control en défense</h3>
            <ul>
                <li><strong>Ne donne pas le contrôle gratuitement</strong> — Si tu laisses mid ouvert dès le début, l'attaque a le contrôle de toute la map.</li>
                <li><strong>Les "early peeks"</strong> — Un peek agressif en début de round pour avoir une info ou un kill, puis tu te replaces. Risqué mais très reward.</li>
                <li><strong>Perte de map control = rotation forcée</strong> — Si tu perds mid control, tu ne peux plus rotate entre les sites facilement.</li>
            </ul>
            <h3>Le timing</h3>
            <ul>
                <li><strong>0-30s</strong> — Prise de map control, info gathering, positionnement</li>
                <li><strong>30-60s</strong> — Fake, adjust, décision de l'execute</li>
                <li><strong>60-100s</strong> — Execute le site ou commit sur le play</li>
                <li>Les erreurs : execute trop tôt (le défenseur a le temps de rotate) ou trop tard (pas assez de temps pour planter)</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Économie avancée : math de l'éco",
        tag: "Data",
        diff: "avance",
        preview: "Le système d'éco est plus profond que buy/save. Comprends les loss streaks, les bonus et les forces.",
        content: `
            <h2>Économie avancée — Le vrai système</h2>
            <h3>Le système de revenus</h3>
            <ul>
                <li><strong>Victoire</strong> — 3000 crédits</li>
                <li><strong>Défaite</strong> — 1900 (1ère défaite), 2400 (2ème consécutive), 2900 (3ème+). Le "loss bonus" augmente.</li>
                <li><strong>Kill</strong> — 200 crédits par kill (avec la plupart des armes)</li>
                <li><strong>Plant du spike</strong> — 300 crédits pour le planteur</li>
                <li><strong>Maximum</strong> — 9000 crédits. Au-delà, tu perds de l'argent. Si tu es à 8500, achète quelque chose.</li>
            </ul>
            <h3>Les situations d'éco critiques</h3>
            <ul>
                <li><strong>Le bonus round (2ème round)</strong> — Si tu gagnes le pistol, l'ennemi a ~1900. Ils achèteront probablement un Spectre/Marshal max. Toi tu as ~3800+ avec le bonus arme. Prends un Spectre + skills, pas besoin d'un Vandal.</li>
                <li><strong>Le force buy</strong> — Acheter sans avoir assez pour un full buy. Parfois stratégique au round 2 après une défaite du pistol (Spectre + léger bouclier) si l'adversaire ne s'y attend pas.</li>
                <li><strong>L'éco read</strong> — Compte l'argent adversaire. S'ils ont gagné puis perdu, ils sont probablement broke round suivant. Si tu sais qu'ils eco, adapte ton jeu (pas d'Operator, plus d'agressivité).</li>
            </ul>
            <h3>Calculer quand buy ou save</h3>
            <ul>
                <li><strong>Minimum pour full buy next round</strong> — Si tu save (~5000-5500 pour être sûr), tu peux full buy avec toutes tes skills.</li>
                <li><strong>La question</strong> — "Si je dépense maintenant et que je perds, est-ce que je peux full buy le round d'après ?" Si non, save.</li>
                <li><strong>Buy as a team</strong> — Même si TOI tu peux buy, si 3 coéquipiers ne peuvent pas, tu save avec eux. L'exception : tu gardes un Operator/Vandal d'un round précédent.</li>
            </ul>
            <h3>Achats spécifiques par round</h3>
            <ul>
                <li><strong>Pistol (R1)</strong> — Ghost (500) ou Frenzy (450) + skill, ou full abilities pas de gun</li>
                <li><strong>Anti-eco (R2 après victoire)</strong> — Spectre (1600) + bouclier léger (400) + skills. NE PAS acheter de rifle, c'est du gâchis si tu meurs vs des pistolets</li>
                <li><strong>Full buy</strong> — Vandal/Phantom (2900) + bouclier lourd (1000) + toutes tes skills</li>
                <li><strong>Half buy</strong> — Marshal (950) ou Spectre (1600) + bouclier léger. Pour les rounds "on tente mais on save si possible"</li>
            </ul>
        `
    },
    {
        cat: "Technique",
        title: "Clutch : jouer les 1vX",
        tag: "Mindgame",
        diff: "avance",
        preview: "Les clutchs ne sont pas de la chance. C'est du processus, du timing et du calme.",
        content: `
            <h2>Clutch — Gagner en infériorité numérique</h2>
            <h3>La mentalité</h3>
            <p>En clutch, tu as un avantage que les gens oublient : tu sais qu'il y a X ennemis et ils ne savent pas forcément où tu es. L'info est TON avantage en clutch.</p>
            <h3>Les principes</h3>
            <ul>
                <li><strong>Ne te précipite pas</strong> — Le temps joue pour toi en défense (ils doivent planter), contre toi en attaque (tu dois planter). Adapte ton rythme.</li>
                <li><strong>Isole les duels</strong> — En 1v3, tu ne peux pas gagner un 1v3 simultané. Mais tu peux gagner 3 duels 1v1 séparés. Positionne-toi pour ne voir qu'un ennemi à la fois.</li>
                <li><strong>Utilise le son</strong> — En clutch, le son est ROI. Marche (shift), écoute leurs pas, déduis leurs positions. Eux vont souvent courir par excès de confiance.</li>
                <li><strong>Joue les angles imprévisibles</strong> — En clutch, les ennemis clear les angles classiques. Joue un off-angle qu'ils ne check pas.</li>
            </ul>
            <h3>Clutch en attaque (tu dois planter)</h3>
            <ul>
                <li>Plante quand tu as l'espace, pas quand tu es pressé par le temps. Un plant safe change tout.</li>
                <li>Plante pour toi : choisis la position de plant qui te donne le meilleur angle post-plant.</li>
                <li>Si il reste peu de temps, tu DOIS plant. Fake defuse + re-peek fonctionne très bien en 1v1 post-plant.</li>
            </ul>
            <h3>Clutch en défense (spike planté)</h3>
            <ul>
                <li><strong>Le fake défuse</strong> — Tape le défuse (audible), lâche, l'ennemi peek → tu le tues. Marche 1-2 fois par match.</li>
                <li><strong>Le half défuse</strong> — Commence le défuse, lâche à mi-chemin quand tu entends un peek, tue l'ennemi, finis le défuse. Tu as déjà 3.5s de fait.</li>
                <li><strong>Compter le temps</strong> — Si il reste plus de 7 secondes, tu as le temps de fake + défuse. Si il reste moins de 7 secondes, tu DOIS défuser maintenant.</li>
            </ul>
            <h3>Erreurs fatales en clutch</h3>
            <ul>
                <li>Courir → tu donnes ta position, c'est fini</li>
                <li>Peek quand le temps joue pour toi → tu donnes un duel gratuit</li>
                <li>Oublier de vérifier le timer du spike avant de commit</li>
                <li>Re-peek le même angle après un kill → le deuxième ennemi te pre-aim déjà</li>
            </ul>
        `
    }
];

// === RENDER ===
const categories = [...new Set(guides.map(g => g.cat))];
let activeTab = 'Tous';

function renderTabs() {
    const tabsEl = document.getElementById('tabs');
    const allBtn = `<button class="tab-btn active" onclick="filterGuides('Tous')">Tous</button>`;
    const catBtns = categories.map(c =>
        `<button class="tab-btn" onclick="filterGuides('${c}')">${c}</button>`
    ).join('');
    tabsEl.innerHTML = allBtn + catBtns;
}

function filterGuides(cat) {
    activeTab = cat;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === cat);
    });
    closeDetail();
    renderGuides();
}

function renderGuides() {
    const grid = document.getElementById('guides-grid');
    const filtered = activeTab === 'Tous' ? guides : guides.filter(g => g.cat === activeTab);
    grid.innerHTML = filtered.map((g, i) => {
        const realIndex = guides.indexOf(g);
        return `
        <div class="guide-card" onclick="openGuide(${realIndex})">
            <h3>${g.title} <span class="tag">${g.tag}</span></h3>
            <span class="difficulty diff-${g.diff}">${g.diff.charAt(0).toUpperCase() + g.diff.slice(1)}</span>
            <p class="preview">${g.preview}</p>
        </div>`;
    }).join('');
}

function openGuide(index) {
    const g = guides[index];
    const detail = document.getElementById('guide-detail');
    document.getElementById('guide-detail-content').innerHTML = g.content;
    detail.classList.add('visible');
    detail.scrollIntoView({ behavior: 'smooth' });
}

function closeDetail() {
    document.getElementById('guide-detail').classList.remove('visible');
}

// Init
renderTabs();
renderGuides();
