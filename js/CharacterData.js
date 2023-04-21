let _data = [];
d3.csv('../data/scripts_updated.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
            // count += 1;
        })

        

        const actorContainer = document.getElementById("character_dropdown");

        $(document).ready(function () {
            $(".character_dropdown-content").select2();
        });

        let character = d3.rollups(data, v => v.length, d => d.Character, d => d.SEID);
        

        const aggregatedDataMap = d3.rollups(data, v => v.length, d => d.Character, d => d.SEID);
        dataMap = aggregatedDataMap;

        jerryData = dataMap[0];
        georgeData = dataMap[1];
        elaineData = dataMap[2];
        kramerData = dataMap[3];
        newmanData = dataMap[4];
        mortyData = dataMap[5];
        helenData = dataMap[6];
        frankData = dataMap[7];
        

        console.log(aggregatedDataMap);

        

        // Filter the aggregatedData array to only include keys in the orderedKeys array
        

       for( let i = 0; i < aggregatedDataMap.length; i++) {
            var actorElement = document.createElement('option');
            actorElement.value = aggregatedDataMap[i][0];
            actorElement.innerHTML = aggregatedDataMap[i][0];
        
            actorContainer.appendChild(actorElement);
        }

    })

    .catch(error => console.error(error));

function actorDropdown() {
    document.getElementById("character_dropdown").classList.toggle("show");
}

actorDropdown();

$("select.character_dropdown-content").change(updateActor);

function updateActor() {
    var numEpisodes = $('select.character_dropdown-content').val();

    $('.c-container')
        .find('.character-container')
        .hide()
        .filter(function () {
            var okEpisode = false;  

            if (numEpisodes !== "None") {
                okEpisode = $(this).attr('data-character') === numEpisodes;
                console.log($(this).attr('data-character'));
                console.log(okEpisode);
                console.log(numEpisodes);
                if (okEpisode == true) {
                    return okEpisode; 
                    }
            }

        }).fadeIn('fast');

}