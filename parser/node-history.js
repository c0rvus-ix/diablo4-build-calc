let nodeHistory = {
	"Barbarian": {
		"Basic: Bash": 0,
		"Basic: Enhanced Bash": 1,
		"Basic: Battle Bash": 2,
		"Basic: Combat Bash": 3,
		"Basic: Lunging Strike": 4,
		"Basic: Enhanced Lunging Strike": 5,
		"Basic: Combat Lunging Strike": 6,
		"Basic: Battle Lunging Strike": 7,
		"Basic: Frenzy": 8,
		"Basic: Enhanced Frenzy": 9,
		"Basic: Battle Frenzy": 10,
		"Basic: Combat Frenzy": 11,
		"Basic: Flay": 12,
		"Basic: Enhanced Flay": 13,
		"Basic: Battle Flay": 14,
		"Basic: Combat Flay": 15,
		"Core: Hammer of the Ancients": 16,
		"Core: Enhanced Hammer of the Ancients": 17,
		"Core: Violent Hammer of the Ancients": 18,
		"Core: Furious Hammer of the Ancients": 19,
		"Core: Upheaval": 20,
		"Core: Enhanced Upheaval": 21,
		"Core: Violent Upheaval": 22,
		"Core: Furious Upheaval": 23,
		"Core: Double Swing": 24,
		"Core: Enhanced Double Swing": 25,
		"Core: Furious Double Swing": 26,
		"Core: Violent Double Swing": 27,
		"Core: Pressure Point": 28,
		"Core: Rend": 29,
		"Core: Enhanced Rend": 30,
		"Core: Violent Rend": 31,
		"Core: Furious Rend": 32,
		"Core: Whirlwind": 33,
		"Core: Enhanced Whirlwind": 34,
		"Core: Furious Whirlwind": 35,
		"Core: Violent Whirlwind": 36,
		"Core: Endless Fury": 37,
		"Defensive: Challenging Shout": 38,
		"Defensive: Enhanced Challenging Shout": 39,
		"Defensive: Strategic Challenging Shout": 40,
		"Defensive: Tactical Challenging Shout": 41,
		"Defensive: Iron Skin": 42,
		"Defensive: Enhanced Iron Skin": 43,
		"Defensive: Tactical Iron Skin": 44,
		"Defensive: Strategic Iron Skin": 45,
		"Defensive: Outburst": 46,
		"Defensive: Tough as Nails": 47,
		"Defensive: Ground Stomp": 48,
		"Defensive: Enhanced Ground Stomp": 49,
		"Defensive: Tactical Ground Stomp": 50,
		"Defensive: Strategic Ground Stomp": 51,
		"Defensive: Rallying Cry": 52,
		"Defensive: Enhanced Rallying Cry": 53,
		"Defensive: Strategic Rallying Cry": 54,
		"Defensive: Tactical Rallying Cry": 55,
		"Defensive: Imposing Presence": 56,
		"Defensive: Martial Vigor": 57,
		"Brawling: Charge": 58,
		"Brawling: Enhanced Charge": 59,
		"Brawling: Power Charge": 60,
		"Brawling: Mighty Charge": 61,
		"Brawling: War Cry": 62,
		"Brawling: Enhanced War Cry": 63,
		"Brawling: Power War Cry": 64,
		"Brawling: Mighty War Cry": 65,
		"Brawling: Booming Voice": 66,
		"Brawling: Raid Leader": 67,
		"Brawling: Guttural Yell": 68,
		"Brawling: Leap": 69,
		"Brawling: Enhanced Leap": 70,
		"Brawling: Mighty Leap": 71,
		"Brawling: Power Leap": 72,
		"Brawling: Kick": 73,
		"Brawling: Enhanced Kick": 74,
		"Brawling: Mighty Kick": 75,
		"Brawling: Power Kick": 76,
		"Brawling: Aggressive Resistance": 77,
		"Brawling: Prolific Fury": 78,
		"Brawling: Battle Frenzy": 79,
		"Brawling: Swiftness": 80,
		"Brawling: Quick Impulses": 81,
		"Weapon Mastery: Steel Grasp": 82,
		"Weapon Mastery: Enhanced Steel Grasp": 83,
		"Weapon Mastery: Warrior's Steel Grasp": 84,
		"Weapon Mastery: Fighter's Steel Grasp": 85,
		"Weapon Mastery: Thick Skin": 86,
		"Weapon Mastery: Counteroffensive": 87,
		"Weapon Mastery: Defensive Posture": 88,
		"Weapon Mastery: Death Blow": 89,
		"Weapon Mastery: Enhanced Death Blow": 90,
		"Weapon Mastery: Warrior's Death Blow": 91,
		"Weapon Mastery: Fighter's Death Blow": 92,
		"Weapon Mastery: Pit Fighter": 93,
		"Weapon Mastery: Slaying Strike": 94,
		"Weapon Mastery: Expose Vulnerability": 95,
		"Weapon Mastery: No Mercy": 96,
		"Weapon Mastery: Rupture": 97,
		"Weapon Mastery: Enhanced Rupture": 98,
		"Weapon Mastery: Fighter's Rupture": 99,
		"Weapon Mastery: Warrior's Rupture": 100,
		"Weapon Mastery: Hamstring": 101,
		"Weapon Mastery: Cut to the Bone": 102,
		"Ultimate: Call of the Ancients": 103,
		"Ultimate: Prime Call of the Ancients": 104,
		"Ultimate: Supreme Call of the Ancients": 105,
		"Ultimate: Iron Maelstrom": 106,
		"Ultimate: Prime Iron Maelstrom": 107,
		"Ultimate: Supreme Iron Maelstrom": 108,
		"Ultimate: Duelist": 109,
		"Ultimate: Wrath of the Berserker": 110,
		"Ultimate: Supreme Wrath of the Berserker": 111,
		"Ultimate: Prime Wrath of the Berserker": 112,
		"Ultimate: Tempered Fury": 113,
		"Ultimate: Invigorating Fury": 114,
		"Ultimate: Furious Impulse": 115,
		"Ultimate: Wallop": 116,
		"Ultimate: Brute Force": 117,
		"Ultimate: Heavy Handed": 118,
		"Ultimate: Concussion": 119,
		"Capstone: Unconstrained": 120,
		"Capstone: Gushing Wounds": 121,
		"Capstone: Unbridled Rage": 122,
		"Capstone: Walking Arsenal": 123
	},
	"Druid": {
		"Basic: Earthspike": 0,
		"Basic: Enhanced Earthspike": 1,
		"Basic: Wild Earthspike": 2,
		"Basic: Fierce Earthspike": 3,
		"Basic: Maul": 4,
		"Basic: Enhanced Maul": 5,
		"Basic: Wild Maul": 6,
		"Basic: Fierce Maul": 7,
		"Basic: Wind Shear": 8,
		"Basic: Enhanced Wind Shear": 9,
		"Basic: Fierce Wind Shear": 10,
		"Basic: Wild Wind Shear": 11,
		"Basic: Storm Strike": 12,
		"Basic: Enhanced Storm Strike": 13,
		"Basic: Fierce Storm Strike": 14,
		"Basic: Wild Storm Strike": 15,
		"Basic: Claw": 16,
		"Basic: Enhanced Claw": 17,
		"Basic: Fierce Claw": 18,
		"Basic: Wild Claw": 19,
		"Spirit: Landslide": 20,
		"Spirit: Enhanced Landslide": 21,
		"Spirit: Raging Landslide": 22,
		"Spirit: Primal Landslide": 23,
		"Spirit: Pulverize": 24,
		"Spirit: Enhanced Pulverize": 25,
		"Spirit: Primal Pulverize": 26,
		"Spirit: Raging Pulverize": 27,
		"Spirit: Tornado": 28,
		"Spirit: Enhanced Tornado": 29,
		"Spirit: Raging Tornado": 30,
		"Spirit: Primal Tornado": 31,
		"Spirit: Wild Impulses": 32,
		"Spirit: Shred": 33,
		"Spirit: Enhanced Shred": 34,
		"Spirit: Primal Shred": 35,
		"Spirit: Raging Shred": 36,
		"Spirit: Lightning Storm": 37,
		"Spirit: Enhanced Lightning Storm": 38,
		"Spirit: Primal Lightning Storm": 39,
		"Spirit: Raging Lightning Storm": 40,
		"Spirit: Abundance": 41,
		"Spirit: Heart of the Wild": 42,
		"Defensive: Earthen Bulwark": 43,
		"Defensive: Enhanced Earthen Bulwark": 44,
		"Defensive: Innate Earthen Bulwark": 45,
		"Defensive: Preserving Earthen Bulwark": 46,
		"Defensive: Debilitating Roar": 47,
		"Defensive: Enhanced Debilitating Roar": 48,
		"Defensive: Preserving Debilitating Roar": 49,
		"Defensive: Innate Debilitating Roar": 50,
		"Defensive: Ancestral Fortitude": 51,
		"Defensive: Vigilance": 52,
		"Defensive: Blood Howl": 53,
		"Defensive: Enhanced Blood Howl": 54,
		"Defensive: Innate Blood Howl": 55,
		"Defensive: Preserving Blood Howl": 56,
		"Defensive: Cyclone Armor": 57,
		"Defensive: Enhanced Cyclone Armor": 58,
		"Defensive: Preserving Cyclone Armor": 59,
		"Defensive: Innate Cyclone Armor": 60,
		"Defensive: Predatory Instinct": 61,
		"Companion: Ravens": 62,
		"Companion: Enhanced Ravens": 63,
		"Companion: Brutal Ravens": 64,
		"Companion: Ferocious Ravens": 65,
		"Companion: Call of the Wild": 66,
		"Companion: Vine Creeper": 67,
		"Companion: Enhanced Vine Creeper": 68,
		"Companion: Ferocious Vine Creeper": 69,
		"Companion: Brutal Vine Creeper": 70,
		"Companion: Wolves": 71,
		"Companion: Enhanced Wolf Pack": 72,
		"Companion: Ferocious Wolf Pack": 73,
		"Companion: Brutal Wolf Pack": 74,
		"Companion: Nature's Reach": 75,
		"Companion: Clarity": 76,
		"Wrath: Lycanthropic Speed": 77,
		"Wrath: Toxic Claws": 78,
		"Wrath: Neurotoxin": 79,
		"Wrath: Elemental Exposure": 80,
		"Wrath: Charged Atmosphere": 81,
		"Wrath: Electric Shock": 82,
		"Wrath: Bad Omen": 83,
		"Wrath: Endless Tempest": 84,
		"Wrath: Boulder": 85,
		"Wrath: Enhanced Boulder": 86,
		"Wrath: Natural Boulder": 87,
		"Wrath: Savage Boulder": 88,
		"Wrath: Trample": 89,
		"Wrath: Enhanced Trample": 90,
		"Wrath: Natural Trample": 91,
		"Wrath: Savage Trample": 92,
		"Wrath: Crushing Earth": 93,
		"Wrath: Safeguard": 94,
		"Wrath: Stone Guard": 95,
		"Wrath: Iron Fur": 96,
		"Wrath: Mending": 97,
		"Wrath: Provocation": 98,
		"Wrath: Hurricane": 99,
		"Wrath: Enhanced Hurricane": 100,
		"Wrath: Natural Hurricane": 101,
		"Wrath: Savage Hurricane": 102,
		"Wrath: Rabies": 103,
		"Wrath: Enhanced Rabies": 104,
		"Wrath: Natural Rabies": 105,
		"Wrath: Savage Rabies": 106,
		"Ultimate: Grizzly Rage": 107,
		"Ultimate: Prime Grizzly Rage": 108,
		"Ultimate: Supreme Grizzly Rage": 109,
		"Ultimate: Petrify": 110,
		"Ultimate: Prime Petrify": 111,
		"Ultimate: Supreme Petrify": 112,
		"Ultimate: Defensive Posture": 113,
		"Ultimate: Thick Hide": 114,
		"Ultimate: Unrestrained": 115,
		"Ultimate: Nature's Resolve": 116,
		"Ultimate: Quickshift": 117,
		"Ultimate: Natural Fortitude": 118,
		"Ultimate: Heightened Senses": 119,
		"Ultimate: Lacerate": 120,
		"Ultimate: Prime Lacerate": 121,
		"Ultimate: Supreme Lacerate": 122,
		"Ultimate: Cataclysm": 123,
		"Ultimate: Prime Cataclysm": 124,
		"Ultimate: Supreme Cataclysm": 125,
		"Ultimate: Defiance": 126,
		"Ultimate: Circle of Life": 127,
		"Ultimate: Resonance": 128,
		"Ultimate: Natural Disaster": 129,
		"Capstone: Nature's Fury": 130,
		"Capstone: Earthen Might": 131,
		"Capstone: Lupine Ferocity": 132,
		"Capstone: Bestial Rampage": 133,
		"Capstone: Perfect Storm": 134,
		"Capstone: Ursine Strength": 135,
		"Spirit: Predatory Instinct": 136,
		"Spirit: Iron Fur": 137,
		"Spirit: Digitigrade Gait": 138,
		"Companion: Enhanced Wolves": 139,
		"Companion: Ferocious Wolves": 140,
		"Companion: Brutal Wolves": 141
	},
	"Necromancer": {
		"Basic: Decompose": 0,
		"Basic: Enhanced Decompose": 1,
		"Basic: Acolyte's Decompose": 2,
		"Basic: Initiate's Decompose": 3,
		"Basic: Reap": 4,
		"Basic: Enhanced Reap": 5,
		"Basic: Initiate's Reap": 6,
		"Basic: Acolyte's Reap": 7,
		"Basic: Hemorrhage": 8,
		"Basic: Enhanced Hemorrhage": 9,
		"Basic: Acolyte's Hemorrhage": 10,
		"Basic: Initiate's Hemorrhage": 11,
		"Basic: Bone Splinters": 12,
		"Basic: Enhanced Bone Splinters": 13,
		"Basic: Acolyte's Bone Splinters": 14,
		"Basic: Initiate's Bone Splinters": 15,
		"Core: Blight": 16,
		"Core: Enhanced Blight": 17,
		"Core: Paranormal Blight": 18,
		"Core: Supernatural Blight": 19,
		"Core: Sever": 20,
		"Core: Enhanced Sever": 21,
		"Core: Paranormal Sever": 22,
		"Core: Supernatural Sever": 23,
		"Core: Blood Surge": 24,
		"Core: Enhanced Blood Surge": 25,
		"Core: Supernatural Blood Surge": 26,
		"Core: Paranormal Blood Surge": 27,
		"Core: Blood Lance": 28,
		"Core: Enhanced Blood Lance": 29,
		"Core: Supernatural Blood Lance": 30,
		"Core: Paranormal Blood Lance": 31,
		"Core: Bone Spear": 32,
		"Core: Enhanced Bone Spear": 33,
		"Core: Paranormal Bone Spear": 34,
		"Core: Supernatural Bone Spear": 35,
		"Core: Unliving Energy": 36,
		"Core: Imperfectly Balanced": 37,
		"Core: Reconstitution": 38,
		"Macabre: Corpse Explosion": 39,
		"Macabre: Enhanced Corpse Explosion": 40,
		"Macabre: Abhorrent Corpse Explosion": 41,
		"Macabre: Horrid Corpse Explosion": 42,
		"Macabre: Grim Harvest": 43,
		"Macabre: Fueled by Death": 44,
		"Macabre: Necrotic Carapace": 45,
		"Macabre: Blood Mist": 46,
		"Macabre: Enhanced Blood Mist": 47,
		"Macabre: Ghastly Blood Mist": 48,
		"Macabre: Dreadful Blood Mist": 49,
		"Macabre: Bone Prison": 50,
		"Macabre: Enhanced Bone Prison": 51,
		"Macabre: Ghastly Bone Prison": 52,
		"Macabre: Dreadful Bone Prison": 53,
		"Macabre: Skeletal Warrior Mastery": 54,
		"Corruption: Iron Maiden": 55,
		"Corruption: Enhanced Iron Maiden": 56,
		"Corruption: Horrid Iron Maiden": 57,
		"Corruption: Abhorrent Iron Maiden": 58,
		"Corruption: Skeletal Mage Mastery": 59,
		"Corruption: Amplify Damage": 60,
		"Corruption: Decrepify": 61,
		"Corruption: Enhanced Decrepify": 62,
		"Corruption: Abhorrent Decrepify": 63,
		"Corruption: Horrid Decrepify": 64,
		"Corruption: Death's Embrace": 65,
		"Corruption: Death's Reach": 66,
		"Summoning: Corpse Tendrils": 67,
		"Summoning: Enhanced Corpse Tendrils": 68,
		"Summoning: Horrid Corpse Tendrils": 69,
		"Summoning: Abhorrent Corpse Tendrils": 70,
		"Summoning: Reaper's Pursuit": 71,
		"Summoning: Gloom": 72,
		"Summoning: Terror": 73,
		"Summoning: Crippling Darkness": 74,
		"Summoning: Blood Begets Blood": 75,
		"Summoning: Coalesced Blood": 76,
		"Summoning: Transfusion": 77,
		"Summoning: Tides of Blood": 78,
		"Summoning: Drain Vitality": 79,
		"Summoning: Bone Spirit": 80,
		"Summoning: Enhanced Bone Spirit": 81,
		"Summoning: Ghastly Bone Spirit": 82,
		"Summoning: Dreadful Bone Spirit": 83,
		"Summoning: Serration": 84,
		"Summoning: Rapid Ossification": 85,
		"Summoning: Evulsion": 86,
		"Summoning: Compound Fracture": 87,
		"Summoning: Bone Spurs": 88,
		"Ultimate: Bonded in Essence": 89,
		"Ultimate: Death's Defense": 90,
		"Ultimate: Hellbent Commander": 91,
		"Ultimate: Inspiring Command": 92,
		"Ultimate: Army of the Dead": 93,
		"Ultimate: Prime Army of the Dead": 94,
		"Ultimate: Supreme Army of the Dead": 95,
		"Ultimate: Blood Wave": 96,
		"Ultimate: Prime Blood Wave": 97,
		"Ultimate: Supreme Blood Wave": 98,
		"Ultimate: Stand Alone": 99,
		"Ultimate: Memento Mori": 100,
		"Ultimate: Bone Storm": 101,
		"Ultimate: Prime Bone Storm": 102,
		"Ultimate: Supreme Bone Storm": 103,
		"Ultimate: Golem Mastery": 104,
		"Capstone: Ossified Essence": 105,
		"Capstone: Shadowblight": 106,
		"Capstone: Rathma's Vigor": 107,
		"Capstone: Strength in Numbers": 108,
		"Summoning: Spiked Armor": 109,
		"Book of the Dead: Skeletal Skirmishers": 110,
		"Book of the Dead: Skeletal Defenders": 111,
		"Book of the Dead: Skeletal Reapers": 112,
		"Book of the Dead: Shadow Mages": 113,
		"Book of the Dead: Cold Mages": 114,
		"Book of the Dead: Bone Mages": 115,
		"Book of the Dead: Bone Golem": 116,
		"Book of the Dead: Blood Golem": 117,
		"Book of the Dead: Iron Golem": 118
	},
	"Rogue": {
		"Basic: Blade Shift": 0,
		"Basic: Enhanced Blade Shift": 1,
		"Basic: Fundamental Blade Shift": 2,
		"Basic: Primary Blade Shift": 3,
		"Basic: Invigorating Strike": 4,
		"Basic: Enhanced Invigorating Strike": 5,
		"Basic: Fundamental Invigorating Strike": 6,
		"Basic: Primary Invigorating Strike": 7,
		"Basic: Puncture": 8,
		"Basic: Enhanced Puncture": 9,
		"Basic: Fundamental Puncture": 10,
		"Basic: Primary Puncture": 11,
		"Basic: Heartseeker": 12,
		"Basic: Enhanced Heartseeker": 13,
		"Basic: Fundamental Heartseeker": 14,
		"Basic: Primary Heartseeker": 15,
		"Basic: Forceful Arrow": 16,
		"Basic: Enhanced Forceful Arrow": 17,
		"Basic: Fundamental Forceful Arrow": 18,
		"Basic: Primary Forceful Arrow": 19,
		"Core: Twisting Blades": 20,
		"Core: Enhanced Twisting Blades": 21,
		"Core: Advanced Twisting Blades": 22,
		"Core: Improved Twisting Blades": 23,
		"Core: Flurry": 24,
		"Core: Enhanced Flurry": 25,
		"Core: Improved Flurry": 26,
		"Core: Advanced Flurry": 27,
		"Core: Penetrating Shot": 28,
		"Core: Enhanced Penetrating Shot": 29,
		"Core: Advanced Penetrating Shot": 30,
		"Core: Improved Penetrating Shot": 31,
		"Core: Rapid Fire": 32,
		"Core: Enhanced Rapid Fire": 33,
		"Core: Advanced Rapid Fire": 34,
		"Core: Improved Rapid Fire": 35,
		"Core: Barrage": 36,
		"Core: Enhanced Barrage": 37,
		"Core: Advanced Barrage": 38,
		"Core: Improved Barrage": 39,
		"Core: Sturdy": 40,
		"Core: Siphoning Strikes": 41,
		"Core: Stutter Step": 42,
		"Agility: Shadow Step": 43,
		"Agility: Enhanced Shadow Step": 44,
		"Agility: Methodical Shadow Step": 45,
		"Agility: Disciplined Shadow Step": 46,
		"Agility: Dash": 47,
		"Agility: Enhanced Dash": 48,
		"Agility: Methodical Dash": 49,
		"Agility: Disciplined Dash": 50,
		"Agility: Weapon Mastery": 51,
		"Agility: Concussive": 52,
		"Agility: Caltrops": 53,
		"Agility: Enhanced Caltrops": 54,
		"Agility: Methodical Caltrops": 55,
		"Agility: Disciplined Caltrops": 56,
		"Agility: Rugged": 57,
		"Agility: Reactive Defense": 58,
		"Subterfuge: Dark Shroud": 59,
		"Subterfuge: Enhanced Dark Shroud": 60,
		"Subterfuge: Subverting Dark Shroud": 61,
		"Subterfuge: Countering Dark Shroud": 62,
		"Subterfuge: Blinding Smoke": 63,
		"Subterfuge: Enhanced Blinding Smoke": 64,
		"Subterfuge: Subverting Blinding Smoke": 65,
		"Subterfuge: Countering Blinding Smoke": 66,
		"Subterfuge: Agile": 67,
		"Subterfuge: Exploit": 68,
		"Subterfuge: Malice": 69,
		"Subterfuge: Poison Trap": 70,
		"Subterfuge: Enhanced Poison Trap": 71,
		"Subterfuge: Countering Poison Trap": 72,
		"Subterfuge: Subverting Poison Trap": 73,
		"Subterfuge: Stealth": 74,
		"Subterfuge: Enhanced Stealth": 75,
		"Subterfuge: Countering Stealth": 76,
		"Subterfuge: Subverting Stealth": 77,
		"Imbuements: Deadly Venom": 78,
		"Imbuements: Alchemical Advantage": 79,
		"Imbuements: Debilitating Toxins": 80,
		"Imbuements: Imbue Weapon: Poison": 81,
		"Imbuements: Enhanced Imbue Weapon: Poison": 82,
		"Imbuements: Mixed Imbue Weapon: Poison": 83,
		"Imbuements: Blended Imbue Weapon: Poison": 84,
		"Imbuements: Shadow Crash": 85,
		"Imbuements: Consuming Shadows": 86,
		"Imbuements: Imbue Weapon: Shadow": 87,
		"Imbuements: Enhanced Imbue Weapon: Shadow": 88,
		"Imbuements: Mixed Imbue Weapon: Shadow": 89,
		"Imbuements: Blended Imbue Weapon: Shadow": 90,
		"Imbuements: Potency": 91,
		"Imbuements: Rapid Imbuement": 92,
		"Imbuements: Trick Attacks": 93,
		"Imbuements: Precision Imbuement": 94,
		"Imbuements: Imbue Weapon: Cold": 95,
		"Imbuements: Enhanced Imbue Weapon: Cold": 96,
		"Imbuements: Mixed Imbue Weapon: Cold": 97,
		"Imbuements: Blended Imbue Weapon: Cold": 98,
		"Imbuements: Frigid Finesse": 99,
		"Imbuements: Chilling Weight": 100,
		"Ultimate: Innervation": 101,
		"Ultimate: Second Wind": 102,
		"Ultimate: Alchemist's Fortune": 103,
		"Ultimate: Shadow Clone": 104,
		"Ultimate: Prime Shadow Clone": 105,
		"Ultimate: Supreme Shadow Clone": 106,
		"Ultimate: Aftermath": 107,
		"Ultimate: Death Trap": 108,
		"Ultimate: Prime Death Trap": 109,
		"Ultimate: Supreme Death Trap": 110,
		"Ultimate: Trap Mastery": 111,
		"Ultimate: Rain of Arrows": 112,
		"Ultimate: Prime Rain of Arrows": 113,
		"Ultimate: Supreme Rain of Arrows": 114,
		"Ultimate: Adrenaline Rush": 115,
		"Ultimate: Impetus": 116,
		"Ultimate: Haste": 117,
		"Capstone: Momentum": 118,
		"Capstone: Close Quarters Combat": 119,
		"Capstone: Victimize": 120,
		"Capstone: Exposure": 121,
		"Capstone: Precision": 122,
		"Subterfuge: Smoke Grenade": 123,
		"Subterfuge: Enhanced Smoke Grenade": 124,
		"Subterfuge: Subverting Smoke Grenade": 125,
		"Subterfuge: Countering Smoke Grenade": 126,
		"Subterfuge: Concealment": 127,
		"Imbuements: Poison Imbuement": 128,
		"Imbuements: Enhanced Poison Imbuement": 129,
		"Imbuements: Mixed Poison Imbuement": 130,
		"Imbuements: Blended Poison Imbuement": 131,
		"Imbuements: Shadow Imbuement": 132,
		"Imbuements: Enhanced Shadow Imbuement": 133,
		"Imbuements: Mixed Shadow Imbuement": 134,
		"Imbuements: Blended Shadow Imbuement": 135,
		"Imbuements: Cold Imbuement": 136,
		"Imbuements: Enhanced Cold Imbuement": 137,
		"Imbuements: Mixed Cold Imbuement": 138,
		"Imbuements: Blended Cold Imbuement": 139,
		"Subterfuge: Enhanced Concealment": 140,
		"Subterfuge: Countering Concealment": 141,
		"Subterfuge: Subverting Concealment": 142
	},
	"Sorcerer": {
		"Basic: Frost Bolt": 0,
		"Basic: Enhanced Frost Bolt": 1,
		"Basic: Flickering Frost Bolt": 2,
		"Basic: Glinting Frost Bolt": 3,
		"Basic: Spark": 4,
		"Basic: Enhanced Spark": 5,
		"Basic: Flickering Spark": 6,
		"Basic: Glinting Spark": 7,
		"Basic: Arc Lash": 8,
		"Basic: Enhanced Arc Lash": 9,
		"Basic: Glinting Arc Lash": 10,
		"Basic: Flickering Arc Lash": 11,
		"Basic: Fire Bolt": 12,
		"Basic: Enhanced Fire Bolt": 13,
		"Basic: Glinting Fire Bolt": 14,
		"Basic: Flickering Fire Bolt": 15,
		"Core: Charged Bolts": 16,
		"Core: Enhanced Charged Bolts": 17,
		"Core: Greater Charged Bolts": 18,
		"Core: Destructive Charged Bolts": 19,
		"Core: Frozen Orb": 20,
		"Core: Enhanced Frozen Orb": 21,
		"Core: Destructive Frozen Orb": 22,
		"Core: Greater Frozen Orb": 23,
		"Core: Incinerate": 24,
		"Core: Enhanced Incinerate": 25,
		"Core: Destructive Incinerate": 26,
		"Core: Greater Incinerate": 27,
		"Core: Fireball": 28,
		"Core: Enhanced Fireball": 29,
		"Core: Greater Fireball": 30,
		"Core: Destructive Fireball": 31,
		"Core: Chain Lightning": 32,
		"Core: Enhanced Chain Lightning": 33,
		"Core: Greater Chain Lightning": 34,
		"Core: Destructive Chain Lightning": 35,
		"Core: Ice Shards": 36,
		"Core: Enhanced Ice Shards": 37,
		"Core: Greater Ice Shards": 38,
		"Core: Destructive Ice Shards": 39,
		"Core: Devastation": 40,
		"Core: Elemental Dominance": 41,
		"Core: Potent Warding": 42,
		"Defensive: Flame Shield": 43,
		"Defensive: Enhanced Flame Shield": 44,
		"Defensive: Mystical Flame Shield": 45,
		"Defensive: Shimmering Flame Shield": 46,
		"Defensive: Frost Nova": 47,
		"Defensive: Enhanced Frost Nova": 48,
		"Defensive: Mystical Frost Nova": 49,
		"Defensive: Shimmering Frost Nova": 50,
		"Defensive: Ice Armor": 51,
		"Defensive: Enhanced Ice Armor": 52,
		"Defensive: Shimmering Ice Armor": 53,
		"Defensive: Mystical Ice Armor": 54,
		"Defensive: Teleport": 55,
		"Defensive: Enhanced Teleport": 56,
		"Defensive: Mystical Teleport": 57,
		"Defensive: Shimmering Teleport": 58,
		"Defensive: Elemental Attunement": 59,
		"Defensive: Glass Cannon": 60,
		"Conjuration: Hydra": 61,
		"Conjuration: Enhanced Hydra": 62,
		"Conjuration: Invoked Hydra": 63,
		"Conjuration: Summoned Hydra": 64,
		"Conjuration: Ice Blades": 65,
		"Conjuration: Enhanced Ice Blades": 66,
		"Conjuration: Summoned Ice Blades": 67,
		"Conjuration: Invoked Ice Blades": 68,
		"Conjuration: Lightning Spear": 69,
		"Conjuration: Enhanced Lightning Spear": 70,
		"Conjuration: Summoned Lightning Spear": 71,
		"Conjuration: Invoked Lightning Spear": 72,
		"Conjuration: Conjuration Mastery": 73,
		"Conjuration: Precision Magic": 74,
		"Conjuration: Align the Elements": 75,
		"Conjuration: Mana Shield": 76,
		"Conjuration: Protection": 77,
		"Mastery: Meteor": 78,
		"Mastery: Enhanced Meteor": 79,
		"Mastery: Mage's Meteor": 80,
		"Mastery: Wizard's Meteor": 81,
		"Mastery: Blizzard": 82,
		"Mastery: Enhanced Blizzard": 83,
		"Mastery: Mage's Blizzard": 84,
		"Mastery: Wizard's Blizzard": 85,
		"Mastery: Ball Lightning": 86,
		"Mastery: Enhanced Ball Lightning": 87,
		"Mastery: Wizard's Ball Lightning": 88,
		"Mastery: Mage's Ball Lightning": 89,
		"Mastery: Inner Flames": 90,
		"Mastery: Soulfire": 91,
		"Mastery: Devouring Flames": 92,
		"Mastery: Regenerative Conduit": 93,
		"Mastery: Static Discharge": 94,
		"Mastery: Shocking Impact": 95,
		"Mastery: Icy Veil": 96,
		"Mastery: Hoarfrost": 97,
		"Mastery: Cold Front": 98,
		"Mastery: Firewall": 99,
		"Mastery: Enhanced Firewall": 100,
		"Mastery: Wizard's Firewall": 101,
		"Mastery: Mage's Firewall": 102,
		"Ultimate: Inferno": 103,
		"Ultimate: Prime Inferno": 104,
		"Ultimate: Supreme Inferno": 105,
		"Ultimate: Unstable Currents": 106,
		"Ultimate: Prime Unstable Currents": 107,
		"Ultimate: Supreme Unstable Currents": 108,
		"Ultimate: Deep Freeze": 109,
		"Ultimate: Prime Deep Freeze": 110,
		"Ultimate: Supreme Deep Freeze": 111,
		"Ultimate: Frostbite": 112,
		"Ultimate: Permafrost": 113,
		"Ultimate: Snap Freeze": 114,
		"Ultimate: Icy Touch": 115,
		"Ultimate: Coursing Currents": 116,
		"Ultimate: Electrocution": 117,
		"Ultimate: Convulsions": 118,
		"Ultimate: Conduction": 119,
		"Ultimate: Immolated Flesh": 120,
		"Ultimate: Endless Pyre": 121,
		"Ultimate: Pyromania": 122,
		"Ultimate: Fiery Surge": 123,
		"Capstone: Shatter": 124,
		"Capstone: Icefall": 125,
		"Capstone: Warmth": 126,
		"Capstone: Esu's Ferocity": 127,
		"Capstone: Overflowing Energy": 128,
		"Capstone: Vyr's Mastery": 129
	}
}

export { nodeHistory };