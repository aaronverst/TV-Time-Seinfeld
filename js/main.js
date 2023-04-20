let Character = [];
let Dialogue = [];
let SEID = [];
let lineCount, linesperseason, episodeCount;

d3.csv('data/scripts.csv')
    .then(data => {
        data.forEach(d => {
            _data = data;
        })


        lineCount = new LineCount({ parentElement: '#linecount' }, data);
        episodeCount = new EpisodeCount({parentElement: '#episodeCount'}, data);
        sznNumEpisodes = new sznNumEpisodes({parentElement: '#sznnumepisodes'}, data);
        // wordcloud = new Wordcloud({ parentElement: '#wordcloud' }, data);
        // linesperseason = new Linesperseason({parentElement: '#linesperseason'}, data);
        

        lineCount.updateVis();
        episodeCount.updateVis();
        sznNumEpisodes.updateVis();
    });