let chartData = [];
let linesPerEpisode;
d3.csv('../data/scripts.csv')
  .then(data => {
    data.forEach(d => {
      _data = data;
      count += 1;
    })



    for (let i = 0; i < count; i++) {
      chartData[i] = data[i];
      if(chartData[i].Character != 'JERRY' && chartData[i].Character != 'GEORGE' &&
      chartData[i].Character != 'ELAINE' && chartData[i].Character != 'KRAMER' &&
      chartData[i].Character != 'NEWMAN' && chartData[i].Character != 'MORTY' &&
      chartData[i].Character != 'HELEN' && chartData[i].Character != 'FRANK') {
        chartData.splice(i, 1)
      }
    };

    console.log(chartData);
    // cardData.shift();

    linesPerEpisode = new LinesPerEpisode({ parentElement: '#linesPerEpisode' }, chartData);

    const postcontainer = document.querySelector('.c-container');

    const cardMethods = () => {
      chartData.map((postData) => {
        const postElement = document.createElement('div');
        //console.log(randomImage())
        postElement.classList.add('character-container');
        postElement.setAttribute('data-character', postData.Character);
        // postElement.setAttribute('data-location', postData.Location);
        // postElement.setAttribute('data-capacity', postData.Capacity);
        // postElement.setAttribute('data-desiredGenre', postData.DesiredGenre);
        // postElement.setAttribute('data-event', postData.EventsHeld);
        postElement.innerHTML = `
            <svg id="linesPerEpisode">
                <script src="js/lines_per_episode.js">
                </script>
            
            
            </svg>
        `
        document.getElementById('imageholder') = '../assets/img/icons/killers.jpg';
        postcontainer.appendChild(postElement);
        generateVenueImage();
        console.log(generateVenueImage());
      })
    }
    cardMethods();

   });