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
if(Number((window.location.href.split("?aw=")[1]).split("&")[0]) > 0) {
    document.getElementsByClassName("grid")[0].insertAdjacentHTML('beforeend',
        `
        <div class="row" id = "awr">
            <div class="column">
                <div class="interrow">
                    <p>Alan Wake Meal Box</p>
                </div>
                <div class="interrow">
                    <p>1 Alan Wake funko pop, 1 midnight lasagna, 2 dark place old fashioned, 1 blackened venison stew, 1 ink dipped calamari, 1 lake mirror panna cotta</p>
                </div>
            </div>
            <div class="column">
                <div class="amt" id = "awmb">
                    <div class="minus">
                        <p>-</p>
                    </div>
                    <div class="num">
                        <p>${Number((window.location.href.split("?aw=")[1]).split("&")[0])}</p>
                    </div>
                    <div class="plus">
                        <p>+</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <p>₹1210</p>
            </div>
        </div>
    `
    )
}
if(Number((window.location.href.split("&ms=")[1]).split("&")[0]) > 0) {
    document.getElementsByClassName("grid")[0].insertAdjacentHTML('beforeend',
    `
        <div class="row" id = "msr">
            <div class="column">
                <div class="interrow">
                    <p>Mr. Scratch Meal Box</p>
                </div>
                <div class="interrow">
                    <p>1 Mr. Scratch funko pop, 1 charred ribeye with ritual butter, 2 coffee world shake, 1 ash rubbed duck breast, 1 rye & rot cheese board, 1 sage & berry crumble</p>
                </div>
            </div>
            <div class="column">
                <div class="amt" id = "msmb">
                    <div class="minus">
                        <p>-</p>
                    </div>
                    <div class="num">
                        <p>${Number((window.location.href.split("&ms=")[1]).split("&")[0])}</p>
                    </div>
                    <div class="plus">
                        <p>+</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <p>₹1210</p>
            </div>
        </div>
    `
    )
}
if(Number(window.location.href.split("&sa=")[1]) > 0) {
    document.getElementsByClassName("grid")[0].insertAdjacentHTML('beforeend',
        `
        <div class="row" id = "sar">
            <div class="column">
                <div class="interrow">
                    <p>Saga Andersson Meal Box</p>
                </div>
                <div class="interrow">
                    <p>1 flashlight keychain, 1 smoked forest toast, 1 sage & berry crumble, 1 watery whisky sour</p>
                </div>
            </div>
            <div class="column">
                <div class="amt" id = "samb">
                    <div class="minus">
                        <p>-</p>
                    </div>
                    <div class="num">
                        <p>${Number(window.location.href.split("&sa=")[1])}</p>
                    </div>
                    <div class="plus">
                        <p>+</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <p>₹1100</p>
            </div>
        </div>
        `
    )
}
let aw;
let ms;
let sa;
function total() {
    aw = 0;
    ms = 0;
    sa = 0;
    if(document.getElementById("awr")) {
        aw = Number(document.querySelector("#awmb .num p").innerHTML)*1210
    }
    if(document.getElementById("msr")) {
        ms = Number(document.querySelector("#msmb .num p").innerHTML)*1210
    }
    if(document.getElementById("sar")) {
        sa = Number(document.querySelector("#samb .num p").innerHTML)*1100
    }
    let totalcost = aw + ms + sa;
    document.getElementById("total").innerHTML = `₹${totalcost}`
    requestAnimationFrame(total)
}
requestAnimationFrame(total);
function cartcheck() {
    if(document.getElementById("awr") || document.getElementById("msr") || document.getElementById("sar")) {
        document.getElementsByClassName("cartph")[0].style.display = "none"
    } else {
        document.getElementsByClassName("cartph")[0].style.display = "block"
    }
    if(document.getElementById("awr")) {
        if(Number(document.querySelector("#awmb .num p").innerHTML) < 1) {
            document.getElementById("awr").remove()
        }
    }
    if(document.getElementById("msr")) {
        if(Number(document.querySelector("#msmb .num p").innerHTML) < 1) {
            document.getElementById("msr").remove()
        }
    }
    if(document.getElementById("sar")) {
        if(Number(document.querySelector("#samb .num p").innerHTML) < 1) {
            document.getElementById("sar").remove()
        }
    }
    requestAnimationFrame(cartcheck)
}
requestAnimationFrame(cartcheck)
document.querySelector("#awmb .minus").addEventListener("click", () => {
    document.querySelector("#awmb .num p").innerHTML = Number(document.querySelector("#awmb .num p").innerHTML) - 1
    removeFromCart('aw')
})
document.querySelector("#awmb .plus").addEventListener("click", () => {
    document.querySelector("#awmb .num p").innerHTML = Number(document.querySelector("#awmb .num p").innerHTML) + 1
    addToCart('aw')
})
document.querySelector("#msmb .minus").addEventListener("click", () => {
    document.querySelector("#msmb .num p").innerHTML = Number(document.querySelector("#msmb .num p").innerHTML) - 1
    removeFromCart("ms")
})
document.querySelector("#msmb .plus").addEventListener("click", () => {
    document.querySelector("#msmb .num p").innerHTML = Number(document.querySelector("#msmb .num p").innerHTML) + 1
    addToCart("ms")
})
document.querySelector("#samb .minus").addEventListener("click", () => {
    document.querySelector("#samb .num p").innerHTML = Number(document.querySelector("#samb .num p").innerHTML) - 1
    removeFromCart("sa")
})
document.querySelector("#samb .plus").addEventListener("click", () => {
    document.querySelector("#samb .num p").innerHTML = Number(document.querySelector("#samb .num p").innerHTML) + 1
    addToCart('sa')
})