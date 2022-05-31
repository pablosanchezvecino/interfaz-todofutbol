import FootballData from 'footballdata-api-v2';
const footballData = new FootballData(ce7473b4936048b1ae18099f663e7368);

footballData.getTeamsFromCompetition({
    competitionId: 2021,
}).then((data) => {
    console.log(JSON.stringify(data, null, 4));
})