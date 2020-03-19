// import inven from '../pages/Game';
// import useableItems from '../data/useableItems';

export default [
    {
        id: 1,
        title: "Introduction",
        text:
            "It’s been five years since the cataclysm. You’ve been etching out a living in what remains of Sacramento. The landscape of skyscrapers and towering structures had been reduced to smoldering piles of rubble from the near daily earthquakes. You’ve scraped by on supplies from various looting runs, but everything seems to be running out. The time to journey east is now. You’ve been modifying an old ford to make the journey, welding on armor and siphoning what gas you can. Before the signal died out last year, you picked up a radio signal repeating the message “Washington D.C. is the last remaining safe zone. For anyone listening, if you can make it here, we can help you.” You could hit the road now, or make one last stop at old Pete’s and buy additional supplies.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_1.gif",
        progress: 0,
        options: [
            {
                text: "Leave without visiting the shop.",
                nextText: 1.1,
                action: []
            },
            {
                text: "Visit Old Pete's Shop.",
                nextText: 1.2,
                action: []
            }
        ]
    },
    {
        id: 1.1,
        title: "Introduction",
        text:
            "You never were good at goodbyes, and Pete’s scavenging skills are as faded as his memory these days. You rev up the engine and begining your journey across US 50.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_1.gif",
        progress: 0,
        options: [
            {
                text: "Continue",
                nextText: 3,
                action: []
            }
        ]
    },
    {
        id: 1.2,
        title: "Introduction",
        text:
            "You decide to visit old Pete one last time and see what he has that might be useful for the long journey.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_1.gif",
        progress: 0,
        options: [
            {
                text: "Continue",
                nextText: 2,
                action: []
            }
        ]
    },
    {
        id: 2,
        title: "Welcome to Old Pete's Caravan",
        text:
            "You enter old Pete’s mobile home, greeted by a familiar but still overwhelming stench. Pete had a way of scavenging and crafting useful supplies, and was one of the few folks out there still accepting paper currency. ‘I still don’t see why you believe in that safezone nonsense,’a gruff voice bellows out from behind his scruffy moustache. But I guess this is goodbye then. Better stock up before you go, anything here you lookin to buy?.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_2.gif",
        progress: 4,
        options: [
            {
                text: "Would you like to purchase an axe?(20)",
                nextText: 2,
                action: [1, 28],
                hideIfAlreadyHas: 0,
                cost: 20
            },
            {
                text: "Would you like to purchase food for your travels?(10)",
                nextText: 2,
                action: [9, 26],
                cost: 10
            },
            {
                text: "Would you like to purchase fuel for your travels?(15)",
                nextText: 2,
                action: [27, 13],
                cost: 15
            },
            {
                text: "Continue on your journey to the safe zone.",
                nextText: 2.1,
                action: []
            }
        ]
    },
    {
        id: 2.1,
        title: "Welcome to Old Pete's Caravan",
        text:
            "You start the engine, wave one last goodbye to Pete, and begin your journey eastward.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_2.gif",
        progress: 4,
        options: [
            {
                text: "Continue",
                nextText: 3,
                action: [12, 8]
            }
        ]
    },
    {
        id: 3,
        title: "Crunch",
        text:
            "CRRRRUNCH. A sickening crunch echoes under the wheels of your vehicle. Whatever it was may have damaged the chassis. Do you stop and examine or keep driving?.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_3.gif",
        progress: 8,
        options: [
            {
                text: "Stop and examine?",
                nextText: 3.1,
                action: [5]
            },
            {
                text: "Keep Driving?",
                nextText: 3.2,
                action: [12]
            }
        ]
    },
    {
        id: 3.1,
        title: "Crunch",
        text:
            "You stop the car and shine a light under the body. There’s nothing along the lines of viscera under the car, but you do unwedge a disturbingly long fragment of bone from the axel.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_3-1.gif",
        progress: 8,
        // action: 1,
        // action 1 + bone
        options: [
            {
                text: "Continue",
                nextText: 4,
                action: [12, 8]
            }
        ]
    },
    {
        id: 3.2,
        title: "Crunch",
        text:
            "It’s dangerous to stop here, and given the length of the journey you’re sure plenty of things will end up flattened by your tires. Still, every now and then an uncomfortable jolt bumps up from below.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_3-1.gif",
        progress: 8,
        // action: 2,
        // "action 2 -5 fuel"
        options: [
            {
                text: "Continue",
                nextText: 4,
                action: [12, 8]
            }
        ]
    },
    {
        id: 4,
        title: "Bee",
        text:
            "On a relatively peaceful day of driving, a bee flies into the car. Even though you roll down all the windows, it refuses to leave the car. What do you do?",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_4.jpg",
        progress: 12,
        options: [
            {
                text: "Swat the bee?",
                nextText: 4.1,
                action: [17]
            },
            {
                text: "Let the Bee be",
                nextText: 4.2,
                action: [18]
            }
        ]
    },
    {
        id: 4.1,
        title: "Bee",
        text:
            "With one hand on the wheel, you try and swat the bee away. In instinctively stings you. Ouch.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_4.jpg",
        progress: 12,
        // action: 3
        // action 3 -5 health
        options: [
            {
                text: "Continue",
                nextText: 5,
                action: [12, 8]
            }
        ]
    },
    {
        id: 4.2,
        title: "Bee",
        text:
            "The bee comes to a rest on the dashboard. Eventually it flies away, but the company was nice for a moment.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_4.jpg",
        progress: 12,
        // action: 4 +5 health
        options: [
            {
                text: "Continue",
                nextText: 5,
                action: [12, 8]
            }
        ]
    },
    {
        id: 5,
        title: "Quiet Town",
        text:
            "While driving, you come across a small roadside town. By the looks of it, the place is totally abandoned",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_5.gif",
        progress: 16,
        options: [
            {
                text: "Loot quickly and keep driving?",
                nextText: 5.1,
                action: [14, 24]
            },
            {
                text: "Rest for the night?",
                nextText: 5.2,
                action: [20, 6]
            }
        ]
    },
    {
        id: 5.1,
        title: "Quiet Town",
        text:
            "You mange to find a few necessities, but the place has been picked clean.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_5.gif",
        progress: 16,
        // action: 5 +5 money, + 3 gas
        options: [
            {
                text: "Continue",
                nextText: 6,
                action: [12, 8]
            }
        ]
    },
    {
        id: 5.2,
        title: "Quiet Town",
        text:
            "You barricade yourself inside one of the houses for the night. It feels good to sleep somewhere other than the car. You mange to find some useful medicine as well",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_5.gif",
        progress: 16,
        // action: 6 +5 health, + Medicine
        options: [
            {
                text: "Continue",
                nextText: 6,
                action: [12, 8]
            }
        ]
    },
    {
        id: 6,
        title: "Heavy Rain",
        text:
            "A heavy rain begins to pour. The rain looks peculiar, almost thicker than normal. Still, it might be good to stop and refresh your water supply.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_6.gif",
        progress: 20,
        options: [
            {
                text: "Stop and collect rain?",
                nextText: 6.1,
                action: [12]
            },
            {
                text: "Keep driving?",
                nextText: 6.2,
                action: []
            }
        ]
    },
    {
        id: 6.1,
        title: "Heavy Rain",
        text:
            "You stop for a while and collect rain water. However, as you observe in the container, it starts to wiggle on its own. You dump out what you’ve collect and lost a days worth of travel.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_6.gif",
        progress: 20,
        // action: 7 -5 gas
        options: [
            {
                text: "Continue",
                nextText: 7,
                action: [12, 8]
            }
        ]
    },
    {
        id: 6.2,
        title: "Heavy Rain",
        text:
            "You turn on the windshield wipers and speed ahead, the rain sticking more than it should.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_6.gif",
        progress: 20,
        options: [
            {
                text: "Continue",
                nextText: 7,
                action: [12, 8]
            }
        ]
    },
    {
        id: 7,
        title: "Rest Stop",
        text:
            "You come across an old rest stop along the road. There might still be supplies in the vending machines. Or you could see if there’s any clean water in the lavatories.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_7.jpg",
        progress: 24,
        options: [
            {
                text: "Scavenge food?",
                nextText: 7.1,
                action: [10]
            },
            {
                text: "Scavenge water?",
                nextText: 7.2,
                action: [17]
            }
        ]
    },
    {
        id: 7.1,
        title: "Rest Stop",
        text:
            "You bust open the only untouched vending machine. Looks like somebody already took all the water and granola bars, but you find some stale mini donuts. So that’s fun.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_7.jpg",
        progress: 24,
        // action: 8 + 4 food
        options: [
            {
                text: "Continue",
                nextText: 8,
                action: [12, 8]
            }
        ]
    },
    {
        id: 7.2,
        title: "Rest Stop",
        text:
            "Oh god that was a mistake. Some time ago there stopped being people to clean the public restrooms and, oh no.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_7.jpg",
        progress: 24,
        // action: 9 - 5 health
        options: [
            {
                text: "Continue",
                nextText: 8,
                action: [12, 8]
            }
        ]
    },
    {
        // this event should be a checkpoint in the game and save the game state for the player //
        id: 8,
        title: "Vegas Baby",
        text:
            "You drive past a collapsed sign, “WELCOME TO FABULOUS LAS VEGAS” but all that remains of the glitz and glamor is a massive, smoldering, hole. A few caravans line the circumference, this might be a good place to stock up on supplies.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_8.jpg",
        progress: 28,
        options: [
            {
                text: "Visit “LUCY’S GAMBLIN HOLE”",
                nextText: 8.1,
                action: []
            },
            {
                text: "Visit “SAFEWAY”",
                nextText: 8.2,
                action: []
            },
            {
                text: "Leave without supplies",
                nextText: 8.3,
                action: []
            }
        ]
    },
    {
        id: 8.1,
        title: "Vegas Baby",
        text:
            "'The spirit of Lady Luck is still alive, even if everybody else is dead. I’m going to throw this rock into the pit, if it lands red side up, you double your bet, if it lands black side up, I keep your money. What do you say?'",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_8a.jpg",
        progress: 28,
        // action: 10 bet 5
        // action: 11 bet 10
        // action: 12 bet 25
        options: [
            {
                text: "Bet 5?",
                nextText: 8.4,
                action: [25],
                cost: 5
            },
            {
                text: "Bet 10?",
                nextText: 8.4,
                action: [26],
                cost: 10
            },
            {
                text: "Bet 25?",
                nextText: 8.4,
                action: [29],
                cost: 25
            }
        ]
    },
    {
        id: 8.2,
        title: "Vegas Baby",
        text:
            "CHRISTOPHER: 'I spelunk into the pit so you don’t have to, and pass the savings on to you! It’s the safe way!'",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_8b.jpg",
        progress: 28,
        options: [
            {
                text: "Buy Food?",
                nextText: 8.2,
                action: [11, 25],
                cost: 10
            },
            {
                text: "Buy Fuel?",
                nextText: 8.2,
                action: [13, 26],
                cost: 10
            },
            {
                text: "Buy medicine?",
                nextText: 8.2,
                action: [6, 28],
                hideIfAlreadyHas: 5,
                cost: 20
            },
            {
                text: "Continue",
                nextText: 9,
                action: [12, 8]
            }
        ]
    },
    {
        id: 8.3,
        title: "Vegas Baby",
        text:
            "You leave Vegas behind you, setting out for the loneliest road stretch of the journey. The locals warn you, it might not be so lonely anymore.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_8.jpg",
        progress: 28,
        options: [
            {
                text: "Continue",
                nextText: 9,
                action: [12, 8]
            }
        ]
    },
    {
        id: 8.4,
        title: "Vegas Baby",
        text:
            "You hurl the rock into the pit, it bounces off a light post and lands BLACK SIDE Up. LUCY: “Looks like Lady Luck wasn’t on your side today.”",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_8a.jpg",
        progress: 28,
        options: [
            {
                text: "Continue",
                nextText: 9,
                action: [12, 8]
            }
        ]
    },
    // Continue here.
    {
        id: 9,
        title: "Stargazing",
        text:
            "While driving across the dessert, the skies part for a moment. You can’t remember the last time you’ve seen the stars. You should focus on the road, but do you take time to look up?",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_9.jpg",
        progress: 32,
        options: [
            {
                text: "Stargaze?",
                nextText: 9.1,
                action: [15]
            },
            {
                text: "Focus on the Road",
                nextText: 9.2,
                action: []
            }
        ]
    },
    {
        id: 9.1,
        title: "Stargazing",
        text:
            "You can’t describe it, but the sky feels wrong. As you dart your focus between the road and the stars, you can’t help but feel like they’re moving. As you focus on the sky, you sense something blink. The cosmos are all wrong, you decide it’s best not to look again.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_9.jpg",
        progress: 32,
        // action: -10 health
        options: [
            {
                text: "Continue",
                nextText: 10,
                action: [12, 8]
            }
        ]
    },
    {
        id: 9.2,
        title: "Stargazing",
        text:
            "You keep your eyes on the road, even as a tiny voice enters your mind whispering “look…..look…….look”.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_9.jpg",
        progress: 32,
        options: [
            {
                text: "Continue",
                nextText: 10,
                action: [12, 8]
            }
        ]
    },
    {
        id: 10,
        title: "The Figure",
        text:
            "Driving late at night, your headlights begin to flicker. Suddenly, you notice a shadowy, humanoid figure standing in the middle of the road. It’s too late to stop.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_10.gif",
        progress: 36,
        options: [
            {
                text: "Swerve out of the way?",
                nextText: 10.1,
                action: [12]
            },
            {
                text: "Ram it!",
                nextText: 10.2,
                action: [15]
            }
        ]
    },
    {
        id: 10.1,
        title: "The Figure",
        text:
            "You swerve out of the way at the last minute, burning out offroad. You quickly course correct, but see no sign of the figure in your rearview mirrors.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_11.gif",
        progress: 36,
        // action: -5 gas
        options: [
            {
                text: "Continue",
                nextText: 11,
                action: [12, 8]
            }
        ]
    },
    {
        id: 10.2,
        title: "The Figure",
        text:
            "You accelerate towards the figure, but instead of crashing into it, your car passes right through it. For a moment the figure is in the car with you, a living shadow with its hand on your heart. And then it’s gone, leaving no trace but the bad memory.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_11.gif",
        progress: 36,
        // action: -10 gas
        options: [
            {
                text: "Continue",
                nextText: 11,
                action: [12, 8]
            }
        ]
    },
    {
        id: 11,
        title: "The Music",
        text:
            "While driving across the desert, windows down, the quiet of the night is interrupted by the twangs of rock music. You see a light offroad, if you turn off now, you can find the source of the music.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_11.jpg",
        progress: 40,
        options: [
            {
                text: "Pull off to investigate?",
                nextText: 11.1,
                action: [13, 11]
            },
            {
                text: "Rollup window and press on?",
                nextText: 11.2,
                action: [12]
            }
        ]
    },
    {
        id: 11.1,
        title: "Tha Music",
        text:
            "You turn off the road, following the source of the music. You find a small shack with a rickety broadcast tower. Inside you meet a friendly old man playing old records. He gives you food and fuel to help you on your journey.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_11.jpg",
        progress: 40,
        // action: +10 gas, + 5 food
        options: [
            {
                text: "Continue",
                nextText: 12,
                action: [12, 8]
            }
        ]
    },
    {
        id: 11.2,
        title: "Tha Music",
        text:
            "The desert’s done nothing but play tricks on your, there’s no reason to start trusting it now",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_11.jpg",
        progress: 40,
        // action: +10 gas, + 5 food
        options: [
            {
                text: "Continue",
                nextText: 12,
                action: [12, 8]
            }
        ]
    },
    {
        id: 12,
        title: "The Hound",
        text:
            "While looting inside an abandoned gas station, you realize you aren’t alone. A beastly hound blocks the exit, gnarling its three rows of bloodstained teeth. The only thing that might help is a hefty fire extinguisher nearby.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_12.gif",
        progress: 44,
        options: [
            {
                text: "Spray the beast with the fire extinguisher?",
                nextText: 12.1,
                action: [17]
            },
            {
                text: "Pummel the beast with the fire extinguisher?",
                nextText: 12.2,
                action: [15]
            },
            {
                text: "Throw large bone to the Beast?",
                nextText: 12.3,
                action: [11, 38],
                showIfInventoryHas: 4
            }
        ]
    },
    {
        id: 12.1,
        title: "The Hound",
        text:
            "A frothy foam spews out from the extinguisher, blinding the beast. You run past it, barely keeping your balance over the foam. By the time you get back to your car, you realize it managed to deeply scratch you.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_12.gif",
        progress: 44,
        // action: - 5 heatlh
        options: [
            {
                text: "Continue",
                nextText: 13,
                action: [12, 8]
            }
        ]
    },
    {
        id: 12.2,
        title: "The Hound",
        text:
            "You lift the heft of the extinguisher overhead and try to bring it down onto the beast. It dodges out of the way, biting you in the leg. You manage to get a solid hit on it, leaving it stunned enough for you to make it to the car.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_12.gif",
        progress: 44,
        // action: - 10 heatlh
        options: [
            {
                text: "Continue",
                nextText: 13,
                action: [12, 8]
            }
        ]
    },
    {
        id: 12.3,
        title: "The Hound",
        text:
            "You throw the large bone, and the beast instinctively chases it. Your path is clear as it ravenously gnaws at the bone. You manage to grab a handful of supplies as you sneak your way out.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_12.gif",
        progress: 44,
        // action: + 5 food
        options: [
            {
                text: "Continue",
                nextText: 13,
                action: [12, 8]
            }
        ]
    },
    {
        id: 13,
        title: "Check Engine",
        text:
            "While driving, the check engine light turns on. You know it’s not a good idea to keep driving with this thing on.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_13.jpg",
        progress: 48,
        options: [
            {
                text: "Carefully inspect under the hood",
                nextText: 13.1,
                action: []
            },
            {
                text: "Give the car a good kick?",
                nextText: 13.2,
                action: [17]
            }
        ]
    },
    {
        id: 13.1,
        title: "Check Engine",
        text:
            "You take a look under the hood. Looks like the issue is thankfully just a loosefuel cap. You solve the issue and keep driving.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_13.jpg",
        progress: 48,
        options: [
            {
                text: "Continue",
                nextText: 14,
                action: [12, 8]
            }
        ]
    },
    {
        id: 13.2,
        title: "Check Engine",
        text:
            "You attempt the old concussive force method of problem solving. You give the car a solid kick, painfully crunching your toes. The light flicks off, but this is going to hurt for a while.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_13.jpg",
        progress: 48,
        // action: - 5 health
        options: [
            {
                text: "Continue",
                nextText: 14,
                action: [12, 8]
            }
        ]
    },
    {
        id: 14,
        title: "Twilight Park",
        text:
            "You arrive at Twilight Park, a settlement that rose up in the remains of a once thriving amusement park. The roller coaster’s wooden tracks have totally decayed in some places, and the ferris wheel lies collapsed in the algae infested man-made lake, but the locals have carved out a home here.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_14.webp",
        progress: 52,
        options: [
            {
                text: "Visit the Fun Store?",
                nextText: 14.1,
                action: []
            },
            {
                text: "Leave Twilight Park?",
                nextText: 15,
                action: []
            }
        ]
    },
    {
        id: 14.1,
        title: "Twilight Park",
        text:
            "Shopkeep: “Many travellers have ended their journey here, deciding to live out there days in Twilight Park. We well what they no longer need.”",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_14.webp",
        progress: 52,
        options: [
            {
                text: "Buy Food?",
                nextText: 14.1,
                action: [11, 25],
                cost: 10
            },
            {
                text: "Buy Fuel?",
                nextText: 14.1,
                action: [13, 26],
                cost: 10
            },
            {
                text: "Buy medicine?",
                nextText: 14.1,
                action: [6, 28],
                hideIfAlreadyHas: 5,
                cost: 20
            },
            {
                text: "Continue",
                nextText: 15,
                action: [12, 8]
            }
        ]
    },
    {
        id: 15,
        title: "Fissure",
        text: "While driving, a massive fissure erupts across the road ahead.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_15.jpg",
        progress: 56,
        options: [
            {
                text: "Slam on the brakes?",
                nextText: 15.1,
                action: [17]
            },
            {
                text: "Slam on the gas?",
                nextText: 15.2,
                action: [12]
            }
        ]
    },
    {
        id: 15.1,
        title: "Fissure",
        text:
            "You slam hard on the breaks, everything in the car violently jerks forward. You slam into the steering wheel. The breaks skid, and you stop right before plummeting into the abyss.  The car is fine, but you are bruised up.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_15.jpg",
        progress: 56,
        // action: - 5 health
        options: [
            {
                text: "Continue",
                nextText: 16,
                action: [12, 8]
            }
        ]
    },
    {
        id: 15.2,
        title: "Fissure",
        text:
            "You slam on thefuel, jumping the fissure. You make it across, but the car slams hard into the pavement, damaging the body. But you are able to keep driving.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_15.jpg",
        progress: 56,
        // action: -5 gas
        options: [
            {
                text: "Continue",
                nextText: 16,
                action: [12, 8]
            }
        ]
    },
    {
        id: 16,
        title: "Abandoned Car",
        text:
            "You come across an abandoned, armored, car similar to yours. The driver’s skeleton is slumped over the steering wheel. It is a reminder that there are others who have tried to make this journey who didn’t make it.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_16.jpg",
        progress: 60,
        options: [
            {
                text: "Loot the Trunk?",
                nextText: 16.1,
                action: [11, 21, 3]
            },
            {
                text: "Siphon Gas from the Tank?",
                nextText: 16.2,
                action: [13]
            }
        ]
    },
    {
        id: 16.1,
        title: "Abandoned Car",
        text:
            "Most of the food has begun to rot, but you manage to find some that’s salvageable. You also find a flashlight.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_16.jpg",
        progress: 60,
        // action: + food, + 10 money, get flashlight
        options: [
            {
                text: "Continue",
                nextText: 17,
                action: [12, 8]
            }
        ]
    },
    {
        id: 16.2,
        title: "Abandoned Car",
        text:
            "You successfully siphon fuel from the tank, hopefully it’ll help you get further than this poor soul.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_16.jpg",
        progress: 60,
        // action: + 10 fuel
        options: [
            {
                text: "Continue",
                nextText: 17,
                action: [12, 8]
            }
        ]
    },
    {
        id: 17,
        title: "Scream",
        text:
            "Driving through a heavily wooded stretch of road, you hear horrible screaming. Somebody sounds like they are in incredible pain.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_17.jpg",
        progress: 64,
        options: [
            {
                text: "Stop to investigate?",
                nextText: 17.1,
                action: [1]
            },
            {
                text: "Nope! Keep Driving!",
                nextText: 17.2,
                action: [15]
            }
        ]
    },
    {
        id: 17.1,
        title: "Scream",
        text:
            "You pull over and follow the sounds of screams. You come upon an empty clearing, the sound of screams piercing your ears. There’s no one around, but you do find an axe viciously wedged in a tree. You pull the bloodstained ax out and the screams dissipate into the wind.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_17.jpg",
        progress: 64,
        // action: + item axe
        options: [
            {
                text: "Continue",
                nextText: 18,
                action: [12, 8]
            }
        ]
    },
    {
        id: 17.2,
        title: "Scream",
        text:
            "The screams continue echoing out. You still hear them as you sleep long after you leave the woods.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_17.jpg",
        progress: 64,
        // action: - 10 health
        options: [
            {
                text: "Continue",
                nextText: 18,
                action: [12, 8]
            }
        ]
    },
    {
        id: 18,
        title: "Grocer",
        text:
            "While looting an abandoned grocery store, you hear a noise in the back. You find a survivor holed up here. He looks pretty badly injured, but he has plenty of supplies.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_18.jpg",
        progress: 70,
        options: [
            {
                text: "Rob him?",
                nextText: 18.1,
                action: [9, 21, 15]
            },
            {
                text: "Leave him be?",
                nextText: 18.2,
                action: []
            },
            {
                text: "Help him?",
                nextText: 18.3,
                action: [9, 13, 22, 39],
                showIfInventoryHas: 5
            }
        ]
    },
    {
        id: 18.1,
        title: "Grocer",
        text:
            "You start stealing his supplies and he attacks! You manage to dispatch the man and steal everything you can carry. But boy you feel bad.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_18.jpg",
        progress: 70,
        // action: + 10 food + 10 money - 10 health
        options: [
            {
                text: "Continue",
                nextText: 19,
                action: [12, 8]
            }
        ]
    },
    {
        id: 18.2,
        title: "Grocer",
        text: "You leave the man alone. The road has not made you a monster.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_18.jpg",
        progress: 70,
        options: [
            {
                text: "Continue",
                nextText: 19,
                action: [12, 8]
            }
        ]
    },
    {
        id: 18.3,
        title: "Grocer",
        text:
            "You give the man medicine, it should ease the pain a bit. He gives you some supplies as thanks.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_18.jpg",
        progress: 70,
        // action: + 10 food + 10 fuel + 20 money
        options: [
            {
                text: "Continue",
                nextText: 19,
                action: [12, 8]
            }
        ]
    },
    {
        id: 19,
        title: "The Subway",
        text:
            "You come across the entrance to an underground subway station. Inside is pitch black, but if there’s anything to loot odds are the darkness dissuaded anybody else from trying.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_19.webp",
        progress: 74,
        options: [
            {
                text: "Explore the darkness?",
                nextText: 19.1,
                action: [11, 17]
            },
            {
                text: "Keep Driving?",
                nextText: 19.2,
                action: []
            },
            {
                text: "Use flashlight to explore?",
                nextText: 19.3,
                action: [9, 22, 36],
                showIfInventoryHas: 2
            }
        ]
    },
    {
        id: 19.1,
        title: "The Subway",
        text:
            "You take the steps down into the inky darkness, feeling your way through. Your eyes begin to adjust, but only barely. You trip, stumble, and fall your way around. You grab  what you think might be some supplies, you’ll find out when you reach the light again.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_19.webp",
        progress: 74,
        // action: + 5 food -5 health
        options: [
            {
                text: "Continue",
                nextText: 20,
                action: [12, 8]
            }
        ]
    },
    {
        id: 19.2,
        title: "The Subway",
        text: "You know better than to get lost in the dark. You keep driving.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_19.webp",
        progress: 74,
        options: [
            {
                text: "Continue",
                nextText: 20,
                action: [12, 8]
            }
        ]
    },
    {
        id: 19.3,
        title: "The Subway",
        text:
            "You use your flashlight as a guide into the darkness. You find an old news stand left mostly untouched. You’d go deeper, but strange guttural noises from deeper in the tunnels persuade you otherwise.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_19.webp",
        progress: 74,
        // action: + 10 food + 20 money
        options: [
            {
                text: "Continue",
                nextText: 20,
                action: [12, 8]
            }
        ]
    },
    {
        id: 20,
        title: "O'Hare",
        text:
            "You drive out onto the runway of O’hare airport where a small settlement lives inside a cluster of superliners. Guard turrets poke out of airplane windows.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_20.jpg",
        progress: 78,
        // actio: ,
        options: [
            {
                text: "Shop?",
                nextText: 20.1,
                action: []
            },
            {
                text: "Leave?",
                nextText: 20.2,
                action: []
            }
        ]
    },
    {
        id: 20.1,
        title: "O'Hare",
        text:
            "“Welcome to the CARGO HOLD!” an old woman flanked by guardsmen bellows out. “Fresh outta peanuts, but  you’ll find all kinds of travellin needs here.”",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_20.jpg",
        progress: 78,
        // action: +10 food - 10 money
        options: [
            {
                text: "Purchase Food?(10)",
                nextText: 20.1,
                action: [9, 26],
                cost: 10
            },
            {
                text: "Purchase Fuel?(20)",
                nextText: 20.1,
                // action: +10 fuel - 20 money
                action: [13, 28],
                cost: 20
            },
            {
                text: "Continue on your journey to the safe zone?",
                nextText: 20.2,
                action: []
            }
        ]
    },
    {
        id: 20.2,
        title: "O'Hare",
        text:
            "You start up the car and begin driving down the final stretch of the journey.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_20.jpg",
        progress: 78,
        options: [
            {
                text: "Continue",
                nextText: 21,
                action: [12, 8]
            }
        ]
    },
    {
        id: 21,
        title: "Red Rain",
        text:
            "The skies grow full with deep red clouds. Drops of crimson rain begin to fall, sizzling as they hit your car, dissolving the metal. It looks like the storm will only worsen.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_21.jpg",
        progress: 82,
        options: [
            {
                text: "Outrun the storm?",
                nextText: 21.1,
                // action: -5 food - 5 fuel
                action: [8, 12]
            },
            {
                text: "Take shelter?",
                nextText: 21.2,
                // action: - 10 food
                action: [7]
            }
        ]
    },
    {
        id: 21.1,
        title: "Red Rain",
        text:
            "You slam on thefuel, trying to outrun the storm. You manage to stay ahead of the squall, but red rops still burn through the roof of your car, tainting some supplies.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_21.jpg",
        progress: 82,
        options: [
            {
                text: "Continue",
                nextText: 22,
                action: [12, 8]
            }
        ]
    },
    {
        id: 21.2,
        title: "Red Rain",
        text:
            "You maneuver under the first shelter you can find, a dilapidated overpass.The rain starts pouring down, the stench of dissolving asphalt filling your lungs.  The rain lasts all day, forcing you to use up additional supplies.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_21.jpg",
        progress: 82,
        options: [
            {
                text: "Continue",
                nextText: 22,
                action: [12, 8]
            }
        ]
    },
    {
        id: 22,
        title: "Health Checkpoint",
        text:
            "You come across a group of armed soldiers alongside the road. They claim to be performing health checks on anyone making their way to D.C. They ask you to step out of the car.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_22.jpg",
        progress: 86,
        options: [
            {
                text: "Allow health check?",
                nextText: 22.1,
                // action: -15 health - 15 food
                action: [16, 7]
            },
            {
                text: "Skip health check, floor it!",
                nextText: 22.2,
                // action: - 5 fuel
                action: [12]
            },
            {
                text: "Allow health check, but bring your ax?",
                nextText: 22.3,
                // action: - 5 fuel
                action: [12],
                showIfInventoryHas: 0
            }
        ]
    },
    {
        id: 22.1,
        title: "Health Checkpoint",
        text:
            "The men reveal themselves to be bandits, rough you up, and steal most of your food.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_22.jpg",
        progress: 86,
        options: [
            {
                text: "Continue",
                nextText: 23,
                action: [12, 8]
            }
        ]
    },
    {
        id: 22.2,
        title: "Health Checkpoint",
        text:
            "Smelling a trap, you slam on the gasl. A few stray bullets pierce your car but you escape mostly unharmed.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_22.jpg",
        progress: 86,
        options: [
            {
                text: "Continue",
                nextText: 23,
                action: [12, 8]
            }
        ]
    },
    {
        id: 22.3,
        title: "Health Checkpoint",
        text:
            "The men reveal themselves to be bandits, but you manage to fight them off using your ax. You make off with a few of their supplies and continue driving",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_22.jpg",
        progress: 86,
        options: [
            {
                text: "Continue",
                nextText: 23,
                action: [12, 34]
            }
        ]
    },
    {
        id: 23,
        title: "OH NO",
        text:
            "While looting inside an old house, you start to hear the sound of a creepy little girl singing. Ah jeez. You turn around and, yep, that’s a scary ass little girl in a white dress being all creepy. Oh this is bad. What is even happening. The walls start to melt.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_23.jpg",
        progress: 90,
        options: [
            {
                text: "Run Away?",
                nextText: 23.1,
                // action: - 5 health
                action: [17]
            },
            {
                text: "Fly Away?",
                nextText: 23.2,
                // action: + 5 health
                action: [20]
            }
        ]
    },
    {
        id: 23.1,
        title: "OH NO",
        text:
            "You run down the halls, the exit getting further and further away. The singing gets louder, soon your teeth all fall out. And you’re in highschool again and….You wake up. The nightmare prevented you from getting restful sleep, you drive groggy.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_23.jpg",
        progress: 90,
        options: [
            {
                text: "Continue",
                nextText: 23,
                action: [12, 8]
            }
        ]
    },
    {
        id: 23.2,
        title: "OH NO",
        text:
            "You realize that even though a lot of weird things have been happening, this is definitely a dream. You manage to fly away before waking up, feeling well rested.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_23.jpg",
        progress: 90,
        options: [
            {
                text: "Continue",
                nextText: 24,
                action: [12, 8]
            }
        ]
    },
    {
        id: 24,
        title: "Winter is Coming",
        text:
            "While looting, fine white powder starts falling from the sky, landing in neat piles alonsite. A wintery sort of landscape begins to form.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_24.gif",
        progress: 94,
        options: [
            {
                text: "Try catching some on your tongue",
                nextText: 24.1,
                // action: -5 health
                action: [17]
            },
            {
                text: "Get back to the car",
                nextText: 24.2,
                action: []
            }
        ]
    },
    {
        id: 24.1,
        title: "Winter is Coming",
        text:
            "You try catching some flakes on your tongue, but the white specs feel warm on touch. What you thought was snow turns out to be ash. You cought and sputter, making your way back to the car.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_24.gif",
        progress: 94,
        options: [
            {
                text: "Continue",
                nextText: 25,
                action: [12, 8]
            }
        ]
    },
    {
        id: 24.2,
        title: "Winter is Coming",
        text:
            "You get back to the car and keep driving, the windshield wipers swiping the ash from your windshield.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_24.gif",
        progress: 94,
        options: [
            {
                text: "Continue",
                nextText: 25,
                action: [12, 8]
            }
        ]
    },
    {
        id: 25,
        title: "The Home Stretch",
        text:
            "The large concrete barrier surrounding D.C. appears on the horizon. You’re within miles of your destination. Suddenly, your car starts to sputter, black smoke begins billowing from the hood.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_25.jpg",
        progress: 98,
        options: [
            {
                text: "Keep driving",
                nextText: 25.1,
                // action: -10 health
                action: [15]
            },
            {
                text: "Make a run for it",
                nextText: 25.2,
                // action: - 5 health
                action: [17]
            }
        ]
    },
    {
        id: 25.1,
        title: "The Home Stretch",
        text:
            "The car just has to last for a few more minutes, you can’t stop now. Black smoke starts filling the vehicle. Before you know it, you’ve crashed into the gates of D.C.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_25.jpg",
        progress: 98,
        options: [
            {
                text: "Continue",
                nextText: 26,
                action: [12, 8]
            }
        ]
    },
    {
        id: 25.2,
        title: "The Home Stretch",
        text:
            "You leave some supplies, but that’s not important. You run, body exhausted from driving, the car starts burning behind you. You’re can see the entrance gates…",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_25.jpg",
        progress: 98,
        options: [
            {
                text: "Continue",
                nextText: 26,
                action: [12, 8]
            }
        ]
    },
    {
        id: 26,
        title: "Safe at Last",
        text:
            "It's been a brutal journey. It's had its ups and downs but you have perservered. You've won",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_26.jpg",
        progress: 100,
        options: [
            {
                text: "Play Again?",
                nextText: 1,
                action: [33]
            }
        ]
    },
    {
        id: 27,
        title: "Succumbing to your injuries",
        text:
            "Your wounds become too much to bear, your hands no longer able to grip the steering wheel. You come to a stop, step out of the car, and collapse. Another victim of the long way.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_91.jpg",
        options: [
            {
                text: "Play Again?",
                nextText: 1,
                action: [33]
            }
        ]
    },
    {
        id: 27.1,
        title: "Can't get far by walking",
        text:
            "The car sputters and jolts, you’ve taken it as far as it will go. You try to make the rest of the journey on foot, but you know you won’t make it. You collapse on the side of the road, another victim of the long way.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_92.jpg",
        options: [
            {
                text: "Play Again?",
                nextText: 1,
                action: [33]
            }
        ]
    },
    {
        id: 27.2,
        title: "Death by Starvation",
        text:
            "You can’t remember the last time you ate. Your body is weak from fatigue and hunger. As much as you try, you no longer have the energy to drive. You pull over and close your eyes to sleep, and you never wake up again. Another victim of the way.",
        image:
            "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/frame_93.jpg",
        options: [
            {
                text: "Play Again?",
                nextText: 1,
                action: [33]
            }
        ]
    }
];