console.log("It's working!")

function handleGetData(event) {
    event.preventDefault();

    const searchText = $("#search").val()
    $.ajax({
            url: `https://fortnite-api.com/v1/stats/br/v2/${searchText}?image=all`
        })
        .then(
            (data) => {
                userData = data.data.stats.all.overall;
                console.log(data);
                $("#wins").text(data.data.stats.all.overall.wins)
                $("#top5").text(data.data.stats.all.overall.top5)
                $("#top10").text(data.data.stats.all.overall.top10)
                $("#kills").text(data.data.stats.all.overall.kills)
                $("#image").attr("src", data.data.image)
            },
            (error) => {
                console.log("bad request: ", error)
            }
        )
}
$('form').on("submit", handleGetData)