// console.log("It's working!")

function handleGetData(event) {
    event.preventDefault();

    const searchText = $("#search").val()

    $.ajax({
            url: `https://fortnite-api.com/v1/stats/br/v2/?name=${searchText}&image=all`
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

// $(document).ready(function () {
//     $("#image").click(function () {
//         $("#collection").fadeToggle(1000);
//     });
// });