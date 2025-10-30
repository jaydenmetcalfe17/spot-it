const cards = 
[['1_teddy', '3_cake', '4_disco', '23_heart', '24_unicorn', '32_moon', '53_guitar', '55_zebra'], 
['3_cake', '10_clock', '13_dinosaur', '16_soccer', '29_lightning', '38_pizza', '46_sun', '52_saxophone'],
['1_teddy', '5_cactus', '15_dragon', '18_fire', '28_lightbulb', '40_cupcake', '46_sun', '51_tree'],
['6_seal', '11_money', '13_dinosaur', '23_heart', '25_igloo', '39_taco', '49_turtle', '51_tree'],              
['2_spiral', '9_thumbs', '17_crown', '21_monkey', '24_unicorn', '39_taco', '46_sun', '47_8ball'],
['2_spiral', '5_cactus', '7_taxi', '8_cowboy', '23_heart', '29_lightning', '35_rainbow', '41_skull'],
['12_mermaid', '20_tiger', '25_igloo', '41_skull', '45_popcorn', '46_sun', '48_target', '55_zebra'],
['1_teddy', '7_taxi', '12_mermaid', '16_soccer', '26_key', '30_lock', '39_taco', '50_surfer'],
['21_monkey', '27_butterfly', '29_lightning', '31_octopus', '50_surfer', '51_tree', '54_yinyang', '55_zebra'],
['3_cake', '9_thumbs', '26_key', '33_mushroom', '41_skull', '44_rocket', '51_tree', '56_dice'],
['4_disco', '7_taxi', '9_thumbs', '13_dinosaur', '28_lightbulb', '42_snowflake', '48_target', '54_yinyang'],
['13_dinosaur', '21_monkey', '26_key', '35_rainbow', '36_umbrella', '40_cupcake', '45_popcorn', '53_guitar'], 
['1_teddy', '6_seal', '19_clover', '21_monkey', '34_star', '38_pizza', '42_snowflake', '41_skull'], 
['9_thumbs', '11_money', '12_mermaid', '18_fire', '27_butterfly', '32_moon', '35_rainbow', '38_pizza'],
['2_spiral', '6_seal', '10_clock', '18_fire', '48_target', '50_surfer', '53_guitar', '56_dice'],
['5_cactus', '6_seal', '9_thumbs', '14_dolphin', '16_soccer', '36_umbrella', '37_coconut', '55_zebra'], 
['1_teddy', '2_spiral', '13_dinosaur', '14_dolphin', '20_tiger', '22_lion', '27_butterfly', '33_mushroom'], 
['1_teddy', '11_money', '29_lightning', '36_umbrella', '43_snowman', '44_rocket', '47_8ball', '48_target'],
['10_clock', '15_dragon', '33_mushroom', '35_rainbow', '39_taco', '42_snowflake', '43_snowman', '55_zebra'], 
['9_thumbs', '15_dragon', '22_lion', '25_igloo', '29_lightning', '30_lock', '34_star', '53_guitar'],
['13_dinosaur', '15_dragon', '32_moon', '37_coconut', '41_skull', '47_8ball', '50_surfer', '57_cheese'],
['2_spiral', '4_disco', '30_lock', '37_coconut', '43_snowman', '38_pizza', '45_popcorn', '51_tree'], 
['7_taxi', '11_money', '19_clover', '31_octopus', '33_mushroom', '37_coconut', '46_sun', '53_guitar'], 
['14_dolphin', '19_clover', '28_lightbulb', '29_lightning', '32_moon', '39_taco', '45_popcorn', '56_dice'],
['8_cowboy', '24_unicorn', '25_igloo', '28_lightbulb', '33_mushroom', '36_umbrella', '38_pizza', '50_surfer'], 
['4_disco', '14_dolphin', '34_star', '35_rainbow', '44_rocket', '46_sun', '49_turtle', '50_surfer'],
['10_clock', '12_mermaid', '21_monkey', '22_lion', '23_heart', '28_lightbulb', '37_coconut', '44_rocket'], 
['3_cake', '7_taxi', '14_dolphin', '18_fire', '21_monkey', '25_igloo', '43_snowman', '57_cheese'],
['16_soccer', '19_clover', '22_lion', '24_unicorn', '35_rainbow', '48_target', '51_tree', '57_cheese'], 
['16_soccer', '18_fire', '23_heart', '33_mushroom', '34_star', '45_popcorn', '47_8ball', '54_yinyang'], 
['4_disco', '5_cactus', '10_clock', '19_clover', '25_igloo', '26_key', '27_butterfly', '47_8ball'],
['5_cactus', '21_monkey', '30_lock', '32_moon', '33_mushroom', '48_target', '49_turtle', '52_saxophone'], 
['4_disco', '18_fire', '22_lion', '31_octopus', '36_umbrella', '39_taco', '41_skull', '52_saxophone'],
['8_cowboy', '13_dinosaur', '17_crown', '18_fire', '19_clover', '30_lock', '44_rocket', '55_zebra'],
['10_clock', '11_money', '14_dolphin', '24_unicorn', '30_lock', '40_cupcake', '41_skull', '54_yinyang'],
['4_disco', '8_cowboy', '11_money', '15_dragon', '16_soccer', '20_tiger', '21_monkey', '56_dice'],
['2_spiral', '11_money', '26_key', '28_lightbulb', '34_star', '52_saxophone', '55_zebra', '57_cheese'],
['9_thumbs', '19_clover', '20_tiger', '23_heart', '40_cupcake', '43_snowman', '50_surfer', '52_saxophone'],
['2_spiral', '3_cake', '12_mermaid', '15_dragon', '19_clover', '36_umbrella', '49_turtle', '54_yinyang'],
['7_taxi', '22_lion', '38_pizza', '40_cupcake', '47_8ball', '49_turtle', '55_zebra', '56_dice'],
['18_fire', '20_tiger', '24_unicorn', '26_key', '29_lightning', '37_coconut', '42_snowflake', '49_turtle'],
['3_cake', '8_cowboy', '27_butterfly', '34_star', '37_coconut', '39_taco', '40_cupcake', '48_target'],
['1_teddy', '17_crown', '25_igloo', '35_rainbow', '37_coconut', '52_saxophone', '54_yinyang', '56_dice'],
['6_seal', '8_cowboy', '22_lion', '26_key', '32_moon', '43_snowman', '46_sun', '54_yinyang'],
['5_cactus', '20_tiger', '38_pizza', '39_taco', '44_rocket', '53_guitar', '54_yinyang', '57_cheese'],
['2_spiral', '16_soccer', '25_igloo', '31_octopus', '32_moon', '40_cupcake', '42_snowflake', '44_rocket'],
['6_seal', '7_taxi', '15_dragon', '24_unicorn', '27_butterfly', '44_rocket', '45_popcorn', '52_saxophone'],
['8_cowboy', '12_mermaid', '14_dolphin', '42_snowflake', '47_8ball', '51_tree', '52_saxophone', '53_guitar'], 
['23_heart', '27_butterfly', '30_lock', '36_umbrella', '42_snowflake', '46_sun', '56_dice', '57_cheese'],
['1_teddy', '8_cowboy', '10_clock', '9_thumbs', '31_octopus', '45_popcorn', '49_turtle', '57_cheese'],
['14_dolphin', '15_dragon', '17_crown', '23_heart', '26_key', '31_octopus', '38_pizza', '48_target'], 
['3_cake', '5_cactus', '11_money', '17_crown', '22_lion', '42_snowflake', '45_popcorn', '50_surfer'],
['3_cake', '6_seal', '20_tiger', '28_lightbulb', '30_lock', '31_octopus', '35_rainbow', '47_8ball'],
['7_taxi', '10_clock', '17_crown', '20_tiger', '32_moon', '34_star', '36_umbrella', '51_tree'],
['4_disco', '6_seal', '12_mermaid', '17_crown', '29_lightning', '33_mushroom', '40_cupcake', '57_cheese']]


