// SpongeBob quotes data
const spongebobQuotes = [
    { quote: "I'm ready! I'm ready! I'm ready!", character: "SpongeBob SquarePants" },
    { quote: "Is mayonnaise an instrument?", character: "Patrick Star" },
    { quote: "The inner machinations of my mind are an enigma.", character: "Patrick Star" },
    { quote: "I don't need it... I don't need it... I NEED IT!", character: "SpongeBob SquarePants" },
    { quote: "Firmly grasp it in your hand.", character: "Patrick Star" },
    { quote: "I can't see my forehead!", character: "Patrick Star" },
    { quote: "We should take Bikini Bottom and push it somewhere else!", character: "Patrick Star" },
    { quote: "I'm ugly and I'm proud!", character: "SpongeBob SquarePants" },
    { quote: "The Krusty Krab pizza is the pizza for you and me!", character: "SpongeBob SquarePants" },
    { quote: "F is for friends who do stuff together!", character: "SpongeBob SquarePants" },
    { quote: "I wumbo, you wumbo, he-she-me wumbo.", character: "Patrick Star" },
    { quote: "Can you feel it now, Mr. Krabs?", character: "SpongeBob SquarePants" },
    { quote: "Once there was an ugly barnacle. He was so ugly that everyone died. The end!", character: "Patrick Star" },
    { quote: "Remember, licking doorknobs is illegal on other planets.", character: "SpongeBob SquarePants" },
    { quote: "CHOCOLATE! CHOCOLATE! CHOCOLATE!", character: "SpongeBob SquarePants" },
    { quote: "I'm a Goofy Goober, yeah!", character: "SpongeBob SquarePants" },
    { quote: "Ravioli ravioli, give me the formuoli!", character: "SpongeBob SquarePants" },
    { quote: "No, this is Patrick!", character: "Patrick Star" },
    { quote: "Are you feeling it now, Mr. Krabs?", character: "SpongeBob SquarePants" },
    { quote: "I'm Squidward, I'm Squidward, Squidward Squidward Squidward!", character: "SpongeBob SquarePants" },
    { quote: "I'll have you know I stubbed my toe last week and only cried for 20 minutes.", character: "SpongeBob SquarePants" },
    { quote: "East? I thought you said Weast!", character: "Patrick Star" },
    { quote: "It's not just a boulder... It's a rock!", character: "Patrick Star" },
    { quote: "Imagination!", character: "SpongeBob SquarePants" },
    { quote: "You don't need a license to drive a sandwich!", character: "SpongeBob SquarePants" },
    { quote: "It took us three days to make that potato salad. Three days!", character: "SpongeBob SquarePants" },
    { quote: "I can't hear you, it's too dark in here!", character: "Patrick Star" },
    { quote: "Well, it's no secret that the best thing about a secret is secretly telling someone your secret, thereby adding another secret to their secret collection of secrets, secretly.", character: "SpongeBob SquarePants" },
    { quote: "That's it! I'm not wasting my time on this! I'm gonna go watch TV!", character: "Patrick Star" },
    { quote: "Goodbye everyone, I'll remember you all in therapy.", character: "Plankton" },
    { quote: "I'm absorbing his blows like I'm made of some sort of spongy material!", character: "SpongeBob SquarePants" },
    { quote: "Wake me up when I care.", character: "Squidward Tentacles" },
    { quote: "I order the food, you cook the food, the customer gets the food. We do that for 40 years, and then we die.", character: "Squidward Tentacles" },
    { quote: "Too bad SpongeBob isn't here to enjoy SpongeBob not being here.", character: "Squidward Tentacles" },
    { quote: "Another day, another migraine.", character: "Squidward Tentacles" },
    { quote: "I can't believe anybody would celebrate a holiday where a jolly prowler breaks into your house and leaves gifts.", character: "Squidward Tentacles" },
    { quote: "Hello? Can we eat now?!", character: "Mr. Krabs" },
    { quote: "The money is always right!", character: "Mr. Krabs" },
    { quote: "I smell money!", character: "Mr. Krabs" },
    { quote: "What doesn't kill you, usually succeeds in the second attempt.", character: "Mr. Krabs" }
];

// DOM elements
const quoteText = document.getElementById('quote');
const characterName = document.getElementById('character');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const loading = document.getElementById('loading');

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * spongebobQuotes.length);
    return spongebobQuotes[randomIndex];
}

// Function to display quote with animation
function displayQuote() {
    // Show loading
    loading.classList.remove('hidden');
    newQuoteBtn.disabled = true;
    
    // Simulate API delay for better UX
    setTimeout(() => {
        const { quote, character } = getRandomQuote();
        
        // Fade out current quote
        const quoteBubble = document.querySelector('.quote-bubble');
        quoteBubble.style.animation = 'none';
        
        // Update content
        setTimeout(() => {
            quoteText.textContent = `"${quote}"`;
            characterName.textContent = `— ${character}`;
            
            // Fade in new quote
            quoteBubble.style.animation = 'fadeIn 0.5s ease-out';
            
            // Hide loading
            loading.classList.add('hidden');
            newQuoteBtn.disabled = false;
        }, 100);
    }, 500);
}

// Event listener
newQuoteBtn.addEventListener('click', displayQuote);

// Display initial quote on page load
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const { quote, character } = getRandomQuote();
        quoteText.textContent = `"${quote}"`;
        characterName.textContent = `— ${character}`;
    }, 300);
});
