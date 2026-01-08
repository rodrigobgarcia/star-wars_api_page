export async function fetchData() {
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

        //Display ID
        const pkmId = data.id;
        let IdElement = document.getElementById("data__id");
        IdElement.textContent = `ID: ${pkmId}`;

        //Display Name
        const name = data.name;
        const pkmName = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
        let NameElement = document.getElementById("data__name");
        NameElement.textContent = pkmName;

        //Display Stats
        const pkmStats = data.stats;
        console.log(pkmStats);
        let statsElement = document.getElementById("data__stats")
        pkmStats.forEach(element => {
            let li = document.createElement("li");
            li.textContent =`${element.stat.name}: ${element.base_stat} (effort: ${element.effort})`;
            statsElement.append(li);
        });

        //Display Abilities
        const pkmAbilities = data.abilities;
        let abilitiesElement = document.getElementById("data__abilities")
        pkmAbilities.forEach(element => {
            let li = document.createElement("li");
            li.textContent = element.ability.name;
            abilitiesElement.append(li);
            console.log(pkmAbilities);
        });

        
    }
    catch(error) {
        console.error(error);
    }
    
}