var count = 0;
let _data = [];
d3.csv('../data/scripts.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            // count += 1;
        })

        const actorContainer = document.getElementById("character_dropdown");

        $(document).ready(function () {
            $(".character_dropdown-content").select2();
        });

        let character = d3.rollups(_data, v => v.length, d => d.Character);
        character.sort(function(a,b) {
            return b[1] - a[1]
        })
        // character.splice(8, 1633);

        const orderedKeys = ['JERRY', 'GEORGE', 'ELAINE', 'KRAMER', 'NEWMAN', 'MORTY', 'HELEN', 'FRANK'];

        
        let aggregatedData = Array.from(character, ([key, count]) => ({ key, count }));

        // Filter the aggregatedData array to only include keys in the orderedKeys array
        aggregatedData = aggregatedData.filter(d => orderedKeys.includes(d.key));
        

        for( let i = 0; i < aggregatedData.length; i++) {
            var actorElement = document.createElement('option');
            actorElement.value = aggregatedData[i].key;
            actorElement.innerHTML = aggregatedData[i].key;

            actorContainer.appendChild(actorElement);
        }

    })

    .catch(error => console.error(error));

function actorDropdown() {
    document.getElementById("character_dropdown").classList.toggle("show");
}

actorDropdown();

// $("select.character_dropdown-content").change(updateVenue);