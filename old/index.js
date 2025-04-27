let sound = true;
document.getElementById("sound_on").addEventListener('click', () => {
    sound = false;
    document.getElementById("sound_on").style.display = "none"
    document.getElementById("sound_off").style.display = "block"
    unmute()
})
document.getElementById("sound_off").addEventListener('click', () => {
    sound = true;
    document.getElementById("sound_off").style.display = "none"
    document.getElementById("sound_on").style.display = "block"
    mute()
})

function mute() {
    document.getElementById("tryingtoescape").muted = true;
    document.getElementById("mainaud").muted = true;
    document.getElementById("lastchance").muted = true;
    document.getElementById("mywayback").muted = true;
    document.getElementById("apartment").muted = true;
}
function unmute() {
    document.getElementById("tryingtoescape").muted = false;
    document.getElementById("mainaud").muted = false;
    document.getElementById("lastchance").muted = false;
    document.getElementById("mywayback").muted = false;
    document.getElementById("apartment").muted = false;
}
let i1 = 0;
let i2 = 0;
let i3 = 0;

document.getElementById('tryingtoescape').textTracks[0].addEventListener('cuechange', function() {
    document.getElementById('subtitles').innerText = this.cues[i1].text;
    i1++
});
document.getElementById('lastchance').textTracks[0].addEventListener('cuechange', function() {
    document.getElementById('subtitles').innerText = this.cues[i2].text;
    i2++
});
document.getElementById('mywayback').textTracks[0].addEventListener('cuechange', function() {
    document.getElementById('subtitles').innerText = this.cues[i3].text;
    i3++
});
document.getElementById('apartment').addEventListener('play', function() {
    document.getElementById('subtitles').innerText = this.textTracks[0].cues[0].text;
});
document.getElementById("tryingtoescape").addEventListener('ended', () => {
    document.getElementById("subtitles").innerText = "";
    i1 = 0; i2 = 0; i3 = 0;
})
document.getElementById("lastchance").addEventListener('ended', () => {
    document.getElementById("subtitles").innerText = "";
    i1 = 0; i2 = 0; i3 = 0;
})
document.getElementById("mywayback").addEventListener('ended', () => {
    document.getElementById("subtitles").innerText = "";
    i1 = 0; i2 = 0; i3 = 0;
})
document.getElementById("apartment").addEventListener('ended', () => {
    document.getElementById("subtitles").innerText = "";
    i1 = 0; i2 = 0; i3 = 0;
})

// document.getElementsByClassName("cart-window")[0].style.display = "none";
// document.getElementsByClassName("delivery-window")[0].style.display = "none";

function windowPopOut(wdw) {
    wdw.style.animation = "popout 500ms forwards"
    setTimeout(() => {
        wdw.style.display = "none"
    }, 500);
}
function windowPopIn(wdw) {
    wdw.style.display = "block"
    wdw.style.animation = "popin 500ms forwards"
}
document.querySelectorAll(".back").forEach((obj) => {
    obj.addEventListener('click', () => {
        windowPopOut(obj.parentElement)
    }) 
})
document.getElementsByClassName("proceed")[0].addEventListener('click', () => {
    windowPopOut(document.getElementsByClassName("cart-window")[0])
    windowPopIn(document.getElementsByClassName("delivery-window")[0])
})
document.addEventListener('keyup', (e) => {
    if(document.getElementsByClassName("cart-window")[0].style.display === "none") {
        return;
    }
    if(e.key === "Escape") {
        windowPopOut(document.getElementsByClassName("cart-window")[0])
    }
    if(e.key === " ") {
        windowPopOut(document.getElementsByClassName("cart-window")[0])
        windowPopIn(document.getElementsByClassName("delivery-window")[0])
    }
})
document.addEventListener('keyup', (e) => {
    if(document.getElementsByClassName("delivery-window")[0].style.display === "none") {
        return;
    }
    if(e.key === "Escape") {
        windowPopOut(document.getElementsByClassName("delivery-window")[0])
    }
})
document.querySelectorAll(".cross").forEach((obj) => {
    obj.addEventListener('click', () => {
        obj.parentElement.remove();
    })
})

