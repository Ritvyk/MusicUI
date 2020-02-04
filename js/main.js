
function toggleState(removeState, addState) {
    var stateIcon = document.getElementById("stateIcon");
    stateIcon.classList.remove(removeState);
    stateIcon.classList.add(addState);
}
function setTimeAndLoader() {

}
function getSongTime(action) {
    function time() {
        var player = document.getElementById("player");
        var duration=Math.round(player.duration);
        var currenTime =Math.round(player.currentTime);
        var percentage=parseFloat(((currenTime/duration)*100).toFixed(2));
        console.log(percentage);
            document.getElementById("loader-in").style.width=percentage+"%";
        
    }
    if (action = "play") {
    
        setInterval(time, 1000);
    }
    else {
        clearInterval(time);
    }
}
function playMusic(obj) {
    var playerState = $(obj).data("action");
    if (playerState === "pause") {
        player.pause();
        $(obj).data("action", "play");
        toggleState("fa-" + playerState, "fa-play");
        getSongTime("pause");

    }
    else if (playerState === "play") {
        player.play();
        $(obj).data("action", "pause");
        toggleState("fa-" + playerState, "fa-pause");
        getSongTime("play");
    }
}
// //initialize
// function setPlayer() {
//   alert("Player Loaded Successfully !");
// }
// window.onload = function () {
//     setPlayer();
// }