const popup = document.getElementById("popup");
const overlay = document.getElementById("popupOverlay");
const closePopupButton = document.getElementById("closePopup");

const btnNew = document.querySelector('.btn--new');
var correct, player_hand, computer_hand, game_deck;
var events = [];

var countdownInterval; 
var countdownTime;    

function init() {
    player_hand = []
    computer_hand = []
    game_deck = shuffle(cards)

    player_hand.push(game_deck.pop())
    computer_hand.push(game_deck.pop())

    initiatePlayerCard(player_hand[player_hand.length - 1])
    initiateGameCard(game_deck[game_deck.length - 1])
    initiateComputerCard(computer_hand[computer_hand.length - 1])

    correct = findCorrect((player_hand[player_hand.length - 1]), (game_deck[game_deck.length - 1]))

    startCountdown();
};

// Fisher yates shuffle
function shuffle(array) {
    const newArray = array.slice(); // Create a shallow copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
    }
    return newArray;  // Return the shuffled copy, leaving the original array intact
}

function startCountdown() {
    // Generate a random countdown time between 2 and 8 seconds
    countdownTime = Math.floor(Math.random() * 7) + 2;
    console.log(`Countdown started with ${countdownTime} seconds`);

    // Clear any previous intervals to ensure we start fresh
    if (countdownInterval) clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        countdownTime--;
        console.log(`${countdownTime} seconds remaining`);

        if (countdownTime <= 0) {
            clearInterval(countdownInterval); // Stop the countdown
            computerWins(); // Execute computerWins if time runs out
        }
    }, 1000);
}

