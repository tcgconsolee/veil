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
    function check() {
        if(document.querySelector(".usertxt p:nth-child(1)").innerHTML === "Login") {
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
        requestAnimationFrame(check)
    }
    setTimeout(() => {
        requestAnimationFrame(check)
    }, 500)
    document.getElementById("carta").addEventListener("click", (e) => {
        if(document.querySelector(".usertxt p:nth-child(1)").innerHTML === "Login") {
            e.preventDefault()
            alert("Please make an account first in order to add items to your cart");
            return;
        }
        window.location.href=`cart`
    })
    document.getElementById("aw").addEventListener("click", () => {
        if(document.querySelector(".usertxt p:nth-child(1)").innerHTML === "Login") {
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
        if(document.querySelector(".usertxt p:nth-child(1)").innerHTML === "Login") {
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
        if(document.querySelector(".usertxt p:nth-child(1)").innerHTML === "Login") {
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