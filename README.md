## v1.0.0

# Weiss Schwarz Simulator
This is an online Weiss Schwarz simulator for Project Sekai EN Vol1 packs! Featuring:
- An inventory to store which cards you have (IRL), your favorites, and your wishlist
    - With filtering based on group(s)/character(s)
- An online simulator that will simulate opening booster packs, with three options:
    - Manual: Keep opening packs with a click of a button, then stop when you're done ~~gambling~~ simulating
    - Quantity: Select a pre-defined quantity, then watch the packs be opened, or skip to just see the results
    - Card(s): Select one or more cards, then keep opening packs until one or all of those cards are pulled (or skip to see results!)

## How to Use
Create an account. Click on a card to view its details, including rarity, character, and group; use the buttons on the right side to add to inventory, add to favorites, or add to wishlist. Use the filter tab to see cards of one or multiple characters/groups, or to sort by obtained/not obtained cards. Filter options will be saved until the browser is closed.

To use the simulator, select one of the three options, then click the "simulate" button. Manual opening is controlled by the "open another"/"stop" buttons on the top of the screen. Quantity-dependent and card-dependent opening can be stopped early, or skipped altogether by checking the relative box. Use the search bar in the card-dependent options to look for a specific character, rarity, or group-- but you won't be able to search for multiple parameters at once (e.g. you can search up "rui" to get Rui cards, but searching "rui ssp" won't give you the Rui SSP). 

Please keep in mind that the pulling simulation rates won't be 100% accurate! There isn't exactly a myriad of specific information online, and the information that *is* online contradicts my own experience with opening booster packs. I used a combination of online information/my own experiences to emulate the rates for the simulation, and while it isn't hyper-acurate, I would say it's pretty good. Not 100% accurate, but maybe 80-90%?

## Tech Stack
- Frontend/Backend: Sveltekit
    - MongoDB
    - Axios

## Demo/installation
Demo link can be found [here](https://ws-prsk.vercel.app/).

To run locally, you'll need your own MongoDB uri. Clone the repo, change directory to w-s-prsk, then simply run with npm. Make sure to replace all placeholder values in +server.js files with your Mongo uri and db/collection name.

## Notes!
First time using Sveltekit!

I originally used Node/Express to make this project's backend, but then changed the project to use Sveltekit for backend. Definitely a lot less clunky, and a *lot* easier to deploy.

Debugging this was genuine torture and suffering. Especially near the end-- I think I had to reset to a previous commit and redo everything at least three times before I finally got this project to behave properly.

This is my most time-consuming project to date! It's also one of my favorite UI designs I've made, so yummy

