// Function for Fetch button
async function fetchData() {
    try{

        const pokemonName = document.getElementById("pokeName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

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
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`);

    if(!response.ok){
            throw new Error("Could not fetch resource");
        }

    const data = await response.json();
    console.log(data);

    const pokemonList = data.results;
    for (let pokemon of pokemonList) {
        console.log(pokemon.name);
        const listItem = document.createElement('li');
            
            // B) Define o texto interno do <li> com o nome do Pokémon
            // Usamos .name para o nome
            listItem.textContent = pokemon.name; 
            
            // C) Adiciona o novo <li> como filho do <ul>
            ulElement = document.getElementById("pokemon_list-list")
            ulElement.appendChild(listItem);
    }

}
fetchList();