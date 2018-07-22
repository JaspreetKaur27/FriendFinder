var newuser = {};
var frienddetail = {
    name: "",
    image: "",
    difference: 100
};

$("#submit").on("click", (e) => {
    e.preventDefault();
    
    var username = $('#name').val().trim();
    var userphoto = $('#photo').val().trim();
    var ans1 = $('#qus1').val().trim();
    var ans2 = $('#qus2').val().trim();
    var ans3 = $('#qus3').val().trim();
    var ans4 = $('#qus4').val().trim();
    var ans5 = $('#qus5').val().trim();
    var ans6 = $('#qus6').val().trim();
    var ans7 = $('#qus7').val().trim();
    var ans8 = $('#qus8').val().trim();
    var ans9 = $('#qus9').val().trim();
    var ans10 = $('#qus10').val().trim();

    if(username === ""|| userphoto == "" || ans1 === "" || ans2 === "" || ans3 === "" || ans4 === "" || ans5 === "" || ans6 === "" || ans7 === "" || ans8 === "" || ans9 === "" || ans10 === "")
    {
        alert("Please fill all fields");
    }
    else
    {
        newuser = 
        {
            name: username,
            photo: userphoto,
            scores: [ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10]

        };

        findfriend(newuser.scores);

        $.post(
            {url: '/api/friends' ,
            contentType: 'application/json'},
            JSON.stringify(newuser));

        $("#name").val("");
        $("#photo").val("");
        $("#qus1").val("");
        $("#qus2").val("");
        $("#qus3").val("");
        $("#qus4").val("");
        $("#qus5").val("");
        $("#qus6").val("");
        $("#qus7").val("");
        $("#qus8").val("");
        $("#qus9").val("");
        $("#qus10").val("");
    }
});

function findfriend()
{
    $.get('/api/friends', (friends) => {
        console.log($.get());

        var count = 0;

        for(var i = 0; i < friends.length; i++)
        {
            totalDifference(scores, friends[i]);
            count++;
        }

        if(count === friends.length)
        {
            $("#friendname").text(frienddetail.name);
            $("#friendimg").text(frienddetail.photo);
            $("#outmodal").modal("toggle");
        }
    });
}

function totalDifference(user, friend)
{
    var diff = 0;
    var count = 0;

    for(var i = 0; i < 10; i++)
    {
       diff += Math.abs(user[i] - friend.scores[i]);
       count++;
    }

    if(count === 10)
    {
        if(diff < frienddetail.difference)
        {
            frienddetail.difference = diff;
            frienddetail.name = friend.name;
            frienddetail.photo = friend.photo;
        }
        else
        {
            return;
        }
    }

}