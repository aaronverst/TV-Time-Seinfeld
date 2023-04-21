let chartData = [];
let linesPerEpisode;
let count = 0;
let dataMap, jerryData, georgeData, elaineData, kramerData, newmanData, mortyData, helenData, frankData;

d3.csv('data/scripts_updated.csv')
  .then(data => {
    data.forEach(d => {
      _data = data;
      count += 1;
    })



    for (let i = 0; i < count; i++) {
      chartData[i] = data[i];
    };

    // cardData.shift();
    const aggregatedDataMap = d3.rollups(chartData, v => v.length, d => d.Character, d => d.SEID);
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

        // for( let i = 0; i < aggregatedDataMap.length; i++) {
        //     var actorElement = document.createElement('option');
        //     actorElement.value = aggregatedDataMap[i][0];
        //     actorElement.innerHTML = aggregatedDataMap[i][0];
        
        //     actorContainer.appendChild(actorElement);
        // }

        // linesPerEpisode = new LinesPerEpisode({ parentElement: '#linesPerEpisode' }, jerryData);

            linesPerEpisode = new LinesPerEpisode({ parentElement: '#linesPerEpisode' }, jerryData);
            const postcontainer = document.querySelector('.c-container');

            const cardMethods = () => {
                const postElement = document.createElement('div');
                postElement.classList.add('character-container');
                postElement.setAttribute('data-character',  aggregatedDataMap[0]);
                postElement.innerHTML = `
                    <svg id="linesPerEpisode">
                        <script src="js/lines_per_episode.js">
                        </script>
                    </svg>
                `
            postcontainer.appendChild(postElement);
            }
    cardMethods();
    linesPerEpisode.updateVis();

 
  })
   .catch(error => console.error(error));
 




