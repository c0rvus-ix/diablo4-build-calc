let barbarianData = {};

barbarianData["Trunk Data"] = {
	"Basic": {
		connections: [ "Core" ],
		x: 0,
		y: 0
	},
	"Core": {
		connections: [ "Defensive" ],
		requiredPoints: 2,
		x: -1195.793,
		y: 608.605
	},
	"Defensive": {
		connections: [ "Brawling" ],
		requiredPoints: 6,
		x: 513.061,
		y: 1515.17
	},
	"Brawling": {
		connections: [ "Weapon Mastery" ],
		requiredPoints: 11,
		x: -1196.428,
		y: 2431.825
	},
	"Weapon Mastery": {
		connections: [ "Ultimate" ],
		requiredPoints: 16,
		x: 508.717,
		y: 3341.88
	},
	"Ultimate": {
		connections: [ "Key Passive" ],
		requiredPoints: 23,
		x: -1201.379,
		y: 4252.025
	},
	"Key Passive": {
		requiredPoints: 33,
		x: -6.388,
		y: 4863.1
	},
};

barbarianData["Basic"] = {
	"Bash": {
		connections: [ "Basic", "Enhanced Bash" ],
		description: `Attack Speed Multiplier: 1.25
Generate Fury: 10
Lucky Hit Chance: 50% (per hit)
Bash the enemy with your weapon, dealing {30/33/36/39/42/45/48/51/54/57}% damage. After bashing enemies 4 times, your next Bash will Stun for 1.25 seconds, this increases to 2 seconds if using a Two-Handed weapon.

Tags: Basic, Bludgeoning, Fury, Physical, Damage, Crowd Control, Two-Handed.`,
		nameLocalized: {
			"deDE": "Hieb",
			"esES": "Porrazo",
			"esMX": "Porrazo",
			"frFR": "Raclée",
			"itIT": "Colpo Poderoso",
			"jaJP": "バッシュ",
			"koKR": "후려치기",
			"plPL": "Grzmotnięcie",
			"ptBR": "Trombar",
			"ruRU": "Сокрушающий удар",
			"zhCN": "猛击",
			"zhTW": "猛擊"
},
		descriptionLocalized: {
			"deDE": "Attack Speed Multiplier: 1.25\nErzeugte Wut: 10\nGlückstrefferchance: 50% (per hit)\nVersetzt dem Gegner einen Hieb mit Eurer Waffe und verursacht {30/33/36/39/42/45/48/51/54/57}% Schaden. Wenn Ihr Gegner 4 Mal getroffen habt, betäubt Euer nächster Hieb 1.25 Sek. lang. Wird auf 2 Sek. erhöht, wenn Ihr Zweihandwaffen verwendet.\n\nTags: Basis, Wuchtwaffe, Wut, Physisch, Schaden, Kontrollverlust, Zweihändig.",
			"esES": "Attack Speed Multiplier: 1.25\nGeneración de furia: 10\nProbabilidad de golpe de suerte: 50% (per hit)\nAporreas al enemigo con tu arma y le infliges {30/33/36/39/42/45/48/51/54/57}% de daño. Tras aporrear enemigos 4 veces, tu siguiente Porrazo aturdirá durante 1.25 s, que aumentarán a 2 s si usas un arma de dos manos.\n\nTags: Básica, Contundente, Furia, Física, Daño, Control de masas, Dos manos.",
			"esMX": "Attack Speed Multiplier: 1.25\nGeneración de Furia: 10\nProbabilidad de golpe afortunado: 50% (per hit)\nDas un porrazo al enemigo con tu arma e infliges {30/33/36/39/42/45/48/51/54/57}% de daño. Luego de dar porrazos a los enemigos 4 veces, tu próximo Porrazo aturdirá durante 1.25 segundos. Esto aumenta a 2 segundos si usas un arma de dos manos.\n\nTags: Básica, Impacto, Furia, Física, Daño, Control de multitudes, Dos manos.",
			"frFR": "Attack Speed Multiplier: 1.25\nFureur générée: 10\nChances d'obtenir un coup de chance: 50% (per hit)\nVous frappez l'adversaire avec votre arme et lui infligez {30/33/36/39/42/45/48/51/54/57}% points de dégâts. Après avoir frappé des adversaires 4 fois, votre prochaine Raclée étourdira pendant 1.25 s, cette durée passant à 2 s si vous utilisez une arme à deux mains.\n\nTags: Basique, Arme contondante, Fureur, Dégâts physiques, Dégâts, Perte de contrôle, Arme à deux mains.",
			"itIT": "Attack Speed Multiplier: 1.25\nGenerazione furia: 10\nProbabilità di colpo fortunato: 50% (per hit)\nColpisci il nemico con la tua arma, infliggendo {30/33/36/39/42/45/48/51/54/57}% danni. Dopo aver colpito i nemici 4 volte, il tuo prossimo Colpo poderoso stordirà il nemico per 1.25 s, che aumenteranno a 2 s se usi un'arma a due mani.\n\nTags: Base, Contundente, Furia, Fisico, Danni, Effetti debilitanti, A due mani.",
			"jaJP": "Attack Speed Multiplier: 1.25\n怒気生成量: 10\n幸運の一撃発生率: 50% (per hit)\n武器で敵を〈バッシュ〉し、{30/33/36/39/42/45/48/51/54/57}%のダメージを与える。敵を4回〈バッシュ〉すると、次に繰り出した〈バッシュ〉に1.25秒間スタンさせる効果が加わる。両手武器を使用している場合、この効果は2秒に増加する。\n\nTags: 基本, 殴打, 怒気, 物理, ダメージ, 操作障害効果, 両手用武器.",
			"koKR": "Attack Speed Multiplier: 1.25\n생성: 분노 10\n행운의 적중 확률: 50% (per hit)\n무기로 적을 후려쳐, {30/33/36/39/42/45/48/51/54/57}%의 피해를 줍니다. 적을 4번 후려친 후 다음 후려치기 공격은 적을 1.25초 동안 기절시키며, 양손 무기를 사용 중일 경우 기절 시간이 2초로 증가합니다.\n\nTags: 기본, 둔기, 분노, 물리, 피해, 군중 제어, 양손 무기.",
			"plPL": "Attack Speed Multiplier: 1.25\nGeneruje: 10 pkt. furii\nSzansa na szczęśliwy traf: 50% (per hit)\nGrzmotnij wroga bronią, zadając {30/33/36/39/42/45/48/51/54/57}% pkt. obrażeń. Po grzmotnięciu wrogów 4 razy twoje następne Grzmotnięcie ogłuszy na 1.25 sek., a efekt wydłuży się do 2 sek., jeśli korzystasz z broni dwuręcznej.\n\nTags: Podstawowe, Obuchowe, Furia, Fizyczne, Obrażenia, Ograniczanie Kontroli, Dwuręczne.",
			"ptBR": "Attack Speed Multiplier: 1.25\nGerar Fúria: 10\nChance de Golpe de Sorte: 50% (per hit)\nGolpeia o inimigo com sua arma, causando {30/33/36/39/42/45/48/51/54/57}% de dano. Depois de golpear inimigos 4 vezes, seu próximo Trombar atordoará por 1.25 segundos. Isso aumenta para 2 segundos se estiver usando uma arma de duas mãos.\n\nTags: Básica, Concussão, Fúria, Física, Dano, Controle de Grupo, Duas mãos.",
			"ruRU": "Attack Speed Multiplier: 1.25\nДает ярость: 10 ед.\nВероятность удачного удара: 50% (per hit)\nВы совершаете сокрушающий удар оружием, нанося противнику {30/33/36/39/42/45/48/51/54/57}% ед. урона. После 4 попаданий следующий \"Сокрушающий удар\" оглушает цель на 1.25 сек. Оглушение продлевается до 2 сек., если вы атакуете двуручным оружием.\n\nTags: Базовое, Дробящее оружие, Ярость, Физический урон, Урон, Контроль, Двуручное.",
			"zhCN": "Attack Speed Multiplier: 1.25\n生成怒气: 10\n幸运一击几率: 50% (per hit)\n使用你的武器猛击敌人, 造成 {30/33/36/39/42/45/48/51/54/57}% 点伤害。猛击敌人 4 次后, 你的下一个猛击会击晕敌人 1.25 秒, 如果使用双手武器该效果提高至 2 秒。\n\nTags: 基础, 钝击, 怒气, 物理, 伤害, 群控, 双手.",
			"zhTW": "Attack Speed Multiplier: 1.25\n產生怒氣:10\n幸運觸發機率: 50% (per hit)\n使用武器猛擊敵人時,造成 {30/33/36/39/42/45/48/51/54/57}% 點傷害。猛擊敵人 4 次後,你的下一個猛擊會擊昏 1.25 秒,若使用雙手武器則提高至 2 秒。\n\nTags: 基本, 鈍擊, 怒氣, 物理, 傷害, 控場, 雙手."
},
		id: 0,
		maxPoints: 5,
		x: -205.484,
		y: -249.495
	},
	"Enhanced Bash": {
		baseSkill: "Bash",
		connections: [ "Bash", "Battle Bash", "Combat Bash" ],
		description: `Damaging a Stunned enemy with Bash grants you 10% Base Life as Fortify. Double this amount when using a Two-Handed weapon.`,
		nameLocalized: {
			"deDE": "Verbesserter Hieb",
			"esES": "Porrazo mejorado",
			"esMX": "Porrazo Potenciado",
			"frFR": "Raclée renforcée",
			"itIT": "Colpo Poderoso Rinforzato",
			"jaJP": "バッシュ(強化版)",
			"koKR": "강화된 후려치기",
			"plPL": "Wzmocnione Grzmotnięcie",
			"ptBR": "Trombar Aperfeiçoado",
			"ruRU": "Усиленный сокрушающий удар",
			"zhCN": "强化猛击",
			"zhTW": "強化猛擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem betäubten Gegner mit Hieb Schaden zufügt, erhaltet Ihr 10% Eures Basislebens als Stählung. Diese Menge verdoppelt sich, wenn Ihr Zweihandwaffen verwendet.",
			"esES": "Infligir daño a un enemigo aturdido con Porrazo te otorga un 10% de tu vida base como fortificación. Esta cantidad se duplica al usar un arma de dos manos.",
			"esMX": "Infligir daño a un enemigo aturdido con Porrazo te fortifica con un 10% de tu vida de base. La cantidad se duplica cuando usas un arma de dos manos.",
			"frFR": "Infliger des dégâts à une cible étourdie avec Raclée vous confère un montant de fortification égal à 10% de vos points de vie de base. Ce montant est doublé lorsque vous utilisez une arme à deux mains.",
			"itIT": "Infliggere danni a un nemico stordito con Colpo Poderoso ti fornisce il 10% della Vita base come Fortificazione. Questo ammontare raddoppia se usi un'arma a due mani.",
			"jaJP": "スタン中の敵に〈バッシュ〉でダメージを与えると、基本ライフの10%にあたるの強化を獲得する。両手武器を使用している場合、この効果は2倍になる。",
			"koKR": "후려치기로 기절한 적에게 피해를 주면 기본 생명력의 10%에 해당하는 보강 효과를 얻습니다. 양손 무기를 사용 중일 경우 효과가 2배로 증가합니다.",
			"plPL": "Zranienie ogłuszonego wroga Grzmotnięciem zapewnia ci 10% podstawowego zdrowia jako umocnienie. Wartość ta podwaja się w przypadku korzystania z broni dwuręcznej.",
			"ptBR": "Causar dano a um inimigo atordoado com Trombar concede a você 10% de vida básica como fortificação. O valor é dobrado ao usar uma arma de duas mãos.",
			"ruRU": "Когда \"Сокрушающий удар\" наносит урон оглушенному противнику, вы получаете укрепление в объеме 10% базового запаса здоровья. Этот объем удваивается при использовании двуручного оружия.",
			"zhCN": "使用猛击对一名昏迷敌人造成伤害给予你 10% 基础生命 作为强固。使用双手武器时该数值翻倍。",
			"zhTW": "以猛擊對昏迷的敵人造成傷害,可賦予你相當於 10% 基礎生命值的強韌。使用雙手武器會使此效果加倍。"
},
		id: 1,
		maxPoints: 1,
		x: -276.815,
		y: -436.63
	},
	"Battle Bash": {
		baseSkill: "Bash",
		connections: [ "Enhanced Bash" ],
		description: `Damaging a Stunned enemy with Bash generates an additional 3 Fury, or 4 Fury if using a Two-Handed weapon.`,
		nameLocalized: {
			"deDE": "Schlachthieb",
			"esES": "Porrazo de batalla",
			"esMX": "Porrazo de Batalla",
			"frFR": "Raclée guerrière",
			"itIT": "Colpo Poderoso da Battaglia",
			"jaJP": "バッシュ(闘争)",
			"koKR": "전투 후려치기",
			"plPL": "Bitewne Grzmotnięcie",
			"ptBR": "Trombar de Batalha",
			"ruRU": "Резкий сокрушающий удар",
			"zhCN": "战斗猛击",
			"zhTW": "戰鬥猛擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem betäubten Gegner mit Hieb Schaden zufügt, werden zusätzlich 3 Wut erzeugt oder 4 Wut, wenn Ihr Zweihandwaffen verwendet.",
			"esES": "Infligir daño a un enemigo aturdido con Porrazo genera 3 más de furia, o 4 de furia si usas un arma de dos manos.",
			"esMX": "Infligir daño a un enemigo aturdido con Porrazo genera 3 más de Furia, o 4 de Furia si usas un arma de dos manos.",
			"frFR": "Infliger des dégâts à une cible étourdie avec Raclée génère 3 points de fureur supplémentaires, ou 4 points de fureur supplémentaires si vous utilisez une arme à deux mains.",
			"itIT": "Infliggere danni a un nemico stordito con Colpo Poderoso ti fornisce 3 furia aggiuntiva o 4 furia se usi un'arma a due mani.",
			"jaJP": "スタン中の敵に〈バッシュ〉でダメージを与えると、追加で3の怒気を生成する。両手用武器を使用している場合は4の怒気を生成する。",
			"koKR": "후려치기로 기절한 적에게 피해를 주면 추가로 3의 분노를 생성합니다. 양손 무기를 사용 중일 경우 4의 분노를 생성합니다.",
			"plPL": "Zranienie ogłuszonego wroga Grzmotnięciem generuje dodatkowo 3 pkt. furii lub 4 pkt. furii, jeśli korzystasz z broni dwuręcznej.",
			"ptBR": "Causar dano a um inimigo atordoado com Trombar gera 3 de fúria adicional ou 4 de fúria se estiver usando uma arma de duas mãos.",
			"ruRU": "Когда \"Сокрушающий удар\" наносит урон оглушенному противнику, он дает на 3 ед. больше ярости – на 4, если вы атакуете двуручным оружием.",
			"zhCN": "使用猛击对一名昏迷敌人造成伤害可以额外生成 3 点怒气, 或者使用双手武器时生成 4 点怒气。",
			"zhTW": "以猛擊對昏迷的敵人造成傷害,會產生額外 3 點怒氣,若使用雙手武器則為 4 點怒氣。"
},
		id: 2,
		maxPoints: 1,
		x: -423.864,
		y: -544.455
	},
	"Combat Bash": {
		baseSkill: "Bash",
		connections: [ "Enhanced Bash" ],
		description: `After Critically Striking 4 times with Bash using a Two-Handed weapon, your next Core or Weapon Mastery Skill will Overpower.`,
		nameLocalized: {
			"deDE": "Kampfhieb",
			"esES": "Porrazo de combate",
			"esMX": "Porrazo de Combate",
			"frFR": "Raclée martiale",
			"itIT": "Colpo Poderoso da Combattimento",
			"jaJP": "バッシュ(死闘)",
			"koKR": "격전 후려치기",
			"plPL": "Waleczne Grzmotnięcie",
			"ptBR": "Trombar de Combate",
			"ruRU": "Сильный сокрушающий удар",
			"zhCN": "争斗猛击",
			"zhTW": "作戰猛擊"
},
		descriptionLocalized: {
			"deDE": "Nachdem Ihr 4-mal mit Hieb mit einer Zweihandwaffe einen kritischen Treffer verursacht habt, wird Eure nächste Basis- oder Waffenbeherrschungs-Fertigkeit überwältigen.",
			"esES": "Después de asestar un golpe crítico 4 veces con Porrazo usando un arma de dos manos, tu siguiente habilidad principal o de dominio de las armas tendrá un efecto de arrollamiento.",
			"esMX": "Luego de asestar 4 golpes críticos con Porrazo con un arma de dos manos, tu siguiente habilidad principal o de Dominio de Arma abrumará.",
			"frFR": "Lorsque vous réalisez 4 coups critiques avec Raclée en utilisant une arme à deux mains, votre prochaine compétence principale ou de maîtrise d'arme accablera les adversaires.",
			"itIT": "Dopo aver inflitto dei colpi critici per 4 volte con Colpo Poderoso usando un'arma a due mani, la tua prossima abilità Primaria o di Dominio delle armi causerà Sopraffazione.",
			"jaJP": "両手武器で〈バッシュ〉を使い4回クリティカルヒットを発生させると、次のコアスキルか武器の達人スキルがオーバーパワーとなる。",
			"koKR": "양손 무기를 사용하여 후려치기의 극대화 공격을 4번 적중시키면 다음 핵심 또는 무기 숙련 기술이 제압합니다.",
			"plPL": "Po trafieniu krytycznym 4 razy z użyciem Grzmotnięcia i broni dwuręcznej twoja następna umiejętność Główna lub Mistrzostwa Broni spowoduje przytłoczenie.",
			"ptBR": "Depois de desferir um acerto crítico 4 vezes com Trombar usando uma arma de duas mãos, sua próxima habilidade principal ou de Maestria em Armas desfere Golpe Brutal.",
			"ruRU": "После 4 критических эффектов:критических эффектов \"Сокрушающего удара\" с двуручным оружием следующее основное умение или умение категории \"Мастер оружия\" наносит подавляющий урон.",
			"zhCN": "使用双手武器的猛击造成 4 次暴击后, 你接下来的核心或武器精通技能会造成压制。",
			"zhTW": "使用雙手武器進行猛擊並爆擊 4 次後,你的下一個核心或武器專精技能將會壓制。"
},
		id: 3,
		maxPoints: 1,
		x: -160.21,
		y: -548.215
	},
	"Lunging Strike": {
		connections: [ "Basic", "Enhanced Lunging Strike" ],
		description: `Attack Speed Multiplier: 1.25
Generate Fury: 9
Lucky Hit Chance: 50% (per hit)
Lunge forward and strike an enemy for {30/33/36/39/42/45/48/51/54/57}% damage.

Tags: Basic, Damage, Physical, Fury, Movement.`,
		nameLocalized: {
			"deDE": "Sprungschlag",
			"esES": "Acometida",
			"esMX": "Golpe Arremetedor",
			"frFR": "Fente",
			"itIT": "Affondo",
			"jaJP": "ランジング・ストライク",
			"koKR": "달려들기",
			"plPL": "Nagła Szarża",
			"ptBR": "Ataque Repentino",
			"ruRU": "Выпад",
			"zhCN": "突刺打击",
			"zhTW": "猛撲攻擊"
},
		descriptionLocalized: {
			"deDE": "Attack Speed Multiplier: 1.25\nErzeugte Wut: 9\nGlückstrefferchance: 50% (per hit)\nStürzt Euch nach vorn, schlagt einen Gegner und fügt ihm {30/33/36/39/42/45/48/51/54/57}% Schaden zu.\n\nTags: Basis, Schaden, Physisch, Wut, Bewegung.",
			"esES": "Attack Speed Multiplier: 1.25\nGeneración de furia: 9\nProbabilidad de golpe de suerte: 50% (per hit)\nLanzas una acometida hacia delante y golpeas a un enemigo, lo que inflige {30/33/36/39/42/45/48/51/54/57}% de daño.\n\nTags: Básica, Daño, Física, Furia, Movimiento.",
			"esMX": "Attack Speed Multiplier: 1.25\nGeneración de Furia: 9\nProbabilidad de golpe afortunado: 50% (per hit)\nArremetes hacia adelante contra un enemigo y le infliges {30/33/36/39/42/45/48/51/54/57}% de daño.\n\nTags: Básica, Daño, Física, Furia, Movimiento.",
			"frFR": "Attack Speed Multiplier: 1.25\nFureur générée: 9\nChances d'obtenir un coup de chance: 50% (per hit)\nVous vous fendez et frappez votre adversaire, ce qui lui inflige {30/33/36/39/42/45/48/51/54/57}% points de dégâts.\n\nTags: Basique, Dégâts, Dégâts physiques, Fureur, Déplacement.",
			"itIT": "Attack Speed Multiplier: 1.25\nGenerazione furia: 9\nProbabilità di colpo fortunato: 50% (per hit)\nEsegui un affondo e colpisci un nemico, infliggendo {30/33/36/39/42/45/48/51/54/57}% danni.\n\nTags: Base, Danni, Fisico, Furia, Movimento.",
			"jaJP": "Attack Speed Multiplier: 1.25\n怒気生成量: 9\n幸運の一撃発生率: 50% (per hit)\n前方に突進して敵を攻撃し、{30/33/36/39/42/45/48/51/54/57}%のダメージを与える。\n\nTags: 基本, ダメージ, 物理, 怒気, 移動.",
			"koKR": "Attack Speed Multiplier: 1.25\n생성: 분노 9\n행운의 적중 확률: 50% (per hit)\n앞으로 달려들고 적 1마리를 공격하여 {30/33/36/39/42/45/48/51/54/57}%의 피해를 줍니다.\n\nTags: 기본, 피해, 물리, 분노, 이동.",
			"plPL": "Attack Speed Multiplier: 1.25\nGeneruje: 9 pkt. furii.\nSzansa na szczęśliwy traf: 50% (per hit)\nRzucasz się do przodu i atakujesz wroga, zadając {30/33/36/39/42/45/48/51/54/57}% pkt. obrażeń.\n\nTags: Podstawowe, Obrażenia, Fizyczne, Furia, Ruch.",
			"ptBR": "Attack Speed Multiplier: 1.25\nGerar Fúria: 9\nChance de Golpe de Sorte: 50% (per hit)\nGolpeia um inimigo à sua frente, causando {30/33/36/39/42/45/48/51/54/57}% de dano.\n\nTags: Básica, Dano, Física, Fúria, Movimento.",
			"ruRU": "Attack Speed Multiplier: 1.25\nДает ярость: 9 ед.\nВероятность удачного удара: 50% (per hit)\nВы делаете выпад и наносите противнику {30/33/36/39/42/45/48/51/54/57}% ед. урона.\n\nTags: Базовое, Урон, Физический урон, Ярость, Движение.",
			"zhCN": "Attack Speed Multiplier: 1.25\n生成怒气: 9\n幸运一击几率: 50% (per hit)\n向前突刺并打击一名敌人, 造成 {30/33/36/39/42/45/48/51/54/57}% 点伤害。\n\nTags: 基础, 伤害, 物理, 怒气, 移动.",
			"zhTW": "Attack Speed Multiplier: 1.25\n產生怒氣:9\n幸運觸發機率: 50% (per hit)\n向前猛撲發動攻擊,對敵人造成 {30/33/36/39/42/45/48/51/54/57}% 點傷害。\n\nTags: 基本, 傷害, 物理, 怒氣, 移動."
},
		id: 4,
		maxPoints: 5,
		x: -557.739,
		y: -96.16
	},
	"Enhanced Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Lunging Strike", "Combat Lunging Strike", "Battle Lunging Strike" ],
		description: `Lunging Strike deals x30% increased damage and Heals you for 2% Maximum Life when it damages a Healthy enemy.`,
		nameLocalized: {
			"deDE": "Verbesserter Sprungschlag",
			"esES": "Acometida mejorada",
			"esMX": "Golpe Arremetedor Potenciado",
			"frFR": "Fente renforcée",
			"itIT": "Affondo Rinforzato",
			"jaJP": "ランジング・ストライク(強化版)",
			"koKR": "강화된 달려들기",
			"plPL": "Wzmocniona Nagła Szarża",
			"ptBR": "Ataque Repentino Aperfeiçoado",
			"ruRU": "Усиленный выпад",
			"zhCN": "强化突刺打击",
			"zhTW": "強化猛撲攻擊"
},
		descriptionLocalized: {
			"deDE": "Sprungschlag verursacht x30% mehr Schaden und heilt Euch um 2% des maximalen Lebens, wenn die Fertigkeit einem gesunden Gegner Schaden zufügt.",
			"esES": "Acometida inflige un x30% más de daño y te cura un 2% de tu vida máxima al infligir daño a un enemigo saludable.",
			"esMX": "Golpe Arremetedor inflige un x30% más de daño y te sana un 2% de tu vida máxima cuando daña a un enemigo saludable.",
			"frFR": "Fente inflige x30% de dégâts supplémentaires et vous rend 2% de votre maximum de points de vie lorsqu'elle blesse une cible en bonne santé.",
			"itIT": "Affondo infligge il x30% di danni aggiuntivi e ti cura del 2% della tua Vita massima quando colpisce un nemico in salute.",
			"jaJP": "〈ランジング・ストライク〉の与えるダメージがx30%増加し、健全状態の敵にダメージを与えるとライフが最大値の2%にあたる回復する。",
			"koKR": "달려들기로 주는 피해가 x30% 증가하고, 건강 상태의 적에게 피해를 주면 자신의 생명력을 최대 생명력의 2%만큼 회복합니다.",
			"plPL": "Nagła Szarża zadaje obrażenia zwiększone o x30% i przywraca ci 2% maksymalnego zdrowia, kiedy zadaje obrażenia wrogowi w pełni sił.",
			"ptBR": "Ataque Repentino causa 30% de dano aumentado e cura 2% da sua vida máxima quando atinge um inimigo saudável.",
			"ruRU": "\"Выпад\" наносит на x30% больше урона и восполняет вам 2% максимального запаса здоровья, когда поражает противника с высоким уровнем здоровья.",
			"zhCN": "突刺打击对健康的敌人造成伤害时, 伤害提高 x30% 并为你恢复 2% 生命上限。",
			"zhTW": "猛撲攻擊對健康狀態的敵人造成傷害時,其傷害提高 x30%,並使你恢復生命值上限的 2%。"
},
		id: 5,
		maxPoints: 1,
		x: -687.389,
		y: -267.355
	},
	"Combat Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Enhanced Lunging Strike" ],
		description: `Critical Strikes with Lunging Strike grant you Berserking for 1.5 seconds.`,
		nameLocalized: {
			"deDE": "Sprungschlag des Kampfes",
			"esES": "Acometida de combate",
			"esMX": "Golpe Arremetedor de Combate",
			"frFR": "Fente martiale",
			"itIT": "Affondo da Combattimento",
			"jaJP": "ランジング・ストライク(死闘)",
			"koKR": "격전 달려들기",
			"plPL": "Waleczna Nagła Szarża",
			"ptBR": "Ataque Repentino de Combate",
			"ruRU": "Сильный выпад",
			"zhCN": "争斗突刺打击",
			"zhTW": "作戰猛撲攻擊"
},
		descriptionLocalized: {
			"deDE": "Kritische Treffer mit Sprungschlag versetzen Euch 1.5 Sek. lang in den Berserkermodus.",
			"esES": "Los golpes críticos con Acometida te otorgan vesania durante 1.5 s.",
			"esMX": "Los golpes críticos de Golpe Arremetedor otorgan enajenación durante 1.5 segundos.",
			"frFR": "Infliger des coups critiques avec Fente vous confère Rage du berserker pendant 1.5 s.",
			"itIT": "I colpi critici di Affondo ti forniscono Berserk per 1.5 s.",
			"jaJP": "〈ランジング・ストライク〉がクリティカルヒットの場合1.5秒間〈バーサーク〉状態になる。",
			"koKR": "달려들기가 극대화로 적중하면 1.5초 동안 광폭화합니다.",
			"plPL": "Trafienia krytyczne wywołane przy pomocy Nagłej Szarży sprawiają, że berserkujesz przez 1.5 sek.",
			"ptBR": "Acertos críticos com Ataque Repentino concedem Berserk por 1.5 segundos.",
			"ruRU": "Критические удары \"Выпадом\" дают вам эффект берсерк на 1.5 сек.",
			"zhCN": "突刺打击造成暴击可以使你获得狂暴, 持续 1.5 秒。",
			"zhTW": "猛撲攻擊爆擊時,會使你狂暴,持續 1.5 秒。"
},
		id: 6,
		maxPoints: 1,
		x: -630.918,
		y: -392.32
	},
	"Battle Lunging Strike": {
		baseSkill: "Lunging Strike",
		connections: [ "Enhanced Lunging Strike" ],
		description: `Lunging Strike also inflicts {20/22/24/26/28/30/32/34/36/38}% Bleeding damage over 5 seconds.`,
		nameLocalized: {
			"deDE": "Sprungschlag der Schlacht",
			"esES": "Acometida de batalla",
			"esMX": "Golpe Arremetedor de Batalla",
			"frFR": "Fente guerrière",
			"itIT": "Affondo da Battaglia",
			"jaJP": "バトル〈突進攻撃〉",
			"koKR": "전투 달려들기",
			"plPL": "Bitewna Nagła Szarża",
			"ptBR": "Ataque Repentino de Batalha",
			"ruRU": "Резкий выпад",
			"zhCN": "战斗突刺打击",
			"zhTW": "戰鬥猛撲攻擊"
},
		descriptionLocalized: {
			"deDE": "Sprungschlag verursacht im Verlauf von 5 Sek. außerdem {20/22/24/26/28/30/32/34/36/38}% Blutungsschaden.",
			"esES": "Acometida también inflige {20/22/24/26/28/30/32/34/36/38}% de daño de sangrado durante 5 s.",
			"esMX": "Golpe Arremetedor también inflige {20/22/24/26/28/30/32/34/36/38}% de daño de sangrado durante 5 segundos.",
			"frFR": "Fente inflige aussi {20/22/24/26/28/30/32/34/36/38}% points de dégâts de saignement en 5 s.",
			"itIT": "Affondo infligge anche {20/22/24/26/28/30/32/34/36/38}% danni da sanguinamento in 5 s.",
			"jaJP": "〈ランジング・ストライク〉に、5秒かけて{20/22/24/26/28/30/32/34/36/38}%の出血ダメージを与える効果が加わる。",
			"koKR": "달려들기가 5초에 걸쳐 {20/22/24/26/28/30/32/34/36/38}%의 출혈 피해를 줍니다.",
			"plPL": "Nagła Szarża zadaje również {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń od krwawienia w ciągu 5 sek.",
			"ptBR": "Ataque Repentino também aplica {20/22/24/26/28/30/32/34/36/38}% de dano de sangramento ao longo de 5 segundos.",
			"ruRU": "\"Выпад\" также наносит {20/22/24/26/28/30/32/34/36/38}% ед. урона от кровотечения за 5 сек.",
			"zhCN": "突刺打击也会在 5 秒内造成 {20/22/24/26/28/30/32/34/36/38}% 点流血伤害。",
			"zhTW": "猛撲攻擊也會在 5 秒內施加 {20/22/24/26/28/30/32/34/36/38}% 點流血傷害。"
},
		id: 7,
		maxPoints: 1,
		x: -923.284,
		y: -339.18
	},
	"Frenzy": {
		connections: [ "Basic", "Enhanced Frenzy" ],
		description: `Attack Speed Multiplier: 1.25
Generate Fury: 4
Lucky Hit Chance: 30% (per hit)
Unleash a rapid flurry of blows, dealing {20/22/24/26/28/30/32/34/36/38}% damage with each pair of hits.

If Frenzy hits an enemy, its Attack Speed is increased by +20% for 3 seconds, up to +60%.

Tags: Basic, Dual Wield, Fury, Physical, Damage, Attack Speed.`,
		nameLocalized: {
			"deDE": "Raserei",
			"esES": "Frenesí",
			"esMX": "Frenesí",
			"frFR": "Frénésie",
			"itIT": "Frenesia",
			"jaJP": "フレンジー",
			"koKR": "광분",
			"plPL": "Amok",
			"ptBR": "Frenesi",
			"ruRU": "Бешенство",
			"zhCN": "狂乱",
			"zhTW": "狂亂"
},
		descriptionLocalized: {
			"deDE": "Attack Speed Multiplier: 1.25\nErzeugte Wut: 4\nGlückstrefferchance: 30% (per hit)\nÜberzieht Gegner mit vielen raschen Schlägen, die mit jedem Trefferpaar {20/22/24/26/28/30/32/34/36/38}% Schaden verursachen.\n\nWenn Raserei einen Gegner trifft, erhöht sich ihre Angriffsgeschwindigkeit 3 Sek. lang um +20% bis maximal +60%.\n\nTags: Basis, Zwei Waffen, Wut, Physisch, Schaden, Angriffsgeschwindigkeit.",
			"esES": "Attack Speed Multiplier: 1.25\nGeneración de furia: 4\nProbabilidad de golpe de suerte: 30% (per hit)\nDesatas un rápido aluvión de impactos que inflige {20/22/24/26/28/30/32/34/36/38}% de daño por cada par de golpes.\n\nSi Frenesí golpea a un enemigo, aumenta su velocidad de ataque un +20% durante 3 s, hasta un máximo de un +60%.\n\nTags: Básica, Doble empuñadura, Furia, Física, Daño, Velocidad de ataque.",
			"esMX": "Attack Speed Multiplier: 1.25\nGeneración de Furia: 4\nProbabilidad de golpe afortunado: 30% (per hit)\nDesatas una veloz ráfaga de golpes que inflige {20/22/24/26/28/30/32/34/36/38}% de daño cada dos golpes.\n\nSi Frenesí golpea a un enemigo, su velocidad de ataque aumenta un +20% durante 3 segundos, hasta un máximo del +60%.\n\nTags: Básica, Ambidestreza, Furia, Física, Daño, Velocidad de ataque.",
			"frFR": "Attack Speed Multiplier: 1.25\nFureur générée: 4\nChances d'obtenir un coup de chance: 30% (per hit)\nVous déclenchez une rafale de coups rapides qui inflige {20/22/24/26/28/30/32/34/36/38}% points de dégâts tous les deux coups portés.\n\nSi Frénésie touche une cible, sa vitesse d'attaque est augmentée de +20% pendant 3 s, jusqu'à un maximum de +60%.\n\nTags: Basique, Deux armes, Fureur, Dégâts physiques, Dégâts, Vitesse d'attaque.",
			"itIT": "Attack Speed Multiplier: 1.25\nGenerazione furia: 4\nProbabilità di colpo fortunato: 30% (per hit)\nScateni una rapida raffica di colpi, infliggendo {20/22/24/26/28/30/32/34/36/38}% danni ogni due colpi.\n\nSe Frenesia colpisce un nemico, la sua velocità d'attacco aumenta del +20% per 3 s, fino a un massimo del +60%.\n\nTags: Base, Doppia arma, Furia, Fisico, Danni, Velocità d'attacco.",
			"jaJP": "Attack Speed Multiplier: 1.25\n怒気生成量: 4\n幸運の一撃発生率: 30% (per hit)\n高速で連打を繰り出し、2連撃が命中するたびに{20/22/24/26/28/30/32/34/36/38}%のダメージを与える。\n\n〈フレンジー〉が敵に命中すると、攻撃速度が3秒間、+20%増加する。増加量は最大+60%。\n\nTags: 基本, 二刀流, 怒気, 物理, ダメージ, 攻撃速度.",
			"koKR": "Attack Speed Multiplier: 1.25\n생성: 분노 4\n행운의 적중 확률: 30% (per hit)\n빠르게 연속 공격을 가해 2번 적중할 때마다 {20/22/24/26/28/30/32/34/36/38}%의 피해를 줍니다.\n\n광분이 적에게 적중하면 광분의 공격 속도가 3초 동안 +20%만큼, 최대 +60%까지 증가합니다.\n\nTags: 기본, 쌍수 무기, 분노, 물리, 피해, 공격 속도.",
			"plPL": "Attack Speed Multiplier: 1.25\nGeneruje: 4 pkt. furii.\nSzansa na szczęśliwy traf: 30% (per hit)\nWyzwalasz błyskawiczną nawałnicę ciosów, zadając każdymi dwoma trafieniami {20/22/24/26/28/30/32/34/36/38}% pkt. obrażeń.\n\nJeśli Amok trafi wroga, szybkość ataku umiejętności wzrasta o +20% na 3 sek., maksymalnie do +60%.\n\nTags: Podstawowe, Broń w Każdej Ręce, Furia, Fizyczne, Obrażenia, Szybkość Ataku.",
			"ptBR": "Attack Speed Multiplier: 1.25\nGerar Fúria: 4\nChance de Golpe de Sorte: 30% (per hit)\nLibera um rápido turbilhão de golpes, causando {20/22/24/26/28/30/32/34/36/38}% de dano com cada par de acertos.\n\nSe Frenesi atingir um inimigo, a velocidade de ataque é aumentada em +20% por 3 segundos, até +60%.\n\nTags: Básica, Empunhadura Dupla, Fúria, Física, Dano, Velocidade de Ataque.",
			"ruRU": "Attack Speed Multiplier: 1.25\nДает ярость: 4 ед.\nВероятность удачного удара: 30% (per hit)\nВы обрушиваете на цель шквал стремительных ударов, нанося {20/22/24/26/28/30/32/34/36/38}% ед. урона за каждую пару ударов.\n\nКогда \"Бешенство\" поражает противника, скорость атаки этого умения повышается на +20% на 3 сек. вплоть до +60%.\n\nTags: Базовое, Оружие в каждой руке, Ярость, Физический урон, Урон, Скорость атаки.",
			"zhCN": "Attack Speed Multiplier: 1.25\n生成怒气: 4\n幸运一击几率: 30% (per hit)\n发动一连串快速打击, 每一组攻击造成 {20/22/24/26/28/30/32/34/36/38}% 点伤害。\n\n如果狂乱命中敌人, 其攻击速度提高 +20%, 持续 3 秒, 最多提高 +60%。\n\nTags: 基础, 双持, 怒气, 物理, 伤害, 攻击速度.",
			"zhTW": "Attack Speed Multiplier: 1.25\n產生怒氣:4\n幸運觸發機率: 30% (per hit)\n快速連續攻擊,每組攻擊造成 {20/22/24/26/28/30/32/34/36/38}% 點傷害。\n\n若狂亂擊中敵人,其攻擊速度提高 +20%,持續 3 秒,最多提高 +60%。\n\nTags: 基本, 雙持, 怒氣, 物理, 傷害, 攻擊速度."
},
		id: 8,
		maxPoints: 5,
		x: 210.912,
		y: -250.91
	},
	"Enhanced Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Frenzy", "Battle Frenzy", "Combat Frenzy" ],
		description: `While Frenzy is granting +60% bonus Attack Speed, it also generates 2 additional Fury.`,
		nameLocalized: {
			"deDE": "Verbesserte Raserei",
			"esES": "Frenesí mejorado",
			"esMX": "Frenesí Potenciado",
			"frFR": "Frénésie renforcée",
			"itIT": "Frenesia Rinforzata",
			"jaJP": "フレンジー(強化版)",
			"koKR": "강화된 광분",
			"plPL": "Wzmocniony Amok",
			"ptBR": "Frenesi Aperfeiçoado",
			"ruRU": "Усиленное бешенство",
			"zhCN": "强化狂乱",
			"zhTW": "強化狂亂"
},
		descriptionLocalized: {
			"deDE": "Solange Raserei +60% zusätzliche Angriffsgeschwindigkeit verleiht, generiert sie auch 2 zusätzliche Wut.",
			"esES": "Mientras Frenesí esté otorgando un +60% de velocidad de ataque adicional, también genera 2 de furia más.",
			"esMX": "Frenesí otorga un +60% adicional de velocidad de ataque y, además, genera 2 de Furia adicional.",
			"frFR": "Tant que Frénésie confère un bonus de +60% à la vitesse d'attaque, elle génère aussi 2 points de fureur supplémentaires.",
			"itIT": "Quando Frenesia aumenta la velocità d'attacco del +60%, genera anche 2 furia aggiuntiva.",
			"jaJP": "〈フレンジー〉が攻撃速度を+60%上昇させている時、さらに2の怒気を生成する。",
			"koKR": "광분이 공격 속도를 +60% 증가시키는 동안 분노도 2 추가로 생성합니다.",
			"plPL": "Kiedy Amok zapewnia ci premię +60% do szybkości ataku oraz generuje dodatkowo 2 pkt. furii.",
			"ptBR": "Enquanto Frenesi concede +60% de bônus de velocidade de ataque, também gera 2 de fúria adicional.",
			"ruRU": "Если прибавка к скорости атаки от \"Бешенства\" достигает +60%, вы также накапливаете на 2 ед. больше ярости.",
			"zhCN": "狂乱 使攻击速度提高 +60%, 也会额外生成 2 点怒气。",
			"zhTW": "狂亂使攻擊速度提高 +60% 時,也會額外產生 2 點怒氣。"
},
		id: 9,
		maxPoints: 1,
		x: 285.5,
		y: -442.24
	},
	"Battle Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Enhanced Frenzy" ],
		description: `While Berserking, your other skills gain +5% Attack Speed for each stack of Frenzy you have.`,
		nameLocalized: {
			"deDE": "Schlachtraserei",
			"esES": "Frenesí de batalla",
			"esMX": "Frenesí de Batalla",
			"frFR": "Frénésie guerrière",
			"itIT": "Frenesia di Battaglia",
			"jaJP": "フレンジー(闘争)",
			"koKR": "전투의 광분",
			"plPL": "Bitewny Amok",
			"ptBR": "Frenesi de Batalha",
			"ruRU": "Резкое бешенство",
			"zhCN": "战斗狂乱",
			"zhTW": "戰鬥狂亂"
},
		descriptionLocalized: {
			"deDE": "Im Berserkermodus erhalten Eure anderen Fertigkeiten +5% Angriffsgeschwindigkeit für jeden Stapel von Raserei.",
			"esES": "Mientras tienes vesania, tus otras habilidades obtienen un +5% de velocidad de ataque por cada acumulación de Frenesí que tengas.",
			"esMX": "Mientras tienes enajenación, el resto de tus habilidades obtienen un +5% de velocidad de ataque por cada acumulación de Frenesí que tengas.",
			"frFR": "Sous l'effet de Rage du berserker, la vitesse d'attaque de vos autres compétences est augmentée de +5% pour chaque cumul de Frénésie que vous avez.",
			"itIT": "Durante Berserk, la velocità d'attacco delle altre abilità aumenta del +5% per ogni accumulo di Frenesia.",
			"jaJP": "〈バーサーク〉状態の時、〈フレンジー〉の蓄積1回ごとにほかのスキルの攻撃速度が+5%増加する。",
			"koKR": "광폭화 상태에서 광분 중첩 하나당 다른 기술들의 공격 속도가 +5% 증가합니다.",
			"plPL": "Podczas berserkowania, twoje inne umiejętności zyskują premię +5% do szybkości ruchu za każdy posiadany poziom kumulacji Amoku.",
			"ptBR": "Sob efeito de Berserk, suas outras habilidades recebem +5% de velocidade de ataque por cada aplicação de Frenesi que você tiver.",
			"ruRU": "В состоянии берсерка скорость атаки ваших других умений повышается на +5% за каждый активный эффект \"Бешенства\".",
			"zhCN": "狂暴状态下, 每有一层狂乱, 你的其他技能的攻击速度提高 +5%。",
			"zhTW": "狂暴時,每層狂亂可使你的其他技能獲得 +5% 攻擊速度。"
},
		id: 10,
		maxPoints: 1,
		x: 435.463,
		y: -548.355
	},
	"Combat Frenzy": {
		baseSkill: "Frenzy",
		connections: [ "Enhanced Frenzy" ],
		description: `You gain 8% Damage Reduction for each stack of Frenzy you currently have.`,
		nameLocalized: {
			"deDE": "Kampfraserei",
			"esES": "Frenesí de combate",
			"esMX": "Frenesí de Combate",
			"frFR": "Frénésie martiale",
			"itIT": "Frenesia di Combattimento",
			"jaJP": "フレンジー(死闘)",
			"koKR": "격전의 광분",
			"plPL": "Waleczny Amok",
			"ptBR": "Frenesi de Combate",
			"ruRU": "Боевое бешенство",
			"zhCN": "争斗狂乱",
			"zhTW": "作戰狂亂"
},
		descriptionLocalized: {
			"deDE": "Ihr erhaltet eine Schadensreduktion von 8% für jeden Stapel Raserei, den Ihr aktuell besitzt.",
			"esES": "Obtienes un 8% de reducción de daño por cada acumulación de Frenesí que tengas.",
			"esMX": "Obtienes un 8% de reducción de daño por cada acumulación de Frenesí que tengas actualmente.",
			"frFR": "Chaque cumul de Frénésie que vous avez vous confère 8% de réduction des dégâts.",
			"itIT": "Ottieni il 8% di riduzione danni per ogni accumulo di Frenesia che hai attualmente.",
			"jaJP": "〈フレンジー〉を1回蓄積するごとに、受けるダメージが8%軽減される。",
			"koKR": "현재 보유한 광분 중첩 하나당 8%의 피해 감소를 얻습니다.",
			"plPL": "Twoja redukcja obrażeń jest zwiększona o 8% za każdy aktualny poziom kumulacji Amoku.",
			"ptBR": "Você recebe 8% de redução de dano por cada aplicação de Frenesi que tem no momento.",
			"ruRU": "Вы получаете на 8% меньше урона за каждый активный эффект \"Бешенства\".",
			"zhCN": "当前拥有的每层狂乱可以使你获得 8% 伤害减免。",
			"zhTW": "你每擁有一層狂亂,可獲得 8% 傷害減免效果。"
},
		id: 11,
		maxPoints: 1,
		x: 145.246,
		y: -549.04
	},
	"Flay": {
		connections: [ "Basic", "Enhanced Flay" ],
		description: `Generate Fury: 9
Lucky Hit Chance: 50% (per use)
Flay the enemy, dealing {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% damage and inflicting {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% Bleeding damage over 5 seconds.

Tags: Basic, Bleed, Slashing, Fury, Damage, Physical.`,
		nameLocalized: {
			"deDE": "Schinden",
			"esES": "Desollar",
			"esMX": "Despellejar",
			"frFR": "Écorchement",
			"itIT": "Scorticamento",
			"jaJP": "フレイ",
			"koKR": "도려내기",
			"plPL": "Obdarcie",
			"ptBR": "Esfolar",
			"ruRU": "Свежевание",
			"zhCN": "剥皮",
			"zhTW": "剝皮"
},
		descriptionLocalized: {
			"deDE": "Erzeugte Wut: 9\nGlückstrefferchance: 50% (per use)\nSchindet den Gegner und fügt ihm {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% Schaden zu. Fügt im Verlauf von 5 Sek. {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% Blutungsschaden zu.\n\nTags: Basis, Blutung, Hiebwaffe, Wut, Schaden, Physisch.",
			"esES": "Generación de furia: 9\nProbabilidad de golpe de suerte: 50% (per use)\nLe arrancas la piel al enemigo, lo que inflige {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% de daño y aplica {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% de daño de sangrado durante 5 s.\n\nTags: Básica, Sangrado, Cortante, Furia, Daño, Física.",
			"esMX": "Generación de Furia: 9\nProbabilidad de golpe afortunado: 50% (per use)\nDespellejas al enemigo, lo que inflige {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% de daño y {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% de daño de sangrado durante 5 segundos.\n\nTags: Básica, Sangrado, Corte, Furia, Daño, Física.",
			"frFR": "Fureur générée: 9\nChances d'obtenir un coup de chance: 50% (per use)\nVous écorchez l'adversaire, ce qui lui inflige {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% points de dégâts à l'impact et {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% points de dégâts de saignement en 5 s.\n\nTags: Basique, Saignement, Tranchant, Fureur, Dégâts, Dégâts physiques.",
			"itIT": "Generazione furia: 9\nProbabilità di colpo fortunato: 50% (per use)\nScortica il nemico, infliggendo {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% danni. Infligge {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% danni da sanguinamento in 5 s.\n\nTags: Base, Sanguinamento, Tagliente, Furia, Danni, Fisico.",
			"jaJP": "怒気生成量: 9\n幸運の一撃発生率: 50% (per use)\n敵の皮を剥ぎ、{5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}%のダメージを与える。また5秒間かけて{36/39.5/43/47/50.5/54/57.5/61/65/68.5}%の出血ダメージを与える。\n\nTags: 基本, 出血, 斬撃, 怒気, ダメージ, 物理.",
			"koKR": "생성: 분노 9\n행운의 적중 확률: 50% (per use)\n적을 도려내 {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}%의 피해를 줍니다. 5초에 걸쳐 {36/39.5/43/47/50.5/54/57.5/61/65/68.5}%의 출혈 피해를 줍니다.\n\nTags: 기본, 출혈, 베는 무기, 분노, 피해, 물리.",
			"plPL": "Generuje: 9 pkt. furii\nSzansa na szczęśliwy traf: 50% (per use)\nObdzierasz wroga ze skóry, zadając {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% pkt. obrażeń i wywołując {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% pkt. obrażeń od krwawienia przez 5 sek.\n\nTags: Podstawowe, Krwawienie, Sieczne, Furia, Obrażenia, Fizyczne.",
			"ptBR": "Gerar Fúria: 9\nChance de Golpe de Sorte: 50% (per use)\nEsfola o inimigo, causando {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% de dano e aplicando {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% de dano de sangramento ao longo de 5 segundos.\n\nTags: Básica, Sangramento, Corte, Fúria, Dano, Física.",
			"ruRU": "Дает ярость: 9 ед.\nВероятность удачного удара: 50% (per use)\nВы сдираете с противника кожу, нанося {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% ед. урона мгновенно и еще {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% ед. урона от кровотечения за 5 сек.\n\nTags: Базовое, Кровотечение, Рубящее, Ярость, Урон, Физический урон.",
			"zhCN": "生成怒气: 9\n幸运一击几率: 50% (per use)\n剥掉敌人的皮, 造成 {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% 点伤害, 并在 5 秒内造成 {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% 点流血伤害。\n\nTags: 基础, 流血, 劈斩, 怒气, 伤害, 物理.",
			"zhTW": "產生怒氣:9\n幸運觸發機率:50% (per use)\n將敵人剝皮,造成 {5/5.5/6/6.5/7/7.5/8/8.5/9/9.5}% 點傷害,並使其在 5 秒內受到 {36/39.5/43/47/50.5/54/57.5/61/65/68.5}% 點流血傷害。\n\nTags: 基本, 流血, 斬擊, 怒氣, 傷害, 物理."
},
		id: 12,
		maxPoints: 5,
		x: 561.736,
		y: -94.605
	},
	"Enhanced Flay": {
		baseSkill: "Flay",
		connections: [ "Flay", "Battle Flay", "Combat Flay" ],
		description: `Flay has a 10% chance to make the enemy Vulnerable for 2 seconds. Double this chance when using a Two-Handed weapon.`,
		nameLocalized: {
			"deDE": "Verbessertes Schinden",
			"esES": "Desollar mejorado",
			"esMX": "Despellejamiento Potenciado",
			"frFR": "Écorchement renforcé",
			"itIT": "Scorticamento Rinforzato",
			"jaJP": "フレイ(強化版)",
			"koKR": "강화된 도려내기",
			"plPL": "Wzmocnione Obdarcie",
			"ptBR": "Esfolar Aperfeiçoado",
			"ruRU": "Усиленное свежевание",
			"zhCN": "强化剥皮",
			"zhTW": "強化剝皮"
},
		descriptionLocalized: {
			"deDE": "Schinden verfügt über eine Chance von 10%, den Gegner 2 Sek. lang verwundbar zu machen. Die Verwendung von Zweihandwaffen verdoppelt diese Chance.",
			"esES": "Desollar tiene un 10% de probabilidad de volver vulnerable al enemigo durante 2 s. Esta probabilidad se duplica al usar un arma de dos manos.",
			"esMX": "Despellejar tiene un 10% de probabilidad de volver al enemigo vulnerable durante 2 segundos. La probabilidad se duplica cuando usas un arma de dos manos.",
			"frFR": "Écorchement a 10% de chances de rendre l'adversaire vulnérable pendant 2 s. Ces chances sont doublées lorsque vous utilisez une arme à deux mains.",
			"itIT": "Scorticamento ha una probabilità del 10% di rendere il nemico vulnerabile per 2 s. Questa probabilità raddoppia se usi un'arma a due mani.",
			"jaJP": "〈フレイ〉が10%の確率で敵を2秒間脆弱状態にする。両手武器の場合は確率が倍になる。",
			"koKR": "도려내기가 10% 확률로 대상을 2초 동안 취약하게 만듭니다. 양손 무기를 사용할 경우 확률이 2배로 증가합니다.",
			"plPL": "Obdarcie ma 10% szans na wywołanie u celu odsłonięcia na 2 sek. Szansa ta jest podwojona w przypadku korzystania z broni dwuręcznej.",
			"ptBR": "Esfolar tem 10% de chance de tornar os inimigos vulneráveis por 2 segundos. A chance é dobrada ao usar uma arma de duas mãos.",
			"ruRU": "\"Свежевание\" с вероятностью 10% делает цель уязвимой на 2 сек. Эта вероятность удваивается при использовании двуручного оружия.",
			"zhCN": "剥皮有 10% 几率使敌人陷入易伤状态, 持续 2 秒。使用双手武器时该几率翻倍。",
			"zhTW": "剝皮有 10% 機率使敵人易傷,持續 2 秒。使用雙手武器時該機率加倍。"
},
		id: 13,
		maxPoints: 1,
		x: 721.251,
		y: -266.475
	},
	"Battle Flay": {
		baseSkill: "Flay",
		connections: [ "Enhanced Flay" ],
		description: `When Flay deals direct damage to an enemy, they take x10% increased Bleeding damage from you for the next 3 seconds.`,
		nameLocalized: {
			"deDE": "Schlachtschinden",
			"esES": "Desollar de batalla",
			"esMX": "Despellejamiento de Batalla",
			"frFR": "Écorchement guerrier",
			"itIT": "Scorticamento da Battaglia",
			"jaJP": "フレイ(闘争)",
			"koKR": "전투 도려내기",
			"plPL": "Bitewne Obdarcie",
			"ptBR": "Esfolar de Batalha",
			"ruRU": "Резкое свежевание",
			"zhCN": "战斗剥皮",
			"zhTW": "戰鬥剝皮"
},
		descriptionLocalized: {
			"deDE": "Wenn Schinden einem Gegner direkten Schaden zufügt, erleidet er in den nächsten 3 Sek. x10% mehr Blutungsschaden durch Euch.",
			"esES": "Cuando Desollar inflige daño directo a un enemigo, le infliges un x10% más de daño de sangrado durante los siguientes 3 s.",
			"esMX": "Cuando Despellejar inflige daño directo a un enemigo, este recibe un x10% más de daño de sangrado de ti durante los próximos 3 segundos.",
			"frFR": "Lorsqu'Écorchement inflige des dégâts directs à une cible, celle-ci subit x10% de dégâts de saignement supplémentaires de votre part pendant les 3 s qui suivent.",
			"itIT": "Quando Scorticamento infligge danni diretti a un nemico, questo subisce il x10% di danni da sanguinamento aggiuntivi da parte tua per i successivi 3 s.",
			"jaJP": "〈フレイ〉が敵1体に直接ダメージを与えると、自分がその敵に与える出血ダメージが次の3秒間x10%増加する。",
			"koKR": "도려내기로 적에게 직접 피해를 주면, 대상이 다음 3초 동안 자신에게 받는 출혈 피해가 x10% 증가합니다.",
			"plPL": "Kiedy Obdarcie zadaje bezpośrednie obrażenia wrogowi, otrzymuje on od ciebie obrażenia od krwawienia zwiększone o x10% przez następne 3 sek.",
			"ptBR": "Quando Esfolar causa dano direto a um inimigo, ele recebe 10% de dano de sangramento aumentado de você pelos próximos 3 segundos.",
			"ruRU": "Когда \"Свежевание\" наносит противнику прямой урон, он в течение 3 сек. получает на x10% больше урона от ваших эффектов кровотечения.",
			"zhCN": "剥皮对一名敌人造成直接伤害时, 使其在接下来的 3 秒内受到来自你的流血伤害提高 x10%。",
			"zhTW": "剝皮對敵人造成直接傷害時,在接下來的 3 秒內其受到你造成的流血傷害提高 x10%。"
},
		id: 14,
		maxPoints: 1,
		x: 638.801,
		y: -389.175
	},
	"Combat Flay": {
		baseSkill: "Flay",
		connections: [ "Enhanced Flay" ],
		description: `When Flay deals direct damage to an enemy, you gain 3% Damage Reduction and 50 Thorns for 3 seconds. This stacks up to 4 times.`,
		nameLocalized: {
			"deDE": "Kampfschinden",
			"esES": "Desollar de combate",
			"esMX": "Despellejamiento de Combate",
			"frFR": "Écorchement martial",
			"itIT": "Scorticamento da Combattimento",
			"jaJP": "フレイ(死闘)",
			"koKR": "격전 도려내기",
			"plPL": "Waleczne Obdarcie",
			"ptBR": "Esfolar de Combate",
			"ruRU": "Сильное свежевание",
			"zhCN": "争斗剥皮",
			"zhTW": "作戰剝皮"
},
		descriptionLocalized: {
			"deDE": "Wenn Schinden einem Gegner direkten Schaden zufügt, erhaltet Ihr 3 Sek. lang 3% Schadensreduktion und 50 Dornen. Bis zu 4-mal stapelbar.",
			"esES": "Cuando Desollar inflige daño directo a un enemigo, obtienes un 3% de reducción de daño y 50 espinas durante 3 s. Se acumula hasta 4 veces.",
			"esMX": "Cuando Despellejar inflige daño directo a un enemigo, obtienes un 3% de reducción de daño y 50 Espinas durante 3 segundos. Esto se acumula hasta 4 veces.",
			"frFR": "Lorsqu'Écorchement inflige des dégâts directs à une cible adverse, vous obtenez 3% de réduction des dégâts et 50 points de dégâts d'épines pendant 3 s. Cet effet peut se cumuler jusqu'à 4 fois.",
			"itIT": "Quando Scorticamento infligge danni diretti a un nemico, ottieni il 3% di riduzione danni e 50 Spine per 3 s. Si accumula fino a 4 volte.",
			"jaJP": "〈フレイ〉で直接ダメージを敵1体に与えると、3秒間、被ダメージが3%減少し、50の〈荊棘の加護〉を獲得する。この効果は最大4回まで蓄積する。",
			"koKR": "도려내기로 적에게 직접 피해를 주면 3초 동안 3%의 피해 감소와 50의 가시 효과를 얻습니다. 이 효과는 최대 4번까지 중첩됩니다.",
			"plPL": "Kiedy Obdarcie zadaje wrogowi bezpośrednie obrażenia, zyskujesz 3% redukcji obrażeń oraz Ciernie (50) na 3 sek. Efekt ten kumuluje się 4 razy.",
			"ptBR": "Quando Esfolar causa dano direto a um inimigo, você recebe 3% de redução de dano e 50 espinhos por 3 segundos. Isso acumula até 4 vezes.",
			"ruRU": "Когда \"Свежевание\" наносит противнику прямой урон, получаемый вами урон уменьшается на 3% и вы получаете эффект шипов в объеме 50 ед. на 3 сек. Эффект суммируется до 4 раз.",
			"zhCN": "当剥皮对敌人造成直接伤害时, 你获得 3%伤害减免和 50 点荆棘, 持续 3 秒。该效果最多可叠加 4 次。",
			"zhTW": "剝皮對敵人造成直接傷害時,你獲得 3% 傷害減免和 50 點荊棘,持續 3 秒。此效果最多可堆疊 4 次。"
},
		id: 15,
		maxPoints: 1,
		x: 946.316,
		y: -322.925
	},
};

barbarianData["Core"] = {
	"Hammer of the Ancients": {
		connections: [ "Core", "Enhanced Hammer of the Ancients" ],
		description: `Attack Speed Multiplier: 1.1
Fury Cost: 35
Lucky Hit Chance: 50% (per hit)
Slam your hammer down with the fury of the Ancients, dealing {50/55/60/65/70/75/80/85/90/95}% damage to a concentrated area.

Tags: Core, Bludgeoning, Fury, Physical, Damage, Two-Handed.`,
		nameLocalized: {
			"deDE": "Hammer der Urahnen",
			"esES": "Martillo de los Ancestros",
			"esMX": "Martillo Ancestral",
			"frFR": "Marteau des Anciens",
			"itIT": "Maglio degli Antichi",
			"jaJP": "古の大槌",
			"koKR": "선조의 망치",
			"plPL": "Młot Starożytnych",
			"ptBR": "Martelo dos Ancestrais",
			"ruRU": "Молот Древних",
			"zhCN": "先祖之锤",
			"zhTW": "先祖之鎚"
},
		descriptionLocalized: {
			"deDE": "Attack Speed Multiplier: 1.1\nWutkosten: 35\nGlückstrefferchance: 50% (per hit)\nSchmettert Euren Hammer mit dem Zorn der Urahnen nach unten und verursacht {50/55/60/65/70/75/80/85/90/95}% Schaden in einem konzentrierten Bereich.\n\nTags: Kern, Wuchtwaffe, Wut, Physisch, Schaden, Zweihändig.",
			"esES": "Attack Speed Multiplier: 1.1\nCoste de furia: 35\nProbabilidad de golpe de suerte: 50% (per hit)\nTu martillo golpea con la furia de los Ancestros e inflige {50/55/60/65/70/75/80/85/90/95}% de daño en una zona concentrada.\n\nTags: Principal, Contundente, Furia, Física, Daño, Dos manos.",
			"esMX": "Attack Speed Multiplier: 1.1\nCosto de Furia: 35\nProbabilidad de golpe afortunado: 50% (per hit)\nGolpeas el suelo con tu arma con la furia de los Ancestros e infliges {50/55/60/65/70/75/80/85/90/95}% de daño en un área concentrada.\n\nTags: Principal, Impacto, Furia, Física, Daño, Dos manos.",
			"frFR": "Attack Speed Multiplier: 1.1\nCoût en fureur: 35\nChances d'obtenir un coup de chance: 50% (per hit)\nVous abattez votre marteau avec la fureur des Anciens et infligez {50/55/60/65/70/75/80/85/90/95}% points de dégâts dans une zone précise.\n\nTags: Principale, Arme contondante, Fureur, Dégâts physiques, Dégâts, Arme à deux mains.",
			"itIT": "Attack Speed Multiplier: 1.1\nCosto in furia: 35\nProbabilità di colpo fortunato: 50% (per hit)\nAbbatti il tuo martello con la furia degli Antichi, infliggendo {50/55/60/65/70/75/80/85/90/95}% danni in un'area concentrata.\n\nTags: Primaria, Contundente, Furia, Fisico, Danni, A due mani.",
			"jaJP": "Attack Speed Multiplier: 1.1\n怒気コスト: 35\n幸運の一撃発生率: 50% (per hit)\n古代の民の怒りと共に武器を叩きつけ、集中したエリアに{50/55/60/65/70/75/80/85/90/95}%のダメージを与える。\n\nTags: コア, 殴打, 怒気, 物理, ダメージ, 両手用武器.",
			"koKR": "Attack Speed Multiplier: 1.1\n소모: 분노 35\n행운의 적중 확률: 50% (per hit)\n무기에 선조의 분노를 담아 내려쳐 좁은 지역에 {50/55/60/65/70/75/80/85/90/95}%의 피해를 줍니다.\n\nTags: 핵심, 둔기, 분노, 물리, 피해, 양손 무기.",
			"plPL": "Attack Speed Multiplier: 1.1\nKoszt: 35 pkt. furii.\nSzansa na szczęśliwy traf: 50% (per hit)\nUderzasz młotem z furią starożytnych, zadając {50/55/60/65/70/75/80/85/90/95}% pkt. obrażeń na konkretnym obszarze.\n\nTags: Główne, Obuchowe, Furia, Fizyczne, Obrażenia, Dwuręczne.",
			"ptBR": "Attack Speed Multiplier: 1.1\nCusto de fúria: 35\nChance de Golpe de Sorte: 50% (per hit)\nGolpeia com seu martelo com a fúria dos Ancestrais, causando {50/55/60/65/70/75/80/85/90/95}% de dano em uma área concentrada.\n\nTags: Principal, Concussão, Fúria, Física, Dano, Duas mãos.",
			"ruRU": "Attack Speed Multiplier: 1.1\nЗатраты ярости: 35 ед.\nВероятность удачного удара: 50% (per hit)\nВы обрушиваете свое оружие с яростью Древних, нанося {50/55/60/65/70/75/80/85/90/95}% ед. урона целям в небольшой области.\n\nTags: Основное, Дробящее оружие, Ярость, Физический урон, Урон, Двуручное.",
			"zhCN": "Attack Speed Multiplier: 1.1\n怒气消耗: 35\n幸运一击几率: 50% (per hit)\n带着先祖的怒火砸下你的锤子, 对一片集中区域造成 {50/55/60/65/70/75/80/85/90/95}% 点伤害。\n\nTags: 核心, 钝击, 怒气, 物理, 伤害, 双手.",
			"zhTW": "Attack Speed Multiplier: 1.1\n怒氣消耗:35\n幸運觸發機率: 50% (per hit)\n使出先祖的憤怒砸下重鎚,對集中區域造成 {50/55/60/65/70/75/80/85/90/95}% 點傷害。\n\nTags: 核心, 鈍擊, 怒氣, 物理, 傷害, 雙手."
},
		id: 16,
		maxPoints: 5,
		x: -418.74,
		y: -259.245
	},
	"Enhanced Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Hammer of the Ancients", "Violent Hammer of the Ancients", "Furious Hammer of the Ancients" ],
		description: `Gain x3% more Fury for 5 seconds for each enemy damaged by Hammer of the Ancients, stacking up to 10 times.`,
		nameLocalized: {
			"deDE": "Verbesserter Hammer der Urahnen",
			"esES": "Martillo de los Ancestros mejorado",
			"esMX": "Martillo Ancestral Potenciado",
			"frFR": "Marteau des anciens renforcé",
			"itIT": "Maglio degli Antichi Rinforzato",
			"jaJP": "古の大槌(強化版)",
			"koKR": "강화된 선조의 망치",
			"plPL": "Wzmocniony Młot Starożytnych",
			"ptBR": "Martelo dos Ancestrais Aperfeiçoado",
			"ruRU": "Усиленный молот Древних",
			"zhCN": "强化先祖之锤",
			"zhTW": "強化先祖之鎚"
},
		descriptionLocalized: {
			"deDE": "Erzeugt 5 Sek. lang x3% mehr Wut für jeden Gegner, der von Hammer der Urahnen getroffen wurde. Bis zu 10-mal stapelbar.",
			"esES": "Obtienes un x3% más de furia durante 5 s por cada enemigo al que inflijas daño con Martillo de los Ancestros. Se acumula hasta 10 veces.",
			"esMX": "Obtienes un x3% más de Furia durante 5 segundos por cada enemigo que recibe daño de Martillo Ancestral, lo que se acumula hasta 10 veces.",
			"frFR": "Vous gagnez x3% de fureur en plus pendant 5 s pour chaque cible blessée par Marteau des Anciens, cet effet pouvant se cumuler jusqu'à 10 fois.",
			"itIT": "Ottieni il x3% di furia aggiuntiva per 5 secondi per ogni nemico colpito da Maglio degli Antichi; si accumula fino a 10 volte.",
			"jaJP": "〈古の大槌〉で敵にダメージを与えるたびに、5秒間、怒気の獲得量がx3%増える。この効果は10回まで蓄積する。",
			"koKR": "선조의 망치로 피해를 준 적 하나당 5초 동안 x3%의 추가 분노를 얻으며, 이 효과는 최대 10번까지 중첩됩니다.",
			"plPL": "Zyskujesz dodatkowo x3% furii na 5 sek. za każdego wroga zranionego Młotem Starożytnych. Efekt ten kumuluje się maksymalnie 10 razy.",
			"ptBR": "Recebe 3% de fúria adicional por 5 segundos por cada inimigo atingido por Martelo dos Ancestrais, acumulando até 10 vezes.",
			"ruRU": "Когда \"Молот Древних\" наносит урон, вы накапливаете на x3% ед. больше ярости в течение 5 сек. за каждого пораженного противника. Эффект суммируется до 10 раз.",
			"zhCN": "每有一个被先祖之锤伤害的敌人, 便可额外获得 x3% 怒气, 持续 5 秒, 最多可叠加 10 次。",
			"zhTW": "先祖之鎚每對一個敵人造成傷害,就獲得 x3% 額外怒氣,持續 5 秒,最多可堆疊 10 次。"
},
		id: 17,
		maxPoints: 1,
		x: -654.995,
		y: -413.33
	},
	"Violent Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Enhanced Hammer of the Ancients" ],
		description: `After Overpowering with Hammer of the Ancients, you deal x30% more damage for 5 seconds.`,
		nameLocalized: {
			"deDE": "Brutaler Hammer der Urahnen",
			"esES": "Martillo de los Ancestros violento",
			"esMX": "Martillo Ancestral Violento",
			"frFR": "Marteau des Anciens violent",
			"itIT": "Maglio degli Antichi Violento",
			"jaJP": "古の大槌(凶暴)",
			"koKR": "난폭한 선조의 망치",
			"plPL": "Gwałtowny Młot Starożytnych",
			"ptBR": "Martelo dos Ancestrais Violento",
			"ruRU": "Жестокий молот Древних",
			"zhCN": "暴力先祖之锤",
			"zhTW": "凶暴先祖之鎚"
},
		descriptionLocalized: {
			"deDE": "Nach Überwältigen mit Hammer der Urahnen verursacht Ihr 5 Sek. lang x30% mehr Schaden.",
			"esES": "Tras arrollar con Martillo de los Ancestros, infliges un x30% más de daño durante 5 s.",
			"esMX": "Después de abrumar con Martillo Ancestral, infliges un x30% más de daño durante 5 segundos.",
			"frFR": "Après avoir accablé une cible avec Marteau des Anciens, vous infligez x30% de dégâts supplémentaires pendant 5 s.",
			"itIT": "Dopo aver inflitto Sopraffazione con il Maglio degli Antichi, infliggi il x30% di danni aggiuntivi per 5 secondi.",
			"jaJP": "〈古の大槌〉でオーバーパワーを発生させると、5秒間、与えるダメージがx30%増加する。",
			"koKR": "선조의 망치로 적을 제압한 후 5초 동안 주는 피해가 x30% 증가합니다.",
			"plPL": "Po przytłoczeniu z użyciem Młota Starożytnych zadajesz obrażenia zwiększone o x30% przez 5 sek.",
			"ptBR": "Depois de desferir um Golpe Brutal com Martelo dos Ancestrais, você causa 30% de dano aumentado por 5 segundos.",
			"ruRU": "Когда \"Молот Древних\" наносит подавляющий урон, наносимый вами урон увеличивается на x30% на 5 сек.",
			"zhCN": "使用先祖之锤造成压制后, 你造成的伤害提高 x30%, 持续 5 秒。",
			"zhTW": "以先祖之鎚壓制後,你造成的傷害提高 x30%,持續 5 秒。"
},
		id: 18,
		maxPoints: 1,
		x: -918.03,
		y: -430.69
	},
	"Furious Hammer of the Ancients": {
		baseSkill: "Hammer of the Ancients",
		connections: [ "Enhanced Hammer of the Ancients" ],
		description: `Hammer of the Ancients deals x1% additional damage for each point of Fury you had when using it.`,
		nameLocalized: {
			"deDE": "Furioser Hammer der Urahnen",
			"esES": "Martillo de los Ancestros furioso",
			"esMX": "Martillo Ancestral Furioso",
			"frFR": "Marteau des Anciens furieux",
			"itIT": "Maglio degli Antichi Furioso",
			"jaJP": "古の大槌(激烈)",
			"koKR": "맹렬한 선조의 망치",
			"plPL": "Wściekły Młot Starożytnych",
			"ptBR": "Martelo dos Ancestrais Furioso",
			"ruRU": "Яростный молот Древних",
			"zhCN": "狂怒先祖之锤",
			"zhTW": "狂怒先祖之鎚"
},
		descriptionLocalized: {
			"deDE": "Hammer der Urahnen fügt x1% zusätzlichen Schaden für jeden Wutpunkt zu, den Ihr bei Aktivierung hattet.",
			"esES": "Martillo de los Ancestros inflige un x1% más de daño por cada punto de furia que tengas al usarlo.",
			"esMX": "Martillo Ancestral inflige un x1% más de daño por cada punto de Furia que tenías al usar la habilidad.",
			"frFR": "Marteau des anciens inflige x1% de dégâts supplémentaires pour chaque point de fureur que vous aviez au moment de son utilisation.",
			"itIT": "Maglio degli Antichi infligge il x1% di danni aggiuntivi per ogni punto di furia che avevi al suo utilizzo.",
			"jaJP": "〈古の大槌〉で与えるダメージが、使用時の所有怒気1ポイント毎にx1%増加する。",
			"koKR": "선조의 망치를 사용할 때 보유한 분노 1당 x1%의 추가 피해를 줍니다.",
			"plPL": "Młot Starożytnych zadaje dodatkowe x1% pkt. obrażeń za każdy punkt furii posiadany w chwili użycia tej umiejętności.",
			"ptBR": "Martelo dos Ancestrais causa 1% de dano adicional por cada ponto de fúria que você tinha ao usá-lo.",
			"ruRU": "\"Молот Древних\" наносит на x1% больше урона за каждую единицу ярости, накопленную на момент применения умения.",
			"zhCN": "使用先祖之锤时, 每有一点怒气, 造成的伤害提高 x1%。",
			"zhTW": "使用先祖之鎚時,你每擁有一點怒氣,可造成 x1% 額外傷害。"
},
		id: 19,
		maxPoints: 1,
		x: -661.27,
		y: -553.505
	},
	"Upheaval": {
		connections: [ "Core", "Enhanced Upheaval" ],
		description: `Attack Speed Multiplier: 1.1
Fury Cost: 40
Lucky Hit Chance: 25% (per hit)
Tear into the ground with your weapon and fling debris forward, dealing {70/77/84/91/98/105/112/119/126/133}% damage.

Tags: Core, Damage, Physical, Fury, Two-Handed.`,
		nameLocalized: {
			"deDE": "Aufwühlen",
			"esES": "Ataque tectónico",
			"esMX": "Conmoción",
			"frFR": "Soulèvement",
			"itIT": "Tumulto",
			"jaJP": "隆起",
			"koKR": "지각 변동",
			"plPL": "Wypiętrzenie",
			"ptBR": "Revolta",
			"ruRU": "Выброс земли",
			"zhCN": "扬石飞沙",
			"zhTW": "動盪震擊"
},
		descriptionLocalized: {
			"deDE": "Attack Speed Multiplier: 1.1\nWutkosten: 40\nGlückstrefferchance: 25% (per hit)\nBohrt Eure Waffe in den Boden und schleudert Geröll nach vorn, das {70/77/84/91/98/105/112/119/126/133}% Schaden verursacht.\n\nTags: Kern, Schaden, Physisch, Wut, Zweihändig.",
			"esES": "Attack Speed Multiplier: 1.1\nCoste de furia: 40\nProbabilidad de golpe de suerte: 25% (per hit)\nDesgarras el suelo con tu arma y lanzas escombros hacia adelante, lo que inflige {70/77/84/91/98/105/112/119/126/133}% de daño.\n\nTags: Principal, Daño, Física, Furia, Dos manos.",
			"esMX": "Attack Speed Multiplier: 1.1\nCosto de Furia: 40\nProbabilidad de golpe afortunado: 25% (per hit)\nRompes el suelo con tu arma, lanzas restos hacia adelante e infliges {70/77/84/91/98/105/112/119/126/133}% de daño.\n\nTags: Principal, Daño, Física, Furia, Dos manos.",
			"frFR": "Attack Speed Multiplier: 1.1\nCoût en fureur: 40\nChances d'obtenir un coup de chance: 25% (per hit)\nVous déchirez le sol avec votre arme et projetez des débris vers l'avant, ce qui inflige {70/77/84/91/98/105/112/119/126/133}% points de dégâts.\n\nTags: Principale, Dégâts, Dégâts physiques, Fureur, Arme à deux mains.",
			"itIT": "Attack Speed Multiplier: 1.1\nCosto in furia: 40\nProbabilità di colpo fortunato: 25% (per hit)\nSpacchi il terreno con la tua arma e lanci i detriti in avanti, infliggendo {70/77/84/91/98/105/112/119/126/133}% danni.\n\nTags: Primaria, Danni, Fisico, Furia, A due mani.",
			"jaJP": "Attack Speed Multiplier: 1.1\n怒気コスト: 40\n幸運の一撃発生率: 25% (per hit)\n武器で地面を切り裂いて破片を前方に打ち出し、{70/77/84/91/98/105/112/119/126/133}%のダメージを与える。\n\nTags: コア, ダメージ, 物理, 怒気, 両手用武器.",
			"koKR": "Attack Speed Multiplier: 1.1\n소모: 분노 40\n행운의 적중 확률: 25% (per hit)\n무기로 땅을 파고든 후 전방에 파편을 날려 {70/77/84/91/98/105/112/119/126/133}%의 피해를 줍니다.\n\nTags: 핵심, 피해, 물리, 분노, 양손 무기.",
			"plPL": "Attack Speed Multiplier: 1.1\nKoszt: 40 pkt. furii.\nSzansa na szczęśliwy traf: 25% (per hit)\nRozdzierasz bronią grunt pod sobą i ciskasz grudami ziemi, zadając {70/77/84/91/98/105/112/119/126/133}% pkt. obrażeń.\n\nTags: Główne, Obrażenia, Fizyczne, Furia, Dwuręczne.",
			"ptBR": "Attack Speed Multiplier: 1.1\nCusto de fúria: 40\nChance de Golpe de Sorte: 25% (per hit)\nVocê rasga o chão com sua arma e arremessa detritos para frente, causando {70/77/84/91/98/105/112/119/126/133}% de dano.\n\nTags: Principal, Dano, Física, Fúria, Duas mãos.",
			"ruRU": "Attack Speed Multiplier: 1.1\nЗатраты ярости: 40 ед.\nВероятность удачного удара: 25% (per hit)\nВы разрываете землю и запускаете вперед обломки, наносящие {70/77/84/91/98/105/112/119/126/133}% ед. урона.\n\nTags: Основное, Урон, Физический урон, Ярость, Двуручное.",
			"zhCN": "Attack Speed Multiplier: 1.1\n怒气消耗: 40\n幸运一击几率: 25% (per hit)\n用你的武器撕裂大地并向前方扬起碎片, 造成 {70/77/84/91/98/105/112/119/126/133}% 点伤害。\n\nTags: 核心, 伤害, 物理, 怒气, 双手.",
			"zhTW": "Attack Speed Multiplier: 1.1\n怒氣消耗:40\n幸運觸發機率: 25% (per hit)\n用武器劈開地面,彈飛的石塊往前砸向敵人,造成 {70/77/84/91/98/105/112/119/126/133}% 點傷害。\n\nTags: 核心, 傷害, 物理, 怒氣, 雙手."
},
		id: 20,
		maxPoints: 5,
		x: -584.54,
		y: 150.91
	},
	"Enhanced Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Upheaval", "Violent Upheaval", "Furious Upheaval" ],
		description: `Upheaval has a 20% chance to Stun all enemies it damages for 2.5 seconds.`,
		nameLocalized: {
			"deDE": "Verbessertes Aufwühlen",
			"esES": "Ataque tectónico mejorado",
			"esMX": "Conmoción Potenciada",
			"frFR": "Soulèvement renforcé",
			"itIT": "Tumulto Rinforzato",
			"jaJP": "隆起(強化版)",
			"koKR": "강화된 지각 변동",
			"plPL": "Wzmocnione Wypiętrzenie",
			"ptBR": "Revolta Aperfeiçoada",
			"ruRU": "Усиленный выброс земли",
			"zhCN": "强化扬石飞沙",
			"zhTW": "強化動盪震擊"
},
		descriptionLocalized: {
			"deDE": "Aufwühlen verfügt über eine Chance von 20%, alle Gegner, denen die Fertigkeit Schaden zufügt, 2.5 Sek. lang zu betäuben.",
			"esES": "Ataque tectónico tiene un 20% de probabilidad de aturdir a todos los enemigos a los que daña durante 2.5 s.",
			"esMX": "Conmoción tiene un 20% de probabilidad de aturdir a todos los enemigos que daña durante 2.5 segundos.",
			"frFR": "Soulèvement a 20% de chances d'étourdir pendant 2.5 s toutes les cibles auxquelles il inflige des dégâts.",
			"itIT": "Tumulto ha il 20% di probabilità di stordire tutti i nemici a cui infligge danni per 2.5 s.",
			"jaJP": "〈隆起〉が20%の確率で、ダメージを与えたあらゆる敵を2.5秒間スタンさせる。",
			"koKR": "지각 변동이 20% 확률로 피해를 준 모든 적을 2.5초 동안 기절시킵니다.",
			"plPL": "Wypiętrzenie ma 20% szans na ogłuszenie wszystkich zranionych wrogów na 2.5 sek.",
			"ptBR": "Revolta tem 20% de chance de atordoar todos os inimigos atingidos por 2.5 segundos.",
			"ruRU": "\"Выброс земли\" с вероятностью 20% оглушает пораженных противников на 2.5 сек.",
			"zhCN": "扬石飞沙造成伤害时有 20% 几率击晕所有敌人, 持续 2.5 秒。",
			"zhTW": "動盪震擊有 20% 機率擊昏所有其造成傷害的敵人,持續 2.5 秒。"
},
		id: 21,
		maxPoints: 1,
		x: -903.275,
		y: 232.2
	},
	"Violent Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Enhanced Upheaval" ],
		description: `If Upheaval damages at least 2 enemies, you gain Berserking for 2 seconds, increased to 3 seconds if it damages at least 4 enemies.`,
		nameLocalized: {
			"deDE": "Brutales Aufwühlen",
			"esES": "Ataque tectónico violento",
			"esMX": "Conmoción Violenta",
			"frFR": "Soulèvement violent",
			"itIT": "Tumulto Violento",
			"jaJP": "隆起(凶暴)",
			"koKR": "난폭한 지각 변동",
			"plPL": "Gwałtowne Wypiętrzenie",
			"ptBR": "Revolta Violenta",
			"ruRU": "Жестокий выброс земли",
			"zhCN": "狂暴扬石飞沙",
			"zhTW": "凶暴動盪震擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Aufwühlen mindestens 2 Gegnern Schaden zufügt, verfallt Ihr 2 Sek. lang in den Berserkermodus. Die Dauer erhöht sich auf 3 Sek., wenn die Fertigkeit mindestens 4 Gegnern Schaden zufügt.",
			"esES": "Si Ataque tectónico inflige daño a al menos 2 enemigos, obtienes vesania durante 2 s. Esta duración aumenta a 3 s si inflige daño a al menos 4 enemigos.",
			"esMX": "Si Conmoción inflige daño a al menos 2 enemigos, obtienes enajenación durante 2 segundos, lo que aumenta a 3 segundos si inflige daño a al menos 4 enemigos.",
			"frFR": "Vous obtenez l'effet de Rage du berserker pendant 2 s si Soulèvement inflige des dégâts à au moins 2 adversaires, et pendant 3 s s'il inflige des dégâts à au moins 4 adversaires.",
			"itIT": "Se Tumulto infligge danni ad almeno 2 nemici, ottieni Berserk per 2 s, che possono aumentare a 3 s se infligge danni ad almeno 4 nemici.",
			"jaJP": "〈隆起〉が2体以上の敵にダメージを与えると、2秒間〈バーサーク〉状態になる。4体以上の敵にダメージを与えた場合は、効果時間が3秒間になる。",
			"koKR": "지각 변동으로 2마리 이상의 적에게 피해를 주면 2초 동안 광폭화합니다. 4마리 이상의 적에게 피해를 주면 지속시간이 3초로 증가합니다.",
			"plPL": "Jeśli Wypiętrzenie zrani co najmniej 2 wrogów, zyskasz berserkowanie na 2 sek. Czas ten jest wydłużony do 3 sek., gdy umiejętność rani co najmniej 4 wrogów.",
			"ptBR": "Se Revolta causar dano a pelo menos 2 inimigos, você receberá Berserk por 2 segundos, com aumento para 3 segundos se causar dano a pelo menos 4 inimigos.",
			"ruRU": "Когда \"Выброс земли\" наносит урон 2 или более противникам, вы переходите в состояние берсерка на 2 сек. Если способность поражает хотя бы 4 противников, время действия продлевается до 3 сек.",
			"zhCN": "如果扬石飞沙至少对 2 名敌人造成伤害, 你获得狂暴, 持续 2 秒。如果至少对 4 名敌人造成伤害则延长至 3 秒。",
			"zhTW": "若動盪震擊對至少 2 個敵人造成傷害,你會獲得狂暴 2 秒。若對至少 4 個敵人造成傷害,則提高至 3 秒。"
},
		id: 22,
		maxPoints: 1,
		x: -1169.22,
		y: 215.73
	},
	"Furious Upheaval": {
		baseSkill: "Upheaval",
		connections: [ "Enhanced Upheaval" ],
		description: `Dealing direct damage to an enemy with a Skill that is not Upheaval causes your next cast of Upheaval to deal x3% increased damage, stacking up to 10 times.`,
		nameLocalized: {
			"deDE": "Furioses Aufwühlen",
			"esES": "Ataque tectónico furioso",
			"esMX": "Conmoción Furiosa",
			"frFR": "Soulèvement furieux",
			"itIT": "Tumulto Furioso",
			"jaJP": "隆起(激烈)",
			"koKR": "맹렬한 지각 변동",
			"plPL": "Wściekłe Wypiętrzenie",
			"ptBR": "Revolta Furiosa",
			"ruRU": "Яростный выброс земли",
			"zhCN": "狂怒扬石飞沙",
			"zhTW": "狂怒動盪震擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einem Gegner mit einer anderen Fertigkeit als Aufwühlen direkten Schaden zufügt, verursacht Euer nächster Einsatz von Aufwühlen x3% mehr Schaden (bis zu 10-mal stapelbar).",
			"esES": "Infligir daño directo a un enemigo con una habilidad que no sea Ataque tectónico hace que tu siguiente lanzamiento de Ataque tectónico inflija un x3% más de daño. Se acumula hasta 10 veces.",
			"esMX": "Infligir daño directo a un enemigo con una habilidad que no sea Conmoción provoca que tu siguiente lanzamiento de Conmoción inflija un x3% más de daño. El efecto se acumula hasta 10 veces.",
			"frFR": "Infliger des dégâts directs à une cible avec une autre compétence que Soulèvement augmente de x3% les dégâts de votre prochaine utilisation de Soulèvement, cet effet pouvant se cumuler jusqu'à 10 fois.",
			"itIT": "Infliggere danni diretti a un nemico con un'abilità che non sia Tumulto fa sì che il tuo successivo lancio di Tumulto infligga il x3% di danni aggiuntivi, fino a un massimo di 10 volte.",
			"jaJP": "〈隆起〉以外のスキルで敵に直接ダメージを与えると、次の〈隆起〉で与えるダメージがx3%増加する。この効果は10回まで蓄積する。",
			"koKR": "지각 변동이 아닌 기술로 적에게 직접 피해를 주면 다음 지각 변동 시전 시 주는 피해가 x3% 증가하며, 이 효과는 최대 10번까지 중첩됩니다.",
			"plPL": "Zadawanie wrogowi bezpośrednich obrażeń umiejętnością inną niż Wypiętrzenie sprawia, że przy kolejnym użyciu Wypiętrzenie zada obrażenia zwiększone o x3%. Efekt ten kumuluje się maksymalnie 10 razy.",
			"ptBR": "Causar dano direto a um inimigo com uma habilidade que não seja Revolta faz com que seu próximo lançamento de Revolta cause 3% de dano aumentado, acumulando até 10 vezes.",
			"ruRU": "Когда вы наносите прямой урон любым умением, кроме \"Выброса земли\", ваш следующий \"Выброс земли\" наносит на x3% больше урона. Эффект суммируется до 10 раз.",
			"zhCN": "使用扬石飞沙之外的技能对敌人造成直接伤害, 可以使你的下一次扬石飞沙造成的伤害提高 x3%, 该效果最多可叠加 10 次。",
			"zhTW": "使用動盪震擊以外的技能對敵人造成直接傷害,會使你下一次施放動盪震擊造成的傷害提高 x3%,最多可堆疊 10 次。"
},
		id: 23,
		maxPoints: 1,
		x: -1021.685,
		y: 367.49
	},
	"Double Swing": {
		connections: [ "Core", "Enhanced Double Swing" ],
		description: `Fury Cost: {#}
Lucky Hit Chance: 30% (per hit)
Sweep your weapons from opposite directions, dealing {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% damage with each weapon. Enemies caught in the center are damaged by both.

Tags: Core, Dual Wield, Damage, Physical, Fury.`,
		nameLocalized: {
			"deDE": "Doppelschwung",
			"esES": "Ataque doble",
			"esMX": "Azote Doble",
			"frFR": "Coup double",
			"itIT": "Doppio Colpo",
			"jaJP": "二刀流",
			"koKR": "이중 타격",
			"plPL": "Podwójne Uderzenie",
			"ptBR": "Golpe Duplo",
			"ruRU": "Двойной удар",
			"zhCN": "双重横扫",
			"zhTW": "雙手揮擊"
},
		descriptionLocalized: {
			"deDE": "Wutkosten: {#}\nGlückstrefferchance: 30% (per hit)\nSchwingt Eure Waffen aus entgegengesetzten Richtungen und verursacht mit jeder Waffe {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% Schaden. Gegner in der Mitte erleiden durch beide Waffen Schaden.\n\nTags: Kern, Zwei Waffen, Schaden, Physisch, Wut.",
			"esES": "Coste de furia: {#}\nProbabilidad de golpe de suerte: 30% (per hit)\nAtacas con tus armas desde direcciones opuestas, lo que inflige {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% de daño con cada arma. Los enemigos situados en el centro sufren daño de ambas.\n\nTags: Principal, Doble empuñadura, Daño, Física, Furia.",
			"esMX": "Costo de Furia: {#}\nProbabilidad de golpe afortunado: 30% (per hit)\nArrasas con tus armas desde direcciones opuestas e infliges {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% de daño con cada arma. Los enemigos que quedan atrapados en el centro reciben daño de ambas.\n\nTags: Principal, Ambidestreza, Daño, Física, Furia.",
			"frFR": "Coût en fureur: {#}\nChances d'obtenir un coup de chance: 30% (per hit)\nVous frappez avec vos armes des deux côtés et infligez {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% points de dégâts avec chacune d'elles. Les cibles ainsi prises en tenaille sont blessées par les deux armes.\n\nTags: Principale, Deux armes, Dégâts, Dégâts physiques, Fureur.",
			"itIT": "Costo in furia: {#}\nProbabilità di colpo fortunato: 30% (per hit)\nFai un affondo con le armi verso l'interno, infliggendo {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% danni con ogni arma. I nemici che si trovano in mezzo subiscono i danni di entrambe le armi.\n\nTags: Primaria, Doppia arma, Danni, Fisico, Furia.",
			"jaJP": "怒気コスト: {#}\n幸運の一撃発生率: 30% (per hit)\n両手の武器をそれぞれの方向から振るって、各武器で敵に{36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}%のダメージを与える。正面に立っていた敵は両方のダメージを受ける。\n\nTags: コア, 二刀流, ダメージ, 物理, 怒気.",
			"koKR": "소모: 분노 {#}\n행운의 적중 확률: 30% (per hit)\n무기를 양쪽 방향에서 휘둘러 각 무기로 {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}%의 피해를 줍니다. 중앙에 있는 적은 두 무기의 피해를 모두 받습니다.\n\nTags: 핵심, 쌍수 무기, 피해, 물리, 분노.",
			"plPL": "Koszt: {#} pkt. furii.\nSzansa na szczęśliwy traf: 30% (per hit)\nWykonujesz zamach z przeciwnych stron dwiema sztukami broni jednocześnie, zadając każdą z nich {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% pkt. obrażeń. Wrogowie znajdujący się w centrum ciosu otrzymują obrażenia od obu.\n\nTags: Główne, Broń w Każdej Ręce, Obrażenia, Fizyczne, Furia.",
			"ptBR": "Custo de fúria: {#}\nChance de Golpe de Sorte: 30% (per hit)\nVocê golpeia com suas armas em direções opostas, causando {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% de dano com cada arma. Inimigos presos no centro recebem dano das duas armas.\n\nTags: Principal, Empunhadura Dupla, Dano, Física, Fúria.",
			"ruRU": "Затраты ярости: {#} ед.\nВероятность удачного удара: 30% (per hit)\nВы атакуете оружием в обеих руках, нанося по {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% ед. урона каждым оружием. Противники в центре получают урон от обоих ударов.\n\nTags: Основное, Оружие в каждой руке, Урон, Физический урон, Ярость.",
			"zhCN": "怒气消耗: {#}\n幸运一击几率: 30% (per hit)\n从两侧挥动你的武器, 每把武器造成 {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% 点伤害。在中间的敌人会同时受到两把武器的伤害。\n\nTags: 核心, 双持, 伤害, 物理, 怒气.",
			"zhTW": "怒氣消耗:{#}\n幸運觸發機率: 30% (per hit)\n使用武器交叉揮擊,每把武器造成 {36/39.6/43.2/46.8/50.4/54/57.6/61.2/64.8/68.4}% 點傷害。在攻擊範圍中央的敵人會被兩把武器擊中。\n\nTags: 核心, 雙持, 傷害, 物理, 怒氣."
},
		id: 24,
		maxPoints: 5,
		values: [ "25" ],
		x: -271.825,
		y: 307.88
	},
	"Enhanced Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Double Swing", "Furious Double Swing", "Violent Double Swing" ],
		description: `If Double Swing damages a Stunned or Knocked Down enemy, gain 25 Fury.`,
		nameLocalized: {
			"deDE": "Verbesserter Doppelschwung",
			"esES": "Ataque doble mejorado",
			"esMX": "Azote Doble Potenciado",
			"frFR": "Coup double renforcé",
			"itIT": "Doppio Colpo Rinforzato",
			"jaJP": "二刀流(強化版)",
			"koKR": "강화된 이중 타격",
			"plPL": "Wzmocnione Podwójne Uderzenie",
			"ptBR": "Golpe Duplo Aperfeiçoado",
			"ruRU": "Усиленный двойной удар",
			"zhCN": "强化双重横扫",
			"zhTW": "強化雙手揮擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Doppelschwung einem betäubten oder zurückgestoßenen Gegner Schaden zufügt, erhaltet Ihr 25 Wut.",
			"esES": "Si Ataque doble inflige daño a un enemigo aturdido o derribado, obtienes 25 de furia.",
			"esMX": "Si Azote Doble inflige daño a un enemigo aturdido o derribado, obtienes 25 de Furia.",
			"frFR": "Si Coup double blesse une cible étourdie ou renversée, vous obtenez 25 points de fureur.",
			"itIT": "Se Doppio Colpo infligge danni a un nemico stordito o caduto, ottieni 25 furia.",
			"jaJP": "スタンまたはノックダウン中の敵に対して〈二刀流〉でダメージを与えると、25の怒気を獲得する。",
			"koKR": "이중 타격이 기절하거나 넘어진 적에게 피해를 주면 분노를 25 얻습니다.",
			"plPL": "Jeśli Podwójne Uderzenie zada obrażenia ogłuszonemu lub powalonemu wrogowi, zyskujesz 25 pkt. furii.",
			"ptBR": "Se Golpe Duplo causar dano a um inimigo atordoado ou nocauteado, você receberá 25 de fúria.",
			"ruRU": "Если \"Двойной удар\" наносит урон оглушенному или сбитому с ног противнику, вы получаете 25 ед. ярости.",
			"zhCN": "如果双重横扫的伤害击晕或击倒敌人, 获得 25 点怒气。",
			"zhTW": "雙手揮擊對昏迷或被擊倒的敵人造成傷害時,獲得 25 點怒氣。"
},
		id: 25,
		maxPoints: 1,
		x: -458.17,
		y: 495.325
	},
	"Furious Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Enhanced Double Swing" ],
		description: `Casting Double Swing while Berserking grants 2 additional seconds of Berserking.`,
		nameLocalized: {
			"deDE": "Furioser Doppelschwung",
			"esES": "Ataque doble furioso",
			"esMX": "Azote Doble Furioso",
			"frFR": "Coup double furieux",
			"itIT": "Doppio Colpo Furioso",
			"jaJP": "二刀流(激烈)",
			"koKR": "맹렬한 이중 타격",
			"plPL": "Wściekłe Podwójne Uderzenie",
			"ptBR": "Golpe Duplo Furioso",
			"ruRU": "Яростный двойной удар",
			"zhCN": "狂怒双重横扫",
			"zhTW": "狂怒雙手揮擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr im Berserkermodus Doppelschwung wirkt, hält der Berserkermodus 2 Sek. länger an.",
			"esES": "Lanzar Ataque doble mientras tienes vesania otorga 2 s más de vesania.",
			"esMX": "Lanzar Azote Doble cuando tienes enajenación otorga 2 segundos adicionales de enajenación.",
			"frFR": "Lancer Coup double sous l'effet de Rage du berserker vous confère 2 s supplémentaires de Rage du berserker.",
			"itIT": "Lanciare Doppio Colpo mentre Berserk è attivo fornisce 2 s aggiuntivi di Berserk.",
			"jaJP": "〈バーサーク〉状態の時に〈二刀流〉を使うと、〈バーサーク〉状態の持続時間が2秒伸びる。",
			"koKR": "광폭화 상태에서 이중 타격을 시전하면 광폭화의 지속시간이 2초 증가합니다.",
			"plPL": "Użycie Podwójnego Uderzenia podczas berserkowania zapewnia dodatkowo 2 sek. berserkowania.",
			"ptBR": "Lançar Golpe Duplo sob efeito de Berserk concede 2 segundos adicionais de Berserk.",
			"ruRU": "Когда вы применяете \"Двойной удар\" в состоянии берсерка, время действия берсерка продлевается на 2 сек.",
			"zhCN": "狂暴状态下施放双重横扫可以获得额外 2 秒狂暴。",
			"zhTW": "狂暴時施放雙手揮擊會使狂暴延長 2 秒。"
},
		id: 26,
		maxPoints: 1,
		x: -713.785,
		y: 545.495
	},
	"Violent Double Swing": {
		baseSkill: "Double Swing",
		connections: [ "Enhanced Double Swing" ],
		description: `Hitting an enemy with both hits of Double Swing makes them Vulnerable for 1 second.`,
		nameLocalized: {
			"deDE": "Brutaler Doppelschwung",
			"esES": "Ataque doble violento",
			"esMX": "Azote Doble Violento",
			"frFR": "Coup double violent",
			"itIT": "Doppio Colpo Violento",
			"jaJP": "二刀流(凶暴)",
			"koKR": "난폭한 이중 타격",
			"plPL": "Gwałtowne Podwójne Uderzenie",
			"ptBR": "Golpe Duplo Violento",
			"ruRU": "Жестокий двойной удар",
			"zhCN": "暴力双重横扫",
			"zhTW": "凶暴雙手揮擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr einen Gegner mit beiden Treffern von Doppelschwung trefft, wird dieser 1 Sek. lang verwundbar.",
			"esES": "Golpear a un enemigo con los dos golpes de Ataque doble lo vuelve vulnerable durante 1 s.",
			"esMX": "Golpear a un enemigo con ambos golpes de Azote Doble lo vuelve vulnerable durante 1 segundo.",
			"frFR": "Les cibles touchées par les deux coups de Coup double deviennent vulnérables pendant 1 s.",
			"itIT": "Colpire un nemico con entrambi i fendenti di Doppio Colpo lo rende vulnerabile per 1 s.",
			"jaJP": "〈二刀流〉の両方の攻撃が当たった敵を1秒間、脆弱.状態にする。",
			"koKR": "이중 타격을 적에게 두 번 다 적중시키면 해당 적이 1초 동안 취약해집니다.",
			"plPL": "Wróg trafiony obydwoma atakami Podwójnego Uderzenia staje się odsłonięty na 1 sek.",
			"ptBR": "Acertar um inimigo com ambos os golpes de Golpe Duplo torna-o vulnerável por 1 segundos.",
			"ruRU": "Противники, пораженные обеими атаками \"Двойного удара\", становятся уязвимыми на 1 сек.",
			"zhCN": "双重横扫的两次攻击对一名敌人造成伤害的同时也会使其陷入易伤状态, 持续 1 秒。",
			"zhTW": "雙手揮擊兩次攻擊打中同一名敵人時,會使其易傷 1 秒。"
},
		id: 27,
		maxPoints: 1,
		x: -418.57,
		y: 639.185
	},
	"Pressure Point": {
		connections: [ "Core" ],
		description: `Lucky Hit: Your Core skills have up to a {10/20/30/40/50/60/70/80/90/100}% chance to make enemies Vulnerable for 2 seconds.

Tags: Vulnerable, Core, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Druckpunkt",
			"esES": "Punto de presión",
			"esMX": "Punto de Presión",
			"frFR": "Point de pression",
			"itIT": "Punto di Pressione",
			"jaJP": "一点集中",
			"koKR": "혈점 포착",
			"plPL": "Punkt Uciskowy",
			"ptBR": "Ponto de Pressão",
			"ruRU": "Уязвимая точка",
			"zhCN": "点穴打击",
			"zhTW": "施壓"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Eure Kernfertigkeiten verfügen über eine Chance von {10/20/30/40/50/60/70/80/90/100}%, Gegner 2 Sek. lang verwundbar zu machen.\n\nTags: Verwundbar, Kern, Glückstreffer.",
			"esES": "Golpe de suerte: Tus habilidades principales tienen hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de volver vulnerables a los enemigos durante 2 s.\n\nTags: Vulnerable, Principal, Golpe de suerte.",
			"esMX": "Golpe afortunado: Tus habilidades principales tienen hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de volver a los enemigos vulnerables durante 2 segundos.\n\nTags: Vulnerable, Principal, Golpe afortunado.",
			"frFR": "Coup de chance: vos compétences principales ont jusqu'à {10/20/30/40/50/60/70/80/90/100}% de chances de rendre les adversaires vulnérables pendant 2 s.\n\nTags: Vulnérable, Principale, Coup de chance.",
			"itIT": "Colpo fortunato: le tue abilità Primarie hanno fino al {10/20/30/40/50/60/70/80/90/100}% di probabilità di rendere i nemici vulnerabili per 2 s.\n\nTags: Vulnerabilità, Primaria, Colpo fortunato.",
			"jaJP": "幸運の一撃: コアスキルが最大{10/20/30/40/50/60/70/80/90/100}%の確率で2秒間にわたり、敵を脆弱状態にする。\n\nTags: 脆弱, コア, 幸運の一撃.",
			"koKR": "행운의 적중: 핵심 기술이 최대 {10/20/30/40/50/60/70/80/90/100}% 확률로 2초 동안 적을 취약하게 만듭니다.\n\nTags: 취약, 핵심, 행운의 적중.",
			"plPL": "Szczęśliwy traf: Twoje umiejętności Główne mają {10/20/30/40/50/60/70/80/90/100}% szans na odsłonięcie wrogów na 2 sek.\n\nTags: Odsłonięcie, Główne, Szczęśliwy Traf.",
			"ptBR": "Golpe de Sorte: Suas habilidades principais têm até {10/20/30/40/50/60/70/80/90/100}% de chance de tornar os inimigos vulneráveis por 2 segundos.\n\nTags: Vulnerável, Principal, Golpe de Sorte.",
			"ruRU": "Удачный удар: ваши основные умения с вероятностью до {10/20/30/40/50/60/70/80/90/100}% делают противников уязвимыми на 2 сек.\n\nTags: Уязвимость, Основное, Удачный удар.",
			"zhCN": "幸运一击: 你的核心技能最多有 {10/20/30/40/50/60/70/80/90/100}% 几率使敌人陷入易伤状态, 持续 2 秒。\n\nTags: 易伤, 核心, 幸运一击.",
			"zhTW": "幸運觸發:你的核心技能最高有 {10/20/30/40/50/60/70/80/90/100}% 機率讓敵人易傷,持續 2 秒。\n\nTags: 易傷, 核心, 幸運觸發."
},
		id: 28,
		maxPoints: 3,
		x: -584.87,
		y: -96.25
	},
	"Rend": {
		connections: [ "Core", "Enhanced Rend" ],
		description: `Fury Cost: 35
Lucky Hit Chance: 33% (per use)
Cleave enemies in front of you, dealing {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% damage and inflicting {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% Bleeding damage over 5 seconds.

Tags: Core, Bleed, Damage, Physical, Fury, Slashing.`,
		nameLocalized: {
			"deDE": "Zerfleischen",
			"esES": "Hender",
			"esMX": "Tajar",
			"frFR": "Déchirure",
			"itIT": "Lacerazione",
			"jaJP": "レンド",
			"koKR": "분쇄",
			"plPL": "Rozprucie",
			"ptBR": "Despedaçar",
			"ruRU": "Рваные раны",
			"zhCN": "痛割",
			"zhTW": "撕裂"
},
		descriptionLocalized: {
			"deDE": "Wutkosten: 35\nGlückstrefferchance: 33% (per use)\nSpaltet Gegner vor Euch, wodurch Ihr ihnen {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% Schaden zufügt und im Verlauf von 5 Sek. {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% Blutungsschaden verursacht.\n\nTags: Kern, Blutung, Schaden, Physisch, Wut, Hiebwaffe.",
			"esES": "Coste de furia: 35\nProbabilidad de golpe de suerte: 33% (per use)\nAsestas un tajo a los enemigos frente a ti para infligir {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% de daño y aplicar {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% de daño de sangrado durante 5 s.\n\nTags: Principal, Sangrado, Daño, Física, Furia, Cortante.",
			"esMX": "Costo de Furia: 35\nProbabilidad de golpe afortunado: 33% (per use)\nHiendes a los enemigos frente a ti, les infliges {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% de daño y {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% de daño de sangrado durante 5 segundos.\n\nTags: Principal, Sangrado, Daño, Física, Furia, Corte.",
			"frFR": "Coût en fureur: 35\nChances d'obtenir un coup de chance: 33% (per use)\nVous frappez les adversaires devant vous, ce qui leur inflige {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% points de dégâts à l'impact et {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% points de dégâts de saignement en 5 s.\n\nTags: Principale, Saignement, Dégâts, Dégâts physiques, Fureur, Tranchant.",
			"itIT": "Costo in furia: 35\nProbabilità di colpo fortunato: 33% (per use)\nFendi i nemici frontali, infliggendo {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% danni e {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% danni da sanguinamento in 5 s.\n\nTags: Primaria, Sanguinamento, Danni, Fisico, Furia, Tagliente.",
			"jaJP": "怒気コスト: 35\n幸運の一撃発生率: 33% (per use)\n前方の敵を切り払って{12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}%のダメージを与え、さらに5秒かけて{96/105.5/115/125/134.5/144/153.5/163/173/182.5}%の出血ダメージを与える。\n\nTags: コア, 出血, ダメージ, 物理, 怒気, 斬撃.",
			"koKR": "소모: 분노 35\n행운의 적중 확률: 33% (per use)\n전방의 적을 한꺼번에 공격하여 {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}%의 피해를 주고 5초에 걸쳐 {96/105.5/115/125/134.5/144/153.5/163/173/182.5}%의 출혈 피해를 줍니다.\n\nTags: 핵심, 출혈, 피해, 물리, 분노, 베는 무기.",
			"plPL": "Koszt: 35 pkt. furii.\nSzansa na szczęśliwy traf: 33% (per use)\nRozpłatujesz wrogów przed sobą, zadając im {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% pkt. obrażeń i powodując {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% pkt. obrażeń od krwawienia w ciągu 5 sek.\n\nTags: Główne, Krwawienie, Obrażenia, Fizyczne, Furia, Sieczne.",
			"ptBR": "Custo de fúria: 35\nChance de Golpe de Sorte: 33% (per use)\nCorta os inimigos à sua frente, causando {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% de dano e aplicando {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% de dano de sangramento ao longo de 5 segundos.\n\nTags: Principal, Sangramento, Dano, Física, Fúria, Corte.",
			"ruRU": "Затраты ярости: 35 ед.\nВероятность удачного удара: 33% (per use)\nВы рубите противников перед собой, нанося им {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% ед. урона мгновенно и еще {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% ед. урона от кровотечения за 5 сек.\n\nTags: Основное, Кровотечение, Урон, Физический урон, Ярость, Рубящее.",
			"zhCN": "怒气消耗: 35\n幸运一击几率: 33% (per use)\n对面前的敌人发动顺劈斩, 造成 {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% 点伤害并在 5 秒内造成 {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% 点流血伤害。\n\nTags: 核心, 流血, 伤害, 物理, 怒气, 劈斩.",
			"zhTW": "怒氣消耗:35\n幸運觸發機率:33% (per use)\n劈斬你前方的敵人,造成 {12/13.2/14.4/15.6/16.8/18/19.2/20.4/21.6/22.8}% 點傷害並在 5 秒內對敵人造成 {96/105.5/115/125/134.5/144/153.5/163/173/182.5}% 點流血傷害。\n\nTags: 核心, 流血, 傷害, 物理, 怒氣, 斬擊."
},
		id: 29,
		maxPoints: 5,
		x: 517.835,
		y: 0.645
	},
	"Enhanced Rend": {
		baseSkill: "Rend",
		connections: [ "Rend", "Violent Rend", "Furious Rend" ],
		description: `Dealing direct damage with Rend extends the duration of Vulnerable on enemies by 2 seconds.`,
		nameLocalized: {
			"deDE": "Verbessertes Zerfleischen",
			"esES": "Hender mejorado",
			"esMX": "Tajo Potenciado",
			"frFR": "Déchirure renforcée",
			"itIT": "Lacerazione Rinforzata",
			"jaJP": "レンド(強化版)",
			"koKR": "강화된 분쇄",
			"plPL": "Wzmocnione Rozprucie",
			"ptBR": "Despedaçar Aperfeiçoado",
			"ruRU": "Усиленные рваные раны",
			"zhCN": "强化痛割",
			"zhTW": "強化撕裂"
},
		descriptionLocalized: {
			"deDE": "Direktschaden mit Zerfleischen macht Gegner 2 Sek. länger verwundbar.",
			"esES": "Infligir daño directo con Hender prolonga 2 s la duración de la vulnerabilidad de los enemigos.",
			"esMX": "El daño directo con Tajar extiende 2 segundos la duración de la vulnerabilidad en los enemigos.",
			"frFR": "Infliger des dégâts directs avec Déchirure prolonge la vulnérabilité des adversaires de 2 s.",
			"itIT": "Infliggere danni diretti con Lacerazione aumenta la durata dell'effetto di vulnerabilità sui nemici di 2 s.",
			"jaJP": "〈レンド〉で直接ダメージを与えると、敵の脆弱状態の持続時間が2秒伸びる。",
			"koKR": "분쇄로 직접 피해를 주면 적에게 적용된 취약 상태의 지속시간이 2초 연장됩니다.",
			"plPL": "Zadawanie bezpośrednich obrażeń Rozpruciem wydłuża czas działania efektu odsłonięcia wrogów o 2 sek.",
			"ptBR": "Causar dano direto com Despedaçar aumenta a duração de vulnerabilidade dos inimigos em 2 segundos.",
			"ruRU": "Прямой урон от \"Рваных ран\" продлевает действующие на противников эффекты уязвимости на 2 сек.",
			"zhCN": "痛割造成直接伤害会使敌人身上的易伤效果延长 2 秒。",
			"zhTW": "撕裂造成直接傷害時,會使敵人的易傷效果持續時間延長 2 秒。"
},
		id: 30,
		maxPoints: 1,
		x: 903.276,
		y: 1.13
	},
	"Violent Rend": {
		baseSkill: "Rend",
		connections: [ "Enhanced Rend" ],
		description: `Rend deals x12% increased damage to Vulnerable enemies.`,
		nameLocalized: {
			"deDE": "Brutales Zerfleischen",
			"esES": "Hender violento",
			"esMX": "Tajada Violenta",
			"frFR": "Déchirure violente",
			"itIT": "Lacerazione Violenta",
			"jaJP": "レンド(凶暴)",
			"koKR": "난폭한 분쇄",
			"plPL": "Gwałtowne Rozprucie",
			"ptBR": "Despedaçar Violento",
			"ruRU": "Жестокие рваные раны",
			"zhCN": "暴力痛割",
			"zhTW": "凶暴撕裂"
},
		descriptionLocalized: {
			"deDE": "Zerfleischen fügt verwundbaren Gegnern x12% mehr Schaden zu.",
			"esES": "Hender inflige un x12% más de daño a enemigos vulnerables.",
			"esMX": "Tajar inflige un x12% más de daño a los enemigos vulnerables.",
			"frFR": "Déchirure inflige x12% de dégâts supplémentaires aux adversaires vulnérables.",
			"itIT": "Lacerazione infligge il x12% di danni aggiuntivi ai nemici vulnerabili.",
			"jaJP": "〈レンド〉で脆弱状態の敵に与えるダメージがx12%増加する。",
			"koKR": "분쇄가 취약 상태의 적에게 주는 피해가 x12% 증가합니다.",
			"plPL": "Rozprucie zadaje odsłoniętym wrogom obrażenia zwiększone o x12%.",
			"ptBR": "Despedaçar causa 12% de dano aumentado a inimigos vulneráveis.",
			"ruRU": "\"Рваные раны\" наносят на x12% больше урона уязвимым противникам.",
			"zhCN": "痛割对处于易伤状态的敌人造成的伤害提高 x12%。",
			"zhTW": "撕裂對易傷的敵人造成的傷害提高 x12%。"
},
		id: 31,
		maxPoints: 1,
		x: 1115.578,
		y: -88.96
	},
	"Furious Rend": {
		baseSkill: "Rend",
		connections: [ "Enhanced Rend" ],
		description: `Direct damage with Rend grants 4 Fury per enemy hit, up to a maximum of 20 Fury.`,
		nameLocalized: {
			"deDE": "Furioses Zerfleischen",
			"esES": "Hender furioso",
			"esMX": "Tajada Furiosa",
			"frFR": "Déchirure furieuse",
			"itIT": "Lacerazione Furiosa",
			"jaJP": "レンド(激烈)",
			"koKR": "맹렬한 분쇄",
			"plPL": "Wściekłe Rozprucie",
			"ptBR": "Despedaçar Furioso",
			"ruRU": "Яростные рваные раны",
			"zhCN": "狂怒痛割",
			"zhTW": "狂怒撕裂"
},
		descriptionLocalized: {
			"deDE": "Direkter Schaden mit Zerfleischen verleiht 4 Wut pro getroffenem Gegner, bis maximal 20 Wut.",
			"esES": "El daño directo infligido con Hender otorga 4 de furia por cada enemigo golpeado, hasta un máximo de 20 de furia.",
			"esMX": "El daño directo con Tajar otorga 4 de Furia por cada enemigo golpeado, hasta un máximo de 20 de Furia.",
			"frFR": "Infliger des dégâts directs avec Déchirure vous octroie 4 points de fureur par cible touchée, jusqu'à un maximum de 20 points.",
			"itIT": "Infliggere danni diretti con Lacerazione genera 4 furia per ogni nemico colpito, fino a un massimo di 20 furia.",
			"jaJP": "〈レンド〉で直接ダメージを与えると、命中した敵1体につき4の怒気を獲得する。獲得量は最大で20。",
			"koKR": "분쇄로 직접 피해를 주면 적중한 적 하나당 분노를 4만큼, 최대 20까지 부여합니다.",
			"plPL": "Bezpośrednie obrażenia zadane Rozpruciem zapewniają 4 pkt. furii za każdego trafionego wroga, do maksymalnie 20 pkt. furii.",
			"ptBR": "Dano direto com Despedaçar concede 4 de fúria por inimigo atingido, até o máximo de 20 de fúria.",
			"ruRU": "Прямой урон от \"Рваных ран\" дает 4 ед. ярости за каждого пораженного противника вплоть до 20 ед. ярости.",
			"zhCN": "痛割的直接伤害每命中一名敌人获得 4 点怒气, 最多获得 20 点怒气。",
			"zhTW": "撕裂的直接傷害每擊中一個敵人可讓你獲得 4 點怒氣,最多 20 點怒氣。"
},
		id: 32,
		maxPoints: 1,
		x: 1113.346,
		y: 83.49
	},
	"Whirlwind": {
		connections: [ "Core", "Enhanced Whirlwind" ],
		description: `Fury Cost: 25 per second
Lucky Hit Chance: 20% (per hit)
Rapidly attack surrounding enemies for {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% damage.

Tags: Core, Channeled, Fury, Physical, Damage.`,
		nameLocalized: {
			"deDE": "Wirbelwind",
			"esES": "Torbellino",
			"esMX": "Remolino",
			"frFR": "Tourbillon",
			"itIT": "Turbine",
			"jaJP": "ワールウィンド",
			"koKR": "소용돌이",
			"plPL": "Trąba Powietrzna",
			"ptBR": "Redemoinho",
			"ruRU": "Вихрь",
			"zhCN": "旋风斩",
			"zhTW": "旋風斬"
},
		descriptionLocalized: {
			"deDE": "Wutkosten: 25 pro Sek.\nGlückstrefferchance: 20% (per hit)\nGreift Gegner in der Nähe schnell an und verursacht {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% Schaden.\n\nTags: Kern, Kanalisiert, Wut, Physisch, Schaden.",
			"esES": "Coste de furia: 25 por segundo\nProbabilidad de golpe de suerte: 20% (per hit)\nAtacas rápidamente a los enemigos cercanos y les infliges {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% de daño.\n\nTags: Principal, Canalizada, Furia, Física, Daño.",
			"esMX": "Costo de Furia: 25 por segundo\nProbabilidad de golpe afortunado: 20% (per hit)\nAtacas con rapidez a los enemigos circundantes y les infliges {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% de daño.\n\nTags: Principal, Canalizado, Furia, Física, Daño.",
			"frFR": "Coût en fureur: 25 par seconde\nChances d'obtenir un coup de chance: 20% (per hit)\nVous attaquez rapidement les adversaires à proximité et leur infligez {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% points de dégâts.\n\nTags: Principale, Canalisation, Fureur, Dégâts physiques, Dégâts.",
			"itIT": "Costo in furia: 25 ogni secondo\nProbabilità di colpo fortunato: 20% (per hit)\nAttacchi rapidamente i nemici circostanti, infliggendo {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% danni.\n\nTags: Primaria, Canalizzazione, Furia, Fisico, Danni.",
			"jaJP": "怒気コスト: 毎秒25\n幸運の一撃発生率: 20% (per hit)\n付近の敵を高速で攻撃し、{17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}%のダメージを与える。\n\nTags: コア, 連続発動, 怒気, 物理, ダメージ.",
			"koKR": "소모: 초당 분노 25\n행운의 적중 확률: 20% (per hit)\n주위 적들을 빠르게 공격하여 {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}%의 피해를 줍니다.\n\nTags: 핵심, 정신 집중, 분노, 물리, 피해.",
			"plPL": "Koszt: 25 pkt. furii na sekundę.\nSzansa na szczęśliwy traf: 20% (per hit)\nBłyskawiczny atak na wrogów wokół, zadający {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% pkt. obrażeń.\n\nTags: Główne, Podtrzymanie, Furia, Fizyczne, Obrażenia.",
			"ptBR": "Custo de fúria: 25 por segundo\nChance de Golpe de Sorte: 20% (per hit)\nAtaca rapidamente inimigos ao redor, causando {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% de dano.\n\nTags: Principal, Canalizada, Fúria, Física, Dano.",
			"ruRU": "Затраты ярости: 25 ед. в секунду.\nВероятность удачного удара: 20% (per hit)\nВы стремительно атакуете ближайших противников, нанося {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% ед. урона.\n\nTags: Основное, Поддерживаемое, Ярость, Физический урон, Урон.",
			"zhCN": "怒气消耗: 25点每秒\n幸运一击几率: 20% (per hit)\n快速攻击周围的敌人, 造成 {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% 点伤害。\n\nTags: 核心, 引导, 怒气, 物理, 伤害.",
			"zhTW": "怒氣消耗:每秒 25\n幸運觸發機率: 20% (per hit)\n快速攻擊附近敵人,造成 {17.3/19.1/20.8/22.5/24.3/26/27.7/29.4/31.2/32.9}% 點傷害。\n\nTags: 核心, 引導, 怒氣, 物理, 傷害."
},
		id: 33,
		maxPoints: 5,
		x: -0.76,
		y: -323.275
	},
	"Enhanced Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Whirlwind", "Furious Whirlwind", "Violent Whirlwind" ],
		description: `Gain 1 Fury each time Whirlwind deals direct damage to an enemy, or 4 Fury against Elite enemies.`,
		nameLocalized: {
			"deDE": "Verbesserter Wirbelwind",
			"esES": "Torbellino mejorado",
			"esMX": "Remolino Potenciado",
			"frFR": "Tourbillon renforcé",
			"itIT": "Turbine Rinforzato",
			"jaJP": "ワールウィンド(強化版)",
			"koKR": "강화된 소용돌이",
			"plPL": "Wzmocniona Trąba Powietrzna",
			"ptBR": "Redemoinho Aperfeiçoado",
			"ruRU": "Усиленный вихрь",
			"zhCN": "强化旋风斩",
			"zhTW": "強化旋風斬"
},
		descriptionLocalized: {
			"deDE": "Erhaltet 1 Wut, wann immer Wirbelwind einem Gegner direkten Schaden zufügt – oder 4 Wut gegen Elitegegner.",
			"esES": "Obtienes 1 de furia cada vez que Torbellino inflige daño directo a un enemigo o, si el enemigo es de élite, 4 de furia.",
			"esMX": "Obtienes 1 de Furia cada vez que Remolino inflige daño directo a un enemigo, o 4 de Furia contra enemigos de Élite.",
			"frFR": "Vous gagnez 1 points de fureur chaque fois que Tourbillon inflige des dégâts directs à une cible, ou 4 points de fureur si la cible est une élite.",
			"itIT": "Ottieni 1 furia ogni volta che Turbine infligge danni diretti a un nemico o 4 furia contro i nemici élite.",
			"jaJP": "〈ワールウィンド〉が敵1体に直接ダメージを与えるたびに、怒気を1獲得する。対象がエリート・モンスターの場合は、怒気を4獲得する。",
			"koKR": "소용돌이로 적에게 직접 피해를 줄 때마다 분노를 1 생성합니다. 정예 적에게 피해를 주는 경우 분노를 4 생성합니다.",
			"plPL": "Zyskujesz 1 pkt. furii za każdym razem, gdy Trąba Powietrzna zadaje bezpośrednie obrażenia wrogowi, albo 4 pkt. furii, jeśli wróg jest elitarny.",
			"ptBR": "Recebe 1 de fúria sempre que Redemoinho causa dano direto a um inimigo, ou 4 de fúria contra inimigos de elite.",
			"ruRU": "Вы накапливаете 1 ед. ярости, когда \"Вихрь\" наносит прямой урон, и 4 ед. ярости, если урон получает особый противник.",
			"zhCN": "旋风斩每次对一名敌人造成直接伤害时获得 1 点怒气, 对精英敌人造成伤害则获得 4 点怒气。",
			"zhTW": "旋風斬每次對敵人造成直接傷害時獲得 1 點怒氣,對精英敵人則獲得 4 點怒氣。"
},
		id: 34,
		maxPoints: 1,
		x: 0.875,
		y: -533.645
	},
	"Furious Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Enhanced Whirlwind" ],
		description: `While using a Slashing weapon, Whirlwind also inflicts 40% of its Base damage as Bleeding damage over 5 seconds.`,
		nameLocalized: {
			"deDE": "Furioser Wirbelwind",
			"esES": "Torbellino furioso",
			"esMX": "Remolino Furioso",
			"frFR": "Tourbillon furieux",
			"itIT": "Turbine Furioso",
			"jaJP": "ワールウィンド(激烈)",
			"koKR": "맹렬한 소용돌이",
			"plPL": "Wściekła Trąba Powietrzna",
			"ptBR": "Redemoinho Furioso",
			"ruRU": "Яростный вихрь",
			"zhCN": "狂怒旋风斩",
			"zhTW": "狂怒旋風斬"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr eine Hiebwaffe führt, verursacht Wirbelwind im Verlauf von 5 Sek. zusätzlich 40% des Basisschadens als Blutungsschaden.",
			"esES": "Mientras se usa un arma cortante, Torbellino también inflige un 40% de su daño base como daño de sangrado durante 5 s.",
			"esMX": "Cuando usas un arma blanca, Remolino también inflige un 40% de su daño de base como daño de sangrado durante 5 segundos.",
			"frFR": "Lorsque vous maniez une arme tranchante, Tourbillon inflige aussi 40% de ses dégâts de base sous forme de dégâts de saignement en 5 s.",
			"itIT": "Se usi un'arma tagliente, Turbine infligge anche il 40% dei danni base sotto forma di danni da sanguinamento in 5 s.",
			"jaJP": "斬撃武器を使った場合、〈ワールウィンド〉が5秒かけて基礎ダメージの40%の出血ダメージも与える。",
			"koKR": "베는 무기를 사용하는 동안, 소용돌이가 추가로 5초에 걸쳐 기본 공격력의 40%에 해당하는 출혈 피해를 줍니다.",
			"plPL": "Kiedy korzystasz z broni siecznej, Trąba Powietrzna zadaje również 40% podstawowych obrażeń jako obrażenia od krwawienia w ciągu 5 sek.",
			"ptBR": "Ao usar uma arma de corte, Redemoinho também aplica 40% do dano-base como dano de sangramento ao longo de 5 segundos.",
			"ruRU": "При использовании рубящего оружия \"Вихрь\" также наносит урон от кровотечения в объеме 40% базового урона за 5 сек.",
			"zhCN": "使用劈砍武器时, 旋风斩也会在 5 秒内造成 40% 基础伤害的流血伤害。",
			"zhTW": "使用斬擊武器時,旋風斬會在 5 秒內額外施加相當於其基礎傷害 40% 的流血傷害。"
},
		id: 35,
		maxPoints: 1,
		x: 157.99,
		y: -638.195
	},
	"Violent Whirlwind": {
		baseSkill: "Whirlwind",
		connections: [ "Enhanced Whirlwind" ],
		description: `After using Whirlwind for 2 seconds, Whirlwind deals x30% increased damage until it is cancelled.`,
		nameLocalized: {
			"deDE": "Brutaler Wirbelwind",
			"esES": "Torbellino violento",
			"esMX": "Remolino Violento",
			"frFR": "Tourbillon violent",
			"itIT": "Turbine Violento",
			"jaJP": "ワールウィンド(凶暴)",
			"koKR": "난폭한 소용돌이",
			"plPL": "Gwałtowna Trąba Powietrzna",
			"ptBR": "Redemoinho Violento",
			"ruRU": "Жестокий вихрь",
			"zhCN": "狂暴旋风斩",
			"zhTW": "凶暴旋風斬"
},
		descriptionLocalized: {
			"deDE": "Nachdem Wirbelwind 2 Sek. lang eingesetzt wurde, verursacht Wirbelwind x30% mehr Schaden, bis er abgebrochen wird.",
			"esES": "Tras usar Torbellino durante 2 s, Torbellino inflige un x30% más de daño hasta que se cancela.",
			"esMX": "Después de usar Remolino durante 2 segundos, Remolino inflige un x30% más de daño hasta que se cancele.",
			"frFR": "Après avoir utilisé Tourbillon pendant 2 s, Tourbillon inflige x30% de dégâts supplémentaires jusqu'à son annulation.",
			"itIT": "Dopo aver usato Turbine per 2 s, Turbine infligge il x30% di danni aggiuntivi finché non termina.",
			"jaJP": "〈ワールウィンド〉を2秒間使った後、キャンセルされるまで〈ワールウィンド〉の与えるダメージがx30%増加する。",
			"koKR": "소용돌이를 2초 동안 사용하면 취소할 때까지 소용돌이의 공격력이 x30% 증가합니다.",
			"plPL": "Jeśli używasz Trąby Powietrznej przez 2 sek., umiejętność ta zadaje obrażenia zwiększone o x30% do czasu jej anulowania.",
			"ptBR": "Depois de usar Redemoinho por 2 segundos, Redemoinho causa 30% de dano aumentado até ser cancelado.",
			"ruRU": "Когда время действия \"Вихря\" достигает 2 сек., наносимый им урон увеличивается на x30% до отмены умения.",
			"zhCN": "使用旋风斩持续 2 秒后, 旋风斩造成的伤害提高 x30%, 该效果会一直持续到取消该技能。",
			"zhTW": "使用旋風斬後的 2 秒內,旋風斬造成的傷害提高 x30%,直到解除為止。"
},
		id: 36,
		maxPoints: 1,
		x: -154.095,
		y: -636.49
	},
	"Endless Fury": {
		connections: [ "Core" ],
		description: `Basic Skills generate x{5/10/15/20/25/30/35/40/45/50}% more Fury when using Two-Handed weapons.

Tags: Fury, Basic, Two-Handed.`,
		nameLocalized: {
			"deDE": "Endlose Wut",
			"esES": "Furia sin fin",
			"esMX": "Furia Interminable",
			"frFR": "Fureur éternelle",
			"itIT": "Furia Interminabile",
			"jaJP": "果てしなき怒気",
			"koKR": "끝없는 분노",
			"plPL": "Nieskończona Furia",
			"ptBR": "Raiva Infinita",
			"ruRU": "Бесконечная ярость",
			"zhCN": "无尽怒气",
			"zhTW": "無盡狂怒"
},
		descriptionLocalized: {
			"deDE": "Basisfertigkeiten erzeugen x{5/10/15/20/25/30/35/40/45/50}% mehr Wut, wenn Ihr Zweihandwaffen verwendet.\n\nTags: Wut, Basis, Zweihändig.",
			"esES": "Las habilidades básicas generan un x{5/10/15/20/25/30/35/40/45/50}% más de furia al usar armas de dos manos.\n\nTags: Furia, Básica, Dos manos.",
			"esMX": "Las habilidades básicas generan un x{5/10/15/20/25/30/35/40/45/50}% más de Furia cuando usas armas de dos manos.\n\nTags: Furia, Básica, Dos manos.",
			"frFR": "Les compétences de base génèrent x{5/10/15/20/25/30/35/40/45/50}% de fureur en plus lorsque vous utilisez des armes à deux mains.\n\nTags: Fureur, Basique, Arme à deux mains.",
			"itIT": "Le abilità Base generano il x{5/10/15/20/25/30/35/40/45/50}% di furia aggiuntiva se usi armi a due mani.\n\nTags: Furia, Base, A due mani.",
			"jaJP": "両手武器を使用していると、基本スキルで回復する怒気がx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: 怒気, 基本, 両手用武器.",
			"koKR": "양손 무기를 사용할 때 기본 기술로 생성하는 분노가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 분노, 기본, 양손 무기.",
			"plPL": "Umiejętności Podstawowe generują o x{5/10/15/20/25/30/35/40/45/50}% więcej furii, kiedy korzystasz z broni dwuręcznej.\n\nTags: Furia, Podstawowe, Dwuręczne.",
			"ptBR": "Habilidades básicas geram {5/10/15/20/25/30/35/40/45/50}% de fúria adicional ao usar armas de duas mãos.\n\nTags: Fúria, Básica, Duas mãos.",
			"ruRU": "Базовые умения позволяют накопить на x{5/10/15/20/25/30/35/40/45/50}% больше ярости при использовании двуручного оружия.\n\nTags: Ярость, Базовое, Двуручное.",
			"zhCN": "使用双手武器时, 基础技能生成的怒气提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 怒气, 基础, 双手.",
			"zhTW": "使用雙手武器時,基本技能產生的怒氣提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 怒氣, 基本, 雙手."
},
		id: 37,
		maxPoints: 3,
		x: 176.84,
		y: 315.55
	},
};

barbarianData["Defensive"] = {
	"Challenging Shout": {
		connections: [ "Defensive", "Enhanced Challenging Shout" ],
		description: `Cooldown: 25 seconds
Taunt Nearby enemies and gain {40/44/48/52/56/60/64/68/72/76}% Damage Reduction for 6 seconds.

Tags: Defensive, Shout, Crowd Control, Damage Reduction, Cooldown.`,
		nameLocalized: {
			"deDE": "Herausforderungsruf",
			"esES": "Grito desafiante",
			"esMX": "Grito Desafiante",
			"frFR": "Cri provocateur",
			"itIT": "Urlo di Sfida",
			"jaJP": "挑発のシャウト",
			"koKR": "도전의 외침",
			"plPL": "Wyzywający Okrzyk",
			"ptBR": "Brado Desafiador",
			"ruRU": "Подстрекающий крик",
			"zhCN": "挑战怒吼",
			"zhTW": "挑戰怒吼"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 25 Sek.\nVerspottet Gegner in der Nähe und erhaltet 6 Sek. lang {40/44/48/52/56/60/64/68/72/76}% Schadensreduktion.\n\nTags: Defensiv, Ruf, Kontrollverlust, Schadensreduktion, Abklingzeit.",
			"esES": "Tiempo de reutilización: 25 s\nProvocas a los enemigos cercanos y obtienes un {40/44/48/52/56/60/64/68/72/76}% de reducción de daño durante 6 s.\n\nTags: Defensiva, Grito, Control de masas, Reducción de daño, Tiempo de reutilización.",
			"esMX": "Recuperación: 25 segundos\nAl provocar a enemigos cercanos, obtienes un {40/44/48/52/56/60/64/68/72/76}% de reducción de daño durante 6 segundos.\n\nTags: Defensivo, Grito, Control de multitudes, Reducción de daño, Recuperación.",
			"frFR": "Temps de recharge: 25 s\nVous provoquez les adversaires à proximité et obtenez {40/44/48/52/56/60/64/68/72/76}% de réduction des dégâts pendant 6 s.\n\nTags: Défense, Cri, Perte de contrôle, Réduction des dégâts, Temps de recharge.",
			"itIT": "Tempo di recupero: 25 s\nProvochi i nemici vicini e ottieni il {40/44/48/52/56/60/64/68/72/76}% di riduzione danni per 6 s.\n\nTags: Difesa, Urla, Effetti debilitanti, Riduzione danni, Tempo di recupero.",
			"jaJP": "クールダウン: 25秒\n付近の敵を挑発して、受けるダメージを6秒間{40/44/48/52/56/60/64/68/72/76}%軽減する。\n\nTags: 防御, シャウト, 操作障害効果, ダメージ減少, クールダウン.",
			"koKR": "재사용 대기시간: 25초\n근처의 적을 도발하고 6초 동안 피해 감소를 {40/44/48/52/56/60/64/68/72/76}% 얻습니다.\n\nTags: 방어, 외침, 군중 제어, 피해 감소, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 25 sek.\nProwokujesz pobliskich wrogów i zyskujesz {40/44/48/52/56/60/64/68/72/76}% do redukcji obrażeń przez 6 sek.\n\nTags: Defensywa, Okrzyk, Ograniczanie Kontroli, Redukcja Obrażeń, Odnowienie.",
			"ptBR": "Recarga: 25 segundos\nProvoca inimigos próximos e recebe {40/44/48/52/56/60/64/68/72/76}% de redução de dano por 6 segundos.\n\nTags: Defesa, Grito, Controle de Grupo, Redução de Dano, Recarga.",
			"ruRU": "Время восстановления: 25 сек.\nВы провоцируете ближайших противников и получаете на {40/44/48/52/56/60/64/68/72/76}% меньше урона в течение 6 сек.\n\nTags: Защита, Крик, Контроль, Уменьшение урона, Время восстановления.",
			"zhCN": "冷却时间: 25 秒\n嘲讽附近的敌人并获得 {40/44/48/52/56/60/64/68/72/76}% 伤害减免, 持续 6 秒。\n\nTags: 防御, 战吼, 群控, 伤害减免, 冷却时间.",
			"zhTW": "冷卻時間:25 秒\n嘲諷附近的敵人,獲得 {40/44/48/52/56/60/64/68/72/76}% 傷害減免效果,持續 6 秒。\n\nTags: 防禦, 怒吼, 控場, 傷害減免, 冷卻時間."
},
		id: 38,
		maxPoints: 5,
		x: 1.54,
		y: 310.475
	},
	"Enhanced Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Challenging Shout", "Strategic Challenging Shout", "Tactical Challenging Shout" ],
		description: `While Challenging Shout is active, gain x20% bonus Maximum Life.`,
		nameLocalized: {
			"deDE": "Verbesserter Herausforderungsruf",
			"esES": "Grito desafiante mejorado",
			"esMX": "Grito Desafiante Potenciado",
			"frFR": "Cri provocateur renforcé",
			"itIT": "Urlo di Sfida Rinforzato",
			"jaJP": "挑発のシャウト(強化版)",
			"koKR": "강화된 도전의 외침",
			"plPL": "Wzmocniony Wyzywający Okrzyk",
			"ptBR": "Brado Desafiador Aperfeiçoado",
			"ruRU": "Усиленный подстрекающий крик",
			"zhCN": "强化挑战怒吼",
			"zhTW": "強化挑戰怒吼"
},
		descriptionLocalized: {
			"deDE": "Solange Herausforderungsruf aktiv ist, wird Euer maximales Leben um x20% erhöht.",
			"esES": "Mientras dura Grito desafiante, obtienes un x20% de vida máxima adicional.",
			"esMX": "Mientras Grito Desafiante está activa, obtienes un x20% más de vida máxima.",
			"frFR": "Lorsque Cri provocateur est actif, vous obtenez un bonus de x20% à votre maximum de points de vie.",
			"itIT": "Mentre Urlo di Sfida è attivo, la tua salute massima aumenta del x20%.",
			"jaJP": "〈挑発のシャウト〉の発動中は、ライフ最大値にx20%のボーナスを得る。",
			"koKR": "도전의 외침이 활성화되어 있는 동안 최대 생명력이 x20% 증가합니다.",
			"plPL": "Kiedy Wyzywający Okrzyk jest aktywny, zyskujesz premię x20% do maksymalnego zdrowia.",
			"ptBR": "Enquanto Brado Desafiador está ativo, recebe 20% de bônus de vida máxima.",
			"ruRU": "Пока действует \"Подстрекающий крик\", ваш максимальный запас здоровья увеличивается на x20%.",
			"zhCN": "挑战怒吼激活时, 生命上限获得 x20% 加成。",
			"zhTW": "挑戰怒吼生效時,你會獲得 x20% 額外生命值上限。"
},
		id: 39,
		maxPoints: 1,
		x: 1.835,
		y: 515.956
	},
	"Strategic Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Enhanced Challenging Shout" ],
		description: `While Challenging Shout is active, gain Thorns equal to 30% of your Maximum Life.`,
		nameLocalized: {
			"deDE": "Strategischer Herausforderungsruf",
			"esES": "Grito desafiante estratégico",
			"esMX": "Grito Desafiante Estratégico",
			"frFR": "Cri provocateur stratégique",
			"itIT": "Urlo di Sfida Strategico",
			"jaJP": "挑発のシャウト(戦略)",
			"koKR": "전략적 도전의 외침",
			"plPL": "Strategiczny Wyzywający Okrzyk",
			"ptBR": "Brado Desafiador Estratégico",
			"ruRU": "Стратегический подстрекающий крик",
			"zhCN": "战略挑战怒吼",
			"zhTW": "戰略挑戰怒吼"
},
		descriptionLocalized: {
			"deDE": "Solange Herausforderungsruf aktiv ist, erhaltet Ihr Dornen in Höhe von 30% Eures maximalen Lebens.",
			"esES": "Mientras dura Grito desafiante, obtienes una cantidad de espinas equivalente a un 30% de tu vida máxima.",
			"esMX": "Mientras Grito Desafiante está activa, obtienes una cantidad de Espinas equivalente al 30% de tu vida máxima.",
			"frFR": "Lorsque Cri provocateur est actif, vous gagnez un montant de dégâts d'épines égal à 30% de votre maximum de points de vie.",
			"itIT": "Mentre Urlo di Sfida è attivo, ottieni Spine pari al 30% della tua Vita massima.",
			"jaJP": "〈挑発のシャウト〉の発動中は、ライフ最大値の30%と同量の〈荊棘の加護〉を得る。",
			"koKR": "도전의 외침이 활성화되어 있는 동안 최대 생명력의 30%만큼 가시를 얻습니다.",
			"plPL": "Kiedy Wyzywający Okrzyk jest aktywny, zyskujesz ciernie równe 30% twojego maksymalnego zdrowia.",
			"ptBR": "Enquanto Brado Desafiador está ativo, recebe uma quantidade de espinhos equivalente a 30% da sua vida máxima.",
			"ruRU": "Пока действует \"Подстрекающий крик\", вы получаете эффект шипов в объеме 30% максимального запаса здоровья.",
			"zhCN": "挑战怒吼激活时, 获得相当于 30% 生命上限的荆棘。",
			"zhTW": "在挑戰怒吼生效時,獲得等同於生命值上限 30% 的荊棘效果。"
},
		id: 40,
		maxPoints: 1,
		x: 178.71,
		y: 629.341
	},
	"Tactical Challenging Shout": {
		baseSkill: "Challenging Shout",
		connections: [ "Enhanced Challenging Shout" ],
		description: `While Challenging Shout is active, you gain 3 Fury each time you take damage.`,
		nameLocalized: {
			"deDE": "Taktischer Herausforderungsruf",
			"esES": "Grito desafiante táctico",
			"esMX": "Grito Desafiante Táctico",
			"frFR": "Cri provocateur tactique",
			"itIT": "Urlo di Sfida Tattico",
			"jaJP": "挑発のシャウト(戦術)",
			"koKR": "전술적 도전의 외침",
			"plPL": "Taktyczny Wyzywający Okrzyk",
			"ptBR": "Brado Desafiador Tático",
			"ruRU": "Тактический подстрекающий крик",
			"zhCN": "战术挑战怒吼",
			"zhTW": "戰術挑戰怒吼"
},
		descriptionLocalized: {
			"deDE": "Solange Herausforderungsruf aktiv ist, erhaltet Ihr jedes Mal, wenn Ihr Schaden erleidet, 3 Wut.",
			"esES": "Mientras dura Grito desafiante, obtienes 3 de furia cada vez que sufres daño.",
			"esMX": "Mientras Grito Desafiante está activa, obtienes 3 de Furia cada vez que recibes daño.",
			"frFR": "Lorsque Cri provocateur est actif, vous gagnez 3 points de fureur chaque fois que vous subissez des dégâts.",
			"itIT": "Mentre Urlo di Sfida è attivo, ottieni 3 furia ogni volta che subisci danni.",
			"jaJP": "〈挑発のシャウト〉の発動中、ダメージを受けるたびに3の怒気を獲得する。",
			"koKR": "도전의 외침이 활성화되어 있는 동안 피해를 받을 때마다 분노를 3 생성합니다.",
			"plPL": "Kiedy Wyzywający Okrzyk jest aktywny, zapewnia 3 pkt. furii za każdym razem, gdy otrzymasz obrażenia.",
			"ptBR": "Enquanto Brado Desafiador está ativo, você recebe 3 de fúria sempre que recebe dano.",
			"ruRU": "Пока действует \"Подстрекающий крик\", вы накапливаете 3 ед. ярости каждый раз, когда получаете урон.",
			"zhCN": "挑战怒吼激活时, 每次受到伤害都会获得 3 点怒气。",
			"zhTW": "挑戰怒吼生效時,你每次受到傷害都會產生 3 點怒氣。"
},
		id: 41,
		maxPoints: 1,
		x: -169.118,
		y: 631.547
	},
	"Iron Skin": {
		connections: [ "Defensive", "Enhanced Iron Skin" ],
		description: `Cooldown: 14 seconds
Steel yourself, gaining a Barrier that absorbs {50/55/60/65/70/75/80/85/90/95}% of your missing Life for 5 seconds.

Tags: Defensive, Barrier, Cooldown, Life.`,
		nameLocalized: {
			"deDE": "Eisenhaut",
			"esES": "Piel férrea",
			"esMX": "Piel de Hierro",
			"frFR": "Galvanisation",
			"itIT": "Pelle di Ferro",
			"jaJP": "アイアン・スキン",
			"koKR": "철갑 피부",
			"plPL": "Żelazna Skóra",
			"ptBR": "Pele de Ferro",
			"ruRU": "Железная кожа",
			"zhCN": "钢铁之肤",
			"zhTW": "鋼鐵之膚"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 14 Sek.\nStählt Euch und erhaltet eine Barriere, die 5 Sek. lang {50/55/60/65/70/75/80/85/90/95}% Eures verlorenen Lebens absorbiert.\n\nTags: Defensiv, Barriere, Abklingzeit, Leben.",
			"esES": "Tiempo de reutilización: 14 s\nTe fortaleces para obtener una barrera que absorbe un {50/55/60/65/70/75/80/85/90/95}% de la vida que te falta durante 5 s.\n\nTags: Defensiva, Barrera, Tiempo de reutilización, Vida.",
			"esMX": "Recuperación: 14 segundos\nTe blindas y obtienes una barrera que absorbe un {50/55/60/65/70/75/80/85/90/95}% de tu vida faltante durante 5 segundos.\n\nTags: Defensivo, Barrera, Recuperación, Vida.",
			"frFR": "Temps de recharge: 14 s\nVous vous galvanisez, ce qui vous octroie une barrière absorbant {50/55/60/65/70/75/80/85/90/95}% de vos points de vie manquants pendant 5 s.\n\nTags: Défense, Barrière, Temps de recharge, Vie.",
			"itIT": "Tempo di recupero: 14 s\nLa tua pelle si rinforza, fornendoti una barriera che assorbe danni pari al {50/55/60/65/70/75/80/85/90/95}% della tua Vita mancante per 5 s.\n\nTags: Difesa, Barriera, Tempo di recupero, Vita.",
			"jaJP": "クールダウン: 14秒\n自分の体を鋼鉄化し、失ったライフの{50/55/60/65/70/75/80/85/90/95}%を吸収する障壁.を5秒間、展開する。\n\nTags: 防御, 障壁, クールダウン, ライフ.",
			"koKR": "재사용 대기시간: 14초\n방어 태세를 갖춰 5초 동안 잃은 생명력의 {50/55/60/65/70/75/80/85/90/95}%만큼 피해를 흡수하는 보호막을 얻습니다.\n\nTags: 방어, 보호막, 재사용 대기시간, 생명력.",
			"plPL": "Czas odnowienia: 14 sek.\nOsłaniasz się barierą, która pochłania obrażenia równe {50/55/60/65/70/75/80/85/90/95}% twojego brakującego zdrowia w ciągu 5 sek.\n\nTags: Defensywa, Bariera, Odnowienie, Zdrowie.",
			"ptBR": "Recarga: 14 segundos\nVocê se prepara, recebendo uma barreira que absorve {50/55/60/65/70/75/80/85/90/95}% da sua vida perdida por 5 segundos.\n\nTags: Defesa, Barreira, Recarga, Vida.",
			"ruRU": "Время восстановления: 14 сек.\nВы собираетесь с силами и окружаете себя барьером, который поглощает урон в объеме {50/55/60/65/70/75/80/85/90/95}% недостающего у вас здоровья. Время действия барьера – 5 сек.\n\nTags: Защита, Барьер, Время восстановления, Здоровье.",
			"zhCN": "冷却时间: 14 秒\n强化自己, 获得一个能吸收相当于已损失生命 {50/55/60/65/70/75/80/85/90/95}% 的屏障, 持续 5 秒。\n\nTags: 防御, 屏障, 冷却时间, 生命.",
			"zhTW": "冷卻時間:14 秒\n產生鐵壁一般的防禦,獲得一道能吸收相當於失去生命值 {50/55/60/65/70/75/80/85/90/95}% 的屏障,持續 5 秒。\n\nTags: 防禦, 屏障, 冷卻時間, 生命值."
},
		id: 42,
		maxPoints: 5,
		x: 573.26,
		y: 125.615
	},
	"Enhanced Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Iron Skin", "Tactical Iron Skin", "Strategic Iron Skin" ],
		description: `Iron Skin's Barrier absorbs 10% more of your Maximum Life.`,
		nameLocalized: {
			"deDE": "Verbesserte Eisenhaut",
			"esES": "Piel férrea mejorada",
			"esMX": "Piel de Hierro Potenciada",
			"frFR": "Galvanisation renforcée",
			"itIT": "Pelle di Ferro Rinforzata",
			"jaJP": "アイアン・スキン(強化版)",
			"koKR": "강화된 철갑 피부",
			"plPL": "Wzmocniona Żelazna Skóra",
			"ptBR": "Pele de Ferro Aperfeiçoada",
			"ruRU": "Усиленная железная кожа",
			"zhCN": "强化钢铁之肤",
			"zhTW": "強化鋼鐵之膚"
},
		descriptionLocalized: {
			"deDE": "Die Barriere von Eisenhaut absorbiert 10% des maximalen Lebens mehr.",
			"esES": "La barrera de Piel férrea absorbe un 10% más de tu vida máxima.",
			"esMX": "La barrera de Piel de Hierro absorbe un 10% más de tu vida máxima.",
			"frFR": "La barrière de Galvanisation absorbe 10% de votre maximum de points de vie en plus.",
			"itIT": "La barriera di Pelle di Ferro assorbe il 10% in più della tua Vita massima.",
			"jaJP": "〈アイアン・スキン〉の障壁の吸収量がライフ最大値の10%分増加する。",
			"koKR": "철갑 피부의 보호막이 최대 생명력의 10%만큼 추가 피해를 흡수합니다.",
			"plPL": "Bariera zapewniana przez Żelazną Skórę pochłania o 10% więcej twojego maksymalnego zdrowia.",
			"ptBR": "A barreira de Pele de Ferro absorve 10% mais da sua vida máxima.",
			"ruRU": "Барьер \"Железной кожи\" дополнительно поглощает урон в размере еще 10% вашего максимального запаса здоровья.",
			"zhCN": "钢铁之肤的屏障额外吸收你的生命上限的 10%。",
			"zhTW": "鋼鐵之膚的屏障會額外吸收相當於你生命值上限 10% 的傷害。"
},
		id: 43,
		maxPoints: 1,
		x: 918.56,
		y: 221.9
	},
	"Tactical Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Enhanced Iron Skin" ],
		description: `While Iron Skin is active, Heal for 10% of the Barrier's original amount as Life per second.`,
		nameLocalized: {
			"deDE": "Taktische Eisenhaut",
			"esES": "Piel férrea táctica",
			"esMX": "Piel de Hierro Táctica",
			"frFR": "Galvanisation tactique",
			"itIT": "Pelle di Ferro Tattica",
			"jaJP": "アイアン・スキン(戦術)",
			"koKR": "전술적 철갑 피부",
			"plPL": "Taktyczna Żelazna Skóra",
			"ptBR": "Pele de Ferro Tática",
			"ruRU": "Тактическая железная кожа",
			"zhCN": "战术钢铁之肤",
			"zhTW": "戰術鋼鐵之膚"
},
		descriptionLocalized: {
			"deDE": "Solange Eisenhaut aktiv ist, werdet Ihr pro Sekunde um 10% der ursprünglichen Höhe der Barriere als Leben pro Sekunde geheilt.",
			"esES": "Mientras dura Piel férrea, te curas un 10% de la cantidad original de la barrera como vida por segundo.",
			"esMX": "Mientras Piel de Hierro está activa, restaura un 10% de la cantidad original de la barrera como vida por segundo.",
			"frFR": "Tant que Galvanisation est active, vous récupérez chaque seconde un montant de points de vie égal à 10% du montant initial de la barrière.",
			"itIT": "Mentre Pelle di Ferro è attiva, ti curi del 10% del valore originale della barriera ogni secondo.",
			"jaJP": "〈アイアン・スキン〉の発動中は、障壁の初期値の10%と同量のライフが毎秒回復する。",
			"koKR": "철갑 피부가 활성화되어 있는 동안 매초 원래 보호막 양의 10%만큼 생명력을 회복합니다.",
			"plPL": "Kiedy Żelazna Skóra jest aktywna, co sekundę odzyskujesz w postaci zdrowia równowartość 10% pierwotnej mocy bariery.",
			"ptBR": "Enquanto Pele de Ferro está ativa, cura 10% do valor original da barreira por segundo.",
			"ruRU": "Пока действует \"Железная кожа\", вы раз в секунду восполняете здоровье, равное 10% изначальной прочности барьера.",
			"zhCN": "钢铁之肤激活时, 每秒恢复相当于屏障初始数值 10% 的生命。",
			"zhTW": "在鋼鐵之膚啟動時,每秒治療相當於屏障原始數值 10% 的生命值。"
},
		id: 44,
		maxPoints: 1,
		x: 1063.14,
		y: 337.895
	},
	"Strategic Iron Skin": {
		baseSkill: "Iron Skin",
		connections: [ "Enhanced Iron Skin" ],
		description: `Iron Skin also grants 15% Base Life as Fortify. Double this amount if cast while below 50% Life.`,
		nameLocalized: {
			"deDE": "Strategische Eisenhaut",
			"esES": "Piel férrea estratégica",
			"esMX": "Piel de Hierro Estratégica",
			"frFR": "Galvanisation stratégique",
			"itIT": "Pelle di Ferro Strategica",
			"jaJP": "アイアン・スキン(戦略)",
			"koKR": "전략적 철갑 피부",
			"plPL": "Strategiczna Żelazna Skóra",
			"ptBR": "Pele de Ferro Estratégica",
			"ruRU": "Стратегическая железная кожа",
			"zhCN": "战略钢铁之肤",
			"zhTW": "戰略鋼鐵之膚"
},
		descriptionLocalized: {
			"deDE": "Eisenhaut verleiht außerdem 15% Eures Basislebens als Stählung. Die Menge verdoppelt sich, wenn Ihr beim Einsatz weniger als 50% Leben habt.",
			"esES": "Piel férrea también otorga un 15% de vida base como fortificación. Esta cantidad se duplica si se lanza con menos de un 50% de vida.",
			"esMX": "Piel de Hierro también otorga un 15% de tu vida de base como fortificación. La cantidad se duplica si la habilidad se lanza cuando tienes menos del 50% de vida.",
			"frFR": "Galvanisation confère aussi un montant de fortification égal à 15% de vos points de vie de base. Ce montant est doublé si vous avez moins de 50% de points de vie au moment de son utilisation.",
			"itIT": "Pelle di Ferro fornisce anche il 15% della Vita base come Fortificazione. Questo ammontare raddoppia se la lanci mentre hai meno del 50% della Vita.",
			"jaJP": "〈アイアン・スキン〉に、基本ライフの15%にあたるの強化を獲得する効果が加わる。ライフが50%未満の場合は効果が倍になる。",
			"koKR": "철갑 피부가 기본 생명력의 15%를 보강으로 부여합니다. 생명력이 50% 미만일 때 시전하면 효과가 2배로 증가합니다.",
			"plPL": "Żelazna Skóra zapewnia również 15% podstawowego zdrowia jako umocnienie. Wartość ta jest podwojona, jeśli użyjesz umiejętności, gdy masz mniej niż 50% zdrowia.",
			"ptBR": "Pele de Ferro também concede 15% de vida básica como fortificação. O valor é dobrado se lançar com vida abaixo de 50%.",
			"ruRU": "\"Железная кожа\" также дает вам укрепление в объеме 15% базового запаса здоровья. Этот объем удваивается, если ваш уровень здоровья ниже 50%.",
			"zhCN": "钢铁之肤也会强固你 15% 的基础生命。生命低于 50% 时, 该数值翻倍。",
			"zhTW": "鋼鐵之膚也會賦予相當於 15% 基礎生命值的強韌。在生命值低於 50% 時施放可使此效果加倍。"
},
		id: 45,
		maxPoints: 1,
		x: 1176.1,
		y: 176.81
	},
	"Outburst": {
		connections: [ "Defensive", "Tough as Nails" ],
		description: `Gain {20/40/60/80/100/120/140/160/180/200} Thorns. Also gain 10 Thorns for each 50 bonus Maximum Life you have.

Tags: Life, Thorns.`,
		nameLocalized: {
			"deDE": "Wutausbruch",
			"esES": "Arrebato",
			"esMX": "Arrebato",
			"frFR": "Accès de colère",
			"itIT": "Scoppio",
			"jaJP": "アウトバースト",
			"koKR": "분노 폭발",
			"plPL": "Wybuch Gniewu",
			"ptBR": "Estouro",
			"ruRU": "Вспышка гнева",
			"zhCN": "血气外冲",
			"zhTW": "爆發"
},
		descriptionLocalized: {
			"deDE": "Erhaltet {20/40/60/80/100/120/140/160/180/200} Dornen. Erhaltet zusätzlich 10 Dornen pro 50 zusätzlichem maximalen Leben.\n\nTags: Leben, Dornen.",
			"esES": "Obtienes {20/40/60/80/100/120/140/160/180/200} de espinas. También obtienes 10 de espinas por cada 50 de vida máxima adicional que tengas.\n\nTags: Vida, Espinas.",
			"esMX": "Obtienes {20/40/60/80/100/120/140/160/180/200} Espinas. Además, obtienes 10 Espinas por cada 50 de vida máxima adicional que tengas.\n\nTags: Vida, Espinas.",
			"frFR": "Vous gagnez {20/40/60/80/100/120/140/160/180/200} points de dégâts d'épines. Vous gagnez également 10 points de dégâts d'épines pour chaque bonus de 50 points à votre maximum de points de vie.\n\nTags: Vie, Épines.",
			"itIT": "Ottieni {20/40/60/80/100/120/140/160/180/200} Spine. Ottieni anche 10 Spine ogni 50 Vita massima aggiuntiva che hai.\n\nTags: Vita, Spine.",
			"jaJP": "{20/40/60/80/100/120/140/160/180/200}の〈荊棘の加護〉を獲得する。さらに、ライフ最大値ボーナス50ごとに10の〈荊棘の加護〉を獲得する。\n\nTags: ライフ, 荊棘の加護.",
			"koKR": "{20/40/60/80/100/120/140/160/180/200}의 가시를 얻고, 보유한 추가 최대 생명력 10당 가시를 50 얻습니다.\n\nTags: 생명력, 가시.",
			"plPL": "Zyskujesz premię {20/40/60/80/100/120/140/160/180/200} do cierni. Ponadto zyskujesz premię 10 do cierni za każde posiadane 50 pkt. premii do maksymalnego zdrowia.\n\nTags: Zdrowie, Ciernie.",
			"ptBR": "Recebe {20/40/60/80/100/120/140/160/180/200} espinhos. Também recebe 10 espinhos por cada 50 de bônus de vida máxima que você tiver.\n\nTags: Vida, Espinhos.",
			"ruRU": "Вы получаете {20/40/60/80/100/120/140/160/180/200} к показателю эффекта шипов. Вы также получаете 10 к показателю эффекта шипов за каждые 50 ед. здоровья, прибавленные к максимальному запасу.\n\nTags: Здоровье, Шипы.",
			"zhCN": "获得 {20/40/60/80/100/120/140/160/180/200} 点荆棘。每拥有 50 点生命上限加成, 也会获得 10 点荆棘。\n\nTags: 生命, 荆棘.",
			"zhTW": "獲得 {20/40/60/80/100/120/140/160/180/200} 點荊棘。生命值上限每提高 50 點可獲得 10 點荊棘。\n\nTags: 生命值, 荊棘."
},
		id: 46,
		maxPoints: 3,
		x: 357.46,
		y: 279.435
	},
	"Tough as Nails": {
		connections: [ "Outburst" ],
		description: `Increase your Thorns by +{3/6/9/12/15/18/21/24/27/30}%. When enemies hit you, they take an additional 10% of your Thorns as Bleeding damage over 5 seconds.

Tags: Bleed, Thorns, Damage.`,
		nameLocalized: {
			"deDE": "Steinhart",
			"esES": "Espinadura",
			"esMX": "Duro como el Hierro",
			"frFR": "Robustesse",
			"itIT": "Forza Taurina",
			"jaJP": "反骨",
			"koKR": "철갑못",
			"plPL": "Wyprawiona Skóra",
			"ptBR": "Forte como Aço",
			"ruRU": "Шипастый щит",
			"zhCN": "坚如钢钉",
			"zhTW": "意志堅定"
},
		descriptionLocalized: {
			"deDE": "Erhöht Eure Dornen um +{3/6/9/12/15/18/21/24/27/30}%. Wenn Gegner Euch treffen, erleiden sie im Verlauf von 5 Sek. 10% Eures Dornenschadens als Blutung.\n\nTags: Blutung, Dornen, Schaden.",
			"esES": "Aumenta un +{3/6/9/12/15/18/21/24/27/30}% tus espinas. Cuando los enemigos te golpean, sufren una cantidad equivalente a un 10% de tus espinas en forma de daño de sangrado durante 5 s.\n\nTags: Sangrado, Espinas, Daño.",
			"esMX": "Aumenta tus Espinas un +{3/6/9/12/15/18/21/24/27/30}%. Cuando los enemigos te golpean, recibes un 10% más de tus Espinas como daño de sangrado durante 5 segundos.\n\nTags: Sangrado, Espinas, Daño.",
			"frFR": "Augmente vos dégâts d'épines de +{3/6/9/12/15/18/21/24/27/30}%. Lorsque des forces adverses vous touchent, elles subissent aussi 10% de vos dégâts d'épines sous forme de saignement en 5 s.\n\nTags: Saignement, Épines, Dégâts.",
			"itIT": "Aumenti le tue Spine del +{3/6/9/12/15/18/21/24/27/30}%. Quando i nemici ti colpiscono, subiscono il 10% di danni da sanguinamento aggiuntivi dalle tue Spine in 5 s.\n\nTags: Sanguinamento, Spine, Danni.",
			"jaJP": "〈荊棘の加護〉が+{3/6/9/12/15/18/21/24/27/30}%増加する。自分を攻撃した敵は、出血ダメージとして、5秒間かけて〈荊棘の加護〉の10%の追加ダメージを受ける。\n\nTags: 出血, 荊棘の加護, ダメージ.",
			"koKR": "가시가 +{3/6/9/12/15/18/21/24/27/30}% 증가합니다. 플레이어를 적중하는 적이 5초에 걸쳐 가시의 10%를 출혈 피해로 받습니다.\n\nTags: 출혈, 가시, 피해.",
			"plPL": "Zwiększa obrażenia od twoich cierni o +{3/6/9/12/15/18/21/24/27/30}%. Kiedy wrogowie cię trafiają, otrzymują dodatkowo obrażenia od krwawienia równe 10% obrażeń od twoich cierni w ciągu 5 sek.\n\nTags: Krwawienie, Ciernie, Obrażenia.",
			"ptBR": "Aumenta seus espinhos em +{3/6/9/12/15/18/21/24/27/30}%. Quando inimigos acertam você, eles recebem 10% de dano de espinhos adicional como sangramento ao longo de 5 segundos.\n\nTags: Sangramento, Espinhos, Dano.",
			"ruRU": "Эффект шипов усиливается на +{3/6/9/12/15/18/21/24/27/30}%. Атакующие вас противники получают еще 10% урона от эффекта шипов как урон от кровотечения за 5 сек.\n\nTags: Кровотечение, Шипы, Урон.",
			"zhCN": "你的荆棘提高 +{3/6/9/12/15/18/21/24/27/30}%。命中你的敌人会在 5 秒内额外受到流血伤害,数值相当于你荆棘的 10%。\n\nTags: 流血, 荆棘, 伤害.",
			"zhTW": "你的荊棘提高 +{3/6/9/12/15/18/21/24/27/30}%。當敵人擊中你時,其會額外在 5 秒內受到相當於你 10% 荊棘的流血傷害。\n\nTags: 流血, 荊棘, 傷害."
},
		id: 47,
		maxPoints: 3,
		x: 495.69,
		y: 445.865
	},
	"Ground Stomp": {
		connections: [ "Defensive", "Enhanced Ground Stomp" ],
		description: `Cooldown: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} seconds
Lucky Hit Chance: 33% (per hit)
Smash the ground, dealing {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% damage and Stunning surrounding enemies for 3 seconds.

Tags: Defensive, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Aufstampfen",
			"esES": "Pisotón",
			"esMX": "Pisotón",
			"frFR": "Choc terrestre",
			"itIT": "Passo Tonante",
			"jaJP": "グラウンド・ストンプ",
			"koKR": "발 구르기",
			"plPL": "Tąpnięcie",
			"ptBR": "Pisada Poderosa",
			"ruRU": "Топот",
			"zhCN": "大地践踏",
			"zhTW": "震地踐踏"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} Sek.\nGlückstrefferchance: 33% (per hit)\nStampft auf den Boden, verursacht {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% Schaden und betäubt 3 Sek. lang Gegner in der Nähe.\n\nTags: Defensiv, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Tiempo de reutilización: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} s\nProbabilidad de golpe de suerte: 33% (per hit)\nGolpeas el suelo para infligir {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% de daño y aturdir a los enemigos cercanos durante 3 s.\n\nTags: Defensiva, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Recuperación: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} segundos\nProbabilidad de golpe afortunado: 33% (per hit)\nGolpeas el suelo, infliges {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% de daño y aturdes a los enemigos circundantes durante 3 segundos.\n\nTags: Defensivo, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Temps de recharge: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} s\nChances d'obtenir un coup de chance: 33% (per hit)\nVous frappez le sol, ce qui étourdit les adversaires à proximité pendant 3 s et leur inflige {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% points de dégâts.\n\nTags: Défense, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Tempo di recupero: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} s\nProbabilità di colpo fortunato: 33% (per hit)\nColpisci il terreno, infliggendo {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% danni e stordendo i nemici circostanti per 3 s.\n\nTags: Difesa, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "クールダウン: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6}秒\n幸運の一撃発生率: 33% (per hit)\n地面を踏みつけて{9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}%のダメージを与え、付近の敵を3秒間スタンさせる。\n\nTags: 防御, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "재사용 대기시간: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} 초\n행운의 적중 확률: % 33% (per hit)\n땅을 내리쳐 주위 적들에게 {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}%의 피해를 주고 3초 동안 기절시킵니다.\n\nTags: 방어, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Czas odnowienia: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} sek.\nSzansa na szczęśliwy traf: 33% (per hit)\nWstrząsasz ziemią, zadając {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% pkt. obrażeń i ogłuszając pobliskich wrogów na 3 sek.\n\nTags: Defensywa, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Recarga: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} segundos\nChance de Golpe de Sorte: 33% (per hit)\nGolpeia o chão, causando {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% de dano e atordoando inimigos ao redor por 3 segundos.\n\nTags: Defesa, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "Время восстановления: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} сек.\nВероятность удачного удара: 33% (per hit)\nВы с силой бьете по земле, нанося ближайшим противникам {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% ед. урона и оглушая их на 3 сек.\n\nTags: Защита, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "冷却时间: {16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} 秒\n幸运一击几率: 33% (per hit)\n砸击地面, 造成 {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% 点伤害并使周围所有敌人昏迷 3 秒。\n\nTags: 防御, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "冷卻時間:{16/15.2/14.4/13.76/13.12/12.64/12.16/11.84/11.52/11.2/10.88/10.56/10.4/10.24/10.08/9.92/9.84/9.76/9.68/9.6} 秒\n幸運觸發機率: 33% (per hit)\n猛擊地面,造成 {9.5/10.5/11.4/12.4/13.3/14.3/15.2/16.2/17.1/18}% 點傷害並擊昏附近的敵人,持續 3 秒。\n\nTags: 防禦, 控場, 傷害, 物理, 冷卻時間."
},
		id: 48,
		maxPoints: 5,
		x: 4.675,
		y: -306.735
	},
	"Enhanced Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Ground Stomp", "Tactical Ground Stomp", "Strategic Ground Stomp" ],
		description: `Increase Ground Stomp's duration by 1 second.`,
		nameLocalized: {
			"deDE": "Verbessertes Aufstampfen",
			"esES": "Pisotón mejorado",
			"esMX": "Pisotón Potenciado",
			"frFR": "Choc terrestre renforcé",
			"itIT": "Passo Tonante Rinforzato",
			"jaJP": "グラウンド・ストンプ(強化版)",
			"koKR": "강화된 발 구르기",
			"plPL": "Wzmocnione Tąpnięcie",
			"ptBR": "Pisada Poderosa Aperfeiçoada",
			"ruRU": "Усиленный топот",
			"zhCN": "强化大地践踏",
			"zhTW": "強化震地踐踏"
},
		descriptionLocalized: {
			"deDE": "Erhöht die Dauer von Aufstampfen um 1 Sek.",
			"esES": "Aumenta 1 s la duración de Pisotón.",
			"esMX": "Aumenta la duración de Pisotón 1 segundo.",
			"frFR": "Augmente la durée de Choc terrestre de 1 s.",
			"itIT": "Aumenta la durata di Passo Tonante di 1 s.",
			"jaJP": "〈グラウンド・ストンプ〉の持続時間が1秒増える。",
			"koKR": "발 구르기의 지속시간이 1초 증가합니다.",
			"plPL": "Czas działania Tąpnięcia jest wydłużony o 1 sek.",
			"ptBR": "Aumenta a duração de Pisada Poderosa em 1 segundo.",
			"ruRU": "Время действия \"Топота\" увеличивается на 1 сек.",
			"zhCN": "大地践踏的持续时间延长 1 秒。",
			"zhTW": "震地踐踏的持續時間延長 1 秒。"
},
		id: 49,
		maxPoints: 1,
		x: -2.235,
		y: -518.305
	},
	"Tactical Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Enhanced Ground Stomp" ],
		description: `Ground Stomp generates 25 Fury.`,
		nameLocalized: {
			"deDE": "Taktisches Aufstampfen",
			"esES": "Pisotón táctico",
			"esMX": "Pisotón Táctico",
			"frFR": "Choc terrestre tactique",
			"itIT": "Passo Tonante Tattico",
			"jaJP": "グラウンド・ストンプ(戦術)",
			"koKR": "전술적 발 구르기",
			"plPL": "Taktyczne Tąpnięcie",
			"ptBR": "Pisada Poderosa Tática",
			"ruRU": "Тактический топот",
			"zhCN": "战术大地践踏",
			"zhTW": "戰術震地踐踏"
},
		descriptionLocalized: {
			"deDE": "Aufstampfen erzeugt 25 Wut.",
			"esES": "Pisotón genera 25 de furia.",
			"esMX": "Pisotón genera 25 de Furia.",
			"frFR": "Choc terrestre génère 25 points de fureur.",
			"itIT": "Passo Tonante genera 25 furia.",
			"jaJP": "〈グラウンド・ストンプ〉使用時、怒気を25生成する。",
			"koKR": "발 구르기가 분노를 25 생성합니다.",
			"plPL": "Tąpnięcie generuje 25 pkt. furii.",
			"ptBR": "Pisada Poderosa gera 25 de fúria.",
			"ruRU": "\"Топот\" дает 25 ед. ярости.",
			"zhCN": "大地践踏生成 25 点怒气。",
			"zhTW": "震地踐踏會產生 25 點怒氣。"
},
		id: 50,
		maxPoints: 1,
		x: -158.388,
		y: -643.565
	},
	"Strategic Ground Stomp": {
		baseSkill: "Ground Stomp",
		connections: [ "Enhanced Ground Stomp" ],
		description: `Reduce the Cooldown of your Ultimate Skill by 1 second for each enemy damaged by Ground Stomp.`,
		nameLocalized: {
			"deDE": "Strategisches Aufstampfen",
			"esES": "Pisotón estratégico",
			"esMX": "Pisotón Estratégico",
			"frFR": "Choc terrestre stratégique",
			"itIT": "Passo Tonante Strategico",
			"jaJP": "グラウンド・ストンプ(戦略)",
			"koKR": "전략적 발 구르기",
			"plPL": "Strategiczne Tąpnięcie",
			"ptBR": "Pisada Poderosa Estratégica",
			"ruRU": "Стратегический топот",
			"zhCN": "战略大地践踏",
			"zhTW": "戰略震地踐踏"
},
		descriptionLocalized: {
			"deDE": "Verringert die Abklingzeit für Eure ultimative Fertigkeit für jeden Gegner, der durch Aufstampfen Schaden erleidet, um 1 Sek.",
			"esES": "Reduce 1 s el tiempo de reutilización de la habilidad definitiva por cada enemigo que sufra daño de Pisotón.",
			"esMX": "Reduce 1 segundo la recuperación de tu habilidad máxima por cada enemigo dañado por Pisotón.",
			"frFR": "Le temps de recharge de votre compétence ultime est réduit de 1 s pour chaque cible blessée par Choc terrestre.",
			"itIT": "Riduce il tempo di recupero della tua abilità Ultra di 1 s per ogni nemico colpito da Passo Tonante.",
			"jaJP": "〈グラウンド・ストンプ〉で敵にダメージを与えるたびに、奥義スキルのクールダウンが1秒減少する。",
			"koKR": "발 구르기로 피해를 준 적 하나당 궁극기의 재사용 대기시간이 1초 감소합니다.",
			"plPL": "Czas odnowienia twojej Mocy Specjalnej jest skrócony o 1 sek. za każdego wroga zranionego Tąpnięciem.",
			"ptBR": "Reduz a recarga da sua habilidade suprema em 1 segundo por cada inimigo atingido por Pisada Poderosa.",
			"ruRU": "Время восстановления мощного умения сокращается на 1 сек. за каждого противника, пораженного \"Топотом\".",
			"zhCN": "使用大地践踏每对一名敌人造成伤害, 可以使你终极技能的冷却时间缩短 1 秒。",
			"zhTW": "震地踐踏每對一個敵人造成傷害,都會使你的絕招冷卻時間縮短 1 秒。"
},
		id: 51,
		maxPoints: 1,
		x: 147.985,
		y: -644.43
	},
	"Rallying Cry": {
		connections: [ "Defensive", "Enhanced Rallying Cry" ],
		description: `Cooldown: 25 seconds
Bellow a rallying cry, increasing your Movement Speed by +30% and Resource Generation by x{40/44/48/52/56/60/64/68/72/76}% for 6 seconds, and Nearby allies for 3 seconds.

Tags: Defensive, Shout, Fury, Movement, Cooldown.`,
		nameLocalized: {
			"deDE": "Schlachtruf",
			"esES": "Grito alentador",
			"esMX": "Grito de Reconcentración",
			"frFR": "Cri de ralliement",
			"itIT": "Grido di Battaglia",
			"jaJP": "戦いの雄叫び",
			"koKR": "집결의 함성",
			"plPL": "Okrzyk Bojowy",
			"ptBR": "Brado de Convocação",
			"ruRU": "Воодушевляющий клич",
			"zhCN": "集结呐喊",
			"zhTW": "振奮戰吼"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 25 Sek.\nLasst einen Schlachtruf erschallen, der 6 Sek. lang Eure Bewegungsgeschwindigkeit um x{40/44/48/52/56/60/64/68/72/76}% und Eure Ressourcenerzeugung um +30% erhöht. Die Bewegungsgeschwindigkeit und Ressourcenerzeugung von Verbündeten in der Nähe wird 3 Sek. lang erhöht.\n\nTags: Defensiv, Ruf, Wut, Bewegung, Abklingzeit.",
			"esES": "Tiempo de reutilización: 25 s\nProfieres un grito alentador que aumenta tu velocidad de movimiento un +30% y tu generación de recursos un x{40/44/48/52/56/60/64/68/72/76}% durante 6 s, y las de tus aliados cercanos durante 3 s.\n\nTags: Defensiva, Grito, Furia, Movimiento, Tiempo de reutilización.",
			"esMX": "Recuperación: 25 segundos\nEmites un grito de reconcentración que aumenta tu velocidad de movimiento un +30% y la generación de recursos un x{40/44/48/52/56/60/64/68/72/76}% durante 6 segundos, y a los aliados durante 3 segundos.\n\nTags: Defensivo, Grito, Furia, Movimiento, Recuperación.",
			"frFR": "Temps de recharge: 25 s\nVous poussez un cri de ralliement, ce qui augmente votre vitesse de déplacement de +30% et votre génération de ressources de x{40/44/48/52/56/60/64/68/72/76}% pendant 6 s, et celles des forces alliées à proximité pendant 3 s\n\nTags: Défense, Cri, Fureur, Déplacement, Temps de recharge.",
			"itIT": "Tempo di recupero: 25 s\nEmetti un grido di battaglia, aumentando la tua velocità di movimento del +30% e la generazione di risorse del x{40/44/48/52/56/60/64/68/72/76}% per 6 s e degli alleati vicini per 3 s.\n\nTags: Difesa, Urla, Furia, Movimento, Tempo di recupero.",
			"jaJP": "クールダウン: 25秒\n奮起させる雄叫びをあげ、6秒間にわたって自分の移動速度を+30%、リソース生成量をx{40/44/48/52/56/60/64/68/72/76}%増加させる。付近の味方にも同様の効果を3秒間与える。\n\nTags: 防御, シャウト, 怒気, 移動, クールダウン.",
			"koKR": "재사용 대기시간: 25초\n힘찬 집결의 함성을 내지릅니다. 6초 동안 자신의 이동 속도가 +30%, 자원 생성량이 x{40/44/48/52/56/60/64/68/72/76}% 증가하고, 주위 아군들은 3초 동안 증가합니다.\n\nTags: 방어, 외침, 분노, 이동, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 25 sek.\nWydajesz gromki okrzyk bojowy, który zwiększa twoją szybkość ruchu o +30% oraz generowanie zasobów o x{40/44/48/52/56/60/64/68/72/76}% na 6 sek. Dla pobliskich sojuszników czas działania premii wynosi 3 sek.\n\nTags: Defensywa, Okrzyk, Furia, Ruch, Odnowienie.",
			"ptBR": "Recarga: 25 segundos\nSolta um brado de convocação, aumentando sua velocidade de movimento em +30% e a geração de recursos em {40/44/48/52/56/60/64/68/72/76}% por 6 segundos, enquanto os aliados próximos recebem aumento por 3 segundos.\n\nTags: Defesa, Grito, Fúria, Movimento, Recarga.",
			"ruRU": "Время восстановления: 25 сек.\nОбодряющий клич повышает вашу скорость передвижения на +30%, а скорость накопления ресурса – на x{40/44/48/52/56/60/64/68/72/76}% на 6 сек. Также усиливает находящихся рядом союзников на 3 сек.\n\nTags: Защита, Крик, Ярость, Движение, Время восстановления.",
			"zhCN": "冷却时间: 25 秒\n高呼集结呐喊, 使你的移动速度提高 +30%, 资源生成速度提高 x{40/44/48/52/56/60/64/68/72/76}%, 持续 6 秒, 附近盟友的效果为 3 秒。\n\nTags: 防御, 战吼, 怒气, 移动, 冷却时间.",
			"zhTW": "冷卻時間:25 秒\n發出振奮士氣的戰吼,使你和附近盟友的移動速度提高 +30%,資源產生效率提高 x{40/44/48/52/56/60/64/68/72/76}%。你身上的效果持續 6 秒,盟友身上的效果持續 3 秒。\n\nTags: 防禦, 怒吼, 怒氣, 移動, 冷卻時間."
},
		id: 52,
		maxPoints: 5,
		x: 571.525,
		y: -107.125
	},
	"Enhanced Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Rallying Cry", "Strategic Rallying Cry", "Tactical Rallying Cry" ],
		description: `Rallying Cry grants you Unstoppable while active.`,
		nameLocalized: {
			"deDE": "Verbesserter Schlachtruf",
			"esES": "Grito alentador mejorado",
			"esMX": "Grito de Reconcentración Potenciado",
			"frFR": "Cri de ralliement renforcé",
			"itIT": "Grido di Battaglia Rinforzato",
			"jaJP": "戦いの雄叫び(強化版)",
			"koKR": "강화된 집결의 함성",
			"plPL": "Wzmocniony Okrzyk Bojowy",
			"ptBR": "Brado de Convocação Aperfeiçoado",
			"ruRU": "Усиленный воодушевляющий клич",
			"zhCN": "强化集结呐喊",
			"zhTW": "強化振奮戰吼"
},
		descriptionLocalized: {
			"deDE": "Schlachtruf macht Euch unaufhaltsam, solange er aktiv ist.",
			"esES": "Grito alentador te vuelve imparable mientras dura.",
			"esMX": "Grito de Reconcentración te vuelve imparable mientras está activa.",
			"frFR": "Cri de ralliement vous octroie l'état inarrêtable tant qu'il est actif.",
			"itIT": "Grido di Battaglia ti rende inarrestabile quando è attivo.",
			"jaJP": "〈戦いの雄叫び〉の発動中は、抑圧不可状態になる。",
			"koKR": "집결의 함성이 활성화되어 있는 동안 자신에게 저지 불가를 부여합니다.",
			"plPL": "Okrzyk Bojowy zapewnia nieustępliwość, kiedy jest aktywny.",
			"ptBR": "Enquanto Brado de Convocação está ativo, concede implacável.",
			"ruRU": "\"Воодушевляющий клич\" также дает вам неудержимость.",
			"zhCN": "集结呐喊激活时使你获得不可阻挡。",
			"zhTW": "振奮戰吼啟動時會賦予你無阻效果。"
},
		id: 53,
		maxPoints: 1,
		x: 908.815,
		y: -187.395
	},
	"Strategic Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Enhanced Rallying Cry" ],
		description: `Rallying Cry grants you 10% Base Life as Fortify. While Rallying Cry is active, you gain an additional 2% Base Life as Fortify each time you take or deal direct damage.`,
		nameLocalized: {
			"deDE": "Strategischer Schlachtruf",
			"esES": "Grito alentador estratégico",
			"esMX": "Grito de Reconcentración Estratégico",
			"frFR": "Cri de ralliement stratégique",
			"itIT": "Grido di Battaglia Strategico",
			"jaJP": "戦いの雄叫び(戦略)",
			"koKR": "전략적 집결의 함성",
			"plPL": "Strategiczny Okrzyk Bojowy",
			"ptBR": "Brado de Convocação Estratégico",
			"ruRU": "Стратегический воодушевляющий клич",
			"zhCN": "战略集结呐喊",
			"zhTW": "戰略振奮戰吼"
},
		descriptionLocalized: {
			"deDE": "Schlachtruf verleiht Euch 10% Eures Basislebens als Stählung. Während Schlachtruf aktiv ist, erhaltet Ihr jedes Mal, wenn Ihr direkten Schaden erleidet oder verursacht, zusätzlich 2% Eures Basislebens als Stählung.",
			"esES": "Grito alentador te otorga un 10% de tu vida base como fortificación. Mientras dura Grito alentador, obtienes un 2% más de tu vida base como fortificación cada vez que sufres o infliges daño directo.",
			"esMX": "Grito de Reconcentración te otorga un 10% de vida de base como fortificación. Mientras Grito de Reconcentración está activa, obtienes un 2% más de vida de base como fortificación cada vez que recibes o infliges daño directo.",
			"frFR": "Cri de ralliement vous confère un montant de fortification égal à 10% de vos points de vie de base. Tant que Cri de ralliement est actif, vous obtenez un montant de fortification supplémentaire égal à 2% de vos points de vie de base chaque fois que vous subissez ou infligez des dégâts directs.",
			"itIT": "Grido di Battaglia ti fornisce il 10% della Vita base come Fortificazione. Mentre Grido di Battaglia è attivo, ottieni il 2% della Vita base come Fortificazione ogni volta che infliggi o subisci danni diretti.",
			"jaJP": "〈戦いの雄叫び〉使用時、基本ライフの10%にあたるの強化を獲得する。また〈戦いの雄叫び〉を発動中、直接ダメージを受けたり与えたりする度に、基本ライフの2%にあたるの強化を獲得する。",
			"koKR": "집결의 함성이 기본 생명력의 10%에 해당하는 보강을 부여합니다. 집결의 함성이 활성화되어 있는 동안 직접 피해를 주거나 받을 때마다 추가로 기본 생명력의 2%를 보강으로 얻습니다.",
			"plPL": "Okrzyk Bojowy zapewnia 10% podstawowego zdrowia jako umocnienie. Kiedy Okrzyk Bojowy jest aktywny, zyskujesz dodatkowo 2% podstawowego zdrowia jako umocnienie za każdym razem, gdy zadajesz lub otrzymujesz bezpośrednie obrażenia.",
			"ptBR": "Brado de Convocação concede 10% de vida básica como fortificação. Enquanto Brado de Convocação está ativo, você recebe 2% de vida básica adicional como fortificação sempre que receber ou causar dano direto.",
			"ruRU": "\"Воодушевляющий клич\" дает вам укрепление в объеме 10% базового запаса здоровья. Пока действует \"Воодушевляющий клич\", вы дополнительно получаете укрепление в объеме 2% базового запаса здоровья, когда получаете или наносите прямой урон.",
			"zhCN": "集结呐喊强固你 10% 基础生命。集结呐喊激活时, 你每次受到或造成直接伤害, 都会额外强固你 2% 基础生命。",
			"zhTW": "振奮戰吼可賦予你相當於 10% 基礎生命值的強韌。振奮戰吼生效時,你每次受到或造成直接傷害,可額外賦予你相當於 2% 基礎生命值的強韌。"
},
		id: 54,
		maxPoints: 1,
		x: 1169.235,
		y: -153.51
	},
	"Tactical Rallying Cry": {
		baseSkill: "Rallying Cry",
		connections: [ "Enhanced Rallying Cry" ],
		description: `Rallying Cry generates 20 Fury and grants you an additional x20% Resource Generation.`,
		nameLocalized: {
			"deDE": "Taktischer Schlachtruf",
			"esES": "Grito alentador táctico",
			"esMX": "Grito de Reconcentración Táctico",
			"frFR": "Cri de ralliement tactique",
			"itIT": "Grido di Battaglia Tattico",
			"jaJP": "戦いの雄叫び(戦術)",
			"koKR": "전술적 집결의 함성",
			"plPL": "Taktyczny Okrzyk Bojowy",
			"ptBR": "Brado de Convocação Tático",
			"ruRU": "Тактический воодушевляющий клич",
			"zhCN": "战术集结呐喊",
			"zhTW": "戰術振奮戰吼"
},
		descriptionLocalized: {
			"deDE": "Schlachtruf erzeugt 20 Wut und gewährt Euch zusätzliche x20% Ressourcenerzeugung.",
			"esES": "Grito alentador genera 20 de furia y te otorga un x20% más de generación de recursos.",
			"esMX": "Grito de Reconcentración genera 20 de Furia y te otorga un x20% más de generación de recursos.",
			"frFR": "Cri de ralliement génère 20 points de fureur et augmente votre génération de ressources de x20% supplémentaires.",
			"itIT": "Grido di Battaglia genera 20 furia e aumenta la generazione di risorse del x20%.",
			"jaJP": "〈戦いの雄叫び〉使用時、20の怒気を生成し、リソース生成量がx20%増加する。",
			"koKR": "집결의 함성이 분노를 20 생성하고, 자원 생성량을 추가로 x20% 부여합니다.",
			"plPL": "Okrzyk Bojowy generuje 20 pkt. furii i zapewnia dodatkową premię x20% do generowania zasobów.",
			"ptBR": "Brado de Convocação gera 20 de fúria e concede 20% de geração de recursos adicional.",
			"ruRU": "\"Воодушевляющий клич\" дает 20 ед. ярости и повышает скорость восполнения ресурсов на x20%.",
			"zhCN": "集结呐喊生成 20 点怒气, 并使你的资源生成速度提高 x20%。",
			"zhTW": "振奮戰吼會產生 20 點怒氣,並賦予你額外 x20% 資源產生效率。"
},
		id: 55,
		maxPoints: 1,
		x: 1044.75,
		y: -301.6
	},
	"Imposing Presence": {
		connections: [ "Defensive", "Martial Vigor" ],
		description: `Gain x{5/10/15/20/25/30/35/40/45/50}% additional Maximum Life.

Tags: Life.`,
		nameLocalized: {
			"deDE": "Imposante Erscheinung",
			"esES": "Presencia imponente",
			"esMX": "Presencia Imponente",
			"frFR": "Présence imposante",
			"itIT": "Presenza Imponente",
			"jaJP": "威風堂々",
			"koKR": "미친 존재감",
			"plPL": "Imponująca Obecność",
			"ptBR": "Presença Imponente",
			"ruRU": "Довлеющее присутствие",
			"zhCN": "杀气凌人",
			"zhTW": "氣勢不凡"
},
		descriptionLocalized: {
			"deDE": "Erhaltet zusätzlich x{5/10/15/20/25/30/35/40/45/50}% maximales Leben.\n\nTags: Leben.",
			"esES": "Obtienes un x{5/10/15/20/25/30/35/40/45/50}% de vida máxima adicional.\n\nTags: Vida.",
			"esMX": "Obtienes un x{5/10/15/20/25/30/35/40/45/50}% de vida máxima adicional.\n\nTags: Vida.",
			"frFR": "Votre maximum de points de vie est augmenté de x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Vie.",
			"itIT": "Aumenta la tua Vita massima del x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Vita.",
			"jaJP": "ライフ最大値がさらにx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: ライフ.",
			"koKR": "최대 생명력이 추가로 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 생명력.",
			"plPL": "Zyskujesz dodatkowe x{5/10/15/20/25/30/35/40/45/50}% do maksymalnego zdrowia.\n\nTags: Zdrowie.",
			"ptBR": "Recebe {5/10/15/20/25/30/35/40/45/50}% de vida máxima adicional.\n\nTags: Vida.",
			"ruRU": "Максимальный запас здоровья увеличивается на x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Здоровье.",
			"zhCN": "生命上限额外提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 生命.",
			"zhTW": "生命值上限提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 生命值."
},
		id: 56,
		maxPoints: 3,
		x: 362.14,
		y: -272.12
	},
	"Martial Vigor": {
		connections: [ "Imposing Presence" ],
		description: `Damage Reduction against Elites is increased by {3/6/9/12/15/18/21/24/27/30}%.

Tags: Damage Reduction, Elite Monsters.`,
		nameLocalized: {
			"deDE": "Kampfkraft",
			"esES": "Vigor marcial",
			"esMX": "Vigor Marcial",
			"frFR": "Vigueur martiale",
			"itIT": "Vigore Marziale",
			"jaJP": "武力行使",
			"koKR": "전투의 원기",
			"plPL": "Bitewny Wigor",
			"ptBR": "Vigor Marcial",
			"ruRU": "Боевой азарт",
			"zhCN": "勇武活力",
			"zhTW": "戰爭活力"
},
		descriptionLocalized: {
			"deDE": "Die Schadensreduktion gegen Elitegegner erhöht sich um {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Schadensreduktion, Elitemonster.",
			"esES": "La reducción de daño contra enemigos de élite aumenta un {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Reducción de daño, Enemigos de élite.",
			"esMX": "La reducción de daño contra enemigos de Élite aumenta un {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Reducción de daño, Monstruos de Élite.",
			"frFR": "La réduction de dégâts contre les élites est augmentée de {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Réduction des dégâts, Monstres élites.",
			"itIT": "La riduzione danni contro élite aumenta del {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Riduzione danni, Mostri élite.",
			"jaJP": "エリートから受けるダメージの軽減量が{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: ダメージ減少, エリートモンスター.",
			"koKR": "정예에 대한 피해 감소가 {3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 피해 감소, 정예 괴물.",
			"plPL": "Redukcja obrażeń od wrogów elitarnych jest zwiększona o {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Redukcja Obrażeń, Elitarne Potwory.",
			"ptBR": "A redução de dano contra elites é aumentada em {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Redução de Dano, Monstros de Elite.",
			"ruRU": "Урон от особых противников уменьшается на {3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Уменьшение урона, Особые монстры.",
			"zhCN": "面对精英怪时获得的伤害减免提高 {3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 伤害减免, 精英怪物.",
			"zhTW": "對精英怪的傷害減免效果提高 {3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 傷害減免, 精英怪物."
},
		id: 57,
		maxPoints: 3,
		x: 495.85,
		y: -440.32
	},
};

barbarianData["Brawling"] = {
	"Charge": {
		connections: [ "Brawling", "Enhanced Charge" ],
		description: `Attack Speed Multiplier: 1.5
Cooldown: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} seconds
Lucky Hit Chance: 33% (per hit)
Become Unstoppable and rush forward, pushing enemies with you then swinging through them for {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% damage and Knocking them Back.

Tags: Brawling, Unstoppable, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Ansturm",
			"esES": "Carga",
			"esMX": "Carga",
			"frFR": "Charge",
			"itIT": "Carica",
			"jaJP": "チャージ",
			"koKR": "돌진",
			"plPL": "Szarża",
			"ptBR": "Investida",
			"ruRU": "Натиск",
			"zhCN": "冲锋",
			"zhTW": "衝鋒"
},
		descriptionLocalized: {
			"deDE": "Attack Speed Multiplier: 1.5\nAbklingzeit: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} Sek.\nGlückstrefferchance: 33% (per hit)\nWerdet unaufhaltsam und stürmt nach vorn, wobei Ihr Gegner mitstoßt und ihnen dann einen Hieb in Höhe von {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% Schaden versetzt und sie zurückstoßt.\n\nTags: Raufbold, Unaufhaltsam, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Attack Speed Multiplier: 1.5\nTiempo de reutilización: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nProbabilidad de golpe de suerte: 33% (per hit)\nTe vuelves imparable, corres hacia delante para empujar a los enemigos contigo y atacas para infligir {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño y repelerlos.\n\nTags: Refriega, Imparable, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Attack Speed Multiplier: 1.5\nRecuperación: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} segundos\nProbabilidad de golpe afortunado: 33% (per hit)\nTe vuelves imparable, arremetes contra los enemigos que tienes frente a ti y los atraviesas con tu arma para infligirles {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de daño y repelerlos.\n\nTags: Combate, Imparable, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Attack Speed Multiplier: 1.5\nTemps de recharge: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nChances d'obtenir un coup de chance: 33% (per hit)\nVous devenez inarrêtable et vous vous précipitez en avant en poussant les adversaires dans votre élan, puis vous les frappez en leur infligeant {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% points de dégâts et en les repoussant.\n\nTags: Combat, Inarrêtable, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Attack Speed Multiplier: 1.5\nTempo di recupero: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nProbabilità di colpo fortunato: 33% (per hit)\nDiventi inarrestabile e scatti in avanti, spingendo con te i nemici per poi infliggere {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% danni e respingerli.\n\nTags: Rissa, Inarrestabile, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "Attack Speed Multiplier: 1.5\nクールダウン: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2}秒\n幸運の一撃発生率: 33% (per hit)\n抑圧不可.になって前方に突進し、敵を押し戻す。その後、武器を振り回して{25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%のダメージを与えてノックバックさせる。\n\nTags: 決闘, 抑圧不可, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "Attack Speed Multiplier: 1.5\n재사용 대기시간: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2}초\n행운의 적중 확률: 33% (per hit)\n저지 불가 상태가 되어 앞으로 돌진합니다. 적을 밀고 간 후 베어 넘겨 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}%의 피해를 주고 뒤로 밀쳐냅니다.\n\nTags: 난투, 저지 불가, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Attack Speed Multiplier: 1.5\nCzas odnowienia: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} sek.\nSzansa na szczęśliwy traf: 33% (per hit)\nZyskujesz nieustępliwość i pędzisz naprzód, popychając wrogów, a następnie wyprowadzasz zamaszysty cios, który zadaje {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% pkt. obrażeń i ich odrzuca.\n\nTags: Bijatyka, Nieustępliwość, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Attack Speed Multiplier: 1.5\nRecarga: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} segundos\nChance de Golpe de Sorte: 33% (per hit)\nTorna-se implacável e avança, empurrando inimigos, causando {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% de dano a eles e repelindo-os.\n\nTags: Briga, Implacável, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "Attack Speed Multiplier: 1.5\nВремя восстановления: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} сек.\nВероятность удачного удара: 33% (per hit)\nВы получаете неудержимость и устремляетесь вперед, толкая противников, а затем взмахиваете оружием, нанося врагам {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% ед. урона и отбрасывая их.\n\nTags: Бой без правил, Неудержимость, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "Attack Speed Multiplier: 1.5\n冷却时间: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} 秒\n幸运一击几率: 33% (per hit)\n变得不可阻挡并向前冲锋, 推动接触到的敌人然后从其中间穿过, 造成 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% 点伤害并将其击退。\n\nTags: 搏斗, 不可阻挡, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "Attack Speed Multiplier: 1.5\n冷卻時間:{17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} 秒\n幸運觸發機率: 33% (per hit)\n獲得無阻狀態,向前衝刺推開敵人,然後在穿越敵人時揮擊,造成 {25/27.5/30/32.5/35/37.5/40/42.5/45/47.5}% 點傷害並擊退他們。\n\nTags: 爭鬥, 無阻, 控場, 傷害, 物理, 冷卻時間."
},
		id: 58,
		maxPoints: 5,
		x: -652.69,
		y: 158.534
	},
	"Enhanced Charge": {
		baseSkill: "Charge",
		connections: [ "Charge", "Power Charge", "Mighty Charge" ],
		description: `Enemies who are Knocked Back into terrain by Charge take 15% damage and are Stunned for 3 seconds.`,
		nameLocalized: {
			"deDE": "Verbesserter Ansturm",
			"esES": "Carga mejorada",
			"esMX": "Carga Potenciada",
			"frFR": "Charge renforcée",
			"itIT": "Carica Rinforzata",
			"jaJP": "チャージ(強化版)",
			"koKR": "강화된 돌진",
			"plPL": "Wzmocniona Szarża",
			"ptBR": "Investida Aperfeiçoada",
			"ruRU": "Усиленный натиск",
			"zhCN": "强化冲锋",
			"zhTW": "強化衝鋒"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Ansturm in Terrain gestoßen werden, erleiden 15% Schaden und sind 3 Sek. lang betäubt.",
			"esES": "Los enemigos repelidos contra el terreno con Carga sufren 15% de daño y quedan aturdidos durante 3 s.",
			"esMX": "Los enemigos que se golpean contra el terreno por Carga reciben 15% de daño y quedan aturdidos durante 3 segundos.",
			"frFR": "Les cibles repoussées par Charge et qui percutent des obstacles subissent 15% points de dégâts et sont étourdies pendant 3 s.",
			"itIT": "I nemici che vengono respinti a terra da Carica subiscono 15% danni e restano storditi per 3 s.",
			"jaJP": "〈チャージ〉によるノックバックで地形に叩きつけた敵に15%のダメージを与え、3秒間スタンさせる。",
			"koKR": "돌진으로 밀려나서 지형지물에 부딪힌 적은 15%의 피해를 받고 3초 동안 기절합니다.",
			"plPL": "Wrogowie odrzuceni przez Szarżę, którzy zderzą się z przeszkodami terenu, otrzymują 15% pkt. obrażeń i są ogłuszeni na 3 sek.",
			"ptBR": "Inimigos repelidos ao chão por Investida recebem 15% de dano e ficam atordoados por 3 segundos.",
			"ruRU": "При столкновении с препятствиями отброшенные \"Натиском\" противники получают 15% ед. урона и оглушаются на 3 сек.",
			"zhCN": "被冲锋的击退效果撞到地形上的敌人受到 15% 点伤害并陷入昏迷状态, 持续 3 秒。",
			"zhTW": "被衝鋒擊退撞到地形的敵人會受到 15% 點傷害並被擊昏 3 秒。"
},
		id: 59,
		maxPoints: 1,
		x: -1012.34,
		y: 235.537
	},
	"Power Charge": {
		baseSkill: "Charge",
		connections: [ "Enhanced Charge" ],
		description: `Reduce Charge's Cooldown by 3 seconds if it Knocks Back an enemy into terrain.`,
		nameLocalized: {
			"deDE": "Starker Ansturm",
			"esES": "Carga potente",
			"esMX": "Carga Fulminante",
			"frFR": "Charge énergique",
			"itIT": "Carica Potente",
			"jaJP": "チャージ(怪力)",
			"koKR": "힘의 돌진",
			"plPL": "Potężna Szarża",
			"ptBR": "Investida Potente",
			"ruRU": "Внушительный натиск",
			"zhCN": "强力冲锋",
			"zhTW": "強力衝鋒"
},
		descriptionLocalized: {
			"deDE": "Reduziert die Abklingzeit von Ansturm um 3 Sek., wenn ein Gegner in Terrain gestoßen wird.",
			"esES": "Reduce 3 s el tiempo de reutilización de Carga si repele a un enemigo contra el terreno.",
			"esMX": "Reduce la recuperación de Carga 3 segundos si golpea a un enemigo contra el terreno.",
			"frFR": "Réduit le temps de recharge de Charge de 3 s si une cible repoussée percute un obstacle.",
			"itIT": "Riduci il tempo di recupero di Carica di 3 s se respinge un nemico a terra.",
			"jaJP": "〈チャージ〉によるノックバックで敵を地形に叩きつけると、クールダウンが3秒短縮される。",
			"koKR": "돌진으로 밀어낸 적이 지형지물에 부딪히면 재사용 대기시간이 3초 감소합니다.",
			"plPL": "Czas odnowienia Szarży jest skrócony o 3 sek., jeśli Szarża odrzuci i pchnie wroga na element otoczenia.",
			"ptBR": "Reduz a recarga de Investida em 3 segundos se repelir um inimigo ao chão.",
			"ruRU": "Когда \"Натиск\" отбрасывает противника в препятствие, время восстановления этого умения сокращается на 3 сек.",
			"zhCN": "如果将敌人击退至地形上, 则冲锋的冷却时间缩短 3 秒。",
			"zhTW": "若衝鋒將敵人擊退並撞至地形上,使其冷卻時間縮短 3 秒。"
},
		id: 60,
		maxPoints: 1,
		x: -1272.485,
		y: 209.457
	},
	"Mighty Charge": {
		baseSkill: "Charge",
		connections: [ "Enhanced Charge" ],
		description: `Damaging enemies with Charge makes them Vulnerable for 2 seconds.`,
		nameLocalized: {
			"deDE": "Mächtiger Ansturm",
			"esES": "Carga poderosa",
			"esMX": "Carga Poderosa",
			"frFR": "Charge puissante",
			"itIT": "Carica Poderosa",
			"jaJP": "チャージ(屈強)",
			"koKR": "강력한 돌진",
			"plPL": "Mocarna Szarża",
			"ptBR": "Investida Poderosa",
			"ruRU": "Могучий натиск",
			"zhCN": "强劲冲锋",
			"zhTW": "巨力衝鋒"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Gegnern mit Ansturm Schaden zufügt, sind sie 2 Sek. lang verwundbar.",
			"esES": "Infligir daño a los enemigos con Carga los vuelve vulnerables durante 2 s.",
			"esMX": "Al infligir daño a los enemigos con Carga, los vuelves vulnerables durante 2 segundos.",
			"frFR": "Les cibles blessées par Charge deviennent vulnérables pendant 2 s.",
			"itIT": "Infliggere danni ai nemici con Carica li rende vulnerabili per 2 s.",
			"jaJP": "〈チャージ〉によってダメージを与えた敵を2秒間、脆弱状態にする。",
			"koKR": "돌진으로 적에게 피해를 주면 적이 2초 동안 취약해집니다.",
			"plPL": "Zranienie wrogów Szarżą sprawia, że zostają odsłonięci na 2 sek.",
			"ptBR": "Causar dano a inimigos com Investida deixa-os vulneráveis por 2 segundos.",
			"ruRU": "Противники, пораженные \"Натиском\", становятся уязвимыми на 2 сек.",
			"zhCN": "冲锋对敌人造成伤害的同时也会使其陷入易伤状态, 持续 2 秒。",
			"zhTW": "受到衝鋒傷害的敵人會易傷 2 秒。"
},
		id: 61,
		maxPoints: 1,
		x: -1146.62,
		y: 364.822
	},
	"War Cry": {
		connections: [ "Brawling", "Enhanced War Cry" ],
		description: `Cooldown: 25 seconds
Bellow a mighty war cry, increasing your damage dealt by x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% for 6 seconds, and Nearby allies for 3 seconds.

Tags: Brawling, Shout, Damage, Cooldown.`,
		nameLocalized: {
			"deDE": "Kriegsschrei",
			"esES": "Grito de guerra",
			"esMX": "Grito de Guerra",
			"frFR": "Cri de guerre",
			"itIT": "Grido di Guerra",
			"jaJP": "ウォークライ",
			"koKR": "전장의 함성",
			"plPL": "Okrzyk Wojenny",
			"ptBR": "Grito de Guerra",
			"ruRU": "Воинственный клич",
			"zhCN": "战吼",
			"zhTW": "戰吼"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 25 Sek.\nLasst einen mächtigen Schlachtruf erschallen, der 6 Sek. lang Euren verursachten Schaden um x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% erhöht. Der verursachte Schaden von Verbündeten in der Nähe wird 3 Sek. lang erhöht.\n\nTags: Raufbold, Ruf, Schaden, Abklingzeit.",
			"esES": "Tiempo de reutilización: 25 s\nProfieres un poderoso grito de guerra que aumenta el daño que infliges un x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% durante 6 s, y el de los aliados cercanos durante 3 s.\n\nTags: Refriega, Grito, Daño, Tiempo de reutilización.",
			"esMX": "Recuperación: 25 segundos\nEntonas un potente grito de guerra, aumenta tu daño infligido un x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% durante 6 segundos, y a los aliados durante 3 segundos.\n\nTags: Combate, Grito, Daño, Recuperación.",
			"frFR": "Temps de recharge: 25 s\nVous poussez un puissant cri de guerre, ce qui augmente vos dégâts de x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% pendant 6 s, et ceux des personnages alliés pendant 3 s.\n\nTags: Combat, Cri, Dégâts, Temps de recharge.",
			"itIT": "Tempo di recupero: 25 s\nEmetti un potente grido di guerra che aumenta i tuoi danni inflitti del x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% per 6 s e quelli degli alleati vicini per 3 s.\n\nTags: Rissa, Urla, Danni, Tempo di recupero.",
			"jaJP": "クールダウン: 25秒\n戦いの雄叫びをあげ、6秒間にわたって自分が与えるダメージをx{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%増加させる。付近の味方にも同様の効果を3秒間与える。\n\nTags: 決闘, シャウト, ダメージ, クールダウン.",
			"koKR": "재사용 대기시간: 25초\n강력한 전장의 함성을 내지릅니다. 6초 동안 자신이 주는 피해가 x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% 증가하고, 주위 아군들은 3초 동안 증가합니다.\n\nTags: 난투, 외침, 피해, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 25 sek.\nWydajesz gromki okrzyk wojenny, który zwiększa zadawane przez ciebie obrażenia o x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% na 6 sek., a obrażenia zadawane przez pobliskich sojuszników na 3 sek.\n\nTags: Bijatyka, Okrzyk, Obrażenia, Odnowienie.",
			"ptBR": "Recarga: 25 segundos\nSolta um poderoso grito de guerra, aumentando seu dano causado em {15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% por 6 segundos e o de aliados próximos por 3 segundos.\n\nTags: Briga, Grito, Dano, Recarga.",
			"ruRU": "Время восстановления: 25 сек.\nМощный воинственный клич увеличивает наносимый вами урон на x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}% на 6 сек. Усиливает находящихся рядом союзников на 3 сек.\n\nTags: Бой без правил, Крик, Урон, Время восстановления.",
			"zhCN": "冷却时间: 25 秒\n发出震天动地的战吼。你造成的伤害提高 x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%, 持续 6 秒, 附近的盟友持续 3 秒。\n\nTags: 搏斗, 战吼, 伤害, 冷却时间.",
			"zhTW": "冷卻時間: 25 秒\n發出強力戰吼。使你和附近盟友造成的傷害提高 x{15/16.5/18/19.5/21/22.5/24/25.5/27/28.5}%。你的效果持續 6 秒,附近盟友的效果持續 3 秒。\n\nTags: 爭鬥, 怒吼, 傷害, 冷卻時間."
},
		id: 62,
		maxPoints: 5,
		x: -401.86,
		y: -211.156
	},
	"Enhanced War Cry": {
		baseSkill: "War Cry",
		connections: [ "War Cry", "Power War Cry", "Mighty War Cry" ],
		description: `War Cry grants you Berserking for 4 seconds.`,
		nameLocalized: {
			"deDE": "Verbesserter Kriegsschrei",
			"esES": "Grito de guerra mejorado",
			"esMX": "Grito de Guerra Potenciado",
			"frFR": "Cri de guerre renforcé",
			"itIT": "Grido di Guerra Rinforzato",
			"jaJP": "ウォークライ(強化版)",
			"koKR": "강화된 전장의 함성",
			"plPL": "Wzmocniony Okrzyk Wojenny",
			"ptBR": "Grito de Guerra Aperfeiçoado",
			"ruRU": "Усиленный воинственный клич",
			"zhCN": "强化战吼",
			"zhTW": "強化戰吼"
},
		descriptionLocalized: {
			"deDE": "Kriegsschrei versetzt Euch 4 Sek. lang in den Berserkermodus.",
			"esES": "Grito de guerra te otorga vesania durante 4 s.",
			"esMX": "Grito de Guerra otorga enajenación durante 4 segundos.",
			"frFR": "Cri de guerre vous confère l'effet de Rage du berserker pendant 4 s.",
			"itIT": "Grido di Guerra ti fornisce Berserk per 4 s.",
			"jaJP": "〈ウォークライ〉発動時、4秒間〈バーサーク〉状態になる。",
			"koKR": "전장의 함성을 사용하면 4초 동안 광폭화합니다.",
			"plPL": "Okrzyk Wojenny zapewnia ci berserkowanie na 4 sek.",
			"ptBR": "Grito de Guerra concede Berserk por 4 segundos.",
			"ruRU": "\"Воинственный клич\" дает вам эффект берсерк на 4 сек.",
			"zhCN": "战吼使你获得狂暴, 持续 4 秒。",
			"zhTW": "戰吼使你狂暴,持續 4 秒。"
},
		id: 63,
		maxPoints: 1,
		x: -698.5,
		y: -341.465
	},
	"Power War Cry": {
		baseSkill: "War Cry",
		connections: [ "Enhanced War Cry" ],
		description: `If at least 6 enemies are Nearby when you cast War Cry, your damage bonus is increased by an additional x10%.`,
		nameLocalized: {
			"deDE": "Starker Kriegsschrei",
			"esES": "Grito de guerra potente",
			"esMX": "Grito de Guerra Fulminante",
			"frFR": "Cri de guerre énergique",
			"itIT": "Grido di Guerra Potente",
			"jaJP": "ウォークライ(怪力)",
			"koKR": "힘의 전장의 함성",
			"plPL": "Potężny Okrzyk Wojenny",
			"ptBR": "Grito de Guerra Potente",
			"ruRU": "Внушительный воинственный клич",
			"zhCN": "强力战吼",
			"zhTW": "強力戰吼"
},
		descriptionLocalized: {
			"deDE": "Wenn sich beim Wirken von Kriegsschrei mindestens 6 Gegner in der Nähe befinden, erhöht sich Euer Schadensbonus zusätzlich um x10%.",
			"esES": "Si hay al menos 6 enemigos cerca cuando lanzas Grito de guerra, tu bonus de daño aumenta un x10% más.",
			"esMX": "Si hay al menos 6 enemigos cerca cuando lanzas Grito de Guerra, la bonificación de daño aumenta un x10% más.",
			"frFR": "Si au moins 6 adversaires sont à proximité lorsque vous lancez Cri de guerre, votre bonus aux dégâts est augmenté de x10% supplémentaires.",
			"itIT": "Se ci sono almeno 6 nemici vicini quando lanci Grido di Guerra, il bonus ai danni aggiuntivi aumenta di un ulteriore x10%.",
			"jaJP": "〈ウォークライ〉を発した時、付近に少なくとも6体の敵がいると、自分のダメージボーナスがx10%増加する。",
			"koKR": "전장의 함성을 시전할 때 주위에 적이 6마리 이상 있으면 전장의 함성으로 얻는 추가 피해가 x10%만큼 증가합니다.",
			"plPL": "Jeśli podczas użycia Okrzyku Wojennego w pobliżu znajduje się co najmniej 6 wrogów, twoja premia do obrażeń wzrasta dodatkowo o x10%.",
			"ptBR": "Se pelo menos 6 inimigos estiverem próximos quando você lançar Grito de Guerra, seu bônus de dano será aumentado em mais 10%.",
			"ruRU": "Если вы применяете \"Воинственный клич\", когда рядом есть не менее 6 противников, наносимый урон увеличивается еще на x10%.",
			"zhCN": "如果施放战吼时附近有至少 6 名敌人, 你的伤害加成额外提高 x10%。",
			"zhTW": "如果施放戰吼時附近有至少 6 個敵人,你的傷害加成額外提高至 x10%。"
},
		id: 64,
		maxPoints: 1,
		x: -972.08,
		y: -339.504
	},
	"Mighty War Cry": {
		baseSkill: "War Cry",
		connections: [ "Enhanced War Cry" ],
		description: `War Cry grants you 15% Base Life as Fortify.`,
		nameLocalized: {
			"deDE": "Mächtiger Kriegsschrei",
			"esES": "Grito de guerra poderoso",
			"esMX": "Grito de Guerra Poderoso",
			"frFR": "Cri de guerre puissant",
			"itIT": "Grido di Guerra Poderoso",
			"jaJP": "ウォークライ(屈強)",
			"koKR": "강력한 전장의 함성",
			"plPL": "Mocarny Okrzyk Wojenny",
			"ptBR": "Grito de Guerra Poderoso",
			"ruRU": "Мощный воинственный клич",
			"zhCN": "强劲战吼",
			"zhTW": "巨力戰吼"
},
		descriptionLocalized: {
			"deDE": "Kriegsschrei verleiht Euch 15% Basisleben als Stählung.",
			"esES": "Grito de guerra te otorga un 15% de tu vida base como fortificación.",
			"esMX": "Grito de Guerra te otorga un 15% de tu vida de base como fortificación.",
			"frFR": "Cri de guerre vous confère un montant de fortification égal à 15% de vos points de vie de base.",
			"itIT": "Grido di Guerra ti fornisce il 15% della Vita base come Fortificazione.",
			"jaJP": "〈ウォークライ〉を発した時、基本ライフの15%にあたるの強化を獲得する。",
			"koKR": "전장의 함성을 사용하면 기본 생명력의 15%를 보강으로 얻습니다.",
			"plPL": "Okrzyk Wojenny zapewnia ci 15% podstawowego zdrowia jako umocnienie.",
			"ptBR": "Grito de Guerra concede 15% de vida básica como fortificação.",
			"ruRU": "\"Воинственный клич\" дает вам укрепление в объеме 15% базового запаса здоровья.",
			"zhCN": "战吼强固你 15% 基础生命。",
			"zhTW": "戰吼可賦予你相當於 15% 基礎生命值的強韌。"
},
		id: 65,
		maxPoints: 1,
		x: -768.515,
		y: -486.19
	},
	"Booming Voice": {
		connections: [ "Brawling", "Raid Leader", "Guttural Yell" ],
		description: `Your Shout Skill effect durations are increased by x{8/16/24/32/40/48/56/64/72/80}%.

Tags: Shout.`,
		nameLocalized: {
			"deDE": "Donnernde Stimme",
			"esES": "Voz atronadora",
			"esMX": "Voz Estruendosa",
			"frFR": "Voix tonitruante",
			"itIT": "Voce Rimbombante",
			"jaJP": "大音声",
			"koKR": "우렁찬 목소리",
			"plPL": "Grzmiący Głos",
			"ptBR": "Voz Estrondosa",
			"ruRU": "Громогласность",
			"zhCN": "震耳嗓音",
			"zhTW": "震耳迴盪"
},
		descriptionLocalized: {
			"deDE": "Die Dauer Eurer Rufeffekte erhöht sich um x{8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Ruf.",
			"esES": "La duración de los efectos de tus habilidades de grito aumenta un x{8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Grito.",
			"esMX": "La duración de los efectos de tus habilidades de Grito aumenta un x{8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Grito.",
			"frFR": "La durée des effets de vos compétences de cri est augmentée de x{8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Cri.",
			"itIT": "U\n\nTags: Urla.",
			"jaJP": "シャウトスキルの効果の持続時間がx{8/16/24/32/40/48/56/64/72/80}%増加する。\n\nTags: シャウト.",
			"koKR": "자신의 외침 기술의 효과 지속시간이 x{8/16/24/32/40/48/56/64/72/80}% 증가합니다.\n\nTags: 외침.",
			"plPL": "Czas działania efektów umiejętności Okrzyków jest wydłużony o x{8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Okrzyk.",
			"ptBR": "As durações de efeito de habilidades de Grito são aumentadas em {8/16/24/32/40/48/56/64/72/80}%.\n\nTags: Grito.",
			"ruRU": "Ваши \"Крики\" действуют на x{8/16/24/32/40/48/56/64/72/80}% дольше.\n\nTags: Крик.",
			"zhCN": "你的战吼技能效果的持续时间延长 x{8/16/24/32/40/48/56/64/72/80}%。\n\nTags: 战吼.",
			"zhTW": "你的怒吼技能效果持續時間延長 x{8/16/24/32/40/48/56/64/72/80}%。\n\nTags: 怒吼."
},
		id: 66,
		maxPoints: 3,
		x: -659.44,
		y: -63.313
	},
	"Raid Leader": {
		connections: [ "Booming Voice" ],
		description: `Your Shouts also Heal allies for {1/2/3/4/5/6/7/8/9/10}% of their Maximum Life per second.

Tags: Shout, Healing.`,
		nameLocalized: {
			"deDE": "Überfallkommando",
			"esES": "Líder de asalto",
			"esMX": "Líder del Asalto",
			"frFR": "Commandement d'assaut",
			"itIT": "Capo Indiscusso",
			"jaJP": "レイドリーダー",
			"koKR": "습격대장",
			"plPL": "Dowodzenie Rajdem",
			"ptBR": "Líder de Invasão",
			"ruRU": "Лидер рейда",
			"zhCN": "团战领袖",
			"zhTW": "團隊領袖"
},
		descriptionLocalized: {
			"deDE": "Eure Rufe heilen außerdem Eure Verbündeten um {1/2/3/4/5/6/7/8/9/10}% ihres maximalen Lebens pro Sekunde.\n\nTags: Ruf, Heilung.",
			"esES": "Tus gritos también curan a los aliados un {1/2/3/4/5/6/7/8/9/10}% de su vida máxima por segundo.\n\nTags: Grito, Curación.",
			"esMX": "Tus habilidades de Grito también les restablecen a los aliados un {1/2/3/4/5/6/7/8/9/10}% de su vida máxima por segundo.\n\nTags: Grito, Sanación.",
			"frFR": "Vos cris soignent également les personnages alliés à hauteur de {1/2/3/4/5/6/7/8/9/10}% de leur maximum de points de vie par seconde.\n\nTags: Cri, Soins.",
			"itIT": "Le tue abilità di Urla curano anche gli alleati del {1/2/3/4/5/6/7/8/9/10}% della loro Vita massima ogni secondo.\n\nTags: Urla, Guarigione.",
			"jaJP": "〈シャウト〉の追加効果として、〈シャウト〉を受けた味方のライフが毎秒それぞれのライフ最大値の{1/2/3/4/5/6/7/8/9/10}%分回復する。\n\nTags: シャウト, 回復.",
			"koKR": "외침이 아군의 생명력을 초당 최대 생명력의 {1/2/3/4/5/6/7/8/9/10}%만큼 치유합니다.\n\nTags: 외침, 치유.",
			"plPL": "Twoje Okrzyki przywracają również sojusznikom {1/2/3/4/5/6/7/8/9/10}% maksymalnego zdrowia na sek.\n\nTags: Okrzyk, Leczenie.",
			"ptBR": "Seus Gritos também curam aliados em {1/2/3/4/5/6/7/8/9/10}% de suas vidas máximas por segundo.\n\nTags: Grito, Cura.",
			"ruRU": "Ваши боевые крики также восполняют союзникам {1/2/3/4/5/6/7/8/9/10}% максимального запаса здоровья раз в секунду.\n\nTags: Крик, Исцеление.",
			"zhCN": "你的战吼也会使盟友每秒恢复 {1/2/3/4/5/6/7/8/9/10}%生命上限。\n\nTags: 战吼, 治疗.",
			"zhTW": "你的怒吼也會使盟友每秒恢復其生命值上限的 {1/2/3/4/5/6/7/8/9/10}%。\n\nTags: 怒吼, 治療."
},
		id: 67,
		maxPoints: 3,
		x: -933.825,
		y: -146.157
	},
	"Guttural Yell": {
		connections: [ "Booming Voice" ],
		description: `Your Shout Skills cause enemies to deal {4/8/12/16/20/24/28/32/36/40}% less damage for 5 seconds.

Tags: Damage Reduction, Shout.`,
		nameLocalized: {
			"deDE": "Kehliger Schrei",
			"esES": "Grito gutural",
			"esMX": "Grito Gutural",
			"frFR": "Hurlement guttural",
			"itIT": "Voce Gutturale",
			"jaJP": "内なる叫び",
			"koKR": "거친 함성",
			"plPL": "Gardłowy Ryk",
			"ptBR": "Grito Gutural",
			"ruRU": "Утробный рев",
			"zhCN": "低沉咆哮",
			"zhTW": "嘶聲狂吼"
},
		descriptionLocalized: {
			"deDE": "Eure Ruffertigkeiten lassen Gegner 5 Sek. lang {4/8/12/16/20/24/28/32/36/40}% weniger Schaden verursachen.\n\nTags: Schadensreduktion, Ruf.",
			"esES": "Tus habilidades de grito hacen que los enemigos inflijan un {4/8/12/16/20/24/28/32/36/40}% menos de daño durante 5 s.\n\nTags: Reducción de daño, Grito.",
			"esMX": "Tus habilidades de Grito provocan que los enemigos inflijan un {4/8/12/16/20/24/28/32/36/40}% menos de daño durante 5 segundos.\n\nTags: Reducción de daño, Grito.",
			"frFR": "Vos compétences de cri réduisent les dégâts que les adversaires infligent de {4/8/12/16/20/24/28/32/36/40}% pendant 5 s.\n\nTags: Réduction des dégâts, Cri.",
			"itIT": "Le tue abilità di Urla riducono i danni inflitti dai nemici del {4/8/12/16/20/24/28/32/36/40}% per 5 s.\n\nTags: Riduzione danni, Urla.",
			"jaJP": "シャウトのスキルによって敵から受けるダメージが5秒間{4/8/12/16/20/24/28/32/36/40}%減少する。\n\nTags: ダメージ減少, シャウト.",
			"koKR": "외침 기술 사용 시 5초 동안 적이 주는 피해가 {4/8/12/16/20/24/28/32/36/40}% 감소합니다.\n\nTags: 피해 감소, 외침.",
			"plPL": "Twoje umiejętności Okrzyków sprawiają, że wrogowie zadają obrażenia zmniejszone o {4/8/12/16/20/24/28/32/36/40}% przez 5 sek.\n\nTags: Redukcja Obrażeń, Okrzyk.",
			"ptBR": "Suas habilidades de Grito fazem os inimigos causarem {4/8/12/16/20/24/28/32/36/40}% de dano reduzido por 5 segundos.\n\nTags: Redução de Dano, Grito.",
			"ruRU": "Ваши \"Крики\" уменьшают наносимый противниками урон на {4/8/12/16/20/24/28/32/36/40}% на 5 сек.\n\nTags: Уменьшение урона, Крик.",
			"zhCN": "你的战吼技能使敌人造成的伤害降低 {4/8/12/16/20/24/28/32/36/40}%, 持续 5 秒。\n\nTags: 伤害减免, 战吼.",
			"zhTW": "你的怒吼技能會使敵人造成的傷害降低 {4/8/12/16/20/24/28/32/36/40}%,持續 5 秒。\n\nTags: 傷害減免, 怒吼."
},
		id: 68,
		maxPoints: 3,
		x: -942.85,
		y: 22.136
	},
	"Leap": {
		connections: [ "Brawling", "Enhanced Leap" ],
		description: `Attack Speed Multiplier: 1.3
Cooldown: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} seconds
Lucky Hit Chance: 66% (per hit)
Leap forward and then slam down, dealing {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% damage and Knocking Back surrounding enemies on impact.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Sprung",
			"esES": "Salto ofensivo",
			"esMX": "Salto",
			"frFR": "Bond",
			"itIT": "Balzo",
			"jaJP": "リープ",
			"koKR": "도약",
			"plPL": "Skok",
			"ptBR": "Salto",
			"ruRU": "Прыжок",
			"zhCN": "腾空斩",
			"zhTW": "躍擊"
},
		descriptionLocalized: {
			"deDE": "Attack Speed Multiplier: 1.3\nAbklingzeit: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} Sek.\nGlückstrefferchance: 66% (per hit)\nSpringt nach vorn und schmettert nach unten, um Gegnern in der Nähe beim Aufprall {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% Schaden zuzufügen und sie zurückzustoßen.\n\nTags: Raufbold, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Attack Speed Multiplier: 1.3\nTiempo de reutilización: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nProbabilidad de golpe de suerte: 66% (per hit)\nSaltas hacia delante y golpeas el suelo, lo que inflige {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% de daño y repele a los enemigos cercanos al impactar.\n\nTags: Refriega, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Attack Speed Multiplier: 1.3\nRecuperación: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} segundos\nProbabilidad de golpe afortunado: 66% (per hit)\nSaltas hacia adelante y luego golpeas el suelo, infliges {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% de daño y repeles a los enemigos circundantes al impactar.\n\nTags: Combate, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Attack Speed Multiplier: 1.3\nTemps de recharge: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nChances d'obtenir un coup de chance: 66% (per hit)\nVous bondissez vers l'avant et frappez le sol, ce qui inflige {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% points de dégâts et repousse les adversaires à proximité à l'impact.\n\nTags: Combat, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Attack Speed Multiplier: 1.3\nTempo di recupero: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nProbabilità di colpo fortunato: 66% (per hit)\nBalzi in avanti e poi colpisci verso il basso, infliggendo {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% danni e respingendo indietro i nemici circostanti all'impatto.\n\nTags: Rissa, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "Attack Speed Multiplier: 1.3\nクールダウン: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2}秒\n幸運の一撃発生率: 66% (per hit)\n前方に跳躍して地面を強打し、付近の敵に{32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}%のダメージを与えつつ衝撃でノックバックする。\n\nTags: 決闘, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "Attack Speed Multiplier: 1.3\n재사용 대기시간: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2}초\n행운의 적중 확률: 66% (per hit)\n앞으로 도약하여 아래를 내리쳐, 충돌 시 {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}%의 피해를 주고 주위 적들을 밀쳐냅니다.\n\nTags: 난투, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Attack Speed Multiplier: 1.3\nCzas odnowienia: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} sek.\nSzansa na szczęśliwy traf: 66% (per hit)\nSkaczesz do przodu i uderzasz z wielką siłą, zadając {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% pkt. obrażeń i odrzucając pobliskich wrogów przy trafieniu.\n\nTags: Bijatyka, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Attack Speed Multiplier: 1.3\nRecarga: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} segundos\nChance de Golpe de Sorte: 66% (per hit)\nSalta para frente e depois golpeia o chão, causando {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% de dano e repelindo inimigos ao redor no impacto.\n\nTags: Briga, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "Attack Speed Multiplier: 1.3\nВремя восстановления: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} сек.\nВероятность удачного удара: 66% (per hit)\nВы прыгаете вперед и проводите удар, нанося {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% ед. урона и отбрасывая противников в точке приземления.\n\nTags: Бой без правил, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "Attack Speed Multiplier: 1.3\n冷却时间: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} 秒\n幸运一击几率: 66% (per hit)\n向前跳跃然后落地猛击, 造成 {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% 点伤害并在命中时击退周围的敌人。\n\nTags: 搏斗, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "Attack Speed Multiplier: 1.3\n冷卻時間:{17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} 秒\n幸運觸發機率: 66% (per hit)\n猛力一躍並向下重擊,落地時造成 {32.5/35.8/39/42.3/45.5/48.8/52/55.2/58.5/61.7}% 傷害並擊退附近的敵人。\n\nTags: 爭鬥, 控場, 傷害, 物理, 冷卻時間."
},
		id: 69,
		maxPoints: 5,
		x: -402.935,
		y: 315.986
	},
	"Enhanced Leap": {
		baseSkill: "Leap",
		connections: [ "Leap", "Mighty Leap", "Power Leap" ],
		description: `If Leap doesn't damage any enemies, its Cooldown is reduced by 4 seconds.`,
		nameLocalized: {
			"deDE": "Verbesserter Sprung",
			"esES": "Salto ofensivo mejorado",
			"esMX": "Salto Potenciado",
			"frFR": "Bond renforcé",
			"itIT": "Balzo Rinforzato",
			"jaJP": "リープ(強化版)",
			"koKR": "강화된 도약 공격",
			"plPL": "Wzmocniony Skok",
			"ptBR": "Salto Aperfeiçoado",
			"ruRU": "Усиленный прыжок",
			"zhCN": "强化腾空斩",
			"zhTW": "強化躍擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Sprung keinen Gegnern Schaden zufügt, verringert sich die Abklingzeit um 4 Sek.",
			"esES": "Si Salto ofensivo no inflige daño a ningún enemigo, su tiempo de reutilización se reduce 4 s.",
			"esMX": "Si Salto no inflige daño a los enemigos, su recuperación se reduce 4 segundos.",
			"frFR": "Si Bond ne blesse aucune cible, son temps de recharge est réduit de 4 s.",
			"itIT": "Se Balzo non infligge danni ai nemici, il suo tempo di recupero si riduce di 4 s.",
			"jaJP": "〈リープ〉がどの敵にもダメージを与えなかった場合、クールダウンが4秒短くなる。",
			"koKR": "도약 공격이 적에게 피해를 주지 않으면 재사용 대기시간이 4초 감소합니다.",
			"plPL": "Jeśli Skok nie trafi żadnego wroga, jego czas odnowienia jest skrócony o 4 sek.",
			"ptBR": "Se Salto não atinge nenhum inimigo, sua recarga é reduzida em 4 segundos.",
			"ruRU": "Если \"Прыжок\" не наносит урон ни одному противнику, его время восстановления сокращается на 4 сек.",
			"zhCN": "如果腾空斩没有对任何敌人造成伤害, 则其冷却时间缩短 4 秒。",
			"zhTW": "如果躍擊未對敵人造成傷害,冷卻時間會縮短 4 秒。"
},
		id: 70,
		maxPoints: 1,
		x: -623.595,
		y: 476.895
	},
	"Mighty Leap": {
		baseSkill: "Leap",
		connections: [ "Enhanced Leap" ],
		description: `Enemies damaged by Leap are Slowed by 50% for 5 seconds.`,
		nameLocalized: {
			"deDE": "Mächtiger Sprung",
			"esES": "Salto ofensivo poderoso",
			"esMX": "Salto Poderoso",
			"frFR": "Bond puissant",
			"itIT": "Balzo Poderoso",
			"jaJP": "リープ(屈強)",
			"koKR": "강력한 도약",
			"plPL": "Mocarny Skok",
			"ptBR": "Salto Poderoso",
			"ruRU": "Могучий прыжок",
			"zhCN": "强劲腾空斩",
			"zhTW": "巨力躍擊"
},
		descriptionLocalized: {
			"deDE": "Gegner, die durch Sprung Schaden erleiden, werden 5 Sek. lang um 50% verlangsamt.",
			"esES": "Los enemigos dañados por Salto ofensivo quedan ralentizados un 50% durante 5 s.",
			"esMX": "Los enemigos dañados por Salto se ralentizan un 50% durante 5 segundos.",
			"frFR": "Les cibles blessées par Bond sont ralenties de 50% pendant 5 s.",
			"itIT": "I nemici danneggiati da Balzo sono rallentati del 50% per 5 s.",
			"jaJP": "〈リープ〉によりダメージを受けた敵の移動速度が5秒間50%低下する。",
			"koKR": "도약 공격으로 피해를 받은 적은 5초 동안 50% 감속됩니다.",
			"plPL": "Wrogowie zranieni Skokiem zostają spowolnieni o 50% na 5 sek.",
			"ptBR": "Inimigos atingidos por Salto são desacelerados em 50% por 5 segundos.",
			"ruRU": "Нанеся урон противникам, \"Прыжок\" замедляет их на 50% на 5 сек.",
			"zhCN": "腾空斩对敌人造成伤害会使其减速 50%, 持续 5 秒。",
			"zhTW": "受到躍擊傷害的敵人緩速 50%,持續 5 秒。"
},
		id: 71,
		maxPoints: 1,
		x: -623.425,
		y: 626.645
	},
	"Power Leap": {
		baseSkill: "Leap",
		connections: [ "Enhanced Leap" ],
		description: `If Leap damages at least one enemy, gain 40 Fury.`,
		nameLocalized: {
			"deDE": "Starker Sprung",
			"esES": "Salto ofensivo potente",
			"esMX": "Salto Fulminante",
			"frFR": "Bond énergique",
			"itIT": "Balzo Potente",
			"jaJP": "リープ(怪力)",
			"koKR": "힘의 도약",
			"plPL": "Potężny Skok",
			"ptBR": "Salto Potente",
			"ruRU": "Внушительный прыжок",
			"zhCN": "强力腾空斩",
			"zhTW": "強力躍擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Sprung mindestens einem Gegner Schaden zufügt, erhaltet Ihr 40 Wut.",
			"esES": "Si Salto ofensivo inflige daño a al menos un enemigo, obtienes 40 de furia.",
			"esMX": "Si Salto inflige daño a por lo menos un enemigo, obtienes 40 de Furia.",
			"frFR": "Si Bond inflige des dégâts à au moins une cible, vous gagnez 40 points de fureur.",
			"itIT": "Se Balzo infligge danni ad almeno un nemico, ottieni 40 furia.",
			"jaJP": "〈リープ〉によって少なくとも敵1体にダメージを与えると、40の怒気を獲得する。",
			"koKR": "도약 공격으로 최소 1마리 이상의 적에게 피해를 주면 분노를 40 얻습니다.",
			"plPL": "Jeśli Skok zada obrażenia co najmniej jednemu wrogowi, zyskujesz 40 pkt. furii.",
			"ptBR": "Se Salto causar dano a pelo menos um inimigo, você receberá 40 de fúria.",
			"ruRU": "Если \"Прыжок\" наносит урон хотя бы одному противнику, вы накапливаете 40 ед. ярости.",
			"zhCN": "如果腾空斩对至少一名敌人造成伤害, 则获得 40 点怒气。",
			"zhTW": "躍擊對至少一個敵人造成傷害時,你會獲得 40 點怒氣。"
},
		id: 72,
		maxPoints: 1,
		x: -893.655,
		y: 505.577
	},
	"Kick": {
		connections: [ "Enhanced Kick", "Brawling" ],
		description: `Charges: 2
Charge Cooldown: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} seconds
Lucky Hit Chance: 40% (per hit)
Throw a powerful kick that deals 18% damage and Knocks Back enemies in front of you. Enemies who are Knocked Back into terrain take an additional 54% damage and are Stunned for 3 seconds.

Tags: Brawling, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Tritt",
			"esES": "Patada",
			"esMX": "Patada",
			"frFR": "Coup de pied",
			"itIT": "Calcio",
			"jaJP": "キック",
			"koKR": "발차기",
			"plPL": "Kopnięcie",
			"ptBR": "Chute",
			"ruRU": "Удар ногой",
			"zhCN": "踢击",
			"zhTW": "踢擊"
},
		descriptionLocalized: {
			"deDE": "Aufladungen: 2\nAufladungsabklingzeit: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} Sek.\nGlückstrefferchance: 40% (per hit)\nFührt einen kräftigen Tritt aus, der 18% Schaden verursacht und Gegner vor Euch zurückstößt. Gegner, die in Terrain gestoßen werden, erleiden 54% Schaden und sind 3 Sek. lang betäubt.\n\nTags: Raufbold, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Cargas: 2\nTiempo de reutilización de las cargas: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nProbabilidad de golpe de suerte: 40% (per hit)\nDas una potente patada que inflige 18% de daño y repele a los enemigos frente a ti. Los enemigos repelidos contra el terreno sufren 54% de daño más y quedan aturdidos durante 3 s.\n\nTags: Refriega, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Cargas: 2\nRecuperación de carga: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} segundos\nProbabilidad de golpe afortunado: 40% (per hit)\nLanzas una patada poderosa que inflige 18% de daño y repele a los enemigos frente a ti. Los enemigos que golpean contra el terreno reciben 54% de daño adicional y quedan aturdidos durante 3 segundos.\n\nTags: Combate, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Charges: 2\nTemps de recharge des charges: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nChances d'obtenir un coup de chance: 40% (per hit)\nVous donnez un puissant coup de pied qui inflige 18% points de dégâts et repousse les adversaires devant vous. Les cibles repoussées qui percutent des obstacles subissent 54% points de dégâts supplémentaires et sont étourdies pendant 3 s.\n\nTags: Combat, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Cariche: 2\nTempo di recupero cariche: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} s\nProbabilità di colpo fortunato: 40% (per hit)\nSferri un potente calcio che infligge 18% danni e respinge i nemici frontali. I nemici che vengono respinti a terra subiscono 54% danni aggiuntivi e restano storditi per 3 s.\n\nTags: Rissa, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "チャージ: 2\nチャージのクールダウン: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2}秒\n幸運の一撃発生率: 40% (per hit)\n強力な蹴りを繰り出し、前方の敵に18%のダメージを与えてノックバックする。ノックバックで地形に叩きつけられた敵は追加で54%のダメージを受け、3秒間スタンする。\n\nTags: 決闘, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "충전: 2\n충전 재사용 대기시간: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2}초\n행운의 적중 확률: 40% (per hit)\n강력한 발차기로 전방의 적에게 18%의 피해를 주고 밀쳐냅니다. 밀려나서 지형지물에 부딪힌 적은 54%의 추가 피해를 받으며 3초 동안 기절합니다.\n\nTags: 난투, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Ładunki: 2\nCzas odnowienia ładunku: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} sek.\nSzansa na szczęśliwy traf: 40% (per hit)\nWyprowadzasz potężne kopnięcie, które zadaje 18% pkt. obrażeń i odrzuca wrogów przez tobą. Odrzuceni wrogowie, którzy zderzą się z przeszkodami terenu, otrzymują dodatkowo 54% pkt. obrażeń i są ogłuszeni na 3 sek.\n\nTags: Bijatyka, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Cargas: 2\nRecarga de cargas: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} segundos\nChance de Golpe de Sorte: 40% (per hit)\nDesfere um chute poderoso que causa 18% de dano e repele inimigos à sua frente. Inimigos repelidos ao chão recebem 54% de dano adicional e ficam atordoados por 3 segundos.\n\nTags: Briga, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "Количество зарядов: 2.\nВремя восстановления заряда: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} сек.\nВероятность удачного удара: 40% (per hit)\nВы с силой бьете ногой, нанося 18% ед. урона и отбрасывая противников перед собой. При столкновении с препятствиями отброшенные противники получают еще 54% ед. урона и оглушаются на 3 сек.\n\nTags: Бой без правил, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "使用次数: 2\n充能冷却时间: {17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} 秒\n幸运一击几率: 40% (per hit)\n发起一次强力踢击, 对你面前的敌人造成 18% 点伤害并将其击退。被击退至地形上的敌人额外受到 54% 点伤害并陷入昏迷, 持续 3 秒。\n\nTags: 搏斗, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "使用次數:2\n使用次數冷卻時間:{17/16.15/15.3/14.62/13.94/13.43/12.92/12.58/12.24/11.9/11.56/11.22/11.05/10.88/10.71/10.54/10.455/10.37/10.285/10.2} 秒\n幸運觸發機率: 40% (per hit)\n對你前方的敵人施展踢擊,造成 18% 點傷害並將敵人擊退。遭擊退時撞到地形的敵人會額外受到 54% 點傷害,並被擊昏 3 秒。\n\nTags: 爭鬥, 控場, 傷害, 物理, 冷卻時間."
},
		id: 73,
		maxPoints: 5,
		x: -3.2,
		y: -277.614
	},
	"Enhanced Kick": {
		baseSkill: "Kick",
		connections: [ "Kick", "Mighty Kick", "Power Kick" ],
		description: `Damaging enemies with Kick makes them Vulnerable for 4 seconds.`,
		nameLocalized: {
			"deDE": "Verbesserter Tritt",
			"esES": "Patada mejorada",
			"esMX": "Patada Potenciada",
			"frFR": "Coup de pied renforcé",
			"itIT": "Calcio Rinforzato",
			"jaJP": "キック(強化版)",
			"koKR": "강화된 발차기",
			"plPL": "Wzmocnione Kopnięcie",
			"ptBR": "Chute Aperfeiçoado",
			"ruRU": "Усиленный удар ногой",
			"zhCN": "强化踢击",
			"zhTW": "強化踢擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Gegnern mit Tritt Schaden zufügt, sind sie 4 Sek. lang verwundbar.",
			"esES": "Infligir daño a los enemigos con Patada los vuelve vulnerables durante 4 s.",
			"esMX": "Al infligir daño a los enemigos con Patada, los vuelves vulnerables durante 4 segundos.",
			"frFR": "Les cibles blessées par Coup de pied deviennent vulnérables pendant 4 s.",
			"itIT": "Infliggere danni ai nemici con Calcio li rende vulnerabili per 4 s.",
			"jaJP": "〈キック〉によってダメージを与えた敵を4秒間、脆弱状態にする。",
			"koKR": "발차기로 적에게 피해를 주면 적이 4초 동안 취약해집니다.",
			"plPL": "Ranienie wrogów Kopnięciem sprawia, że zostają odsłonięci na 4 sek.",
			"ptBR": "Causar dano a inimigos com Chute deixa-os vulneráveis por 4 segundos.",
			"ruRU": "Противники, пораженные \"Ударом ногой\", становятся уязвимыми на 4 сек.",
			"zhCN": "踢击对敌人造成伤害的同时也会使其陷入易伤状态, 持续 4 秒。",
			"zhTW": "受到踢擊傷害的敵人會易傷,持續 4 秒。"
},
		id: 74,
		maxPoints: 1,
		x: -3.035,
		y: -483.68
	},
	"Mighty Kick": {
		baseSkill: "Kick",
		connections: [ "Enhanced Kick" ],
		description: `Kicked enemies deal 54% damage to enemies they collide with while being Knocked Back. Enemies damaged this way are Knocked Down for 2 seconds.`,
		nameLocalized: {
			"deDE": "Mächtiger Tritt",
			"esES": "Patada poderosa",
			"esMX": "Patada Poderosa",
			"frFR": "Coup de pied puissant",
			"itIT": "Calcio Poderoso",
			"jaJP": "キック(屈強)",
			"koKR": "강력한 발차기",
			"plPL": "Mocarne Kopnięcie",
			"ptBR": "Chute Poderoso",
			"ruRU": "Могучий удар ногой",
			"zhCN": "强劲踢击",
			"zhTW": "巨力踢擊"
},
		descriptionLocalized: {
			"deDE": "Gegner, die von Tritt getroffen und zurückgestoßen wurden, fügen Gegnern, mit denen sie zusammenstoßen, 54% Schaden zu. Gegner, die auf diese Art Schaden erleiden, werden 2 Sek. lang niedergeschlagen.",
			"esES": "Los enemigos golpeados con Patada infligen 54% de daño a los enemigos contra los que choquen durante la repulsión. Los enemigos que sufran daño de este modo quedan derribados durante 2 s.",
			"esMX": "Los enemigos golpeados por Patada infligen 54% de daño a los enemigos con los que chocan al ser repelidos. Los enemigos que reciben daño de este modo quedan derribados durante 2 segundos.",
			"frFR": "Les cibles repoussées par Coup de pied infligent 54% points de dégâts aux adversaires qu'elles percutent. Les adversaires ainsi blessés sont renversés pendant 2 s.",
			"itIT": "I nemici respinti da Calcio infliggono 54% danni ai nemici contro cui si scontrano. I nemici colpiti in questo modo cadono a terra per 2 s.",
			"jaJP": "〈キック〉を受けた敵が、ノックバックを受けてぶつかった対象に54%のダメージを与える。これによってダメージを受けた敵は2秒間ノックダウンする。",
			"koKR": "발차기에 적중당한 적이 밀려날 때 충돌한 적에게 54%의 피해를 줍니다. 이 방식으로 피해를 받은 적은 2초 동안 넘어집니다.",
			"plPL": "Kopnięci wrogowie zadają 54% pkt. obrażeń przeciwnikom, na których wpadną podczas odrzucania. Wrogowie, którzy otrzymają w ten sposób obrażenia, zostają powaleni na 2 sek.",
			"ptBR": "Inimigos que receberam Chute causam 54% de dano aos inimigos com que colidem enquanto são repelidos. Os inimigos atingidos dessa forma são nocauteados por 2 segundos.",
			"ruRU": "Противники, отброшенные \"Ударом ногой\", наносят 54% ед. урона целям, с которыми они сталкиваются по пути. Тех, в свою очередь, столкновение сбивает с ног на 2 сек.",
			"zhCN": "被踢击击退的敌人碰撞到其他敌人时对其造成 54% 点伤害。受到该伤害的敌人会被击倒 2 秒。",
			"zhTW": "遭踢擊擊退的敵人撞到其他敵人時會造成 54% 點傷害。受到此傷害的敵人會被擊倒 2 秒。"
},
		id: 75,
		maxPoints: 1,
		x: -174.78,
		y: -602.08
	},
	"Power Kick": {
		baseSkill: "Kick",
		connections: [ "Enhanced Kick" ],
		description: `If Kick damages an enemy, it consumes all of your Fury and deals an additional 20% damage per 10 Fury spent. Kick no longer Knocks Back enemies.`,
		nameLocalized: {
			"deDE": "Starker Tritt",
			"esES": "Patada potente",
			"esMX": "Patada Fulminante",
			"frFR": "Coup de pied énergique",
			"itIT": "Calcio Potente",
			"jaJP": "キック(怪力)",
			"koKR": "힘의 발차기",
			"plPL": "Potężne Kopnięcie",
			"ptBR": "Chute Potente",
			"ruRU": "Внушительный удар ногой",
			"zhCN": "强力踢击",
			"zhTW": "強力踢擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Tritt einem Gegner Schaden zufügt, verbraucht die Fertigkeit Eure gesamte Wut und verursacht zusätzlich 20% Schaden pro 10 verbrauchter Wut. Tritt stößt Gegner nicht länger zurück.",
			"esES": "Si Patada inflige daño a un enemigo, consume toda tu furia e inflige 20% de daño más por cada 10 punto de furia que gastes. Patada ya no repele a los enemigos.",
			"esMX": "Si Patada inflige daño a un enemigo, consume toda tu Furia e inflige 20% de daño adicional por cada 10 de Furia consumida. Patada ya no repele a los enemigos.",
			"frFR": "Si Coup de pied blesse une cible adverse, il consomme tous vos points de fureur et inflige 20% points de dégâts supplémentaires par tranche de 10 points de fureur consommés. Coup de pied ne repousse plus les adversaires.",
			"itIT": "Se Calcio infligge danni a un nemico, consuma tutta la furia e infligge 20% danni aggiuntivi per ogni 10 furia consumata. Calcio non respinge più i nemici.",
			"jaJP": "〈キック〉が敵1体にダメージを与えると怒気をすべて消費し、10の怒気消費につき20%の追加ダメージを与える。〈キック〉が敵をノックバックしなくなる。",
			"koKR": "발차기가 적에게 피해를 주면 분노를 모두 소모하여 소모한 분노 10당 추가로 20%의 피해를 줍니다. 발차기가 적을 밀쳐내지 않습니다.",
			"plPL": "Jeśli Kopnięcie zada obrażenia wrogowi, pochłania całą twoją furię i zadaje dodatkowe 20% pkt. obrażeń za każde wydane 10 pkt. furii. Kopnięcie nie odrzuca już wrogów.",
			"ptBR": "Se Chute causar dano a um inimigo, consumirá toda a sua fúria e causará 20% de dano adicional por 10 de fúria gasta. Chute deixa de repelir inimigos.",
			"ruRU": "Когда \"Удар ногой\" наносит противнику урон, он поглощает весь запас ярости и наносит еще по 20% ед. урона за 10 ед. потраченной ярости. \"Удар ногой\" больше не отбрасывает противников.",
			"zhCN": "踢击对一名敌人造成伤害会消耗你的所有怒气, 并且每消耗 10 点怒气造成额外 20% 点伤害。踢击不再击退敌人。",
			"zhTW": "踢擊對敵人造成傷害時會消耗所有怒氣,每消耗 10 點怒氣便額外造成 20% 點傷害。但踢擊不再擊退敵人。"
},
		id: 76,
		maxPoints: 1,
		x: 172.96,
		y: -598.935
	},
	"Aggressive Resistance": {
		connections: [ "Prolific Fury", "Battle Fervor", "Brawling" ],
		description: `Gain {3/6/9/12/15/18/21/24/27/30}% Damage Reduction while Berserking.

Tags: Berserking, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Aggressiver Widerstand",
			"esES": "Resistencia hostil",
			"esMX": "Resistencia Agresiva",
			"frFR": "Résistance agressive",
			"itIT": "Resistenza Aggressiva",
			"jaJP": "攻撃的耐性",
			"koKR": "공격적인 저항",
			"plPL": "Agresywny Opór",
			"ptBR": "Resistência Agressiva",
			"ruRU": "Яростное сопротивление",
			"zhCN": "以攻为守",
			"zhTW": "激烈抵抗"
},
		descriptionLocalized: {
			"deDE": "Erhaltet im Berserkermodus {3/6/9/12/15/18/21/24/27/30}% Schadensreduktion.\n\nTags: Berserkermodus, Schadensreduktion.",
			"esES": "Obtienes un {3/6/9/12/15/18/21/24/27/30}% de reducción de daño mientras tienes vesania.\n\nTags: Vesania, Reducción de daño.",
			"esMX": "Obtienes un {3/6/9/12/15/18/21/24/27/30}% de reducción de daño mientras tienes enajenación.\n\nTags: Enajenación, Reducción de daño.",
			"frFR": "Vous obtenez {3/6/9/12/15/18/21/24/27/30}% de réduction des dégâts tant que vous êtes sous l'effet de Rage du berserkerer.\n\nTags: Rage du berserker, Réduction des dégâts.",
			"itIT": "Ottieni una riduzione danni del {3/6/9/12/15/18/21/24/27/30}% mentre Berserk è attivo.\n\nTags: Berserk, Riduzione danni.",
			"jaJP": "〈バーサーク〉中、受けるダメージが{3/6/9/12/15/18/21/24/27/30}%軽減される。\n\nTags: バーサーク, ダメージ減少.",
			"koKR": "광폭화 상태에서 {3/6/9/12/15/18/21/24/27/30}%의 피해 감소를 얻습니다.\n\nTags: 광폭화, 피해 감소.",
			"plPL": "Zyskujesz premię {3/6/9/12/15/18/21/24/27/30}% do redukcji obrażeń podczas berserkowania.\n\nTags: Berserkowanie, Redukcja Obrażeń.",
			"ptBR": "Recebe {3/6/9/12/15/18/21/24/27/30}% de redução de dano durante Berserk.\n\nTags: Berserk, Redução de Dano.",
			"ruRU": "В состоянии берсерка вы получаете на {3/6/9/12/15/18/21/24/27/30}% меньше урона.\n\nTags: Берсерк, Уменьшение урона.",
			"zhCN": "狂暴状态下获得 {3/6/9/12/15/18/21/24/27/30}% 伤害减免。\n\nTags: 狂暴, 伤害减免.",
			"zhTW": "狂暴時,你獲得 {3/6/9/12/15/18/21/24/27/30}% 傷害減免。\n\nTags: 狂暴, 傷害減免."
},
		id: 77,
		maxPoints: 3,
		x: -0.385,
		y: 314.173
	},
	"Prolific Fury": {
		connections: [ "Aggressive Resistance" ],
		description: `While Berserking, Fury Generation is increased by x{6/12/18/24/30/36/42/48/54/60}%.

Tags: Berserking, Fury.`,
		nameLocalized: {
			"deDE": "Fruchtender Furor",
			"esES": "Furia prolífica",
			"esMX": "Furia Prolífica",
			"frFR": "Fureur prolifique",
			"itIT": "Furia Prolifica",
			"jaJP": "あふれる怒気",
			"koKR": "왕성한 분노",
			"plPL": "Bujna Furia",
			"ptBR": "Fúria Prolífica",
			"ruRU": "Живительная ярость",
			"zhCN": "充沛怒气",
			"zhTW": "怒氣湧現"
},
		descriptionLocalized: {
			"deDE": "Im Berserkermodus erhöht sich Eure Wuterzeugung um x{6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Berserkermodus, Wut.",
			"esES": "Mientras tienes vesania, la generación de furia aumenta un x{6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Vesania, Furia.",
			"esMX": "Mientras tienes enajenación, la generación de Furia aumenta un x{6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Enajenación, Furia.",
			"frFR": "Sous l'effet de Rage du berserker, votre génération de fureur est augmentée de x{6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Rage du berserker, Fureur.",
			"itIT": "Mentre Berserk è attivo, la generazione di furia aumenta del x{6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Berserk, Furia.",
			"jaJP": "〈バーサーク〉中、怒気の生成量がx{6/12/18/24/30/36/42/48/54/60}%増加する。\n\nTags: バーサーク, 怒気.",
			"koKR": "광폭화 상태에서 분노 생성량이 x{6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: 광폭화, 분노.",
			"plPL": "Podczas berserkowania, generowanie furii jest zwiększone o x{6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Berserkowanie, Furia.",
			"ptBR": "Sob efeito de Berserk, a geração de fúria é aumentada em {6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Berserk, Fúria.",
			"ruRU": "В состоянии берсерка вы накапливаете на x{6/12/18/24/30/36/42/48/54/60}% больше ярости.\n\nTags: Берсерк, Ярость.",
			"zhCN": "狂暴状态下, 怒气生成速度提高 x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 狂暴, 怒气.",
			"zhTW": "在狂暴持續期間,怒氣產生效率提高 x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 狂暴, 怒氣."
},
		id: 78,
		maxPoints: 3,
		x: 171.72,
		y: 479.91
	},
	"Battle Fervor": {
		connections: [ "Aggressive Resistance" ],
		description: `When a Brawling Skill damages at least one enemy, gain Berserking for {1/2/3/4/5/6/7/8/9/10} seconds.

Tags: Berserking, Brawling.`,
		nameLocalized: {
			"deDE": "Kampfeslust",
			"esES": "Fervor de batalla",
			"esMX": "Fervor de Batalla",
			"frFR": "Ferveur du combat",
			"itIT": "Fervore di Battaglia",
			"jaJP": "戦の熱狂",
			"koKR": "전투의 열성",
			"plPL": "Bitewny Zapał",
			"ptBR": "Fervor de Batalha",
			"ruRU": "Боевое рвение",
			"zhCN": "战斗狂热",
			"zhTW": "戰鬥狂熱"
},
		descriptionLocalized: {
			"deDE": "Wenn eine Raufboldfertigkeit mindestens einem Gegner Schaden zufügt, verfallt Ihr {1/2/3/4/5/6/7/8/9/10} Sek. lang in den Berserkermodus.\n\nTags: Berserkermodus, Raufbold.",
			"esES": "Si una habilidad de refriega inflige daño a al menos un enemigo, obtienes vesania durante {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Vesania, Refriega.",
			"esMX": "Cuando una habilidad de Combate inflige daño a por lo menos un enemigo, obtienes enajenación durante {1/2/3/4/5/6/7/8/9/10} segundos.\n\nTags: Enajenación, Combate.",
			"frFR": "Lorsqu'une compétence de combat inflige des dégâts à au moins une cible ennemie, vous obtenez l'effet de Rage du berserker pendant {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Rage du berserker, Combat.",
			"itIT": "Quando un'abilità di Rissa colpisce almeno un nemico, ottieni Berserk per {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Berserk, Rissa.",
			"jaJP": "決闘スキルで少なくとも1体の敵にダメージを与えると、{1/2/3/4/5/6/7/8/9/10}秒間〈バーサーク〉状態になる。\n\nTags: バーサーク, 決闘.",
			"koKR": "난투로 1마리 이상의 적에게 피해를 주면 {1/2/3/4/5/6/7/8/9/10}초 동안 광폭화 효과를 얻습니다.\n\nTags: 광폭화, 난투.",
			"plPL": "Gdy umiejętność Bijatyki zadaje obrażenia co najmniej jednemu wrogowi, zyskujesz berserkowanie na {1/2/3/4/5/6/7/8/9/10} sek.\n\nTags: Berserkowanie, Bijatyka.",
			"ptBR": "Quando uma habilidade de Briga causar dano a pelo menos um inimigo, você receberá Berserk por {1/2/3/4/5/6/7/8/9/10} segundos.\n\nTags: Berserk, Briga.",
			"ruRU": "Когда вы поражаете хотя бы одного противника умением категории \"Бой без правил\", вы получаете эффект берсерк на {1/2/3/4/5/6/7/8/9/10} сек.\n\nTags: Берсерк, Бой без правил.",
			"zhCN": "搏斗技能至少对一名敌人造成伤害时获得狂暴效果, 持续 {1/2/3/4/5/6/7/8/9/10} 秒。\n\nTags: 狂暴, 搏斗.",
			"zhTW": "爭鬥技能對至少一個敵人造成傷害時,可獲得狂暴,持續 {1/2/3/4/5/6/7/8/9/10} 秒。\n\nTags: 狂暴, 爭鬥."
},
		id: 125,
		maxPoints: 3,
		x: -170.435,
		y: 479.412
	},
	"Swiftness": {
		connections: [ "Brawling", "Quick Impulses" ],
		description: `Movement Speed is increased by +{4/8/12/16/20/24/28/32/36/40}%.

Tags: Movement.`,
		nameLocalized: {
			"deDE": "Schnelligkeit",
			"esES": "Prontitud",
			"esMX": "Presteza",
			"frFR": "Vivacité",
			"itIT": "Rapidità",
			"jaJP": "俊敏さ",
			"koKR": "신속함",
			"plPL": "Chyżość",
			"ptBR": "Rapidez",
			"ruRU": "Быстрота",
			"zhCN": "身手矫健",
			"zhTW": "迅捷"
},
		descriptionLocalized: {
			"deDE": "Bewegungsgeschwindigkeit erhöht sich um +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Bewegung.",
			"esES": "La velocidad de movimiento aumenta un +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Movimiento.",
			"esMX": "Aumenta un +{4/8/12/16/20/24/28/32/36/40}% la velocidad de movimiento.\n\nTags: Movimiento.",
			"frFR": "Votre vitesse de déplacement est augmentée de +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Déplacement.",
			"itIT": "La velocità di movimento aumenta del +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Movimento.",
			"jaJP": "移動速度が+{4/8/12/16/20/24/28/32/36/40}%上昇する。\n\nTags: 移動.",
			"koKR": "이동 속도가 +{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 이동.",
			"plPL": "Szybkość ruchu jest zwiększona o +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Ruch.",
			"ptBR": "A velocidade de movimento é aumentada em +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Movimento.",
			"ruRU": "Скорость передвижения повышается на +{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Движение.",
			"zhCN": "移动速度提高 +{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 移动.",
			"zhTW": "移動速度提高 +{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 移動."
},
		id: 80,
		maxPoints: 3,
		x: 530.265,
		y: 0.354
	},
	"Quick Impulses": {
		connections: [ "Swiftness" ],
		description: `Reduce the duration of Control Impairing Effects by {6/12/18/24/30/36/42/48/54/60}%.

Tags: Crowd Control.`,
		nameLocalized: {
			"deDE": "Reaktionsschnell",
			"esES": "Impulsos rápidos",
			"esMX": "Impulsos Rápidos",
			"frFR": "Impulsions rapides",
			"itIT": "Impulsi Rapidi",
			"jaJP": "素早い衝動",
			"koKR": "빠른 충동",
			"plPL": "Szybkie Impulsy",
			"ptBR": "Impulsos Rápidos",
			"ruRU": "Стремительные инстинкты",
			"zhCN": "怒发冲冠",
			"zhTW": "血氣方剛"
},
		descriptionLocalized: {
			"deDE": "Reduziert die Dauer von Kontrollverlusteffekten um {6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Kontrollverlust.",
			"esES": "Reduce un {6/12/18/24/30/36/42/48/54/60}% la duración de los efectos de pérdida de control.\n\nTags: Control de masas.",
			"esMX": "Reduce un {6/12/18/24/30/36/42/48/54/60}% la duración de los efectos que debilitan el control.\n\nTags: Control de multitudes.",
			"frFR": "La durée des effets affectant le contrôle est réduite de {6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Perte de contrôle.",
			"itIT": "Riduce la durata degli effetti debilitanti del {6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Effetti debilitanti.",
			"jaJP": "操作障害効果の持続時間を{6/12/18/24/30/36/42/48/54/60}%短縮する。\n\nTags: 操作障害効果.",
			"koKR": "제어 방해 효과의 지속시간이 {6/12/18/24/30/36/42/48/54/60}% 감소합니다.\n\nTags: 군중 제어.",
			"plPL": "Skraca działania czas ograniczenia kontroli o {6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Ograniczanie Kontroli.",
			"ptBR": "Reduz a duração de efeitos de controle em {6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Controle de Grupo.",
			"ruRU": "Время действия эффектов контроля сокращается на {6/12/18/24/30/36/42/48/54/60}%.\n\nTags: Контроль.",
			"zhCN": "控制类限制效果的持续时间缩短 {6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 群控.",
			"zhTW": "控場效果的持續時間縮短 {6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 控場."
},
		id: 81,
		maxPoints: 3,
		x: 912.579,
		y: 1.565
	},
};

barbarianData["Weapon Mastery"] = {
	"Steel Grasp": {
		connections: [ "Weapon Mastery", "Enhanced Steel Grasp" ],
		description: `Charges: 2
Charge Cooldown: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} seconds
Lucky Hit Chance: 25% (per hit)
Throw out a trio of chains that deal {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% damage and Pull In enemies.

Tags: Weapon Mastery, Crowd Control, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Stahlgriff",
			"esES": "Tenaza de acero",
			"esMX": "Agarre de Acero",
			"frFR": "Poigne de fer",
			"itIT": "Morsa d'Acciaio",
			"jaJP": "スティール・グラスプ",
			"koKR": "강철 손아귀",
			"plPL": "Stalowy Potrzask",
			"ptBR": "Garra de Aço",
			"ruRU": "Железная хватка",
			"zhCN": "钢铁之握",
			"zhTW": "鋼鐵鎖縛"
},
		descriptionLocalized: {
			"deDE": "Aufladungen: 2\nAufladungsabklingzeit: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} Sek.\nGlückstrefferchance: 25% (per hit)\nWerft drei Ketten aus, die {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% Schaden verursachen und Gegner heranziehen.\n\nTags: Waffenbeherrschung, Kontrollverlust, Schaden, Physisch, Abklingzeit.",
			"esES": "Cargas: 2\nTiempo de reutilización de las cargas: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} s\nProbabilidad de golpe de suerte: 25% (per hit)\nLanzas tres cadenas que infligen {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de daño y atraen a los enemigos.\n\nTags: Dominio de las armas, Control de masas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Cargas: 2\nRecuperación de carga: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} segundos\nProbabilidad de golpe afortunado: 25% (per hit)\nArroja un trío de cadenas que infligen {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de daño y atraen a los enemigos.\n\nTags: Dominio de Arma, Control de multitudes, Daño, Física, Recuperación.",
			"frFR": "Charges: 2\nTemps de recharge des charges: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} s\nChances d'obtenir un coup de chance: 25% (per hit)\nVous lancez un trio de chaînes qui inflige {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% points de dégâts aux adversaires et les attire vers vous.\n\nTags: Maîtrise d'arme, Perte de contrôle, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Cariche: 2\nTempo di recupero cariche: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} s\nProbabilità di colpo fortunato: 25% (per hit)\nScagli tre catene che infliggono {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% danni e trascinano i nemici verso di te.\n\nTags: Dominio delle armi, Effetti debilitanti, Danni, Fisico, Tempo di recupero.",
			"jaJP": "チャージ: 2\nチャージのクールダウン: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6}秒\n幸運の一撃発生率: 25% (per hit)\n3本の鎖を投げつけて敵に{23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}%のダメージを与え、さらに引き寄せる。\n\nTags: 武器の達人, 操作障害効果, ダメージ, 物理, クールダウン.",
			"koKR": "충전: 2\n충전 재사용 대기시간: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6}초\n행운의 적중 확률: 25% (per hit)\n세 개의 사슬을 던져 적에게 각각 {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}%의 피해를 주고 끌어당깁니다.\n\nTags: 무기 숙련, 군중 제어, 피해, 물리, 재사용 대기시간.",
			"plPL": "Ładunki: 2\nCzas odnowienia ładunku: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} sek.\nSzansa na szczęśliwy traf: 25% (per hit)\nCiskasz trzema łańcuchami, które zadają {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% pkt. obrażeń i przyciągają wrogów.\n\nTags: Mistrzostwo Broni, Ograniczanie Kontroli, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Cargas: 2\nRecarga de cargas: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} segundos\nChance de Golpe de Sorte: 25% (per hit)\nLança um trio de correntes que causa {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% de dano e puxa os inimigos.\n\nTags: Maestria em Armas, Controle de Grupo, Dano, Física, Recarga.",
			"ruRU": "Количество зарядов: 2.\nВремя восстановления заряда: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} сек.\nВероятность удачного удара: 25% (per hit)\nВы бросаете вперед три цепи, наносящие {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% ед. урона и притягивающие противников.\n\nTags: Мастер оружия, Контроль, Урон, Физический урон, Время восстановления.",
			"zhCN": "使用次数: 2\n充能冷却时间: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} 秒\n幸运一击几率: 25% (per hit)\n扔出三段锁链, 造成 {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% 点伤害并将敌人拉向你的位置。\n\nTags: 武器精通, 群控, 伤害, 物理, 冷却时间.",
			"zhTW": "使用次數: 2\n使用次數冷卻時間: {11/10.45/9.9/9.46/9.02/8.69/8.36/8.14/7.92/7.7/7.48/7.26/7.15/7.04/6.93/6.82/6.765/6.71/6.655/6.6} 秒\n幸運觸發機率: 25% (per hit)\n丟出三條鎖鏈,造成 {23/25.3/27.6/29.9/32.2/34.5/36.8/39.1/41.4/43.7}% 點傷害並拉近敵人。\n\nTags: 武器專精, 控場, 傷害, 物理, 冷卻時間."
},
		id: 82,
		maxPoints: 5,
		x: 416.495,
		y: 219.35
	},
	"Enhanced Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Steel Grasp", "Warrior's Steel Grasp", "Fighter's Steel Grasp" ],
		description: `Steel Grasp also makes enemies Vulnerable for 2.5 seconds.`,
		nameLocalized: {
			"deDE": "Verbesserter Stahlgriff",
			"esES": "Tenaza de acero mejorada",
			"esMX": "Agarre de Acero Potenciado",
			"frFR": "Poigne de fer renforcée",
			"itIT": "Morsa d'Acciaio Rinforzata",
			"jaJP": "スティール・グラスプ(強化版)",
			"koKR": "강화된 강철 손아귀",
			"plPL": "Wzmocniony Stalowy Potrzask",
			"ptBR": "Garra de Aço Aperfeiçoada",
			"ruRU": "Усиленная железная хватка",
			"zhCN": "强化钢铁之握",
			"zhTW": "強化鋼鐵鎖縛"
},
		descriptionLocalized: {
			"deDE": "Stahlgriff macht Gegner auch 2.5 Sek. lang verwundbar.",
			"esES": "Tenaza de acero también vuelve vulnerables a los enemigos durante 2.5 s.",
			"esMX": "Agarre de Acero además vuelve a los enemigos vulnerables durante 2.5 segundos.",
			"frFR": "Poigne de fer rend aussi les adversaires vulnérables pendant 2.5 s.",
			"itIT": "Morsa d'Acciaio rende anche i nemici vulnerabili per 2.5 s.",
			"jaJP": "〈スティール・グラスプ〉に、敵を2.5秒間、脆弱状態にする効果が加わる。",
			"koKR": "강철 손아귀가 적을 2.5초 동안 취약하게 만듭니다.",
			"plPL": "Stalowy Potrzask sprawia również, że wrogowie są odsłonięci przez 2.5 sek.",
			"ptBR": "Garra de Aço também deixa os inimigos vulneráveis por 2.5 segundos.",
			"ruRU": "\"Железная хватка\" также делает противников уязвимыми на 2.5 сек.",
			"zhCN": "钢铁之握也会使敌人陷入易伤状态, 持续 2.5 秒。",
			"zhTW": "鋼鐵鎖縛會使敵人易傷 2.5 秒。"
},
		id: 83,
		maxPoints: 1,
		x: 686.125,
		y: 352.175
	},
	"Warrior's Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Enhanced Steel Grasp" ],
		description: `Steel Grasp gains 1 additional Charge.`,
		nameLocalized: {
			"deDE": "Stahlgriff des Kriegers",
			"esES": "Tenaza de acero del guerrero",
			"esMX": "Agarre de Acero de Guerrero",
			"frFR": "Poigne de fer de belliciste",
			"itIT": "Morsa d'Acciaio da Guerra",
			"jaJP": "スティール・グラスプ(戦士)",
			"koKR": "전사의 강철 손아귀",
			"plPL": "Wojowniczy Stalowy Potrzask",
			"ptBR": "Garra de Aço do Guerreiro",
			"ruRU": "Воинская железная хватка",
			"zhCN": "勇士钢铁之握",
			"zhTW": "戰士鋼鐵鎖縛"
},
		descriptionLocalized: {
			"deDE": "Stahlgriff erhält 1 zusätzliche Aufladung.",
			"esES": "Tenaza de acero obtiene 1 carga adicional.",
			"esMX": "Agarre de Acero obtiene 1 de carga adicional.",
			"frFR": "Poigne de fer gagne 1 charges supplémentaires.",
			"itIT": "Morsa d'Acciaio ottiene 1 carica aggiuntiva.",
			"jaJP": "〈スティール・グラスプ〉が1の追加チャージを得る。",
			"koKR": "강철 손아귀가 추가로 1회 충전됩니다.",
			"plPL": "Stalowy Potrzask zyskuje 1 dodatkowy ładunek.",
			"ptBR": "Garra de Aço recebe 1 carga adicional.",
			"ruRU": "Количество зарядов \"Железной хватки\" увеличивается на 1.",
			"zhCN": "钢铁之握额外获得 1 次使用次数。",
			"zhTW": "鋼鐵鎖縛獲得額外 1 次使用次數。"
},
		id: 84,
		maxPoints: 1,
		x: 753.34,
		y: 495.51
	},
	"Fighter's Steel Grasp": {
		baseSkill: "Steel Grasp",
		connections: [ "Enhanced Steel Grasp" ],
		description: `If Steel Grasp damages an enemy, gain Berserking for 2 seconds.`,
		nameLocalized: {
			"deDE": "Stahlgriff des Kämpfers",
			"esES": "Tenaza de acero del luchador",
			"esMX": "Agarre de Acero de Luchador",
			"frFR": "Poigne de fer de duelliste",
			"itIT": "Morsa d'Acciaio del Combattente",
			"jaJP": "スティール・グラスプ(闘士)",
			"koKR": "투사의 강철 손아귀",
			"plPL": "Porywczy Stalowy Potrzask",
			"ptBR": "Garra de Aço do Lutador",
			"ruRU": "Бойцовская железная хватка",
			"zhCN": "斗士钢铁之握",
			"zhTW": "鬥士鋼鐵鎖縛"
},
		descriptionLocalized: {
			"deDE": "Wenn Stahlgriff einem Gegner Schaden zufügt, verfallt Ihr 2 Sek. lang in den Berserkermodus.",
			"esES": "Si Tenaza de acero inflige daño a un enemigo, obtienes vesania durante 2 s.",
			"esMX": "Si Agarre de Acero inflige daño a un enemigo, obtienes enajenación durante 2 segundos.",
			"frFR": "Si Poigne de fer blesse une cible, vous obtenez l'effet de Rage du berserker pendant 2 s.",
			"itIT": "Se Morsa d'Acciaio infligge danni a un nemico, ottieni Berserk per 2 s.",
			"jaJP": "〈スティール・グラスプ〉で敵にダメージを与えると、2秒間〈バーサーク〉状態になる。",
			"koKR": "강철 손아귀가 적에게 피해를 주면 2초 동안 광폭화 상태가 됩니다.",
			"plPL": "Jeśli Stalowy Potrzask zrani wroga, zyskasz berserkowanie na 2 sek.",
			"ptBR": "Se Garra de Aço causar dano a um inimigo, você fica sob efeito de Berserk por 2 segundos.",
			"ruRU": "Когда \"Железная хватка\" поражает противника, вы на 2 сек. переходите в состояние берсерка.",
			"zhCN": "钢铁之握对一名敌人造成伤害即可获得狂暴, 持续 2 秒。",
			"zhTW": "若鋼鐵鎖縛對敵人造成傷害,會獲得狂暴,持續 2 秒。"
},
		id: 85,
		maxPoints: 1,
		x: 945.955,
		y: 357.905
	},
	"Thick Skin": {
		connections: [ "Weapon Mastery", "Counteroffensive", "Defensive Stance" ],
		description: `Each time you take direct damage gain {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% Base Life as Fortify.

Tags: Fortify.`,
		nameLocalized: {
			"deDE": "Zäh",
			"esES": "Piel dura",
			"esMX": "Piel Gruesa",
			"frFR": "Peau dure",
			"itIT": "Pelle Spessa",
			"jaJP": "分厚い皮膚",
			"koKR": "두꺼운 거죽",
			"plPL": "Twarda Skóra",
			"ptBR": "Pele Espessa",
			"ruRU": "Плотная кожа",
			"zhCN": "皮糙肉厚",
			"zhTW": "粗厚外皮"
},
		descriptionLocalized: {
			"deDE": "Jedes Mal, wenn Ihr direkten Schaden erleidet, erhaltet Ihr {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% Basisleben als Stählung.\n\nTags: Stählung.",
			"esES": "Cada vez que sufres daño directo, obtienes un {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% de tu vida base como fortificación.\n\nTags: Fortificación.",
			"esMX": "Cada vez que recibes daño directo, obtienes un {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% de tu vida de base como fortificación.\n\nTags: Fortificar.",
			"frFR": "Chaque fois que vous subissez des dégâts directs, vous obtenez un montant de fortification égal à {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% de vos points de vie de base.\n\nTags: Fortification.",
			"itIT": "Ogni volta che subisci danni diretti, ottieni il {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% della Vita base come Fortificazione.\n\nTags: Fortificazione.",
			"jaJP": "直接ダメージを受けるたびに、基本ライフの{0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}%にあたるの強化を獲得する。\n\nTags: 強化.",
			"koKR": "직접 피해를 받을 때마다 기본 생명력의 {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}%를 보강으로 얻습니다.\n\nTags: 보강.",
			"plPL": "Za każdym razem, gdy otrzymujesz bezpośrednie obrażenia, zyskujesz {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% podstawowego zdrowia jako umocnienie.\n\nTags: Umocnienie.",
			"ptBR": "Sempre que receber dano direto, você recebe {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% de vida básica como fortificação.\n\nTags: Fortificação.",
			"ruRU": "Когда вам наносят прямой урон, вы получаете укрепление в объеме {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% базового запаса здоровья.\n\nTags: Укрепление.",
			"zhCN": "你每次受到直接伤害都会强固你 {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% 基础生命。\n\nTags: 强固.",
			"zhTW": "你每次受到直接傷害時會獲得相當於 {0.4/0.7/1.1/1.4/1.8/2.2/2.5/2.9/3.2/3.6}% 基礎生命值的強韌。\n\nTags: 強韌."
},
		id: 86,
		maxPoints: 3,
		x: 0.22,
		y: 334.475
	},
	"Counteroffensive": {
		connections: [ "Thick Skin" ],
		description: `While you have Fortify for over 50% of your Maximum Life, you deal x{4/8/12/16/20/24/28/32/36/40}% increased damage.

Tags: Fortify, Life, Damage.`,
		nameLocalized: {
			"deDE": "Gegenoffensive",
			"esES": "Contraofensiva",
			"esMX": "Contraataque",
			"frFR": "Contre-offensive",
			"itIT": "Controffensiva",
			"jaJP": "反攻",
			"koKR": "역공",
			"plPL": "Kontratak",
			"ptBR": "Contraofensiva",
			"ruRU": "Контрнаступление",
			"zhCN": "反攻",
			"zhTW": "反攻"
},
		descriptionLocalized: {
			"deDE": "Solange Ihr um mindestens 50% Eures maximalen Lebens gestählt seid, verursacht Ihr x{4/8/12/16/20/24/28/32/36/40}% mehr Schaden.\n\nTags: Stählung, Leben, Schaden.",
			"esES": "Mientras tienes fortificada más de un 50% de tu vida máxima, infliges un x{4/8/12/16/20/24/28/32/36/40}% más de daño.\n\nTags: Fortificación, Vida, Daño.",
			"esMX": "Mientras tienes fortificación con más del 50% de tu vida máxima, infliges un x{4/8/12/16/20/24/28/32/36/40}% más de daño.\n\nTags: Fortificar, Vida, Daño.",
			"frFR": "Tant que vous bénéficiez d'une fortification supérieure à 50% de votre maximum de points de vie, vous infligez x{4/8/12/16/20/24/28/32/36/40}% de dégâts supplémentaires.\n\nTags: Fortification, Vie, Dégâts.",
			"itIT": "Mentre hai Fortificazione per più del 50% della tua Vita massima, infliggi il x{4/8/12/16/20/24/28/32/36/40}% di danni aggiuntivi.\n\nTags: Fortificazione, Vita, Danni.",
			"jaJP": "ライフ最大値の50%を越える強化を得ている間、与えるダメージがx{4/8/12/16/20/24/28/32/36/40}%増加する。\n\nTags: 強化, ライフ, ダメージ.",
			"koKR": "최대 생명력의 50%가 넘는 보강을 보유한 동안 주는 피해가 x{4/8/12/16/20/24/28/32/36/40}% 증가합니다.\n\nTags: 보강, 생명력, 피해.",
			"plPL": "Kiedy masz umocnienie równe ponad 50% maksymalnego zdrowia, zadajesz obrażenia zwiększone o x{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Umocnienie, Zdrowie, Obrażenia.",
			"ptBR": "Enquanto tiver fortificação em mais de 50% da sua vida máxima, você causa {4/8/12/16/20/24/28/32/36/40}% de dano aumentado.\n\nTags: Fortificação, Vida, Dano.",
			"ruRU": "Пока ваш эффект укрепления превышает 50% максимального запаса здоровья, наносимый вами урон увеличивается на x{4/8/12/16/20/24/28/32/36/40}%.\n\nTags: Укрепление, Здоровье, Урон.",
			"zhCN": "当你获得的强固超过 50% 生命上限时, 你造成的伤害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 强固, 生命, 伤害.",
			"zhTW": "當強韌高於生命值上限的 50% 時,你造成的傷害提高 x{4/8/12/16/20/24/28/32/36/40}%。\n\nTags: 強韌, 生命值, 傷害."
},
		id: 87,
		maxPoints: 3,
		x: 156.02,
		y: 483.6
	},
	"Defensive Stance": {
		connections: [ "Thick Skin" ],
		description: `Increase the Damage Reduction gained while you are Fortified by an additional {2/4/6/8/10/12/14/16/18/20}%.

Tags: Fortify, Damage Reduction.`,
		nameLocalized: {
			"deDE": "Verteidigungshaltung",
			"esES": "Actitud defensiva",
			"esMX": "Postura Defensiva",
			"frFR": "Position défensive",
			"itIT": "Postura Difensiva",
			"jaJP": "防御の構え",
			"koKR": "방어 태세",
			"plPL": "Postawa Obronna",
			"ptBR": "Postura Defensiva",
			"ruRU": "Защитная позиция",
			"zhCN": "防御姿态",
			"zhTW": "防禦姿態"
},
		descriptionLocalized: {
			"deDE": "Erhöht die verliehene Schadensreduktion, während Ihr gestählt seid, um zusätzlich {2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Stählung, Schadensreduktion.",
			"esES": "Aumenta un {2/4/6/8/10/12/14/16/18/20}% la reducción de daño obtenida mientras tienes fortificación.\n\nTags: Fortificación, Reducción de daño.",
			"esMX": "Aumenta la reducción de daño obtenida un {2/4/6/8/10/12/14/16/18/20}% adicional mientras tienes fortificación.\n\nTags: Fortificar, Reducción de daño.",
			"frFR": "Augmente la réduction des dégâts obtenue de {2/4/6/8/10/12/14/16/18/20}% supplémentaires tant que vous bénéficiez d'une fortification.\n\nTags: Fortification, Réduction des dégâts.",
			"itIT": "La riduzione danni ottenuta mentre hai Fortificazione aumenta di un ulteriore {2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Fortificazione, Riduzione danni.",
			"jaJP": "強化中のダメージ軽減量がさらに{2/4/6/8/10/12/14/16/18/20}%増加する。\n\nTags: 強化, ダメージ減少.",
			"koKR": "보강 상태에서 얻는 피해 감소가 추가로 {2/4/6/8/10/12/14/16/18/20}% 증가합니다.\n\nTags: 보강, 피해 감소.",
			"plPL": "Redukcja obrażeń otrzymana w stanie umocnienia jest dodatkowo zwiększona o {2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Umocnienie, Redukcja Obrażeń.",
			"ptBR": "Aumenta a redução de dano recebida enquanto tiver fortificação em mais {2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Fortificação, Redução de Dano.",
			"ruRU": "Укрепление уменьшает получаемый урон еще на {2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Укрепление, Уменьшение урона.",
			"zhCN": "获得强固时, 伤害减免额外提高 {2/4/6/8/10/12/14/16/18/20}%。\n\nTags: 强固, 伤害减免.",
			"zhTW": "在強韌狀態下,你獲得的傷害減免效果額外提高 {2/4/6/8/10/12/14/16/18/20}%。\n\nTags: 強韌, 傷害減免."
},
		id: 126,
		maxPoints: 3,
		x: -158.837,
		y: 482.93
	},
	"Death Blow": {
		connections: [ "Weapon Mastery", "Enhanced Death Blow" ],
		description: `Cooldown: 15 seconds
Lucky Hit Chance: 50% (per hit)
Attempt a killing strike, dealing {120/132/144/156/168/180/192/204/216/228}% damage to enemies in front of you.

If this kills an enemy, its Cooldown is reset.

Tags: Weapon Mastery, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Todesstoß",
			"esES": "Golpe mortal",
			"esMX": "Golpe Letal",
			"frFR": "Coup de grâce",
			"itIT": "Colpo di Grazia",
			"jaJP": "死の一撃",
			"koKR": "결정타",
			"plPL": "Śmiertelny Cios",
			"ptBR": "Golpe Mortal",
			"ruRU": "Смертельный удар",
			"zhCN": "死亡重击",
			"zhTW": "死亡之擊"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 15 Sek.\nGlückstrefferchance: 50% (per hit)\nVersucht Euch an einem tödlichen Schlag, der Gegnern vor Euch {120/132/144/156/168/180/192/204/216/228}% Schaden zufügt.\n\nStirbt ein Gegner durch diese Fertigkeit, wird die Abklingzeit abgeschlossen.\n\nTags: Waffenbeherrschung, Schaden, Physisch, Abklingzeit.",
			"esES": "Tiempo de reutilización: 15 s\nProbabilidad de golpe de suerte: 50% (per hit)\nIntentas asestar un golpe letal que inflige {120/132/144/156/168/180/192/204/216/228}% de daño a los enemigos frente a ti.\n\nSi matas a un enemigo, se reinicia su tiempo de reutilización.\n\nTags: Dominio de las armas, Daño, Física, Tiempo de reutilización.",
			"esMX": "Recuperación: 15 segundos\nProbabilidad de golpe afortunado: 50% (per hit)\nIntentas realizar un golpe de gracia que inflige {120/132/144/156/168/180/192/204/216/228}% de daño a los enemigos frente a ti.\n\nSi eliminas a un enemigo, se restablece su recuperación.\n\nTags: Dominio de Arma, Daño, Física, Recuperación.",
			"frFR": "Temps de recharge: 15 s\nChances d'obtenir un coup de chance: 50% (per hit)\nVous tentez un coup mortel qui inflige {120/132/144/156/168/180/192/204/216/228}% points de dégâts aux cibles devant vous.\n\nSi ce coup tue une cible, son temps de recharge est réinitialisé.\n\nTags: Maîtrise d'arme, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Tempo di recupero: 15 s\nProbabilità di colpo fortunato: 50% (per hit)\nTenti di dare il colpo di grazia, infliggendo {120/132/144/156/168/180/192/204/216/228}% danni ai nemici frontali.\n\nSe il colpo uccide un nemico, il suo tempo di recupero si azzera.\n\nTags: Dominio delle armi, Danni, Fisico, Tempo di recupero.",
			"jaJP": "クールダウン: 15秒\n幸運の一撃発生率: 50% (per hit)\n一撃必殺を狙って前方の敵に{120/132/144/156/168/180/192/204/216/228}%のダメージを与える。\n\nこのスキルで敵1体を倒すと、クールダウンがリセットされる。\n\nTags: 武器の達人, ダメージ, 物理, クールダウン.",
			"koKR": "재사용 대기시간: 15초\n행운의 적중 확률: 50% (per hit)\n전방에 있는 적의 숨통을 노려 {120/132/144/156/168/180/192/204/216/228}%의 피해를 줍니다.\n\n이 기술로 적을 처치하면 이 기술의 재사용 대기시간이 초기화됩니다.\n\nTags: 무기 숙련, 피해, 물리, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 15 sek.\nSzansa na szczęśliwy traf: 50% (per hit)\nPróbujesz wykonać zabójczy cios i zadajesz {120/132/144/156/168/180/192/204/216/228}% pkt. obrażeń wrogom przed tobą.\n\nJeśli zabijesz w ten sposób wroga, czas odnowienia zostanie wyzerowany.\n\nTags: Mistrzostwo Broni, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Recarga: 15 segundos\nChance de Golpe de Sorte: 50% (per hit)\nVocê tenta um golpe mortal, causando {120/132/144/156/168/180/192/204/216/228}% de dano aos inimigos à sua frente.\n\nSe isso matar um inimigo, a recarga será reiniciada.\n\nTags: Maestria em Armas, Dano, Física, Recarga.",
			"ruRU": "Время восстановления: 15 сек.\nВероятность удачного удара: 50% (per hit)\nСмертельный удар наносит {120/132/144/156/168/180/192/204/216/228}% ед. урона целям в секторе перед вами.\n\nЕсли противник умирает, умение мгновенно восстанавливается.\n\nTags: Мастер оружия, Урон, Физический урон, Время восстановления.",
			"zhCN": "冷却时间: 15 秒\n幸运一击几率: 50% (per hit)\n试图发动一次致命攻击, 对面前的敌人造成 {120/132/144/156/168/180/192/204/216/228}% 点伤害。\n\n如果该技能消灭了一名敌人, 则重置其冷却时间。\n\nTags: 武器精通, 伤害, 物理, 冷却时间.",
			"zhTW": "冷卻時間:15 秒\n幸運觸發機率: 50% (per hit)\n使出致命打擊,對你前方的敵人造成 {120/132/144/156/168/180/192/204/216/228}% 點傷害。\n\n若此技能擊殺了敵人,重置其冷卻時間。\n\nTags: 武器專精, 傷害, 物理, 冷卻時間."
},
		id: 89,
		maxPoints: 5,
		x: -528.139,
		y: -0.735
	},
	"Enhanced Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Death Blow", "Warrior's Death Blow", "Fighter's Death Blow" ],
		description: `Death Blow deals x100% increased damage to Bosses.`,
		nameLocalized: {
			"deDE": "Verbesserter Todesstoß",
			"esES": "Golpe mortal mejorado",
			"esMX": "Golpe Letal Potenciado",
			"frFR": "Coup de grâce renforcé",
			"itIT": "Colpo di Grazia Rinforzato",
			"jaJP": "死の一撃(強化版)",
			"koKR": "강화된 결정타",
			"plPL": "Wzmocniony Śmiertelny Cios",
			"ptBR": "Golpe Mortal Aperfeiçoado",
			"ruRU": "Усиленный смертельный удар",
			"zhCN": "强化死亡重击",
			"zhTW": "強化死亡之擊"
},
		descriptionLocalized: {
			"deDE": "Todesstoß fügt Bossen x100% mehr Schaden zu.",
			"esES": "Golpe mortal inflige un x100% más de daño a jefes.",
			"esMX": "Golpe Letal inflige un x100% más de daño a los jefes.",
			"frFR": "Coup de grâce inflige x100% de dégâts supplémentaires aux boss.",
			"itIT": "Colpo di Grazia infligge il x100% di danni aggiuntivi ai boss.",
			"jaJP": "〈死の一撃〉のボスに与えるダメージがx100%増加する。",
			"koKR": "결정타로 우두머리에게 주는 피해가 x100% 증가합니다.",
			"plPL": "Śmiertelny Cios zadaje bossom obrażenia zwiększone o x100%.",
			"ptBR": "Golpe Mortal causa 100% de dano aumentado contra chefes.",
			"ruRU": "\"Смертельный удар\" наносит на x100% больше урона боссам.",
			"zhCN": "死亡重击对首领造成的伤害提高 x100%。",
			"zhTW": "死亡之擊對首領造成的傷害提高 x100%。"
},
		id: 90,
		maxPoints: 1,
		x: -923.053,
		y: -0.575
	},
	"Warrior's Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Enhanced Death Blow" ],
		description: `If Death Blow damages at least one enemy, gain Berserking for 3 seconds.`,
		nameLocalized: {
			"deDE": "Todesstoß des Kriegers",
			"esES": "Golpe mortal del guerrero",
			"esMX": "Golpe Letal de Guerrero",
			"frFR": "Coup de grâce de belliciste",
			"itIT": "Colpo di Grazia da Guerra",
			"jaJP": "死の一撃(戦士)",
			"koKR": "전사의 결정타",
			"plPL": "Wojowniczy Śmiertelny Cios",
			"ptBR": "Golpe Mortal do Guerreiro",
			"ruRU": "Воинский смертельный удар",
			"zhCN": "勇士死亡重击",
			"zhTW": "戰士死亡之擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Todesstoß mindestens einem Gegner Schaden zufügt, verfallt Ihr 3 Sek. lang in den Berserkermodus.",
			"esES": "Si Golpe mortal inflige daño a al menos un enemigo, obtienes vesania durante 3 s.",
			"esMX": "Si Golpe Letal inflige daño a por lo menos un enemigo, obtienes enajenación durante 3 segundos.",
			"frFR": "Si Coup de grâce inflige des dégâts à au moins une cible, vous obtenez l'effet de Rage du berserker pendant 3 s.",
			"itIT": "Se Colpo di Grazia infligge danni ad almeno un nemico, fornisce Berserk per 3 s.",
			"jaJP": "〈死の一撃〉が少なくとも1体の敵にダメージを与えると、3秒間〈バーサーク〉状態になる。",
			"koKR": "결정타로 1마리 이상의 적에게 피해를 주면 3초 동안 광폭화 효과를 얻습니다.",
			"plPL": "Jeśli Śmiertelny Cios zada obrażenia co najmniej jednemu wrogowi, zyskujesz berserkowanie na 3 sek.",
			"ptBR": "Se Golpe Mortal causar dano a pelo menos um inimigo, você receberá Berserk por 3 segundos.",
			"ruRU": "Если \"Смертельный удар\" наносит урон хотя бы одному противнику, вы получаете эффект берсерк на 3 сек.",
			"zhCN": "如果死亡重击对至少一名敌人造成伤害, 则获得狂暴效果, 持续 3 秒。",
			"zhTW": "死亡之擊擊中至少一個敵人時,可使你獲得狂暴,持續 3 秒。"
},
		id: 91,
		maxPoints: 1,
		x: -1133.18,
		y: 99.26
	},
	"Fighter's Death Blow": {
		baseSkill: "Death Blow",
		connections: [ "Enhanced Death Blow" ],
		description: `If Death Blow damages at least one enemy, gain 20 Fury.`,
		nameLocalized: {
			"deDE": "Todesstoß des Kämpfers",
			"esES": "Golpe mortal del luchador",
			"esMX": "Golpe Letal de Luchador",
			"frFR": "Coup de grâce de duelliste",
			"itIT": "Colpo di Grazia del Combattente",
			"jaJP": "死の一撃(闘士)",
			"koKR": "투사의 결정타",
			"plPL": "Porywczy Śmiertelny Cios",
			"ptBR": "Golpe Mortal do Lutador",
			"ruRU": "Бойцовский смертельный удар",
			"zhCN": "斗士死亡重击",
			"zhTW": "鬥士死亡之擊"
},
		descriptionLocalized: {
			"deDE": "Wenn Todesstoß mindestens einem Gegner Schaden zufügt, erhaltet Ihr 20 Wut.",
			"esES": "Si Golpe mortal inflige daño a al menos un enemigo, obtienes 20 de furia.",
			"esMX": "Si Golpe Letal inflige daño a por lo menos un enemigo, obtienes 20 de Furia.",
			"frFR": "Si Coup de grâce inflige des dégâts à au moins une cible, vous gagnez 20 points de fureur.",
			"itIT": "Se Colpo di Grazia infligge danni ad almeno un nemico, ottieni 20 furia.",
			"jaJP": "〈死の一撃〉が少なくとも1体の敵にダメージを与えると、20の怒気を獲得する。",
			"koKR": "결정타로 최소 1마리 이상의 적에게 피해를 주면 분노를 20 얻습니다.",
			"plPL": "Jeśli Śmiertelny Cios zada obrażenia co najmniej jednemu wrogowi, zyskujesz 20 pkt. furii.",
			"ptBR": "Se Golpe Mortal causar dano a pelo menos um inimigo, você receberá 20 de fúria.",
			"ruRU": "Если \"Смертельный удар\" наносит урон хотя бы одному противнику, вы получаете 20 ед. ярости.",
			"zhCN": "如果死亡重击至少对一名敌人造成伤害, 获得 20 点怒气。",
			"zhTW": "死亡之擊擊中至少一個敵人時,可產生 20 點怒氣。"
},
		id: 92,
		maxPoints: 1,
		x: -1132.87,
		y: -94.525
	},
	"Pit Fighter": {
		connections: [ "Weapon Mastery", "Slaying Strike", "No Mercy" ],
		description: `You deal x{3/6/9/12/15/18/21/24/27/30}% increased damage to Close enemies and gain {2/4/6/8/10/12/14/16/18/20}% Distant Damage Reduction.

Tags: Damage Reduction, Damage.`,
		nameLocalized: {
			"deDE": "Grubenkämpfer",
			"esES": "Luchador de foso",
			"esMX": "Luchador de Fosa",
			"frFR": "Combat de fosse",
			"itIT": "Combattente della Fossa",
			"jaJP": "格闘士",
			"koKR": "사투장 싸움꾼",
			"plPL": "Walka Arenowa",
			"ptBR": "Luta de Fosso",
			"ruRU": "Боец арены",
			"zhCN": "深坑斗士",
			"zhTW": "角鬥士"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt Gegnern in der Nähe x{3/6/9/12/15/18/21/24/27/30}% mehr Schaden zu und erhaltet {2/4/6/8/10/12/14/16/18/20}% Schadensreduktion im Fernkampf.\n\nTags: Schadensreduktion, Schaden.",
			"esES": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a enemigos cercanos y obtienes un {2/4/6/8/10/12/14/16/18/20}% de reducción de daño lejano.\n\nTags: Reducción de daño, Daño.",
			"esMX": "Infliges un x{3/6/9/12/15/18/21/24/27/30}% más de daño a los enemigos cercanos y obtienes un {2/4/6/8/10/12/14/16/18/20}% de reducción de daño de enemigos lejanos.\n\nTags: Reducción de daño, Daño.",
			"frFR": "Vous infligez x{3/6/9/12/15/18/21/24/27/30}% de dégâts supplémentaires aux cibles à proximité et obtenez {2/4/6/8/10/12/14/16/18/20}% de réduction des dégâts à distance.\n\nTags: Réduction des dégâts, Dégâts.",
			"itIT": "Infliggi il x{3/6/9/12/15/18/21/24/27/30}% di danni aggiuntivi ai nemici vicini e ottieni una riduzione danni da lontano del {2/4/6/8/10/12/14/16/18/20}%.\n\nTags: Riduzione danni, Danni.",
			"jaJP": "近距離にいる敵に与えるダメージがx{3/6/9/12/15/18/21/24/27/30}%増加し、受ける遠距離ダメージが{2/4/6/8/10/12/14/16/18/20}%軽減される。\n\nTags: ダメージ減少, ダメージ.",
			"koKR": "근거리에 있는 적에게 주는 피해가 x{3/6/9/12/15/18/21/24/27/30}% 증가하고, 원거리 피해 감소가 {2/4/6/8/10/12/14/16/18/20}% 증가합니다.\n\nTags: 피해 감소, 피해.",
			"plPL": "Zadajesz obrażenia zwiększone o x{3/6/9/12/15/18/21/24/27/30}% pobliskim wrogom i zyskujesz {2/4/6/8/10/12/14/16/18/20}% redukcji obrażeń otrzymywanych z dystansu.\n\nTags: Redukcja Obrażeń, Obrażenia.",
			"ptBR": "Você causa {3/6/9/12/15/18/21/24/27/30}% de dano aumentado a inimigos próximos e recebe {2/4/6/8/10/12/14/16/18/20}% de redução de dano de longa distância.\n\nTags: Redução de Dano, Dano.",
			"ruRU": "Вы наносите на x{3/6/9/12/15/18/21/24/27/30}% больше урона противникам в области ближнего боя и получаете на {2/4/6/8/10/12/14/16/18/20}% меньше урона от атак дальнего боя.\n\nTags: Уменьшение урона, Урон.",
			"zhCN": "你对近距敌人造成的伤害提高 x{3/6/9/12/15/18/21/24/27/30}%, 获得 {2/4/6/8/10/12/14/16/18/20}% 远程伤害减免。\n\nTags: 伤害减免, 伤害.",
			"zhTW": "你對近距離敵人造成的傷害提高 x{3/6/9/12/15/18/21/24/27/30}%,且獲得 {2/4/6/8/10/12/14/16/18/20}% 遠程傷害減免。\n\nTags: 傷害減免, 傷害."
},
		id: 93,
		maxPoints: 3,
		x: 0.37,
		y: -340.528
	},
	"Slaying Strike": {
		connections: [ "Pit Fighter", "Expose Vulnerability" ],
		description: `You deal x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% increased damage against Injured enemies.

Tags: Injured, Damage.`,
		nameLocalized: {
			"deDE": "Niederstreckender Schlag",
			"esES": "Golpe exterminador",
			"esMX": "Golpe Matador",
			"frFR": "Frappe fatale",
			"itIT": "Assalto Sterminante",
			"jaJP": "殺戮攻撃",
			"koKR": "학살의 일격",
			"plPL": "Morderczy Atak",
			"ptBR": "Golpe Matador",
			"ruRU": "Разящий удар",
			"zhCN": "杀戮打击",
			"zhTW": "痛下殺手"
},
		descriptionLocalized: {
			"deDE": "Ihr fügt verwundeten Gegnern x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% mehr Schaden zu.\n\nTags: Verletzt, Schaden.",
			"esES": "Infliges un x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% más de daño a enemigos heridos.\n\nTags: Herido, Daño.",
			"esMX": "Infliges un x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% más de daño a los enemigos heridos.\n\nTags: Herido, Daño.",
			"frFR": "Vous infligez x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% de dégâts supplémentaires aux cibles blessées.\n\nTags: Blessure, Dégâts.",
			"itIT": "Infliggi il x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% di danni aggiuntivi contro i nemici feriti.\n\nTags: Ferita, Danni.",
			"jaJP": "負傷状態の敵に与えるダメージがx{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}%増加する。\n\nTags: 負傷, ダメージ.",
			"koKR": "부상 상태의 적에게 주는 피해가 x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% 증가합니다.\n\nTags: 부상, 피해.",
			"plPL": "Zadajesz okaleczonym wrogom obrażenia zwiększone o x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}%.\n\nTags: Okaleczenie, Obrażenia.",
			"ptBR": "Você causa {7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% de dano aumentado contra inimigos feridos.\n\nTags: Ferido, Dano.",
			"ruRU": "Вы наносите на x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}% больше урона противникам с низким уровнем здоровья.\n\nTags: Ранение, Урон.",
			"zhCN": "你对受伤的敌人造成的伤害提高 x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}%。\n\nTags: 受伤, 伤害.",
			"zhTW": "你對受傷的敵人造成的傷害提高 x{7.5/15/22.5/30/37.5/45/52.5/60/67.5/75}%。\n\nTags: 受傷, 傷害."
},
		id: 94,
		maxPoints: 3,
		x: 203.61,
		y: -473.84
	},
	"Expose Vulnerability": {
		connections: [ "No Mercy", "Slaying Strike" ],
		description: `Dealing direct damage with a Weapon Mastery skill causes your next Core Skill to make enemies Vulnerable for {1/2/3/4/5/6/7/8/9/10} seconds.

Tags: Vulnerable, Core, Weapon Mastery.`,
		nameLocalized: {
			"deDE": "Verwundbarkeit aufdecken",
			"esES": "Exponer vulnerabilidad",
			"esMX": "Exponer Vulnerabilidad",
			"frFR": "Perce-vulnérabilité",
			"itIT": "Vulnerabilità Esposta",
			"jaJP": "弱点発見",
			"koKR": "약점 노출",
			"plPL": "Odsłonięcie Wrażliwości",
			"ptBR": "Expor Vulnerabilidade",
			"ruRU": "Найти слабости",
			"zhCN": "揭示弱点",
			"zhTW": "暴露破綻"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mit einer Waffenbeherrschungsfertigkeit direkten Schaden verursacht, macht Eure nächste Kernfertigkeit Gegner {1/2/3/4/5/6/7/8/9/10} Sek. lang verwundbar.\n\nTags: Verwundbar, Kern, Waffenbeherrschung.",
			"esES": "Infligir daño directo con una habilidad de dominio de las armas hace que tu siguiente habilidad principal vuelva a los enemigos vulnerables durante {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Vulnerable, Principal, Dominio de las armas.",
			"esMX": "Infligir daño directo con una habilidad de Dominio de Arma hace que tu próxima habilidad principal vuelva a los enemigos vulnerables durante {1/2/3/4/5/6/7/8/9/10} segundos.\n\nTags: Vulnerable, Principal, Dominio de Arma.",
			"frFR": "Lorsque vous infligez des dégâts directs avec une compétence de maîtrise d'arme, la prochaine compétence principale que vous utilisez rend les adversaires vulnérables pendant {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Vulnérable, Principale, Maîtrise d'arme.",
			"itIT": "Infliggere danni diretti con un'abilità di Dominio delle armi fa sì che la tua successiva abilità Primaria renda i nemici vulnerabili per {1/2/3/4/5/6/7/8/9/10} s.\n\nTags: Vulnerabilità, Primaria, Dominio delle armi.",
			"jaJP": "武器の達人スキルで直接ダメージを与えると、次のコアスキルによって敵を{1/2/3/4/5/6/7/8/9/10}秒間、脆弱状態にする。\n\nTags: 脆弱, コア, 武器の達人.",
			"koKR": "무기 숙련 기술로 직접 피해를 주면 다음 핵심 기술이 적을 {1/2/3/4/5/6/7/8/9/10}초 동안 취약하게 만듭니다.\n\nTags: 취약, 핵심, 무기 숙련.",
			"plPL": "Zadanie wrogowi obrażeń umiejętnością Mistrzostwa Broni sprawia, że twoja kolejna umiejętność Główna powoduje u wrogów odsłonięcie na {1/2/3/4/5/6/7/8/9/10} sek.\n\nTags: Odsłonięcie, Główne, Mistrzostwo Broni.",
			"ptBR": "Causar dano direto com uma habilidade de Maestria em Armas faz com que sua próxima habilidade principal torne os inimigos vulneráveis por {1/2/3/4/5/6/7/8/9/10} segundos.\n\nTags: Vulnerável, Principal, Maestria em Armas.",
			"ruRU": "Когда умение категории \"Мастер оружия\" наносит прямой урон, ваше следующее основное умение делает противников уязвимыми на {1/2/3/4/5/6/7/8/9/10} сек.\n\nTags: Уязвимость, Основное, Мастер оружия.",
			"zhCN": "用武器精通技能造成直接伤害后, 你的下一个核心技能会使敌人陷入易伤状态, 持续 {1/2/3/4/5/6/7/8/9/10} 秒。\n\nTags: 易伤, 核心, 武器精通.",
			"zhTW": "以武器專精技能造成直接傷害,會使你的下一個核心技能對敵人造成易傷,持續 {1/2/3/4/5/6/7/8/9/10} 秒。\n\nTags: 易傷, 核心, 武器專精."
},
		id: 95,
		maxPoints: 3,
		x: -0.085,
		y: -594.703
	},
	"No Mercy": {
		connections: [ "Expose Vulnerability", "Pit Fighter" ],
		description: `You have +{3/6/9/12/15/18/21/24/27/30}% increased Critical Strike chance against Immobilized, Stunned, or Slowed enemies.

Tags: Critical Strikes, Crowd Control.`,
		nameLocalized: {
			"deDE": "Keine Gnade",
			"esES": "Sin piedad",
			"esMX": "Sin Piedad",
			"frFR": "Sans pitié",
			"itIT": "Senza Pietà",
			"jaJP": "冷酷無比",
			"koKR": "무자비",
			"plPL": "Brak Litości",
			"ptBR": "Sem Piedade",
			"ruRU": "Никакой пощады",
			"zhCN": "绝不留情",
			"zhTW": "毫不留情"
},
		descriptionLocalized: {
			"deDE": "Ihr habt eine +{3/6/9/12/15/18/21/24/27/30}% höhere kritische Trefferchance gegen bewegungsunfähige, betäubte oder verlangsamte Gegner.\n\nTags: Kritische Treffer, Kontrollverlust.",
			"esES": "Tienes un +{3/6/9/12/15/18/21/24/27/30}% más de probabilidad de golpe crítico contra enemigos inmovilizados, aturdidos o ralentizados.\n\nTags: Golpes críticos, Control de masas.",
			"esMX": "Tienes un +{3/6/9/12/15/18/21/24/27/30}% más de probabilidad de golpe crítico contra enemigos inmovilizados, aturdidos o ralentizados.\n\nTags: Golpes críticos, Control de multitudes.",
			"frFR": "Vos chances d'infliger un coup critique sont augmentées de +{3/6/9/12/15/18/21/24/27/30}% contre les cibles immobilisées, étourdies ou ralenties.\n\nTags: Coups critiques, Perte de contrôle.",
			"itIT": "Probabilità di critico aumentata del +{3/6/9/12/15/18/21/24/27/30}% contro i bersagli immobilizzati, storditi o rallentati.\n\nTags: Colpi critici, Effetti debilitanti.",
			"jaJP": "移動不能、スタン、移動速度低下状態の敵に対するクリティカルヒット率が+{3/6/9/12/15/18/21/24/27/30}%増加する。\n\nTags: クリティカルヒット, 操作障害効果.",
			"koKR": "이동 불가, 기절, 감속 상태의 적에 대한 극대화 확률이 +{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 극대화, 군중 제어.",
			"plPL": "Masz premię +{3/6/9/12/15/18/21/24/27/30}% do szansy na trafienie krytyczne przeciwko unieruchomionym, ogłuszonym i spowolnionym wrogom.\n\nTags: Trafienia Krytyczne, Ograniczanie Kontroli.",
			"ptBR": "Você tem +{3/6/9/12/15/18/21/24/27/30}% de chance de acerto crítico aumentada contra inimigos imobilizados, atordoados ou desacelerados.\n\nTags: Acertos Críticos, Controle de Grupo.",
			"ruRU": "Когда вы атакуете обездвиженных, оглушенных или замедленных противников, вероятность критического удара повышается на +{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Критические удары, Контроль.",
			"zhCN": "你对处于定身、昏迷或减速状态的敌人造成暴击的几率提高 +{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 暴击, 群控.",
			"zhTW": "你對定身、昏迷或緩速敵人的爆擊機率提高 +{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 爆擊, 控場."
},
		id: 96,
		maxPoints: 3,
		x: -194.839,
		y: -469.563
	},
	"Rupture": {
		connections: [ "Enhanced Rupture", "Weapon Mastery" ],
		description: `Cooldown: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} seconds

Lucky Hit Chance: 50% (per hit)
Skewer enemies in front of you, dealing 13% damage, then rip your weapon out, damaging enemies for their total Bleeding amount and removing all Bleeding damage from them.

Tags: Weapon Mastery, Bleed, Damage, Physical, Cooldown, Slashing.`,
		nameLocalized: {
			"deDE": "Blutspieß",
			"esES": "Ruptura",
			"esMX": "Ruptura",
			"frFR": "Rupture",
			"itIT": "Strazio",
			"jaJP": "ラプチャー",
			"koKR": "파열",
			"plPL": "Rozerwanie",
			"ptBR": "Ruptura",
			"ruRU": "Разрыв",
			"zhCN": "割裂",
			"zhTW": "血肉橫飛"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} Sek.\n\nGlückstrefferchance: 50% (per hit)\nSpießt Gegner vor Euch auf, verursacht dabei 13% Schaden und reißt dann Eure Waffe heraus, wobei Ihr Gegnern Schaden in Höhe ihrer gesamten Blutungsmenge zufügt und sie vom gesamten Blutungsschaden befreit.\n\nTags: Waffenbeherrschung, Blutung, Schaden, Physisch, Abklingzeit, Hiebwaffe.",
			"esES": "Tiempo de reutilización: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} s\n\nProbabilidad de golpe de suerte: 50% (per hit)\nEnsartas a los enemigos frente a ti y les infliges 13% de daño. Después, arrancas tu arma, lo que les inflige la cantidad total del daño de sangrado y elimina todo el daño de sangrado.\n\nTags: Dominio de las armas, Sangrado, Daño, Física, Tiempo de reutilización, Cortante.",
			"esMX": "Recuperación: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} segundos\n\nProbabilidad de golpe afortunado: 50% (per hit)\nEmpalas a los enemigos que están frente a ti y les infliges 13% de daño. Después, retiras el arma, los desgarras, infliges daño de sangrado y el desangrado concluye.\n\nTags: Dominio de Arma, Sangrado, Daño, Física, Recuperación, Corte.",
			"frFR": "Temps de recharge: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} s\n\nChances d'obtenir un coup de chance: 50% (per hit)\nVous embrochez les adversaires devant vous et leur infligez 13% points de dégâts, puis vous arrachez votre arme de leur corps, ce qui les blesse d'un montant égal à celui de leur saignement total et fait disparaître le saignement.\n\nTags: Maîtrise d'arme, Saignement, Dégâts, Dégâts physiques, Temps de recharge, Tranchant.",
			"itIT": "Tempo di recupero: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} s\n\nProbabilità di colpo fortunato: 50% (per hit)\nTrafiggi i nemici frontali, infliggendo 13% danni; poi strappi via la tua arma, infliggendo danni pari al totale dei danni da sanguinamento e rimuovendo tutti gli effetti di sanguinamento dai nemici.\n\nTags: Dominio delle armi, Sanguinamento, Danni, Fisico, Tempo di recupero, Tagliente.",
			"jaJP": "クールダウン: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6}秒\n\n幸運の一撃発生率: 50% (per hit)\n前方の敵を突き刺して13%のダメージを与えた後、貫通させた武器を引き抜いて出血ダメージの合計に相当するダメージを与え、敵が受けていたすべての出血ダメージを解除する。\n\nTags: 武器の達人, 出血, ダメージ, 物理, クールダウン, 斬撃.",
			"koKR": "재사용 대기시간: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6}초\n\n행운의 적중 확률: 50% (per hit)\n전방의 적들을 꿰뚫어 13%의 피해를 준 후, 무기를 단숨에 빼내 적에게 총 출혈량만큼 피해를 주고 모든 출혈 피해를 제거합니다.\n\nTags: 무기 숙련, 출혈, 피해, 물리, 재사용 대기시간, 베는 무기.",
			"plPL": "Czas odnowienia: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} sek.\n\nSzansa na szczęśliwy traf: 50% (per hit)\nPrzeszywasz wrogów przed sobą, zadając im 13% pkt. obrażeń, po czym wyrywasz z nich broń, zadając wrogom pełne obrażenia od krwawienia i usuwając z nich krwawienie.\n\nTags: Mistrzostwo Broni, Krwawienie, Obrażenia, Fizyczne, Odnowienie, Sieczne.",
			"ptBR": "Recarga: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} segundos\n\nChance de Golpe de Sorte: 50% (per hit)\nEspeta inimigos à sua frente, causando 13% de dano. Então você arranca a arma, causando aos inimigos dano equivalente ao valor total de sangramento e removendo todo o dano de sangramento deles.\n\nTags: Maestria em Armas, Sangramento, Dano, Física, Recarga, Corte.",
			"ruRU": "Время восстановления: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} сек.\n\nВероятность удачного удара: 50% (per hit)\nВы пронзаете противников перед собой, нанося 13% ед. урона, а затем выдергиваете оружие, снимая действующие на врагов эффекты кровотечения и нанося оставшийся урон от этих эффектов.\n\nTags: Мастер оружия, Кровотечение, Урон, Физический урон, Время восстановления, Рубящее.",
			"zhCN": "冷却时间: {10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} 秒\n\n幸运一击几率: 50% (per hit)\n刺穿面前的敌人, 造成 13% 点伤害, 然后拔出你的武器, 结算敌人身上的全部流血伤害并移除所有流血效果。\n\nTags: 武器精通, 流血, 伤害, 物理, 冷却时间, 劈斩.",
			"zhTW": "冷卻時間:{10/9.5/9/8.6/8.2/7.9/7.6/7.4/7.2/7/6.8/6.6/6.5/6.4/6.3/6.2/6.15/6.1/6.05/6} 秒\n\n幸運觸發機率: 50% (per hit)\n刺穿你前方的敵人,造成 13% 點傷害,接著拔出武器,對敵人造成總流血量的傷害並移除流血狀態。\n\nTags: 武器專精, 流血, 傷害, 物理, 冷卻時間, 斬擊."
},
		id: 97,
		maxPoints: 5,
		x: 408.44,
		y: -222.34
	},
	"Enhanced Rupture": {
		baseSkill: "Rupture",
		connections: [ "Rupture", "Fighter's Rupture", "Warrior's Rupture" ],
		description: `Ripping your weapon out of enemies during Rupture causes an explosion that deals 30% Bleeding damage over 5 seconds.`,
		nameLocalized: {
			"deDE": "Verbesserter Blutspieß",
			"esES": "Ruptura mejorada",
			"esMX": "Ruptura Potenciada",
			"frFR": "Rupture renforcée",
			"itIT": "Strazio Rinforzato",
			"jaJP": "ラプチャー(強化版)",
			"koKR": "강화된 파열",
			"plPL": "Wzmocnione Rozerwanie",
			"ptBR": "Ruptura Aperfeiçoada",
			"ruRU": "Усиленный разрыв",
			"zhCN": "强化割裂",
			"zhTW": "強化血肉橫飛"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Eure Waffe während Blutspieß aus Gegnern herausreißt, wird eine Explosion ausgelöst, die im Verlauf von 5 Sek. 30% Blutungsschaden verursacht.",
			"esES": "Arrancar tu arma de los enemigos durante Ruptura provoca una explosión que inflige 30% de daño de sangrado durante 5 s.",
			"esMX": "Arrancar tu arma de los enemigos durante Ruptura causa una explosión que inflige 30% de daño de sangrado durante 5 segundos.",
			"frFR": "Arracher votre arme du corps d'une cible pendant Rupture déclenche une explosion qui inflige 30% points de dégâts de saignement en 5 s.",
			"itIT": "Strappando via la tua arma dai nemici durante Strazio causi un'esplosione che infligge 30% danni da sanguinamento per 5 s.",
			"jaJP": "〈ラプチャー〉の使用中に武器を引き抜いた際に爆発を起こし、5秒かけて30%の出血ダメージを与える。",
			"koKR": "파열 사용 중 적에게서 무기를 빼내면 폭발이 발생하여 5초에 걸쳐 30%의 출혈 피해를 줍니다.",
			"plPL": "Wyrwanie broni z wroga podczas Rozerwania powoduje eksplozję, która zadaje 30% pkt. obrażeń od krwawienia w ciągu 5 sek.",
			"ptBR": "Arrancar sua arma de inimigos durante Ruptura provoca uma explosão que causa 30% de dano de sangramento ao longo de 5 segundos.",
			"ruRU": "Когда вы вырываете оружие из противника, пронзенного \"Разрывом\", происходит взрыв, наносящий 30% ед. урона от кровотечения за 5 сек.",
			"zhCN": "在敌人被割裂 期间拔出你的武器会导致一次爆炸, 在 5 秒内造成 30% 点流血伤害。",
			"zhTW": "在血肉橫飛期間從敵人身上抽出武器,會造成爆炸,在 5 秒內造成 30% 點流血傷害。"
},
		id: 98,
		maxPoints: 1,
		x: 672.735,
		y: -379.125
	},
	"Fighter's Rupture": {
		baseSkill: "Rupture",
		connections: [ "Enhanced Rupture" ],
		description: `Hitting at least 1 enemy with Rupture Heals you for 15% of your Maximum Life.`,
		nameLocalized: {
			"deDE": "Blutspieß des Kämpfers",
			"esES": "Ruptura del luchador",
			"esMX": "Ruptura de Luchador",
			"frFR": "Rupture de duelliste",
			"itIT": "Strazio del Combattente",
			"jaJP": "ラプチャー(闘士)",
			"koKR": "투사의 파열",
			"plPL": "Porywcze Rozerwanie",
			"ptBR": "Ruptura do Lutador",
			"ruRU": "Бойцовский разрыв",
			"zhCN": "斗士割裂",
			"zhTW": "鬥士血肉橫飛"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mindestens 1 Gegner mit Blutspieß trefft, werdet Ihr um 15% Eures maximalen Lebens geheilt.",
			"esES": "Golpear a al menos 1 enemigo con Ruptura te cura un 15% de tu vida máxima.",
			"esMX": "Golpear al menos a 1 enemigo con Ruptura te sana un 15% de tu vida máxima.",
			"frFR": "Toucher au moins 1 adversaire avec Rupture vous rend 15% de votre maximum de points de vie.",
			"itIT": "Colpendo almeno 1 nemico con Strazio ti curi del 15% della tua Vita massima.",
			"jaJP": "〈ラプチャー〉を少なくとも1体の敵に命中させると、ライフが最大値の15%にあたる回復する。",
			"koKR": "파열을 1마리 이상의 적에게 적중시키면 자신의 최대 생명력의 15%만큼 생명력을 회복합니다.",
			"plPL": "Trafienie co najmniej 1 wroga Rozerwaniem przywraca 15% twojego maksymalnego zdrowia.",
			"ptBR": "Atingir pelo menos 1 inimigo com Ruptura cura 15% da sua vida máxima.",
			"ruRU": "Поразив хотя бы 1 противника \"Разрывом\", вы восполняете 15% максимального запаса здоровья.",
			"zhCN": "割裂命中至少 1 名敌人可以为你恢复 15% 生命上限。",
			"zhTW": "以血肉橫飛擊中至少 1 個敵人,可使你恢復生命值上限的 15%。"
},
		id: 99,
		maxPoints: 1,
		x: 962.76,
		y: -398.403
	},
	"Warrior's Rupture": {
		baseSkill: "Rupture",
		connections: [ "Enhanced Rupture" ],
		description: `Hitting enemies with Rupture increases your Attack Speed by +20% for 4 seconds.`,
		nameLocalized: {
			"deDE": "Blutspieß des Kriegers",
			"esES": "Ruptura del guerrero",
			"esMX": "Ruptura de Guerrero",
			"frFR": "Rupture de belliciste",
			"itIT": "Strazio da Guerra",
			"jaJP": "ラプチャー(戦士)",
			"koKR": "전사의 파열",
			"plPL": "Wojownicze Rozerwanie",
			"ptBR": "Ruptura do Guerreiro",
			"ruRU": "Воинский разрыв",
			"zhCN": "勇士割裂",
			"zhTW": "戰士血肉橫飛"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mit Blutspieß Gegner trefft, erhöht sich Eure Angriffsgeschwindigkeit 4 Sek. lang um +20%.",
			"esES": "Golpear a enemigos con Ruptura aumenta tu velocidad de ataque un +20% durante 4 s.",
			"esMX": "Golpear enemigos con Ruptura aumenta tu velocidad de ataque un +20% durante 4 segundos.",
			"frFR": "Toucher des adversaires avec Rupture augmente votre vitesse d'attaque de +20% pendant 4 s.",
			"itIT": "Colpire i nemici con Strazio aumenta la tua velocità d'attacco del +20% per 4 s.",
			"jaJP": "敵に〈ラプチャー〉を命中させると、攻撃速度が4秒間+20%上昇する。",
			"koKR": "파열을 적에게 적중시키면 4초 동안 공격 속도가 +20% 증가합니다.",
			"plPL": "Trafianie wrogów Rozerwaniem zwiększa twoją szybkość ataku o +20% na 4 sek.",
			"ptBR": "Atingir inimigos com Ruptura aumenta sua velocidade de ataque em +20% por 4 segundos.",
			"ruRU": "Когда вы поражаете противников \"Разрывом\", ваша скорость атаки повышается на +20% на 4 сек.",
			"zhCN": "割裂命中敌人会使你的攻击速度提高 +20%, 持续 4 秒。",
			"zhTW": "以血肉橫飛擊中敵人會使你攻擊速度提高 +20%,持續 4 秒。"
},
		id: 100,
		maxPoints: 1,
		x: 674.33,
		y: -520.847
	},
	"Hamstring": {
		connections: [ "Cut to the Bone", "Weapon Mastery" ],
		description: `Your Bleeding effects Slow enemies by {10/20/30/40/50/60/70/80/90/100}%.

Tags: Bleed, Crowd Control.`,
		nameLocalized: {
			"deDE": "Lähmung",
			"esES": "Desjarretar",
			"esMX": "Tendón",
			"frFR": "Brise-genou",
			"itIT": "Azzoppamento",
			"jaJP": "ハムストリング",
			"koKR": "무력화",
			"plPL": "Okulawienie",
			"ptBR": "Cortar Tendão",
			"ruRU": "Подрезание сухожилий",
			"zhCN": "断筋",
			"zhTW": "斷筋"
},
		descriptionLocalized: {
			"deDE": "Eure Blutungseffekte verlangsamen Gegner um {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Blutung, Kontrollverlust.",
			"esES": "Tus efectos de sangrado ralentizan un {10/20/30/40/50/60/70/80/90/100}% a los enemigos.\n\nTags: Sangrado, Control de masas.",
			"esMX": "Los efectos de sangrado ralentizan a los enemigos un {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Sangrado, Control de multitudes.",
			"frFR": "Vos effets de saignement ralentissent les adversaires de {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Saignement, Perte de contrôle.",
			"itIT": "I tuoi effetti di sanguinamento rallentano i nemici del {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Sanguinamento, Effetti debilitanti.",
			"jaJP": "出血効果を与えた敵の移動速度が{10/20/30/40/50/60/70/80/90/100}%低下する。\n\nTags: 出血, 操作障害効果.",
			"koKR": "출혈 효과가 적을 {10/20/30/40/50/60/70/80/90/100}% 감속시킵니다.\n\nTags: 출혈, 군중 제어.",
			"plPL": "Twoje efekty krwawienia spowalniają wrogów o {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Krwawienie, Ograniczanie Kontroli.",
			"ptBR": "Seus efeitos de sangramento desaceleram os inimigos em {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Sangramento, Controle de Grupo.",
			"ruRU": "Ваши эффекты кровотечения замедляют противников на {10/20/30/40/50/60/70/80/90/100}%.\n\nTags: Кровотечение, Контроль.",
			"zhCN": "你的流血效果使敌人减速 {10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 流血, 群控.",
			"zhTW": "你的流血效果會使敵人緩速 {10/20/30/40/50/60/70/80/90/100}%。\n\nTags: 流血, 控場."
},
		id: 101,
		maxPoints: 3,
		x: 480.67,
		y: 0.455
	},
	"Cut to the Bone": {
		connections: [ "Hamstring" ],
		description: `Your Bleeding effects deal x{6/12/18/24/30/36/42/48/54/60}% increased damage to Vulnerable enemies.

Tags: Vulnerable, Bleed, Damage.`,
		nameLocalized: {
			"deDE": "Bis auf die Knochen",
			"esES": "En la llaga",
			"esMX": "Corte al Hueso",
			"frFR": "Jusqu'à l'os",
			"itIT": "Ridotto all'Osso",
			"jaJP": "骨に達する傷",
			"koKR": "뼈 가르기",
			"plPL": "Głębokie Cięcie",
			"ptBR": "Cortar até o Osso",
			"ruRU": "Порез до кости",
			"zhCN": "削骨",
			"zhTW": "入骨之擊"
},
		descriptionLocalized: {
			"deDE": "Eure Blutungseffekte fügen verwundbaren Gegnern x{6/12/18/24/30/36/42/48/54/60}% mehr Schaden zu.\n\nTags: Verwundbar, Blutung, Schaden.",
			"esES": "Tus efectos de sangrado infligen un x{6/12/18/24/30/36/42/48/54/60}% más de daño a enemigos vulnerables.\n\nTags: Vulnerable, Sangrado, Daño.",
			"esMX": "Tus efectos de sangrado infligen un x{6/12/18/24/30/36/42/48/54/60}% más de daño a los enemigos vulnerables.\n\nTags: Vulnerable, Sangrado, Daño.",
			"frFR": "Vos effets de saignement infligent x{6/12/18/24/30/36/42/48/54/60}% de dégâts supplémentaires aux cibles vulnérables.\n\nTags: Vulnérable, Saignement, Dégâts.",
			"itIT": "I tuoi effetti di sanguinamento infliggono il x{6/12/18/24/30/36/42/48/54/60}% di danni aggiuntivi ai nemici vulnerabili.\n\nTags: Vulnerabilità, Sanguinamento, Danni.",
			"jaJP": "脆弱状態の敵に与える出血効果がx{6/12/18/24/30/36/42/48/54/60}%増加する。\n\nTags: 脆弱, 出血, ダメージ.",
			"koKR": "취약 상태의 적에게 출혈 효과로 주는 피해가 x{6/12/18/24/30/36/42/48/54/60}% 증가합니다.\n\nTags: 취약, 출혈, 피해.",
			"plPL": "Twoje efekty krwawienia zadają obrażenia zwiększone o x{6/12/18/24/30/36/42/48/54/60}% odsłoniętym wrogom.\n\nTags: Odsłonięcie, Krwawienie, Obrażenia.",
			"ptBR": "Seus efeitos de sangramento causam {6/12/18/24/30/36/42/48/54/60}% de dano aumentado contra inimigos vulneráveis.\n\nTags: Vulnerável, Sangramento, Dano.",
			"ruRU": "Ваши эффекты кровотечения наносят на x{6/12/18/24/30/36/42/48/54/60}% больше урона уязвимым противникам.\n\nTags: Уязвимость, Кровотечение, Урон.",
			"zhCN": "你的流血效果对处于易伤状态的敌人造成的伤害提高 x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 易伤, 流血, 伤害.",
			"zhTW": "你的流血效果對易傷敵人造成的傷害提高 x{6/12/18/24/30/36/42/48/54/60}%。\n\nTags: 易傷, 流血, 傷害."
},
		id: 102,
		maxPoints: 3,
		x: 856.285,
		y: 0.4
	},
};

barbarianData["Ultimate"] = {
	"Call of the Ancients": {
		connections: [ "Ultimate", "Prime Call of the Ancients" ],
		description: `Cooldown: 50 seconds
Lucky Hit Chance: 30% (per hit)
Call upon 3 Ancients to aid you in battle for 6 seconds.
• Korlic leaps at enemies, dealing 104% damage and swings his weapons in a frenzy, dealing 39% damage per hit.
• Talic spins in a whirlwind rapidly attacking enemies for 65% damage.
• Madawc upheaves the ground, dealing 195% damage.

Tags: Ultimate, Damage, Physical, Cooldown.`,
		nameLocalized: {
			"deDE": "Anrufung der Urahnen",
			"esES": "Llamada a los Ancestros",
			"esMX": "Llamado Ancestral",
			"frFR": "Appel des Anciens",
			"itIT": "Richiamo degli Antichi",
			"jaJP": "古の民の呼び声",
			"koKR": "선조의 귀환",
			"plPL": "Zew Starożytnych",
			"ptBR": "Chamado dos Ancestrais",
			"ruRU": "Зов Древних",
			"zhCN": "先祖召唤",
			"zhTW": "先祖召喚"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 50 Sek.\nGlückstrefferchance: 30% (per hit)\nBeschwört 3 Urahnen, die Euch 6 Sek. lang im Kampf unterstützen.\n• Korlic springt Gegner an, verursacht 104% Schaden und schwingt wild seine Waffen, die 39% Schaden pro Treffer verursachen.\n• Talic wirbelt umher und fügt Gegnern dabei 65% Schaden zu.\n• Madawc wühlt den Boden auf und verursacht 195% Schaden.\n\nTags: Ultimativ, Schaden, Physisch, Abklingzeit.",
			"esES": "Tiempo de reutilización: 50 s\nProbabilidad de golpe de suerte: 30% (per hit)\nLlamas a 3 Ancestros para que te ayuden en combate durante 6 s.\n• Korlic salta sobre los enemigos, les inflige 104% de daño y blande frenéticamente sus armas para infligir 39% de daño por golpe.\n• Talic gira como un torbellino y ataca rápidamente para infligir 65% de daño a los enemigos.\n• Madawc levanta el suelo e inflige 195% de daño.\n\nTags: Definitiva, Daño, Física, Tiempo de reutilización.",
			"esMX": "Recuperación: 50 segundos\nProbabilidad de golpe afortunado: 30% (per hit)\nConvoca a 3 Ancestros para que te ayuden en la batalla durante 6 segundos.\n• Korlic salta sobre los enemigos, les inflige 104% de daño y golpea con sus armas en un frenesí, lo que inflige 39% de daño por golpe.\n• Talic gira en un remolino, ataca rápidamente a los enemigos e inflige 65% de daño.\n• Madawc levanta el terreno, lo que inflige 195% de daño.\n\nTags: Máxima, Daño, Física, Recuperación.",
			"frFR": "Temps de recharge: 50 s\nChances d'obtenir un coup de chance: 30% (per hit)\nVous faites appel à 3 Anciens qui viennent vous aider en combat pendant 6 s.\n• Korlic se jette sur les adversaires en infligeant 104% points de dégâts, et il les frappe frénétiquement avec ses armes en infligeant 39% points de dégâts par coup.\n• Talic attaque en tourbillonnant et inflige 65% points de dégâts aux adversaires.\n• Madawc soulève le sol, ce qui inflige 195% points de dégâts.\n\nTags: Ultime, Dégâts, Dégâts physiques, Temps de recharge.",
			"itIT": "Tempo di recupero: 50 s\nProbabilità di colpo fortunato: 30% (per hit)\nRichiami 3 Antichi per aiutarti in battaglia per 6 s.\n• Korlic si lancia sui nemici, infliggendo 104% danni e agita la sua arma preso dalla frenesia, infliggendo 39% danni per colpo.\n• Talic gira su se stesso e attacca rapidamente i nemici infliggendo 65% danni.\n• Madawc solleva il terreno, infliggendo 195% danni.\n\nTags: Ultra, Danni, Fisico, Tempo di recupero.",
			"jaJP": "クールダウン: 50秒\n幸運の一撃発生率: 30% (per hit)\n3人の古の民を6秒間戦闘に援軍として招集する。\n• コーリックは敵に飛びかかって104%のダメージを与え、猛烈に武器を振るって命中ごとに39%のダメージを与える。\n• タリックは回転して旋風を起こし、敵に素早く攻撃して65%のダメージを与える。\n• マドウクは地面を隆起させ、195%のダメージを与える。\n\nTags: 奥義, ダメージ, 物理, クールダウン.",
			"koKR": "재사용 대기시간: 50초\n행운의 적중 확률: 30% (per hit)\n선조 3명을 소환하여 6초 동안 전투를 돕게 합니다.\n• 콜릭은 적에게 도약하여 104%의 피해를 주고, 광분하며 무기를 휘둘러 적중당 39%의 피해를 줍니다.\n• 탈릭은 소용돌이로 회전하며 적들을 빠르게 공격하여 65%의 피해를 줍니다.\n• 마도크는 지각 변동을 일으켜 195%의 피해를 줍니다.\n\nTags: 궁극기, 피해, 물리, 재사용 대기시간.",
			"plPL": "Czas odnowienia: 50 sek.\nSzansa na szczęśliwy traf: 30% (per hit)\nWzywasz 3 starożytnych, którzy będą walczyć u twego boku przez 6 sek.\n• Korlik doskakuje do wrogów i zadaje im 104% pkt. obrażeń, a następnie wykonuje serię ciosów bronią, zadając przy każdym trafieniu 39% pkt. obrażeń.\n• Talik wiruje i wykonuje błyskawiczne ataki wymierzone we wrogów, zadając im 65% pkt. obrażeń.\n• Madok rozdziera ziemię pod nogami wrogów, zadając im 195% pkt. obrażeń.\n\nTags: Specjalne, Obrażenia, Fizyczne, Odnowienie.",
			"ptBR": "Recarga: 50 segundos\nChance de Golpe de Sorte: 30% (per hit)\nChama 3 Ancestrais para ajudar você em batalha por 6 segundos.\n• Korlic salta nos inimigos, causando 104% de dano e golpeia com suas armas em um frenesi, causando 39% de dano por acerto.\n• Talic gira em um redemoinho, atacando inimigos rapidamente e causando 65% de dano.\n• Madawc perturba o solo, causando 195% de dano.\n\nTags: Suprema, Dano, Física, Recarga.",
			"ruRU": "Время восстановления: 50 сек.\nВероятность удачного удара: 30% (per hit)\nПризывает на помощь 3 Древних на 6 сек.\n• Корлик прыгает на врагов, нанося 104% ед. урона, и бешено размахивает оружием, нанося 39% ед. урона каждым ударом.\n• Талик крутится в вихре стали, быстро нанося врагам по 65% ед. урона.\n• Мадавк сотрясает землю, нанося врагам 195% ед. урона.\n\nTags: Мощное умение, Урон, Физический урон, Время восстановления.",
			"zhCN": "冷却时间: 50 秒\n幸运一击几率: 30% (per hit)\n召唤三位先祖协助你进行战斗, 持续 6 秒。\n• 科里克发动腾空斩跃向敌人, 造成 104% 点伤害并狂乱挥舞他的武器, 每一击造成 39% 点伤害。\n• 塔里克发动旋风斩快速攻击敌人, 造成 65% 点伤害。\n• 马道克发动扬石飞沙, 造成 195% 点伤害。\n\nTags: 终极技能, 伤害, 物理, 冷却时间.",
			"zhTW": "冷卻時間: 50 秒\n幸運觸發機率: 30% (per hit)\n召喚最多 3 名先祖協助作戰,持續 6 秒。\n• 科力克向敵人躍擊,造成 104% 點傷害,並狂亂揮動武器,每次擊中造成 39% 點傷害。\n• 塔力克以旋風之姿快刀亂斬敵人,造成 65% 點傷害。\n• 馬道克掀起地面,造成 195% 點傷害。\n\nTags: 絕招, 傷害, 物理, 冷卻時間."
},
		id: 103,
		maxPoints: 1,
		x: -2.535,
		y: -280.23
	},
	"Prime Call of the Ancients": {
		baseSkill: "Call of the Ancients",
		connections: [ "Supreme Call of the Ancients", "Call of the Ancients" ],
		description: `While Call of the Ancients is active, gain +10% bonus Attack Speed and x10% increased damage.`,
		nameLocalized: {
			"deDE": "Oberste Anrufung der Urahnen",
			"esES": "Llamada a los Ancestros mayor",
			"esMX": "Llamado Ancestral Supremo",
			"frFR": "Appel des Anciens primordial",
			"itIT": "Richiamo degli Antichi Pregiato",
			"jaJP": "古の民の呼び声(上級)",
			"koKR": "극상의 선조의 귀환",
			"plPL": "Większy Zew Starożytnych",
			"ptBR": "Chamado dos Ancestrais Primordial",
			"ruRU": "Первородный зов Древних",
			"zhCN": "至尊先祖召唤",
			"zhTW": "強烈先祖召喚"
},
		descriptionLocalized: {
			"deDE": "Solange Anrufung der Urahnen aktiv ist, erhaltet Ihr zusätzlich +10% Angriffsgeschwindigkeit und verursacht x10% mehr Schaden.",
			"esES": "Mientras dura Llamada a los Ancestros, obtienes un +10% de velocidad de ataque adicional y un x10% más de daño.",
			"esMX": "Mientras Llamado Ancestral está activa, obtienes un +10% adicional de velocidad de ataque y un x10% más de daño.",
			"frFR": "Tant qu'Appel des Anciens est actif, votre vitesse d'attaque est augmentée de +10% et vous infligez x10% de dégâts supplémentaires.",
			"itIT": "Mentre Richiamo degli Antichi è attivo, la tua velocità d'attacco aumenta del +10% e infliggi il x10% di danni aggiuntivi.",
			"jaJP": "〈古の民の呼び声〉が発動中は攻撃速度が+10%上昇し、与えるダメージがx10%増加する。",
			"koKR": "선조의 귀환이 활성화되어 있는 동안 공격 속도가 +10%, 공격력이 x10% 증가합니다.",
			"plPL": "Kiedy Zew Starożytnych jest aktywny, zyskujesz premię +10% do szybkości ataku oraz x10% do zadawanych obrażeń.",
			"ptBR": "Enquanto Chamado dos Ancestrais está ativo, recebe +10% de bônus de velocidade de ataque e 10% de dano aumentado.",
			"ruRU": "Пока действует \"Зов Древних\", ваша скорость атаки повышается на +10%, а наносимый урон увеличивается на x10%.",
			"zhCN": "先祖召唤激活时, 攻击速度提高 +10%, 造成的伤害提高 x10%。",
			"zhTW": "在先祖召喚生效時,獲得 +10% 攻擊速度加成,且傷害提高 x10%。"
},
		id: 104,
		maxPoints: 1,
		x: 2.05,
		y: -481.575
	},
	"Supreme Call of the Ancients": {
		baseSkill: "Call of the Ancients",
		connections: [ "Prime Call of the Ancients" ],
		description: `Each of the Ancients gains additional power:
Korlic: You gain 10 Fury each time Korlic damages an enemy with his Frenzy.
Talic: Enemies are Slowed by 50% for 1 second when damaged by his Whirlwind.
Madawc: 30% chance to Stun enemies for 3 seconds when using his Upheaval.`,
		nameLocalized: {
			"deDE": "Überlegene Anrufung der Urahnen",
			"esES": "Llamada a los Ancestros suprema",
			"esMX": "Llamado Ancestral Superior",
			"frFR": "Appel des Anciens suprême",
			"itIT": "Richiamo degli Antichi Supremo",
			"jaJP": "古の民の呼び声(高級)",
			"koKR": "최고의 선조의 귀환",
			"plPL": "Największy Zew Starożytnych",
			"ptBR": "Chamado dos Ancestrais Supremo",
			"ruRU": "Неотвратимый зов Древних",
			"zhCN": "至极先祖召唤",
			"zhTW": "終極先祖召喚"
},
		descriptionLocalized: {
			"deDE": "Alle Urahnen erhalten zusätzliche Fähigkeiten:\nKorlic: Jedes Mal, wenn Korlic einem Gegner mit Raserei Schaden zufügt, erhaltet Ihr 10 Wut.\nTalic: Gegner werden 1 Sek. lang um 50% verlangsamt, wenn sie durch seinen Wirbelwind Schaden erleiden.\nMadawc: Chance von 30%, Gegner beim Einsatz von Aufwühlen 3 Sek. lang zu betäuben.",
			"esES": "Cada uno de los Ancestros obtiene poder adicional:\nKorlic: Obtienes 10 de furia cada vez que Korlic inflige daño a un enemigo con su Frenesí.\nTalic: Los enemigos quedan ralentizados un 50% durante 1 s cuando les inflige daño con su Torbellino.\nMadawc: 30% de probabilidad de aturdir a los enemigos durante 3 s cuando usa Ataque tectónico.",
			"esMX": "Cada Ancestro se vuelve más fuerte:\nKorlic: Obtienes 10 de Furia cada vez que Korlic inflige daño a un enemigo con su Frenesí.\nTalic: Los enemigos se ralentizan un 50% durante 1 segundo cuando reciben daño de su Remolino.\nMadawc: Obtienes un 30% de probabilidad de aturdir a los enemigos durante 3 segundos cuando usa su Conmoción.",
			"frFR": "Chacun des Anciens acquiert un pouvoir supplémentaire :\nKorlic: vous obtenez 10 points de fureur chaque fois que Korlic blesse une cible avec Frénésie.\nTalic: les cibles sont ralenties de 50% pendant 1 s après avoir été blessées par son Tourbillon.\nMadawc: 30% de chances d'étourdir les adversaires pendant 3 s lorsqu'il utilise Soulèvement.",
			"itIT": "Ognuno degli Antichi ottiene un potere aggiuntivo:\nKorlic: ottieni 10 furia ogni volta che Korlic infligge danni a un nemico con la sua Frenesia.\nTalic: i nemici sono rallentati del 50% per 1 s se vengono feriti dal suo Turbine.\nMadawc: ha una probabilità del 30% di stordire i nemici per 3 s quando usa Tumulto.",
			"jaJP": "古の民が、さらなる力を獲得する:\nコーリック: コーリックが〈フレンジー〉で敵にダメージを与えるたびに、10の怒気を獲得する。\nタリック: タリックの〈ワールウィンド〉で敵にダメージを与えると、その敵の速度が1秒間50%低下する。\nマドウク: マドウクが〈隆起〉を使うたびに、30%の確率で敵を3秒間スタンさせる。",
			"koKR": "선조마다 추가 능력을 얻습니다.\n콜릭: 콜릭이 광분으로 적에게 피해를 줄 때마다 분노를 10 생성합니다.\n탈릭: 탈릭의 소용돌이에 피해를 받은 적이 1초 동안 50% 감속됩니다.\n마도크: 마도크가 지각 변동을 사용하면 30% 확률로 적이 3초 동안 기절합니다.",
			"plPL": "Każdy ze Starożytnych zyskuje dodatkową moc:\nKorlik: Otrzymujesz 10 pkt. furii za każdym razem, gdy Korlik zrani wroga, używając Amoku.\nTalik: Wrogowie zostają spowolnieni o 50% na 1 sek., gdy zrani ich Trąbą Powietrzną.\nMadok: Ma 30% szans na ogłuszenie wrogów na 3 sek., kiedy używa Wypiętrzenia.",
			"ptBR": "Cada um dos Ancestrais recebe poder adicional:\nKorlic: Você recebe 10 de fúria sempre que Korlic causa dano a um inimigo com Frenesi.\nTalic: Inimigos são desacelerados em 50% por 1 segundo ao serem atingidos por Redemoinho.\nMadawc: Tem 30% de chance de atordoar inimigos por 3 segundos ao usar Revolta.",
			"ruRU": "Каждый из Древних получает дополнительное свойство:\nКорлик: вы накапливаете 10 ед. ярости каждый раз, когда Корлик наносит противнику урон \"Бешенством\".\nТалик: \"Вихрь\" замедляет противников на 50% на 1 сек.\nМадавк: \"Выброс земли\" с вероятностью 30% оглушает противников на 3 сек.",
			"zhCN": "每位先祖可以获得额外能力:\n科里克: 科里克每次使用狂乱对一名敌人造成伤害时, 你获得 10 点怒气。\n塔里克: 塔里克使用旋风斩对敌人造成伤害时, 使其减速 50%, 持续 1 秒。\n马道克: 马道克使用扬石飞沙时有 30% 几率使敌人昏迷 3 秒。",
			"zhTW": "每位先祖都會獲得額外能力:\n科力克:每當科力克以狂亂對敵人造成傷害時,你會獲得 10 點怒氣。\n塔力克:以旋風斬傷害敵人會使敵人緩速 50%,持續 1 秒。\n馬道克:使用動盪震擊時有 30% 機率擊昏敵人 3 秒。"
},
		id: 105,
		maxPoints: 1,
		x: 6.2,
		y: -644.245
	},
	"Iron Maelstrom": {
		connections: [ "Ultimate", "Prime Iron Maelstrom" ],
		description: `Cooldown: 60 seconds
Lucky Hit Chance: 24.167% (per hit)
Activate three times to attach chains to each of your weapons and perform an attack:
• First, your Two-Handed Bludgeoning weapon slams into the ground, dealing 60% damage and Stunning enemies for 2 seconds.
• Next, your Two-Handed Slashing weapon swipes in front of you, dealing 20% damage and inflicting 120% Bleeding damage over 5 seconds.
• Finally, your Dual Wield weapons swing around you, dealing 32.5% damage per hit.

Tags: Ultimate, Crowd Control, Bleed, Damage, Physical, Cooldown, Two-Handed, Bludgeoning, Dual Wield, Slashing.`,
		nameLocalized: {
			"deDE": "Eiserner Mahlstrom",
			"esES": "Vorágine de hierro",
			"esMX": "Vorágine de Hierro",
			"frFR": "Maelström d'acier",
			"itIT": "Maelstrom di Ferro",
			"jaJP": "鋼鉄の大渦",
			"koKR": "강철 소용돌이",
			"plPL": "Żelazna Nawałnica",
			"ptBR": "Maelstrom de Ferro",
			"ruRU": "Круговорот стали",
			"zhCN": "钢铁漩涡",
			"zhTW": "鋼鐵漩渦"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 60 Sek.\nGlückstrefferchance: 24.167% (per hit)\nAktiviert diese Fertigkeit dreimal, um Ketten an jeder Eurer Waffen zu befestigen und einen Angriff auszuführen:\n• Zuerst schmettert Ihr Eure zweihändige Wuchtwaffe auf den Boden, wobei Ihr 60% Schaden verursacht und Gegner 2 Sek. lang betäubt.\n• Danach schwingt Ihr Eure zweihändige Hiebwaffe vor Euch umher, wobei Ihr 20% Schaden und im Verlauf von 5 Sek. 120% Blutungsschaden verursacht.\n• Zuletzt schwingen Eure beidhändigen Waffen um Euch herum, wobei sie 32.5% Schaden pro Treffer verursachen.\n\nTags: Ultimativ, Kontrollverlust, Blutung, Schaden, Physisch, Abklingzeit, Zweihändig, Wuchtwaffe, Zwei Waffen, Hiebwaffe.",
			"esES": "Tiempo de reutilización: 60 s\nProbabilidad de golpe de suerte: 24.167% (per hit)\nActiva la habilidad tres veces para acoplar cadenas a cada una de tus armas y ejecutar un ataque:\n• Primero, tu arma contundente de dos manos golpea el suelo para infligir 60% de daño y aturdir a los enemigos durante 2 s.\n• Después, tu arma cortante de dos manos da un tajo frente a ti para infligir 20% de daño y 120% de daño de sangrado durante 5 s.\n• Por último, atacas a tu alrededor con tus armas de doble empuñadura para infligir 32.5% de daño por golpe.\n\nTags: Definitiva, Control de masas, Sangrado, Daño, Física, Tiempo de reutilización, Dos manos, Contundente, Doble empuñadura, Cortante.",
			"esMX": "Recuperación: 60 segundos\nProbabilidad de golpe afortunado: 24.167% (per hit)\nActiva tres veces para enganchar cadenas a cada una de tus armas y realizar un ataque:\n• Primero, tu arma de impacto de dos manos golpea el suelo, lo que inflige 60% de daño y aturde a los enemigos durante 2 segundos.\n• Después, tu arma blanca de dos manos golpea frente a ti, lo que inflige 20% de daño y 120% de daño de sangrado durante 5 segundos.\n• Finalmente, tus armas de ambidestreza azotan frente a ti e infligen 32.5% de daño por golpe.\n\nTags: Máxima, Control de multitudes, Sangrado, Daño, Física, Recuperación, Dos manos, Impacto, Ambidestreza, Corte.",
			"frFR": "Temps de recharge: 60 s\nChances d'obtenir un coup de chance: 24.167% (per hit)\nActivez trois fois cette compétence pour attacher des chaînes à chacune de vos armes et effectuer une attaque.\n• D'abord, vous frappez le sol avec votre arme contondante à deux mains, ce qui inflige 60% points de dégâts et étourdit les adversaires pendant 2 s.\n• Ensuite, vous effectuez une attaque de taille devant vous avec votre arme tranchante à deux mains, ce qui inflige 20% points de dégâts à l'impact et 120% points de dégâts de saignement en 5 s.\n• Enfin, vous frappez les adversaires autour de vous avec vos deux armes, ce qui inflige 32.5% points de dégâts par coup.\n\nTags: Ultime, Perte de contrôle, Saignement, Dégâts, Dégâts physiques, Temps de recharge, Arme à deux mains, Arme contondante, Deux armes, Tranchant.",
			"itIT": "Tempo di recupero: 60 s\nProbabilità di colpo fortunato: 24.167% (per hit)\nAttiva tre volte per mettere delle catene a tutte le tue armi ed eseguire un attacco:\n• Prima la tua arma contundente a due mani colpisce il terreno, infliggendo 60% danni e stordendo i nemici per 2 s.\n• Poi la tua arma tagliente a due mani affonda davanti a te, infliggendo 20% danni e 120% danni da sanguinamento per 5 s.\n• Infine, le tue doppie armi colpiscono attorno a te, infliggendo 32.5% danni per colpo.\n\nTags: Ultra, Effetti debilitanti, Sanguinamento, Danni, Fisico, Tempo di recupero, A due mani, Contundente, Doppia arma, Tagliente.",
			"jaJP": "クールダウン: 60秒\n幸運の一撃発生率: 24.167% (per hit)\n3段階で発動し、各武器に鎖を取り付けて攻撃を行う:\n• 最初は両手持ちの殴打武器に鎖を取り付けて地面を殴りつけ、敵に60%のダメージを与えて2秒間スタンさせる。\n• 次は両手持ちの斬撃武器で前方を薙ぎ払い、20%のダメージを与え、5秒間かけて120%の出血ダメージを与える。•\n最後は二刀流武器を振り回し、命中するごとに32.5%のダメージを与える。\n\nTags: 奥義, 操作障害効果, 出血, ダメージ, 物理, クールダウン, 両手用武器, 殴打, 二刀流, 斬撃.",
			"koKR": "재사용 대기시간: 60초\n행운의 적중 확률: 24.167% (per hit)\n세 번 활성화하여 각각의 무기에 사슬을 달아 공격을 가합니다.\n• 첫 번째로 양손 둔기로 바닥을 내리쳐 60%의 피해를 주고 적을 2초 동안 기절시킵니다.\n• 그 다음, 양손 베는 무기로 전방을 베어 20%의 피해를 주고 5초에 걸쳐 120%의 출혈 피해를 줍니다.\n• 마지막으로, 쌍수 무기를 주위에 휘둘러, 적중당 32.5%의 피해를 줍니다.\n\nTags: 궁극기, 군중 제어, 출혈, 피해, 물리, 재사용 대기시간, 양손 무기, 둔기, 쌍수 무기, 베는 무기.",
			"plPL": "Czas odnowienia: 60 sek.\nSzansa na szczęśliwy traf: 24.167% (per hit)\nAktywuj 3 razy, aby przytwierdzić łańcuch do swojej broni i wykonać atak:\n• Najpierw uderzasz swoją dwuręczną bronią obuchową w ziemię i zadajesz wrogom 60% pkt. obrażeń oraz ogłuszasz ich na 2 sek.\n• Potem wykonujesz przed sobą zamach dwuręczną bronią sieczną, zadając wrogom 20% pkt. obrażeń i wywołując u nich 120% pkt. obrażeń od krwawienia w ciągu 5 sek.\n• Na koniec wykonujesz wokół siebie atak bronią w każdej ręce i zadajesz przy każdym trafieniu 32.5% pkt. obrażeń.\n\nTags: Specjalne, Ograniczanie Kontroli, Krwawienie, Obrażenia, Fizyczne, Odnowienie, Dwuręczne, Obuchowe, Broń w Każdej Ręce, Sieczne.",
			"ptBR": "Recarga: 60 segundos\nChance de Golpe de Sorte: 24.167% (per hit)\nAtive três vezes para prender correntes a cada uma de suas armas e realizar um ataque:\n• Primeiro, sua arma de concussão de duas mãos golpeia o chão, causando 60% de dano e atordoando inimigos por 2 segundos.\n• Na ativação seguinte, sua arma de corte de duas mãos golpeia à sua frente, causando 20% de dano e aplicando 120% de dano de sangramento ao longo de 5 segundos.\n• Por fim, suas armas de empunhadura dupla golpeiam ao seu redor, causando 32.5% de dano por acerto.\n\nTags: Suprema, Controle de Grupo, Sangramento, Dano, Física, Recarga, Duas mãos, Concussão, Empunhadura Dupla, Corte.",
			"ruRU": "Время восстановления: 60 сек.\nВероятность удачного удара: 24.167% (per hit)\nВы 3 раза прикрепляете цепи к оружию и атакуете:\n• Сперва вы бьете по земле двуручным дробящим оружием, нанося 60% ед. урона и оглушая врагов на 2 сек.\n• Затем вы раскручиваете двуручное рубящее оружие, нанося 20% ед. урона и нанося 120% ед. урона от кровотечения за 5 сек.\n• И наконец, вы раскручиваете одноручное оружие, нанося 32.5% ед. урона каждым попаданием.\n\nTags: Мощное умение, Контроль, Кровотечение, Урон, Физический урон, Время восстановления, Двуручное, Дробящее оружие, Оружие в каждой руке, Рубящее.",
			"zhCN": "冷却时间: 60 秒\n幸运一击几率: 24.167% (per hit)\n在每把武器上附加锁链并实施攻击, 共计三次:\n• 第一次, 你的双手钝击武器猛砸地面, 造成 60% 点伤害并使敌人昏迷 2 秒。\n• 第二次, 你的双手劈砍武器挥向前方, 造成 20% 点伤害并在接下来的 5 秒内造成 120% 点流血伤害。\n• 第三次, 你的双持武器在身边挥舞, 每次命中造成 32.5% 点伤害。\n\nTags: 终极技能, 群控, 流血, 伤害, 物理, 冷却时间, 双手, 钝击, 双持, 劈斩.",
			"zhTW": "冷卻時間: 60 秒\n幸運觸發機率: 24.167% (per hit)\n啟動三次會為你的每一把武器附加鎖鍊並進行一次攻擊:\n• 首先,你使用雙手鈍擊武器重擊地面,造成 60% 點傷害並擊昏敵人,持續 2 秒。\n• 接著,你使用雙手斬擊武器在你前方掃擊,造成 20% 點傷害,並在 5 秒內施加 120% 點流血傷害。\n• 最後,你使用雙持武器在你周圍揮擊,每次命中造成 32.5% 點傷害。\n\nTags: 絕招, 控場, 流血, 傷害, 物理, 冷卻時間, 雙手, 鈍擊, 雙持, 斬擊."
},
		id: 106,
		maxPoints: 1,
		x: -539.3,
		y: -1.915
	},
	"Prime Iron Maelstrom": {
		baseSkill: "Iron Maelstrom",
		connections: [ "Supreme Iron Maelstrom", "Iron Maelstrom" ],
		description: `Iron Maelstrom gains +10% increased Critical Strike Chance and deals x20% increased Critical Strike Damage.`,
		nameLocalized: {
			"deDE": "Oberster Eiserner Mahlstrom",
			"esES": "Vorágine de hierro mayor",
			"esMX": "Vorágine de Hierro Suprema",
			"frFR": "Maelström d'acier primordial",
			"itIT": "Maelstrom di Ferro Pregiato",
			"jaJP": "鋼鉄の大渦(上級)",
			"koKR": "극상의 강철 소용돌이",
			"plPL": "Większa Żelazna Nawałnica",
			"ptBR": "Maelstrom de Ferro Primordial",
			"ruRU": "Первозданный круговорот стали",
			"zhCN": "至尊钢铁漩涡",
			"zhTW": "強烈鋼鐵漩渦"
},
		descriptionLocalized: {
			"deDE": "Eiserner Mahlstrom erhält eine um +10% erhöhte kritische Trefferchance und verursacht x20% mehr kritischen Trefferschaden.",
			"esES": "Vorágine de hierro obtiene un +10% más de probabilidad de golpe crítico e inflige un x20% más de daño de golpe crítico.",
			"esMX": "Vorágine de Hierro obtiene un +10% más de probabilidad de golpe crítico e inflige un x20% más de daño de golpe crítico.",
			"frFR": "Maelström d'acier a +10% de chances supplémentaires d'infliger un coup critique et inflige x20% de dégâts critiques supplémentaires.",
			"itIT": "La probabilità di critico di Maelstrom di Ferro aumenta del +10% e infligge il x20% di danni critici aggiuntivi.",
			"jaJP": "〈鋼鉄の大渦〉のクリティカル率が+10%上昇し、クリティカルダメージがx20%増加する。",
			"koKR": "강철 소용돌이의 극대화 확률이 +10% 증가하고, 극대화 피해가 x20% 증가합니다.",
			"plPL": "Żelazna Nawałnica ma szansę na trafienie krytyczne zwiększoną o +10% i zadaje obrażenia od trafień krytycznych zwiększone o x20%.",
			"ptBR": "Maelstrom de Ferro recebe +10% de chance de acerto crítico aumentada e causa 20% de dano de acerto crítico aumentado.",
			"ruRU": "Вероятность критического эффекта \"Круговорота стали\" повышается на +10%, а критический урон увеличивается на x20%.",
			"zhCN": "钢铁漩涡的暴击几率提高 +10%, 暴击伤害提高 x20%。",
			"zhTW": "鋼鐵漩渦的爆擊機率提高 +10%,造成的爆擊傷害提高 x20%。"
},
		id: 107,
		maxPoints: 1,
		x: -913.285,
		y: -2.255
	},
	"Supreme Iron Maelstrom": {
		baseSkill: "Iron Maelstrom",
		connections: [ "Prime Iron Maelstrom" ],
		description: `Dealing direct damage to an enemy after swapping weapons reduces Iron Maelstrom's Cooldown by 1 second.`,
		nameLocalized: {
			"deDE": "Überlegener Eiserner Mahlstrom",
			"esES": "Vorágine de hierro suprema",
			"esMX": "Vorágine de Hierro Superior",
			"frFR": "Maelström d'acier suprême",
			"itIT": "Maelstrom di Ferro Supremo",
			"jaJP": "鋼鉄の大渦(高級)",
			"koKR": "최고의 강철 소용돌이",
			"plPL": "Największa Żelazna Nawałnica",
			"ptBR": "Maelstrom de Ferro Supremo",
			"ruRU": "Неотвратимый круговорот стали",
			"zhCN": "至极钢铁漩涡",
			"zhTW": "終極鋼鐵漩渦"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr nach dem Wechseln Eurer Waffen einem Gegner direkten Schaden zufügt, verringert sich die Abklingzeit von Eiserner Mahlstrom um 1 Sek.",
			"esES": "Infligir daño directo a un enemigo tras cambiar de armas reduce 1 s el tiempo de reutilización de Vorágine de hierro.",
			"esMX": "Infligir daño directo a un enemigo después de alternar armas reduce 1 segundo la recuperación de Vorágine de Hierro.",
			"frFR": "Lorsque vous infligez des dégâts directs à une cible après avoir changé d'arme, le temps de recharge de Maelström d'acier est réduit de 1 s.",
			"itIT": "Infliggere danni diretti a un nemico dopo aver scambiato le armi riduce il tempo di recupero di Maelstrom di Ferro di 1 s.",
			"jaJP": "武器を切り替えた後に敵に直接ダメージを負わせると、〈鋼鉄の大渦〉のクールダウンが1秒短くなる。",
			"koKR": "무기를 교체한 후 적에게 직접 피해를 주면 강철 소용돌이의 재사용 대기시간이 1초 감소합니다.",
			"plPL": "Zadawanie bezpośrednich obrażeń wrogowi po zmianie broni skraca czas odnowienia Żelaznej Nawałnicy o 1 sek.",
			"ptBR": "Causar dano direto a um inimigo depois de trocar de armas reduz a recarga de Maelstrom de Ferro em 1 segundo.",
			"ruRU": "При нанесении прямого урона сразу после смены оружия время восстановления \"Круговорота стали\" сокращается на 1 сек.",
			"zhCN": "切换武器后对一名敌人造成直接伤害, 可以使钢铁漩涡的冷却时间缩短 1 秒。",
			"zhTW": "在切換武器後對敵人造成直接傷害可使鋼鐵漩渦的冷卻時間縮短 1 秒。"
},
		id: 108,
		maxPoints: 1,
		x: -1218.25,
		y: -2.685
	},
	"Duelist": {
		connections: [ "Ultimate" ],
		description: `Attack Speed is increased by +{3/6/9/12/15/18/21/24/27/30}% while using One-Handed weapons.

Tags: Attack Speed, Dual Wield.`,
		nameLocalized: {
			"deDE": "Duellant",
			"esES": "Duelista",
			"esMX": "Duelista",
			"frFR": "Duelliste",
			"itIT": "Duellante",
			"jaJP": "決闘士",
			"koKR": "결투사",
			"plPL": "Zawodnik",
			"ptBR": "Duelista",
			"ruRU": "Дуэлянт",
			"zhCN": "决斗家",
			"zhTW": "決鬥者"
},
		descriptionLocalized: {
			"deDE": "Bei der Verwendung von Einhandwaffen erhöht sich die Angriffsgeschwindigkeit um +{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Angriffsgeschwindigkeit, Zwei Waffen.",
			"esES": "La velocidad de ataque aumenta un +{3/6/9/12/15/18/21/24/27/30}% al usar armas de una mano.\n\nTags: Velocidad de ataque, Doble empuñadura.",
			"esMX": "Tu velocidad de ataque aumenta un +{3/6/9/12/15/18/21/24/27/30}% cuando usas armas de una mano.\n\nTags: Velocidad de ataque, Ambidestreza.",
			"frFR": "Lorsque vous maniez des armes à une main, votre vitesse d'attaque est augmentée de +{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Vitesse d'attaque, Deux armes.",
			"itIT": "La velocità d'attacco aumenta del +{3/6/9/12/15/18/21/24/27/30}% se usi armi a una mano.\n\nTags: Velocità d'attacco, Doppia arma.",
			"jaJP": "片手用武器を使用する際の攻撃速度が+{3/6/9/12/15/18/21/24/27/30}%上昇する。\n\nTags: 攻撃速度, 二刀流.",
			"koKR": "한손 무기를 사용할 때 공격 속도가 +{3/6/9/12/15/18/21/24/27/30}% 증가합니다.\n\nTags: 공격 속도, 쌍수 무기.",
			"plPL": "Szybkość ataku wzrasta o +{3/6/9/12/15/18/21/24/27/30}%, gdy korzystasz z broni jednoręcznej.\n\nTags: Szybkość Ataku, Broń w Każdej Ręce.",
			"ptBR": "A velocidade de ataque é aumentada em +{3/6/9/12/15/18/21/24/27/30}% ao usar armas de uma mão.\n\nTags: Velocidade de Ataque, Empunhadura Dupla.",
			"ruRU": "При использовании одноручного оружия ваша скорость атаки повышается на +{3/6/9/12/15/18/21/24/27/30}%.\n\nTags: Скорость атаки, Оружие в каждой руке.",
			"zhCN": "使用单手武器时攻击速度提高 +{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 攻击速度, 双持.",
			"zhTW": "使用單手武器時,攻擊速度提高 +{3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 攻擊速度, 雙持."
},
		id: 109,
		maxPoints: 3,
		x: -396.295,
		y: -207.635
	},
	"Wrath of the Berserker": {
		connections: [ "Ultimate", "Prime Wrath of the Berserker" ],
		description: `Cooldown: 60 seconds
Explode into rage, Knocking Back surrounding enemies and gaining Berserking and Unstoppable for 5 seconds. For the next 10 seconds, dealing direct damage with Basic Skills grants Berserking for 5 seconds.

Tags: Ultimate, Unstoppable, Berserking, Cooldown, Basic.`,
		nameLocalized: {
			"deDE": "Zorn des Berserkers",
			"esES": "Cólera de berserker",
			"esMX": "Furia del Vesánico",
			"frFR": "Courroux du berserker",
			"itIT": "Collera del Berserker",
			"jaJP": "狂戦士の憤怒",
			"koKR": "광전사의 진노",
			"plPL": "Gniew Berserkera",
			"ptBR": "Fúria do Berserker",
			"ruRU": "Гнев берсерка",
			"zhCN": "狂战士之怒",
			"zhTW": "狂戰之怒"
},
		descriptionLocalized: {
			"deDE": "Abklingzeit: 60 Sek.\nExplodiert vor Wut und stoßt Gegner in der Nähe zurück. Ihr verfallt 5 Sek. lang in den Berserkermodus und werdet unaufhaltsam. Im Verlauf der nächsten 10 Sek. verfallt Ihr jedes Mal 5 Sek. lang in den Berserkermodus, wenn Ihr mit Basisfertigkeiten direkten Schaden verursacht.\n\nTags: Ultimativ, Unaufhaltsam, Berserkermodus, Abklingzeit, Basis.",
			"esES": "Tiempo de reutilización: 60 s\nExplotas de rabia, lo que hace que repelas a los enemigos cercanos y obtengas vesania e imparable durante 5 s. Durante los siguientes 10 s, infligir daño directo con habilidades básicas otorga vesania durante 5 s.\n\nTags: Definitiva, Imparable, Vesania, Tiempo de reutilización, Básica.",
			"esMX": "Recuperación: 60 segundos\nExplotas con ira, repeles a los enemigos cercanos y obtienes enajenación y te vuelves imparable durante 5 segundos. Durante los próximos 10 segundos, infligir daño directo con habilidades básicas otorga enajenación durante 5 segundos.\n\nTags: Máxima, Imparable, Enajenación, Recuperación, Básica.",
			"frFR": "Temps de recharge: 60 s\nVous laissez exploser votre rage, ce qui repousse les adversaires à proximité, vous octroie l'effet de Rage du berserker et vous rend inarrêtable pendant 5 s. Pendant les 10 s qui suivent, infliger des dégâts directs avec des compétences de base vous confère l'effet de Rage du berserker pendant 5 s.\n\nTags: Ultime, Inarrêtable, Rage du berserker, Temps de recharge, Basique.",
			"itIT": "Tempo di recupero: 60 s\nCon un'esplosione di rabbia, respingi i nemici circostanti e ottieni Berserk, diventando inarrestabile per 5 s. Per i successivi 10 s, infliggere danni diretti con le abilità Base fornisce Berserk per 5 s.\n\nTags: Ultra, Inarrestabile, Berserk, Tempo di recupero, Base.",
			"jaJP": "クールダウン時間: 60秒\n激高し、周囲の敵をノックバックさせ、5秒間、〈バーサーク〉および抑圧不可状態になる。次の10秒間は、基本スキルで直接ダメージを与えると5秒間〈バーサーク〉状態になる。\n\nTags: 奥義, 抑圧不可, バーサーク, クールダウン, 基本.",
			"koKR": "재사용 대기시간: 60초\n분노를 폭발시켜, 주변 적들을 밀쳐내고 5초 동안 광폭화 및 저지 불가 효과를 얻습니다. 다음 10초 동안 기본 기술로 직접 피해를 주면 5초 동안 광폭화가 부여됩니다.\n\nTags: 궁극기, 저지 불가, 광폭화, 재사용 대기시간, 기본.",
			"plPL": "Czas odnowienia: 60 sek.\nWybuchasz gniewem, odrzucając pobliskich wrogów, i zyskujesz berserkowanie oraz nieustępliwość na 5 sek. Przez następne 10 sek. zadawanie bezpośrednich obrażeń umiejętnościami Podstawowymi zapewnia berserkowanie na 5 sek.\n\nTags: Specjalne, Nieustępliwość, Berserkowanie, Odnowienie, Podstawowe.",
			"ptBR": "Recarga: 60 segundos\nExplode em um estado de fúria, repelindo inimigos ao redor, recebendo Berserk e tornando-se implacável por 5 segundos. Pelos próximos 10 segundos, causar dano direto com habilidades básicas concede Berserk por 5 segundos.\n\nTags: Suprema, Implacável, Berserk, Recarga, Básica.",
			"ruRU": "Время восстановления: 60 сек.\nПри вспышке ярости вы отбрасываете противников поблизости, а также получаете эффекты берсерк и неудержимость на 5 сек. В течение следующих 10 сек. прямой урон от базовых умений продлевает действие берсерка на 5 сек.\n\nTags: Мощное умение, Неудержимость, Берсерк, Время восстановления, Базовое.",
			"zhCN": "冷却时间:60 秒\n变得怒不可遏,击退周围的敌人并获得狂暴和不可阻挡,持续 5 秒。在接下来的 10 秒内,使用基础技能造成直接伤害可以获得狂暴,持续 5 秒。\n\nTags: 终极技能, 不可阻挡, 狂暴, 冷却时间, 基础.",
			"zhTW": "冷卻時間:60 秒\n陷入狂怒,擊退附近的敵人並獲得狂暴與無阻狀態,持續 5 秒。在接下來 10 秒內,以基本技能造成直接傷害可獲得狂暴,持續 5秒。\n\nTags: 絕招, 無阻, 狂暴, 冷卻時間, 基本."
},
		id: 110,
		maxPoints: 1,
		x: 4.845,
		y: 277.735
	},
	"Prime Wrath of the Berserker": {
		baseSkill: "Wrath of the Berserker",
		connections: [ "Supreme Wrath of the Berserker", "Wrath of the Berserker" ],
		description: `While Wrath of the Berserker is active, gain +20% increased Movement Speed and increase Fury Generation by x30%.`,
		nameLocalized: {
			"deDE": "Oberster Zorn des Berserkers",
			"esES": "Cólera de berserker mayor",
			"esMX": "Furia del Vesánico Suprema",
			"frFR": "Courroux du berserker primordial",
			"itIT": "Collera del Berserker Apicale",
			"jaJP": "狂戦士の憤怒(上級)",
			"koKR": "극상의 광전사의 진노",
			"plPL": "Większy Gniew Berserkera",
			"ptBR": "Fúria do Berserker Primordial",
			"ruRU": "Первозданный гнев берсерка",
			"zhCN": "至尊狂战士之怒",
			"zhTW": "強烈狂戰之怒"
},
		descriptionLocalized: {
			"deDE": "Solange Zorn des Berserkers aktiv ist, erhaltet Ihr +20% erhöhte Bewegungsgeschwindigkeit und die Wuterzeugung erhöht sich um x30%.",
			"esES": "Mientras dura Cólera de berserker, obtienes un +20% más de velocidad de movimiento y tu generación de furia aumenta un x30%.",
			"esMX": "Mientras Furia del Vesánico está activa, obtienes un +20% más de velocidad de movimiento y un x30% más de generación de Furia.",
			"frFR": "Tant que Courroux du berserker est actif, votre vitesse de déplacement est augmentée de +20% et votre génération de fureur de x30%.",
			"itIT": "Mentre Collera del Berserker è attiva, la tua velocità di movimento aumenta del +20% e la generazione di furia aumenta del x30%.",
			"jaJP": "〈狂戦士の憤怒〉の発動中、移動速度が+20%、怒気の生成量がx30%増加する。",
			"koKR": "광전사의 진노가 활성화되어 있는 동안 이동 속도가 +20% 증가하고 분노 생성량이 x30% 증가합니다.",
			"plPL": "Kiedy Gniew Berserkera jest aktywny, zyskujesz +20% do szybkości ruchu, a generowanie furii jest zwiększone o x30%.",
			"ptBR": "Enquanto Fúria do Berserker está ativa, recebe +20% de velocidade de movimento aumentada e aumenta a geração de fúria em 30%.",
			"ruRU": "Пока действует \"Гнев берсерка\", ваша скорость передвижения повышается на +20%, а скорость восстановления ярости – на x30%.",
			"zhCN": "狂战士之怒激活时, 移动速度提高 +20%, 怒气生成速度提高 x30%。",
			"zhTW": "在狂戰之怒效果期間,移動速度額外提高 +20%,且怒氣產生效率提高 x30%。"
},
		id: 112,
		maxPoints: 1,
		x: 2.985,
		y: 475.01
	},
	"Supreme Wrath of the Berserker": {
		baseSkill: "Wrath of the Berserker",
		connections: [ "Prime Wrath of the Berserker" ],
		description: `While Wrath of the Berserker is active, every 50 Fury you spend increases Berserk's damage bonus by x25%.`,
		nameLocalized: {
			"deDE": "Überlegener Zorn des Berserkers",
			"esES": "Cólera de berserker suprema",
			"esMX": "Furia del Vesánico Superior",
			"frFR": "Courroux du berserker suprême",
			"itIT": "Collera del Berserker Suprema",
			"jaJP": "狂戦士の憤怒(高級)",
			"koKR": "최고의 광전사의 진노",
			"plPL": "Największy Gniew Berserkera",
			"ptBR": "Fúria do Berserker Suprema",
			"ruRU": "Неотвратимый гнев берсерка",
			"zhCN": "至极狂战士之怒",
			"zhTW": "終極狂戰之怒"
},
		descriptionLocalized: {
			"deDE": "Solange Zorn des Berserkers aktiv ist, wird der Schadensbonus von Berserker je 50 verbrauchter Wutpunkte um x25% erhöht.",
			"esES": "Mientras dura Cólera de berserker, cada 50 de furia que gastes aumenta un x25% el bonus de daño de vesania.",
			"esMX": "Mientras Furia del Vesánico está activa, cada 50 de Furia que uses aumenta la bonificación de daño de enajenación un x25%.",
			"frFR": "Tant que Courroux du berserker est actif, le bonus aux dégâts de Berserk est augmenté de x25% chaque fois que vous dépensez 50 points de fureur.",
			"itIT": "Mentre Collera del Berserker è attiva, per ogni 50 furia consumata i danni aggiuntivi di Berserk aumentano del x25%.",
			"jaJP": "〈狂戦士の憤怒〉の発動中、50の怒気を消費するごとに〈バーサーク〉のダメージボーナスがx25%増加する。",
			"koKR": "광전사의 진노가 활성화되어 있는 동안 분노를 50 소모할 때마다 광폭화의 추가 피해가 x25% 증가합니다.",
			"plPL": "Kiedy Gniew Berserkera jest aktywny, za każde wykorzystane przez ciebie 50 pkt. furii premia do obrażeń od Berserkera jest zwiększona o x25%.",
			"ptBR": "Enquanto Fúria do Berserker está ativa, cada 50 de fúria que você gastar aumenta o bônus de dano de Berserk em 25%.",
			"ruRU": "Пока действует \"Гнев берсерка\", бонус к урону от берсерка увеличивается на x25% за каждые затраченные 50 ед. ярости.",
			"zhCN": "狂战士之怒激活时, 每消耗 50 点怒气可以使狂暴的伤害加成提高 x25%。",
			"zhTW": "在狂戰之怒啟動期間,你每消耗 50 點怒氣,就會使狂暴的傷害加成提高 x25%。"
},
		id: 111,
		maxPoints: 1,
		x: 3.835,
		y: 647.065
	},
	"Tempered Fury": {
		connections: [ "Ultimate", "Invigorating Fury", "Furious Impulse" ],
		description: `Increase your Maximum Fury by {3/6/9/12/15/18/21/24/27/30}.

Tags: Fury.`,
		nameLocalized: {
			"deDE": "Kanalisierter Furor",
			"esES": "Furia irascible",
			"esMX": "Furia Controlada",
			"frFR": "Fureur mesurée",
			"itIT": "Furia Temperata",
			"jaJP": "抑制されし怒気",
			"koKR": "단련된 분노",
			"plPL": "Hartowana Furia",
			"ptBR": "Fúria Controlada",
			"ruRU": "Усмиренная ярость",
			"zhCN": "愤怒有制",
			"zhTW": "淬鍊怒火"
},
		descriptionLocalized: {
			"deDE": "Erhöht Eure maximale Wut um {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Wut.",
			"esES": "Aumenta {3/6/9/12/15/18/21/24/27/30} tu furia máxima.\n\nTags: Furia.",
			"esMX": "Aumenta en {3/6/9/12/15/18/21/24/27/30} tu Furia máxima.\n\nTags: Furia.",
			"frFR": "Augmente votre fureur maximum de {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Fureur.",
			"itIT": "Aumenta la tua furia massima di {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Furia.",
			"jaJP": "怒気の最大量が{3/6/9/12/15/18/21/24/27/30}増加する。\n\nTags: 怒気.",
			"koKR": "최대 분노가 {3/6/9/12/15/18/21/24/27/30} 증가합니다.\n\nTags: 분노.",
			"plPL": "Maksymalna wartość furii jest zwiększona o {3/6/9/12/15/18/21/24/27/30} pkt.\n\nTags: Furia.",
			"ptBR": "Aumenta sua fúria máxima em {3/6/9/12/15/18/21/24/27/30}.\n\nTags: Fúria.",
			"ruRU": "Максимальный запас ярости увеличивается на {3/6/9/12/15/18/21/24/27/30} ед.\n\nTags: Ярость.",
			"zhCN": "你的怒气上限提高 {3/6/9/12/15/18/21/24/27/30} 点。\n\nTags: 怒气.",
			"zhTW": "你的怒氣上限提高 {3/6/9/12/15/18/21/24/27/30}。\n\nTags: 怒氣."
},
		id: 113,
		maxPoints: 3,
		x: -448.63,
		y: 231.255
	},
	"Invigorating Fury": {
		connections: [ "Tempered Fury" ],
		description: `Heal for {3/6/9/12/15/18/21/24/27/30}% of your Maximum Life for each 100 Fury spent.

Tags: Fury, Healing.`,
		nameLocalized: {
			"deDE": "Belebende Wut",
			"esES": "Furia vigorizadora",
			"esMX": "Furia Vigorizante",
			"frFR": "Fureur revigorante",
			"itIT": "Furia Rinvigorente",
			"jaJP": "みなぎる怒り",
			"koKR": "원기의 분노",
			"plPL": "Ożywcza Furia",
			"ptBR": "Fúria Revigorante",
			"ruRU": "Бодрящая ярость",
			"zhCN": "怒意充沛",
			"zhTW": "振奮怒火"
},
		descriptionLocalized: {
			"deDE": "Heilt Euch jedes Mal, wenn Ihr 100 Wut verbraucht, um {3/6/9/12/15/18/21/24/27/30}% Eures maximalen Lebens.\n\nTags: Wut, Heilung.",
			"esES": "Te curas un {3/6/9/12/15/18/21/24/27/30}% de tu vida máxima por cada 100 de furia que gastes.\n\nTags: Furia, Curación.",
			"esMX": "Te sanas por un {3/6/9/12/15/18/21/24/27/30}% de tu vida máxima por cada 100 de Furia usada.\n\nTags: Furia, Sanación.",
			"frFR": "Vous récupérez {3/6/9/12/15/18/21/24/27/30}% de votre maximum de points de vie tous les 100 points de fureur dépensés.\n\nTags: Fureur, Soins.",
			"itIT": "Ti cura del {3/6/9/12/15/18/21/24/27/30}% della tua Vita massima per ogni 100 furia consumata.\n\nTags: Furia, Guarigione.",
			"jaJP": "怒気を100消費するたびに、ライフが最大値の{3/6/9/12/15/18/21/24/27/30}%にあたる回復する。\n\nTags: 怒気, 回復.",
			"koKR": "소모하는 분노 100당 최대 생명력의 {3/6/9/12/15/18/21/24/27/30}%만큼 생명력을 회복합니다.\n\nTags: 분노, 치유.",
			"plPL": "Odzyskujesz {3/6/9/12/15/18/21/24/27/30}% maksymalnego zdrowia za każde wykorzystane 100 pkt. furii.\n\nTags: Furia, Leczenie.",
			"ptBR": "Cura {3/6/9/12/15/18/21/24/27/30}% da sua vida máxima por cada 100 de fúria gasta.\n\nTags: Fúria, Cura.",
			"ruRU": "Вы восполняете {3/6/9/12/15/18/21/24/27/30}% максимального запаса здоровья за каждые затраченные 100 ед. ярости.\n\nTags: Ярость, Исцеление.",
			"zhCN": "每消耗 100 点怒气可以为你恢复 {3/6/9/12/15/18/21/24/27/30}%生命上限。\n\nTags: 怒气, 治疗.",
			"zhTW": "每消耗 100 點怒氣,可恢復生命值上限的 {3/6/9/12/15/18/21/24/27/30}%。\n\nTags: 怒氣, 治療."
},
		id: 114,
		maxPoints: 3,
		x: -452.625,
		y: 418.48
	},
	"Furious Impulse": {
		connections: [ "Tempered Fury" ],
		description: `Each time you swap weapons, gain {2/4/6/8/10/12/14/16/18/20} Fury.

Tags: Fury.`,
		nameLocalized: {
			"deDE": "Wütender Impuls",
			"esES": "Impulso furioso",
			"esMX": "Impulso Furioso",
			"frFR": "Impulsion furieuse",
			"itIT": "Impulso Furioso",
			"jaJP": "怒りの衝動",
			"koKR": "맹렬한 충동",
			"plPL": "Wściekły Impuls",
			"ptBR": "Impulso Furioso",
			"ruRU": "Яростный порыв",
			"zhCN": "怒意冲动",
			"zhTW": "狂怒衝動"
},
		descriptionLocalized: {
			"deDE": "Bei jedem Waffenwechsel erhaltet Ihr {2/4/6/8/10/12/14/16/18/20} Wut.\n\nTags: Wut.",
			"esES": "Cada vez que cambias de armas, obtienes {2/4/6/8/10/12/14/16/18/20} de furia.\n\nTags: Furia.",
			"esMX": "Cada vez que alternas armas, obtienes {2/4/6/8/10/12/14/16/18/20} de Furia.\n\nTags: Furia.",
			"frFR": "Chaque fois que vous changez d'arme, vous gagnez {2/4/6/8/10/12/14/16/18/20} points de fureur.\n\nTags: Fureur.",
			"itIT": "Ogni volta che scambi armi, ottieni {2/4/6/8/10/12/14/16/18/20} furia.\n\nTags: Furia.",
			"jaJP": "武器を切り替えるたびに怒気を{2/4/6/8/10/12/14/16/18/20}得る。\n\nTags: 怒気.",
			"koKR": "무기를 교체할 때마다 분노를 {2/4/6/8/10/12/14/16/18/20} 생성합니다.\n\nTags: 분노.",
			"plPL": "Za każdym razem, gdy zmieniasz broń, zyskujesz {2/4/6/8/10/12/14/16/18/20} pkt. furii.\n\nTags: Furia.",
			"ptBR": "Sempre que trocar de armas, recebe {2/4/6/8/10/12/14/16/18/20} de fúria.\n\nTags: Fúria.",
			"ruRU": "При каждой смене оружия вы накапливаете {2/4/6/8/10/12/14/16/18/20} ед. ярости.\n\nTags: Ярость.",
			"zhCN": "每次切换武器时获得 {2/4/6/8/10/12/14/16/18/20} 点怒气。\n\nTags: 怒气.",
			"zhTW": "每當你切換武器,可獲得 {2/4/6/8/10/12/14/16/18/20} 點怒氣。\n\nTags: 怒氣."
},
		id: 115,
		maxPoints: 3,
		x: -772.395,
		y: 233.415
	},
	"Wallop": {
		connections: [ "Ultimate", "Brute Force", "Concussion" ],
		description: `Your Skills using Bludgeoning weapons deal x{5/10/15/20/25/30/35/40/45/50}% increased damage if the enemy is Stunned or Vulnerable.

Tags: Vulnerable, Crowd Control, Bludgeoning, Damage.`,
		nameLocalized: {
			"deDE": "Aufmischen",
			"esES": "Golpetazo",
			"esMX": "Paliza",
			"frFR": "Torgnole",
			"itIT": "Colpo Violento",
			"jaJP": "殴打",
			"koKR": "맹공",
			"plPL": "Walnięcie",
			"ptBR": "Espancamento",
			"ruRU": "Разгром",
			"zhCN": "重击",
			"zhTW": "猛打"
},
		descriptionLocalized: {
			"deDE": "Eure Fertigkeiten mit Wuchtwaffen verursachen x{5/10/15/20/25/30/35/40/45/50}% mehr Schaden, wenn der Gegner betäubt oder verwundbar ist.\n\nTags: Verwundbar, Kontrollverlust, Wuchtwaffe, Schaden.",
			"esES": "Tus habilidades que usan armas contundentes infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño a un enemigo aturdido o vulnerable.\n\nTags: Vulnerable, Control de masas, Contundente, Daño.",
			"esMX": "Tus habilidades con armas de impacto infligen un x{5/10/15/20/25/30/35/40/45/50}% más de daño si los enemigos están aturdidos o son vulnerables.\n\nTags: Vulnerable, Control de multitudes, Impacto, Daño.",
			"frFR": "Vos compétences utilisant des armes contondantes infligent x{5/10/15/20/25/30/35/40/45/50}% de dégâts supplémentaires si la cible est étourdie ou vulnérable.\n\nTags: Vulnérable, Perte de contrôle, Arme contondante, Dégâts.",
			"itIT": "Le tue abilità con armi contundenti infliggono il x{5/10/15/20/25/30/35/40/45/50}% di danni aggiuntivi se il nemico è stordito o vulnerabile.\n\nTags: Vulnerabilità, Effetti debilitanti, Contundente, Danni.",
			"jaJP": "スタンまたは脆弱状態の敵に対し、殴打武器を使ったスキルの与えるダメージがx{5/10/15/20/25/30/35/40/45/50}%増加する。\n\nTags: 脆弱, 操作障害効果, 殴打, ダメージ.",
			"koKR": "둔기로 기술을 사용하면 기절 혹은 취약 상태의 적에게 주는 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 취약, 군중 제어, 둔기, 피해.",
			"plPL": "Twoje umiejętności używania broni obuchowej zadają obrażenia zwiększone o x{5/10/15/20/25/30/35/40/45/50}%, jeśli wróg jest ogłuszony lub odsłonięty.\n\nTags: Odsłonięcie, Ograniczanie Kontroli, Obuchowe, Obrażenia.",
			"ptBR": "Suas habilidades com armas de concussão causam {5/10/15/20/25/30/35/40/45/50}% de dano aumentado se o inimigo estiver atordoado ou vulnerável.\n\nTags: Vulnerável, Controle de Grupo, Concussão, Dano.",
			"ruRU": "Умения, использующие дробящее оружие, наносят на x{5/10/15/20/25/30/35/40/45/50}% больше урона оглушенным или уязвимым противникам.\n\nTags: Уязвимость, Контроль, Дробящее оружие, Урон.",
			"zhCN": "使用钝击武器的技能对处于昏迷或易伤状态的敌人造成的伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 易伤, 群控, 钝击, 伤害.",
			"zhTW": "鈍擊武器技能對昏迷或易傷敵人造成的傷害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 易傷, 控場, 鈍擊, 傷害."
},
		id: 116,
		maxPoints: 3,
		x: 577.06,
		y: 69.045
	},
	"Brute Force": {
		connections: [ "Wallop", "Heavy Handed" ],
		description: `Your Overpowers deal x{15/30/45/60/75/90/105/120/135/150}% increased damage when using a Two-Handed weapon.

Tags: Overpower, Damage, Two-Handed.`,
		nameLocalized: {
			"deDE": "Brutale Kraft",
			"esES": "Fuerza bruta",
			"esMX": "Fuerza Bruta",
			"frFR": "Force brute",
			"itIT": "Forza Bruta",
			"jaJP": "ブルート・フォース",
			"koKR": "야수의 힘",
			"plPL": "Brutalna Siła",
			"ptBR": "Força Bruta",
			"ruRU": "Грубая сила",
			"zhCN": "残暴之力",
			"zhTW": "蠻力"
},
		descriptionLocalized: {
			"deDE": "Bei Verwendung einer Zweihandwaffe verursacht Euer Überwältigen x{15/30/45/60/75/90/105/120/135/150}% mehr Schaden.\n\nTags: Überwältigen, Schaden, Zweihändig.",
			"esES": "Tus arrollamientos infligen un x{15/30/45/60/75/90/105/120/135/150}% más de daño al usar un arma de dos manos.\n\nTags: Arrollamiento, Daño, Dos manos.",
			"esMX": "Al abrumar infliges un x{15/30/45/60/75/90/105/120/135/150}% más de daño cuando usas un arma de dos manos.\n\nTags: Abrumar, Daño, Dos manos.",
			"frFR": "Vos dégâts d'accablement sont augmentés de x{15/30/45/60/75/90/105/120/135/150}% lorsque vous maniez une arme à deux mains.\n\nTags: Accablement, Dégâts, Arme à deux mains.",
			"itIT": "I tuoi danni da Sopraffazione infliggono il x{15/30/45/60/75/90/105/120/135/150}% di danni aggiuntivi se usi un'arma a due mani.\n\nTags: Sopraffazione, Danni, A due mani.",
			"jaJP": "両手持ち武器を装備していると、オーバーパワーで敵に与えるダメージがx{15/30/45/60/75/90/105/120/135/150}%増加する。\n\nTags: オーバーパワー, ダメージ, 両手用武器.",
			"koKR": "양손 무기 사용 시 제압으로 주는 피해가 x{15/30/45/60/75/90/105/120/135/150}% 증가합니다.\n\nTags: 제압, 피해, 양손 무기.",
			"plPL": "Twoje obrażenia od przytłoczenia są zwiększone o x{15/30/45/60/75/90/105/120/135/150}%, gdy korzystasz z broni dwuręcznej.\n\nTags: Przytłoczenie, Obrażenia, Dwuręczne.",
			"ptBR": "Seu Golpe Brutal causa {15/30/45/60/75/90/105/120/135/150}% de dano aumentado ao usar uma arma de duas mãos.\n\nTags: Golpe Brutal, Dano, Duas mãos.",
			"ruRU": "При использовании двуручного оружия ваш подавляющий урон увеличивается на x{15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Подавление, Урон, Двуручное.",
			"zhCN": "使用双手武器时, 你的压制造成的伤害提高 x{15/30/45/60/75/90/105/120/135/150}%。\n\nTags: 压制, 伤害, 双手.",
			"zhTW": "使用雙手武器時,你造成的壓制傷害提高 x{15/30/45/60/75/90/105/120/135/150}%。\n\nTags: 壓制, 傷害, 雙手."
},
		id: 117,
		maxPoints: 3,
		x: 857.583,
		y: -7.82
	},
	"Heavy Handed": {
		connections: [ "Ultimate", "Brute Force" ],
		description: `While using Two-Handed weapons you deal x{5/10/15/20/25/30/35/40/45/50}% increased Critical Strike Damage.

Tags: Critical Strikes, Damage, Two-Handed.`,
		nameLocalized: {
			"deDE": "Viel hilft viel",
			"esES": "Contundencia",
			"esMX": "Mano Dura",
			"frFR": "Main lourde",
			"itIT": "Mano Pesante",
			"jaJP": "ヘヴィ・ハンド",
			"koKR": "묵직한 손",
			"plPL": "Ciężka Ręka",
			"ptBR": "Mão Pesada",
			"ruRU": "Тяжелая рука",
			"zhCN": "势大力沉",
			"zhTW": "勁道威猛"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr Zweihandwaffen verwendet, verursacht Ihr x{5/10/15/20/25/30/35/40/45/50}% mehr kritischen Trefferschaden.\n\nTags: Kritische Treffer, Schaden, Zweihändig.",
			"esES": "Al usar armas de dos manos, infliges un x{5/10/15/20/25/30/35/40/45/50}% más de daño de golpe crítico.\n\nTags: Golpes críticos, Daño, Dos manos.",
			"esMX": "Cuando usas armas de dos manos, infliges un x{5/10/15/20/25/30/35/40/45/50}% más de daño de golpe crítico.\n\nTags: Golpes críticos, Daño, Dos manos.",
			"frFR": "Lorsque vous maniez des armes à deux mains, vous infligez x{5/10/15/20/25/30/35/40/45/50}% de dégâts critiques supplémentaires.\n\nTags: Coups critiques, Dégâts, Arme à deux mains.",
			"itIT": "Quando usi armi a due mani, infliggi il x{5/10/15/20/25/30/35/40/45/50}% di danni critici aggiuntivi.\n\nTags: Colpi critici, Danni, A due mani.",
			"jaJP": "両手武器を使っている場合、クリティカルヒット率がx{5/10/15/20/25/30/35/40/45/50}%上昇する。\n\nTags: クリティカルヒット, ダメージ, 両手用武器.",
			"koKR": "양손 무기 사용 시 주는 극대화 피해가 x{5/10/15/20/25/30/35/40/45/50}% 증가합니다.\n\nTags: 극대화, 피해, 양손 무기.",
			"plPL": "Kiedy korzystasz z broni dwuręcznej, zadajesz obrażenia od trafień krytycznych zwiększone o x{5/10/15/20/25/30/35/40/45/50}%.\n\nTags: Trafienia Krytyczne, Obrażenia, Dwuręczne.",
			"ptBR": "Ao usar armas de duas mãos, você causa {5/10/15/20/25/30/35/40/45/50}% de dano de acerto crítico aumentado.\n\nTags: Acertos Críticos, Dano, Duas mãos.",
			"ruRU": "При использовании двуручного оружия вы наносите на x{5/10/15/20/25/30/35/40/45/50}% больше критического урона.\n\nTags: Критические удары, Урон, Двуручное.",
			"zhCN": "使用双手武器时, 你造成的暴击伤害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 暴击, 伤害, 双手.",
			"zhTW": "使用雙手武器時造成的爆擊傷害提高 x{5/10/15/20/25/30/35/40/45/50}%。\n\nTags: 爆擊, 傷害, 雙手."
},
		id: 118,
		maxPoints: 3,
		x: 582.895,
		y: -81.46
	},
	"Concussion": {
		connections: [ "Wallop" ],
		description: `Lucky Hit: Skills using Bludgeoning weapons have up to a {10/20/30/40/50/60/70/80/90/100}% chance to Stun enemies for 3 seconds, or up to a {15/30/45/60/75/90/105/120/135/150}% chance when using a Two-Handed Bludgeoning weapon.

Tags: Crowd Control, Bludgeoning, Two-Handed, Lucky Hit.`,
		nameLocalized: {
			"deDE": "Erschütterung",
			"esES": "Traumatismo",
			"esMX": "Contusión",
			"frFR": "Commotion",
			"itIT": "Energia Primordiale",
			"jaJP": "衝撃蓄積",
			"koKR": "뇌진탕",
			"plPL": "Wstrząs",
			"ptBR": "Concussão",
			"ruRU": "Контузия",
			"zhCN": "脑震荡",
			"zhTW": "腦震盪"
},
		descriptionLocalized: {
			"deDE": "Glückstreffer: Fertigkeiten mit Wuchtwaffen verfügen über eine Chance von {10/20/30/40/50/60/70/80/90/100}%, Gegner 3 Sek. lang zu betäuben. Mit zweihändigen Wuchtwaffen erhöht sich die Chance auf {15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Kontrollverlust, Wuchtwaffe, Zweihändig, Glückstreffer.",
			"esES": "Golpe de suerte: Las habilidades que usan armas contundentes tienen hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de aturdir a los enemigos durante 3 s o, al usar un arma contundente de dos manos, hasta un {15/30/45/60/75/90/105/120/135/150}% de probabilidad.\n\nTags: Control de masas, Contundente, Dos manos, Golpe de suerte.",
			"esMX": "Golpe afortunado: Las habilidades que usan armas de impacto tienen hasta un {10/20/30/40/50/60/70/80/90/100}% de probabilidad de aturdir a los enemigos durante 3 segundos, o hasta un {15/30/45/60/75/90/105/120/135/150}% al usar un arma de impacto de dos manos.\n\nTags: Control de multitudes, Impacto, Dos manos, Golpe afortunado.",
			"frFR": "Coup de chance: vos compétences utilisant des armes contondantes ont jusqu'à {10/20/30/40/50/60/70/80/90/100}% de chances d'étourdir les adversaires pendant 3 s, et jusqu'à {15/30/45/60/75/90/105/120/135/150}% de chances si vous utilisez une arme contondante à deux mains.\n\nTags: Perte de contrôle, Arme contondante, Arme à deux mains, Coup de chance.",
			"itIT": "Colpo fortunato: le abilità con armi contundenti hanno fino al {10/20/30/40/50/60/70/80/90/100}% di probabilità di stordire i nemici colpiti per 3 s, o fino al {15/30/45/60/75/90/105/120/135/150}% di probabilità se usi un'arma contundente a due mani.\n\nTags: Effetti debilitanti, Contundente, A due mani, Colpo fortunato.",
			"jaJP": "幸運の一撃: 殴打武器を使ったスキルが最大{10/20/30/40/50/60/70/80/90/100}%の確率で敵を3秒間スタンさせる。両手殴打武器の場合は、確率が最大{15/30/45/60/75/90/105/120/135/150}%になる。\n\nTags: 操作障害効果, 殴打, 両手用武器, 幸運の一撃.",
			"koKR": "행운의 적중: 둔기로 기술을 사용하면 최대 {10/20/30/40/50/60/70/80/90/100}% 확률로 적을 3초 동안 기절시킵니다. 양손 둔기 사용 시 최대 {15/30/45/60/75/90/105/120/135/150}% 확률로 기절시킵니다.\n\nTags: 군중 제어, 둔기, 양손 무기, 행운의 적중.",
			"plPL": "Szczęśliwy traf: Umiejętności używające broni obuchowej mają {10/20/30/40/50/60/70/80/90/100}% szans na ogłuszenie trafionych wrogów na 3 sek. lub {15/30/45/60/75/90/105/120/135/150}% szans w przypadku dwuręcznej broni obuchowej.\n\nTags: Ograniczanie Kontroli, Obuchowe, Dwuręczne, Szczęśliwy Traf.",
			"ptBR": "Golpe de Sorte: Habilidades que usam armas de concussão têm até {10/20/30/40/50/60/70/80/90/100}% de chance de atordoar inimigos por 3 segundos, ou até {15/30/45/60/75/90/105/120/135/150}% de chance ao usar uma arma de concussão de duas mãos.\n\nTags: Controle de Grupo, Concussão, Duas mãos, Golpe de Sorte.",
			"ruRU": "Удачный удар: умения, использующие дробящее оружие, с вероятностью до {10/20/30/40/50/60/70/80/90/100}% оглушают противников на 3 сек. При использовании двуручного дробящего оружия – с вероятностью до {15/30/45/60/75/90/105/120/135/150}%.\n\nTags: Контроль, Дробящее оружие, Двуручное, Удачный удар.",
			"zhCN": "幸运一击: 使用钝击武器的技能最多有 {10/20/30/40/50/60/70/80/90/100}% 几率使敌人昏迷 3 秒。使用双手钝击武器时, 该几率最多为 {15/30/45/60/75/90/105/120/135/150}%。\n\nTags: 群控, 钝击, 双手, 幸运一击.",
			"zhTW": "幸運觸發:使用鈍擊武器的技能最高有 {10/20/30/40/50/60/70/80/90/100}% 機率擊昏敵人,持續 3 秒。使用雙手鈍擊武器時機率最高為 {15/30/45/60/75/90/105/120/135/150}%。\n\nTags: 控場, 鈍擊, 雙手, 幸運觸發."
},
		id: 119,
		maxPoints: 3,
		x: 861.562,
		y: 167.235
	},
};

barbarianData["Key Passive"] = {
	"Unconstrained": {
		connections: [ "Key Passive" ],
		description: `Increase Berserk's maximum duration by 5 seconds and increase its damage bonus by +{25/50/75/100/125/150/175/200/225/250}%.

Tags: Berserking, Damage.`,
		nameLocalized: {
			"deDE": "Entfesselt",
			"esES": "Desatadura",
			"esMX": "Incontenible",
			"frFR": "Sans contrainte",
			"itIT": "Incontenibile",
			"jaJP": "非抑制",
			"koKR": "고삐 풀린 힘",
			"plPL": "Niepowstrzymana Siła",
			"ptBR": "Força Implacável",
			"ruRU": "Неудержимая сила",
			"zhCN": "不羁怒火",
			"zhTW": "超越極限"
},
		descriptionLocalized: {
			"deDE": "Erhöht die maximale Dauer des Berserkermodus um 5 Sek. und erhöht seinen Schadensbonus um +{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Berserkermodus, Schaden.",
			"esES": "Aumenta 5 s la duración máxima de la vesania y un +{25/50/75/100/125/150/175/200/225/250}% su bonus de daño.\n\nTags: Vesania, Daño.",
			"esMX": "Aumenta la duración máxima de enajenación 5 segundos y aumenta la bonificación de daño un +{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Enajenación, Daño.",
			"frFR": "Augmente la durée maximale de Rage du berserker de 5 s et son bonus aux dégâts de +{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Rage du berserker, Dégâts.",
			"itIT": "Aumenti la durata massima di Berserk di 5 s e il suo bonus ai danni del +{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Berserk, Danni.",
			"jaJP": "〈バーサーク〉の最大持続時間が5秒長くなり、与えるダメージが+{25/50/75/100/125/150/175/200/225/250}%増加する。\n\nTags: バーサーク, ダメージ.",
			"koKR": "광폭화의 최대 지속시간이 5초 증가하고 추가 피해가 +{25/50/75/100/125/150/175/200/225/250}% 증가합니다.\n\nTags: 광폭화, 피해.",
			"plPL": "Wydłużasz maksymalny czas działania berserkowania o 5 sek. i zwiększasz premię do jego obrażeń o +{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Berserkowanie, Obrażenia.",
			"ptBR": "Aumenta a duração máxima de Berserk em 5 segundos e aumenta o bônus de dano em +{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Berserk, Dano.",
			"ruRU": "Максимальное время действия берсерка увеличивается на 5 сек., а бонус к урону увеличивается на +{25/50/75/100/125/150/175/200/225/250}%.\n\nTags: Берсерк, Урон.",
			"zhCN": "狂暴的最大持续时间延长 5 秒, 其伤害加成提高 +{25/50/75/100/125/150/175/200/225/250}%。\n\nTags: 狂暴, 伤害.",
			"zhTW": "狂暴的持續時間上限延長 5 秒,其傷害加成提高 +{25/50/75/100/125/150/175/200/225/250}%。\n\nTags: 狂暴, 傷害."
},
		id: 120,
		maxPoints: 1,
		x: -667.071,
		y: 0.035
	},
	"Gushing Wounds": {
		connections: [ "Key Passive" ],
		description: `When causing an enemy to Bleed, you have a chance equal to your Critical Strike Chance to increase the Bleed amount by 100% of your Critical Strike Damage bonus.

Overpowering a Bleeding enemy creates an explosion that inflicts 11% Bleeding damage over 5 seconds.

Tags: Bleed, Critical Strikes, Overpower, Damage.`,
		nameLocalized: {
			"deDE": "Klaffende Wunden",
			"esES": "Heridas sangrantes",
			"esMX": "Heridas Graves",
			"frFR": "Plaies béantes",
			"itIT": "Ferite Zampillanti",
			"jaJP": "血の吹き出る傷",
			"koKR": "피를 뿜는 상처",
			"plPL": "Tryskające Rany",
			"ptBR": "Feridas Sangrentas",
			"ruRU": "Кровоточащие раны",
			"zhCN": "涌血创伤",
			"zhTW": "濺血重創"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr bei einem Gegner Blutung verursacht, besteht eine Chance in Höhe Eurer kritischen Trefferchance, die Blutungsmenge um 100% Eures Bonus auf kritischen Trefferschaden zu erhöhen.\n\nDas Überwältigen eines blutenden Gegners löst eine Explosion aus, die im Verlauf von 5 Sek. 11% Blutungsschaden verursacht.\n\nTags: Blutung, Kritische Treffer, Überwältigen, Schaden.",
			"esES": "Cuando le provocas sangrado a un enemigo, tienes una probabilidad equivalente a tu probabilidad de golpe crítico de aumentar la cantidad de sangrado una cantidad equivalente a un 100% de tu bonus de daño de golpe crítico.\n\nArrollar a un enemigo con sangrado crea una explosión que inflige 11% de daño de sangrado durante 5 s.\n\nTags: Sangrado, Golpes críticos, Arrollamiento, Daño.",
			"esMX": "Al causar sangrado, tienes una probabilidad igual a tu probabilidad de golpe crítico de aumentar el valor de sangrado un 100% de tu bonificación de daño de golpe crítico.\n\nAbrumar a un enemigo que sangra crea una explosión que inflige 11% de daño de sangrado durante 5 segundos.\n\nTags: Sangrado, Golpes críticos, Abrumar, Daño.",
			"frFR": "Lorsque vous faites saigner une cible, vous avez des chances égales à vos chances d'infliger un coup critique d'augmenter le montant du saignement de 100% de votre bonus aux dégâts critiques.\n\nAccabler une cible qui saigne déclenche une explosion qui inflige 11% points de dégâts de saignement en 5 s.\n\nTags: Saignement, Coups critiques, Accablement, Dégâts.",
			"itIT": "Infliggendo sanguinamento a un nemico, hai una probabilità pari alla tua probabilità di critico di aumentare i danni da sanguinamento del 100% del bonus ai tuoi danni critici.\n\nInfliggere Sopraffazione a un nemico sanguinante crea un'esplosione che infligge 11% danni da sanguinamento in 5 s.\n\nTags: Sanguinamento, Colpi critici, Sopraffazione, Danni.",
			"jaJP": "敵を出血させると、クリティカルヒット率と同じ確率で出血量がクリティカルヒットダメージボーナスの100%分増加する。\n\n流血状態の敵に対してオーバーパワーを発生させると、5秒かけて11%の出血ダメージを与える爆発を起こす。\n\nTags: 出血, クリティカルヒット, オーバーパワー, ダメージ.",
			"koKR": "적을 출혈시킬 때, 극대화 확률과 동일한 확률로 출혈량이 추가 극대화 피해의 100%만큼 증가합니다.\n\n출혈 중인 적을 제압하면 폭발이 일어나 5초에 걸쳐 11%의 출혈 피해를 줍니다.\n\nTags: 출혈, 극대화, 제압, 피해.",
			"plPL": "Kiedy wywołujesz u wroga krwawienie, masz szansę równą twojej szansie na trafienie krytyczne na zwiększenie krwawienia o równowartość 100% twojej premii do obrażeń od trafień krytycznych.\n\nPrzytłoczenie krwawiącego wroga wywołuje eksplozję, która zadaje 11% pkt. obrażeń od krwawienia w ciągu 5 sek.\n\nTags: Krwawienie, Trafienia Krytyczne, Przytłoczenie, Obrażenia.",
			"ptBR": "Ao fazer um inimigo sangrar, você tem chance equivalente à sua chance de acerto crítico de aumentar o valor de sangramento dele em 100% do seu bônus de dano de acerto crítico.\n\nDesferir um Golpe Brutal contra um inimigo que está sangrando cria uma explosão que aplica 11% de dano de sangramento ao longo de 5 segundos.\n\nTags: Sangramento, Acertos Críticos, Golpe Brutal, Dano.",
			"ruRU": "Когда вы вызываете у противника кровотечение, урон от кровотечения увеличивается на 100% бонуса к критическому урону с вероятностью, равной шансу критического удара.\n\nКогда вы наносите подавляющий урон кровоточащему противнику, происходит взрыв, наносящий врагам 11% ед. урона от кровотечения в течение 5 сек.\n\nTags: Кровотечение, Критические удары, Подавление, Урон.",
			"zhCN": "使敌人流血时, 你有一定几率 (等同于你的暴击率) 提高流血量, 提高的具体数值为你的暴击伤害加成的 100%。\n\n压制一名流血的敌人会产生爆炸, 在 5 秒内造成 11% 点流血伤害。\n\nTags: 流血, 暴击, 压制, 伤害.",
			"zhTW": "使敵人流血時有機率提高流血量,機率相當於你的爆擊機率,流血量相當於你爆擊傷害的 100%。\n\n壓制流血的敵人會產生爆炸,在 5 秒內造成 11% 點流血傷害。\n\nTags: 流血, 爆擊, 壓制, 傷害."
},
		id: 121,
		maxPoints: 1,
		x: 666.365,
		y: 0.035
	},
	"Unbridled Rage": {
		connections: [ "Key Passive" ],
		description: `Core Skills deal x135% increased damage, but cost x100% more Fury.

Tags: Fury, Damage, Core.`,
		nameLocalized: {
			"deDE": "Ungezügelte Wut",
			"esES": "Ira desenfrenada",
			"esMX": "Ira Desmedida",
			"frFR": "Rage effrénée",
			"itIT": "Rabbia Sfrenata",
			"jaJP": "抑えきれない怒り",
			"koKR": "솟구치는 격노",
			"plPL": "Nieokiełznany Szał",
			"ptBR": "Fúria Descontrolada",
			"ruRU": "Необузданная свирепость",
			"zhCN": "怒不可遏",
			"zhTW": "無拘狂怒"
},
		descriptionLocalized: {
			"deDE": "Kernfertigkeiten verursachen x135% mehr Schaden, kosten aber x100% mehr Wut.\n\nTags: Wut, Schaden, Kern.",
			"esES": "Las habilidades principales infligen un x135% más de daño, pero cuestan un x100% más de furia.\n\nTags: Furia, Daño, Principal.",
			"esMX": "Las habilidades principales infligen un x135% más de daño, pero cuestan un x100% más de Furia.\n\nTags: Furia, Daño, Principal.",
			"frFR": "Les compétences principales infligent x135% de dégâts supplémentaires, mais coûtent x100% plus de fureur.\n\nTags: Fureur, Dégâts, Principale.",
			"itIT": "Le abilità Primarie infliggono il x135% di danni aggiuntivi, ma costano il x100% di furia in più.\n\nTags: Furia, Danni, Primaria.",
			"jaJP": "コアスキルのダメージがx135%増加するが、消費する怒気がx100%増加する。\n\nTags: 怒気, ダメージ, コア.",
			"koKR": "핵심 기술이 주는 피해가 x135% 증가하지만, 분노 소모량도 x100% 증가합니다.\n\nTags: 분노, 피해, 핵심.",
			"plPL": "Twoje umiejętności Główne zadają obrażenia zwiększone o x135%, ale kosztują o x100% więcej furii.\n\nTags: Furia, Obrażenia, Główne.",
			"ptBR": "Habilidades principais causam 135% de dano aumentado, mas custam 100% mais fúria.\n\nTags: Fúria, Dano, Principal.",
			"ruRU": "Основные умения наносят на x135% больше урона, но тратят на x100% больше ярости.\n\nTags: Ярость, Урон, Основное.",
			"zhCN": "核心技能造成的伤害提高 x135%, 但额外消耗 x100% 怒气。\n\nTags: 怒气, 伤害, 核心.",
			"zhTW": "核心技能造成的傷害提高 x135%,但會額外消耗 x100% 點怒氣。\n\nTags: 怒氣, 傷害, 核心."
},
		id: 122,
		maxPoints: 1,
		x: 415.642,
		y: 277.12
	},
	"Walking Arsenal": {
		connections: [ "Key Passive" ],
		description: `Dealing direct damage with a Two-Handed Bludgeoning, Two-Handed Slashing, or Dual Wielded weapons grants x10% increased damage for 6 seconds.

While all three damage bonuses are active, you gain an additional x15% increased damage.

Tags: Damage, Two-Handed, Dual Wield, Bludgeoning, Slashing.`,
		nameLocalized: {
			"deDE": "Wandelndes Arsenal",
			"esES": "Arsenal andante",
			"esMX": "Arsenal Andante",
			"frFR": "Arsenal ambulant",
			"itIT": "Arsenale Ambulante",
			"jaJP": "歩く武器庫",
			"koKR": "걸어다니는 무기고",
			"plPL": "Kroczący Arsenał",
			"ptBR": "Arsenal Ambulante",
			"ruRU": "Живой арсенал",
			"zhCN": "人形兵器",
			"zhTW": "機動武裝"
},
		descriptionLocalized: {
			"deDE": "Wenn Ihr mit einer zweihändigen Wuchtwaffe, zweihändigen Hiebwaffe oder mit beidhändigen Waffen direkten Schaden verursacht, verursacht Ihr 6 Sek. lang x10% mehr Schaden.\n\nWenn alle drei Schadensboni aktiv sind, verursacht Ihr zusätzlich x15% mehr Schaden.\n\nTags: Schaden, Zweihändig, Zwei Waffen, Wuchtwaffe, Hiebwaffe.",
			"esES": "Infligir daño directo con armas contundentes de dos manos, armas cortantes de dos manos o armas de doble empuñadura otorga un x10% más de daño durante 6 s.\n\nMientras duran los tres bonus de daño, obtienes un x15% más de daño adicional.\n\nTags: Daño, Dos manos, Doble empuñadura, Contundente, Cortante.",
			"esMX": "Infligir daño directo con un arma de impacto de dos manos, un arma blanca de dos manos o dos armas inflige un x10% más de daño durante 6 segundos.\n\nMientras las tres bonificaciones de daño están activas, obtienes un x15% más de daño adicional.\n\nTags: Daño, Dos manos, Ambidestreza, Impacto, Corte.",
			"frFR": "Infliger des dégâts directs avec une arme contondante à deux mains, une arme tranchante à deux mains ou deux armes vous confère x10% de dégâts supplémentaires pendant 6 s.\n\nSi les trois bonus de dégâts sont actifs, vous bénéficiez de x15% de dégâts supplémentaires en plus.\n\nTags: Dégâts, Arme à deux mains, Deux armes, Arme contondante, Tranchant.",
			"itIT": "Infliggere danni diretti con un'arma contundente a due mani, un'arma tagliente a due mani o una doppia arma infligge il x10% di danni aggiuntivi per 6 s.\n\nQuando tutti e tre i bonus sono attivi, infliggi il x15% di danni aggiuntivi ulteriori.\n\nTags: Danni, A due mani, Doppia arma, Contundente, Tagliente.",
			"jaJP": "両手持ち殴打武器、両手持ち斬撃武器、二刀流武器によって直接ダメージを与えると、ダメージが6秒間x10%増加する。\n\nこの3種のダメージボーナスがすべて発動している場合、与えるダメージがx15%増加する。\n\nTags: ダメージ, 両手用武器, 二刀流, 殴打, 斬撃.",
			"koKR": "양손 둔기, 양손 베는 무기, 쌍수 무기로 직접 피해를 주면 6초 동안 주는 피해가 x10% 증가합니다.\n\n3가지 추가 피해가 모두 활성화되어 있는 동안에는 피해가 추가로 x15% 증가합니다.\n\nTags: 피해, 양손 무기, 쌍수 무기, 둔기, 베는 무기.",
			"plPL": "Zadawanie obrażeń dwuręczną bronią obuchową, dwuręczną bronią sieczną lub bronią w każdej ręce zapewnia premię x10% do obrażeń na 6 sek.\n\nKiedy aktywne są wszystkie trzy premie do obrażeń, zadawane przez ciebie obrażenia są zwiększone dodatkowo o x15%.\n\nTags: Obrażenia, Dwuręczne, Broń w Każdej Ręce, Obuchowe, Sieczne.",
			"ptBR": "Causar dano direto com uma arma de concussão de duas mãos, arma de corte de duas mãos ou arma de empunhadura dupla concede 10% de dano aumentado por 6 segundos.\n\nEnquanto todos os três bônus de dano estiverem ativos, você receberá um adicional de 15% de dano aumentado.\n\nTags: Dano, Duas mãos, Empunhadura Dupla, Concussão, Corte.",
			"ruRU": "Когда вы наносите прямой урон двуручным дробящим оружием, двуручным рубящим оружием или оружием в каждой руке, наносимый вами урон увеличивается на x10% на 6 сек.\n\nПока действуют все три прибавки к урону, наносимый вами урон увеличивается еще на x15%.\n\nTags: Урон, Двуручное, Оружие в каждой руке, Дробящее оружие, Рубящее.",
			"zhCN": "使用双手钝击武器、双手劈砍武器或双持武器造成直接伤害时, 可以使造成的伤害提高 x10%, 持续 6 秒。\n\n当三种伤害加成全部激活时, 你造成的伤害额外提高 x15%。\n\nTags: 伤害, 双手, 双持, 钝击, 劈斩.",
			"zhTW": "使用雙手鈍擊武器、雙手斬擊武器或雙持武器造成直接傷害時,傷害會提高 x10%,持續 6 秒。\n\n全部三種傷害加成效果均在作用中時,你的傷害會額外提高 x15%。\n\nTags: 傷害, 雙手, 雙持, 鈍擊, 斬擊."
},
		id: 123,
		maxPoints: 1,
		x: -425.632,
		y: 283.735
	},
};

export { barbarianData };