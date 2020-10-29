console.log("It's working!")

function handleGetData(event) {
    event.preventDefault();

    const searchText = $("#search").val()

    $.ajax({
            url: `https://fortnite-api.com/v1/stats/br/v2/${searchText}?image=all`
        })
        .then(
            (data) => {
                userData = data.data;
                console.log(data);
                $("#image").attr("src", userData.image)
            },
            (error) => {
                console.log("bad request: ", error)
            }
        )
}
$('form').on("submit", handleGetData)