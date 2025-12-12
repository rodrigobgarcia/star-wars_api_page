// Function for Fetch button
async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokeName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);

        //Default image
        const pokeImage = data.sprites.front_default;
        const imgElement = document.getElementById("pokeImage");
        imgElement.src = pokeImage;
        imgElement.style.display = "block";
        //Shiny Image
        const pokeImageShiny = data.sprites.front_shiny;
        const imgElementShiny = document.getElementById("pokeImageShiny");
        imgElementShiny.src = pokeImageShiny;
        imgElementShiny.style.display = "block";
    }
    catch(error) {
        console.error(error);
    }
    
}

//Get list of Pokemons function
async function fetchList() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=102`);

    if(!response.ok){
            throw new Error("Could not fetch resource");
        }

    const data = await response.json();

    const pokemonList = data.results;
    for (let pokemon of pokemonList) {
        const pokemonListItem = document.createElement('div');
        const pokemonNameLinkContainer = document.createElement('div');
        let pokemonImage = document.createElement('img')
        const pokemonName = document.createElement('h3');
        const pokemonLink = document.createElement('a')

        // Get Pokemon images
        async function fetchImage() {
            const response = await fetch(`${pokemon.url}`);
            const dataImage = await response.json();
            const img = dataImage.results;
            pokemonImage.src = dataImage.sprites.front_default;
        }
        fetchImage();
        
        // Pokemon Name and Link
        pokemonName.textContent = pokemon.name;
        pokemonName.id = "list__item-name"
        pokemonLink.textContent = pokemon.url;
        pokemonLink.href = pokemon.url;
        pokemonListItem.id = "list__item";
        pokemonNameLinkContainer.id = "list__item-nameLink"
        
        pokemonNameLinkContainer.appendChild(pokemonName);
        pokemonNameLinkContainer.appendChild(pokemonLink);
        pokemonListItem.appendChild(pokemonNameLinkContainer);
        pokemonListItem.appendChild(pokemonImage);
            
            
            
        //Add new elements in HTML
        ulElement = document.getElementById("pokemon_list-list")
        ulElement.appendChild(pokemonListItem);
    }

}
fetchList();