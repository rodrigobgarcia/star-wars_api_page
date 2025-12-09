
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