function initiatePlayerCard(card) {
    console.log("PLAYER: ", card, player_hand.length)

    const playerImages = document.querySelectorAll("#player-card img");

    if (events.length > 0) {
        events.forEach(({ element, type, listener }) => {
            element.removeEventListener(type, listener);
        });
        events.length = 0; // Clear the array
    }

    playerImages.forEach((img, index) => {
        img.src = `/assets/images/${card[index]}.png`;

        // Define the listener as a named function
        const handleImageClick = (event) => {
            checkCorrect(card[index]);
        };

        // Add the event listener
        img.addEventListener('click', handleImageClick);

        // Store the event reference in the array
        events.push({ element: img, type: 'click', listener: handleImageClick });
    });
}



function initiateGameCard(card) {
    console.log("GAME:", card)
    const images = document.querySelectorAll("#game-card img");
    images.forEach((img, index) => {
        img.src = `/assets/images/${card[index]}.png`;
    });
}

function initiateComputerCard(card) {
    const images = document.querySelectorAll("#computer-card img");
    images.forEach((img, index) => {
        img.src = `/assets/images/${card[index]}.png`;
    });
}


function findCorrect(player_card, game_card){
    const correct = player_card.filter(image => game_card.includes(image));
    console.log(correct)
    return correct[0]
}

function checkCorrect(clicked) {
    console.log(clicked)

    if (clicked === correct) {
        console.log("Correct choice")

        player_hand.push(game_deck.pop())


        if (game_deck.length > 0) {

            initiateGameCard(game_deck[game_deck.length - 1])
            correct =  correct = findCorrect((player_hand[player_hand.length - 1]), (game_deck[game_deck.length - 1]))
            initiatePlayerCard(player_hand[player_hand.length - 1])

            startCountdown();

        } else {
            gameOver()
        }
 

    } else {
        console.log("WRONG")
    }
}


function computerWins() {
    console.log("Timeout, computer wins turn!");
    
    computer_hand.push(game_deck.pop())

    if (game_deck.length > 0) {
        initiateGameCard(game_deck[game_deck.length - 1])
        correct =  correct = findCorrect((player_hand[player_hand.length - 1]), (game_deck[game_deck.length - 1]))
        initiateComputerCard(computer_hand[computer_hand.length - 1])

        startCountdown();
    } else {
        gameOver()
    }
}

function gameOver() {
    if (player_hand.length > computer_hand.length) {
        console.log("You Win!")
        showPopup(`You Win!`)
    } else {
        console.log('You Lose :(')
        showPopup(`You Lose :(`)
    }
    clearInterval(countdownInterval); // Stop the countdown
}

btnNew.addEventListener('click', function(){
    init();
});



function showPopup(status) {

    document.getElementById('check-text').textContent = status;
    document.getElementById('score').textContent = player_hand.length + " - " + computer_hand.length;

    popup.style.display = "flex";
    overlay.style.display = "block";

    closePopupButton.addEventListener("click", hidePopup);
}

function hidePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";

    init();

}
