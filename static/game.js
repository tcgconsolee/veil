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
    document.getElementById("about").muted = true;
    document.getElementById("menu").muted = true;
    document.getElementById("delivery").muted = true;
    document.getElementById("contact").muted = true;
}
function unmute() {
    document.getElementById("about").muted = false;
    document.getElementById("menu").muted = false;
    document.getElementById("delivery").muted = false;
    document.getElementById("contact").muted = false;
}
let prev = 5;

document.getElementById('about').addEventListener('play', function() {
    document.getElementById('subtitles').innerText = this.textTracks[0].cues[0].text;
});
document.getElementById('contact').addEventListener('play', function() {
    document.getElementById('subtitles').innerText = this.textTracks[0].cues[0].text;
});
document.getElementById('delivery').addEventListener('play', function() {
    document.getElementById('subtitles').innerText = this.textTracks[0].cues[0].text;
});
document.getElementById('menu').addEventListener('play', function() {
    document.getElementById('subtitles').innerText = this.textTracks[0].cues[0].text;
});
document.getElementById("about").addEventListener('ended', () => {
    document.getElementById("subtitles").innerText = "";
})
document.getElementById("contact").addEventListener('ended', () => {
    document.getElementById("subtitles").innerText = "";
})
document.getElementById("delivery").addEventListener('ended', () => {
    document.getElementById("subtitles").innerText = "";
})
document.getElementById("menu").addEventListener('ended', () => {
    document.getElementById("subtitles").innerText = "";
})
document.querySelectorAll(".openabout").forEach((el) => {
    el.addEventListener('mouseover', () => {
        document.getElementById("about").play()
    })
})
document.querySelectorAll(".openmenu").forEach((el) => {
    el.addEventListener('mouseover', () => {
        document.getElementById("menu").play()
    })
})
document.querySelectorAll(".opendelivery").forEach((el) => {
    el.addEventListener('mouseover', () => {
        document.getElementById("delivery").play()
    })
})
document.querySelectorAll(".opencontact").forEach((el) => {
    el.addEventListener('mouseover', () => {
        document.getElementById("contact").play()
    })
})
document.getElementsByClassName("menu-window")[0].style.display = "none";
document.getElementsByClassName("delivery-window")[0].style.display = "none";
document.getElementsByClassName("about-window")[0].style.display = "none";
document.getElementsByClassName("contact-window")[0].style.display = "none";

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
document.addEventListener('keyup', (e) => {
    if(!e.key=="Escape") {
        return;
    }
    if(document.getElementsByClassName("menu-window")[0].style.display !== "none") {
        windowPopOut(document.getElementsByClassName("menu-window")[0])
    }
    if(document.getElementsByClassName("contact-window")[0].style.display !== "none") {
        windowPopOut(document.getElementsByClassName("contact-window")[0])
    }
    if(document.getElementsByClassName("about-window")[0].style.display !== "none") {
        windowPopOut(document.getElementsByClassName("about-window")[0])
    }
    if(document.getElementsByClassName("delivery-window")[0].style.display !== "none") {
        windowPopOut(document.getElementsByClassName("delivery-window")[0])
    }
})
document.querySelectorAll("[class^='open']").forEach((el) => {
    el.addEventListener('click', () => {
        windowPopIn(document.getElementsByClassName(el.className.split("open")[1] + "-window")[0])
    })
})
document.querySelector(".abtdelibtn > a").addEventListener("click", () => {
    windowPopOut(document.getElementsByClassName("about-window")[0])
    windowPopIn(document.getElementsByClassName("delivery-window")[0])
})
if(document.getElementById("aw")) {
    function addToCart(item) {
        fetch(`/add_to_cart/${item}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                quantity: 1 
            })
        })
        .then(response => {
            if (response.ok) {
                console.log(`${item} added to cart`)
            } else {
                console.log('Failed to add to cart');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    function removeFromCart(item) {
        fetch(`/remove_from_cart/${item}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.ok) {
                console.log(`${item} removed from cart`);
            } else {
                console.log('Failed to remove from cart');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    if(window.location.href.includes("&aw")) {
        document.querySelector("#aw .dnum").innerHTML = (window.location.href.split("&aw=")[1]).split("&ms")[0]
        document.querySelector("#ms .dnum").innerHTML = (window.location.href.split("&ms=")[1]).split("&sa")[0]
        if(window.location.href.split("&sa=")[1].includes("#")) {
            document.querySelector("#sa .dnum").innerHTML = (window.location.href.split("&sa=")[1]).split("#")[0]
        } else {
            document.querySelector("#sa .dnum").innerHTML = window.location.href.split("&sa=")[1]
        }
    }
    function gamecheck() {
        if(!window.location.href.includes("?username")) {
            return;
        }
        if(Number(document.querySelector("#aw .dnum").innerHTML) < 1) {
            document.querySelector(`#aw p`).style.display = "block"
            document.getElementsByClassName("dnums")[0].style.display = "none"
        } else {
            document.querySelector(`#aw p`).style.display = "none"
            document.getElementsByClassName("dnums")[0].style.display = "grid"
        }
        if(Number(document.querySelector("#ms .dnum").innerHTML) < 1) {
            document.querySelector(`#ms p`).style.display = "block"
            document.getElementsByClassName("dnums")[1].style.display = "none"
        } else {
            document.querySelector(`#ms p`).style.display = "none"
            document.getElementsByClassName("dnums")[1].style.display = "grid"
        }
        if(Number(document.querySelector("#sa .dnum").innerHTML) < 1) {
            document.querySelector(`#sa p`).style.display = "block"
            document.getElementsByClassName("dnums")[2].style.display = "none"
        } else {
            document.querySelector(`#sa p`).style.display = "none"
            document.getElementsByClassName("dnums")[2].style.display = "grid"
        }
        requestAnimationFrame(gamecheck)
    }
    setTimeout(() => {
        requestAnimationFrame(gamecheck)
    }, 500)
    document.getElementById("carta").addEventListener("click", (e) => {
        if(!window.location.href.includes("?username")) {
            e.preventDefault()
            alert("Please make an account first in order to add items to your cart");
            return;
        }
        window.location.href=`cart`
    })
    document.getElementById("aw").addEventListener("click", () => {
        if(!window.location.href.includes("?username")) {
            alert("Please make an account first in order to add items to your cart");
            return;
        }
        if(document.querySelector("#aw p").style.display == "none") {
            return;
        }
        document.querySelector("#aw p").style.display = "none"
        document.querySelector("#aw .dnum").innerHTML = Number(document.querySelector("#aw .dnum").innerHTML) + 1
        addToCart('aw')
        document.getElementsByClassName("dnums")[0].style.display = "grid"
    })
    document.getElementById("ms").addEventListener("click", () => {
        if(!window.location.href.includes("?username")) {
            alert("Please make an account first in order to add items to your cart");
            return;
        }
        if(document.querySelector("#ms p").style.display == "none") {
            return;
        }
        document.querySelector("#ms p").style.display = "none"
        document.querySelector("#ms .dnum").innerHTML = Number(document.querySelector("#ms .dnum").innerHTML) + 1
        addToCart('ms')
        document.getElementsByClassName("dnums")[1].style.display = "grid"
    })
    document.getElementById("sa").addEventListener("click", () => {
        if(!window.location.href.includes("?username")) {
            alert("Please make an account first in order to add items to your cart");
            return;
        }
        if(document.querySelector("#sa p").style.display == "none") {
            return;
        }
        document.querySelector("#sa p").style.display = "none"
        document.querySelector("#sa .dnum").innerHTML = Number(document.querySelector("#sa .dnum").innerHTML) + 1
        addToCart('sa')
        document.getElementsByClassName("dnums")[2].style.display = "grid"
    })
    document.querySelector("#aw .dminus").addEventListener("click", () => {
        removeFromCart('aw')
        document.querySelector("#aw .dnum").innerHTML = Number(document.querySelector("#aw .dnum").innerHTML) - 1
    })
    document.querySelector("#aw .dplus").addEventListener("click", () => {
        addToCart('aw')
        document.querySelector("#aw .dnum").innerHTML = Number(document.querySelector("#aw .dnum").innerHTML) + 1
    })
    document.querySelector("#ms .dminus").addEventListener("click", () => {
        removeFromCart('ms')
        document.querySelector("#ms .dnum").innerHTML = Number(document.querySelector("#ms .dnum").innerHTML) - 1
    })
    document.querySelector("#ms .dplus").addEventListener("click", () => {
        addToCart('ms')
        document.querySelector("#ms .dnum").innerHTML = Number(document.querySelector("#ms .dnum").innerHTML) + 1
    })
    document.querySelector("#sa .dminus").addEventListener("click", () => {
        removeFromCart('sa')
        document.querySelector("#sa .dnum").innerHTML = Number(document.querySelector("#sa .dnum").innerHTML) - 1
    })
    document.querySelector("#sa .dplus").addEventListener("click", () => {
        addToCart('sa')
        document.querySelector("#sa .dnum").innerHTML = Number(document.querySelector("#sa .dnum").innerHTML) + 1
    })
    document.getElementsByClassName("dropdownbar")[0].addEventListener('click', () => {
        if(document.getElementsByClassName("dropdownbar")[0].options[document.getElementsByClassName("dropdownbar")[0].selectedIndex].text.toLowerCase() === "all") {
            Array.prototype.slice.call(document.getElementsByClassName("menuitems")[0].children).forEach((el) => {
                el.style.display = "block"
            })
        } else {
            Array.prototype.slice.call(document.getElementsByClassName("menuitems")[0].children).forEach((el) => {
                el.style.display = "none"
            })
            document.querySelectorAll(".menuitem." + document.getElementsByClassName("dropdownbar")[0].options[document.getElementsByClassName("dropdownbar")[0].selectedIndex].value.toLowerCase()).forEach((el) => {
                el.style.display = "block"
            })
        }
    })
    document.getElementsByClassName("searchtxt")[0].addEventListener('keyup', () => {
        document.getElementsByClassName("dropdownbar")[0].selectedIndex=0;
        if(document.getElementsByClassName("searchtxt")[0].value === "") {
            Array.prototype.slice.call(document.getElementsByClassName("menuitems")[0].children).forEach((el) => {
                el.style.display = "block"
            })
        } else {
            Array.prototype.slice.call(document.getElementsByClassName("menuitems")[0].children).forEach((el, i) => {
                if(document.querySelectorAll('.menuitem > .itemname > p')[i].innerHTML.toLowerCase().includes(document.getElementsByClassName("searchtxt")[0].value.toLowerCase())) {
                    el.style.display = "block"
                } else {
                    el.style.display = "none"
                }
            })
        }
    })
}