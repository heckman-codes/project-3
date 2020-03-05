
export default [
    {
        id: 1,
        title: "Introduction",
        "text": "It’s been five years since the cataclysm. You’ve been etching out a living in what remains of Sacramento. The landscape of skyscrapers and towering structures had been reduced to smoldering piles of rubble from the near daily earthquakes. You’ve scraped by on supplies from various looting runs, but everything seems to be running out. The time to journey east is now. You’ve been modifying an old ford to make the journey, welding on armor and siphoning what gas you can. Before the signal died out last year, you picked up a radio signal repeating the message “Washington D.C. is the last remaining safe zone. For anyone listening, if you can make it here, we can help you.” You could hit the road now, or make one last stop at old Pete’s and buy additional supplies.",
        "image": "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        "options": [
            {
                "text": "Leave without visiting the shop.",
                "nextText": 1.1,
                "action": 1
            },
            {
                "text": "Visit Old Pete's Shop.",
                "nextText": 1.2,
                "action": 1
            }
        ]
    },
    {
        id: 1.1,
        "title": "Introduction",
        "text": "You never were good at goodbyes, and Pete’s scavenging skills are as faded as his memory these days. You rev up the engine and begining your journey across US 50.",
        "image": "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/apocalypse1.webp",
        "options": [
            {
                "text": "Continue",
                "nextText": 3,
                "action": 1
            }
        ]
    },
    {
        id: 1.2,
        "title": "Introduction",
        "text": "You decide to visit old Pete one last time and see what he has that might be useful for the long journey.",
        "image": "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        "options": [
            {
                "text": "Continue",
                "nextText": 2,
                "action": 1
            }
        ]
    },
    {
        id: 2,
        title: "Welcome to Old Pete's Mobile Home",
        text: "You enter old Pete’s mobile home, greeted by a familiar but still overwhelming stench. Pete had a way of scavenging and crafting useful supplies, and was one of the few folks out there still accepting paper currency. ‘I still don’t see why you believe in that safezone nonsense,’a gruff voice bellows out from behind his scruffy moustache. But I guess this is goodbye then. Better stock up before you go, anything here you lookin to buy?.",
        image: "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/apocalypse1.webp",
        options: [
            {
                text: "Would you like to purchase an axe?",
                // requiredState: (currentState) => currentState.blueLiquid,
                // setState: {
                //     blueLiquid: false, axe: true
                // },
                nextText: 3,
                action: [50]
            },
            {
                "text": "Would you like to purchase food for your travels?",
                requiredState: (currentState) => currentState.blueLiquid,
                setState: {
                    blueLiquid: false, shield: true
                },
                "nextText": 3,
                "action": 50
            },
            {
                "text": "No thanks I dont need any supplies, today.",
                "nextText": 3,
                "action": 1
            }
        ]
    },
    {
        id: 2.1,
        "title": "Introduction",
        "text": "You decide to visit old Pete one last time and see what he has that might be useful for the long journey.",
        "image": "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/desert.png",
        "options": [
            {
                "text": "Continue",
                "nextText": 2,
                "action": 1
            }
        ]
    },
    {
        id: 3,
        "title": "Crunch",
        "text": "CRRRRUNCH. A sickening crunch echoes under the wheels of your vehicle. Whatever it was may have damaged the chassis. Do you stop and examine or keep driving?.",
        "image": "https://project-3-arcade-game.s3-us-west-2.amazonaws.com/apocalypse1.webp",
        "options": [
            {
                "text": "Stop and examine?",
                "nextText": 2,
                "action": 1
            },
            {
                "text": "Keep Driving?",
                "nextText": 3,
                "action": 1
            }
        ]
    }
]