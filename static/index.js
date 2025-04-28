if(document.getElementById("aw")) {
    if(document.querySelector(".usertxt p:nth-child(1)").innerHTML === "Login") {} else {
        document.querySelector("#aw .dnum").innerHTML = (window.location.href.split("&aw=")[1]).split("&ms")[0]
        document.querySelector("#ms .dnum").innerHTML = (window.location.href.split("&ms=")[1]).split("&sa")[0]
        document.querySelector("#sa .dnum").innerHTML = window.location.href.split("&sa=")[1]
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
        window.location.href=`cart?username=${document.querySelector(".usertxt p").innerHTML}&aw=${document.querySelector("#aw .dnum").innerHTML}&ms=${document.querySelector("#ms .dnum").innerHTML}&sa=${document.querySelector("#sa .dnum").innerHTML}`
    })
    document.getElementById("aw").addEventListener("click", () => {
        console.log(document.querySelector(".usertxt p:nth-child(1)").innerHTML === "Login")
        if(document.querySelector(".usertxt p:nth-child(1)").innerHTML === "Login") {
            alert("Please make an account first in order to add items to your cart");
            return;
        }
        if(document.querySelector("#aw p").style.display == "none") {
            return;
        }
        document.querySelector("#aw p").style.display = "none"
        document.querySelector("#aw .dnum").innerHTML = Number(document.querySelector("#aw .dnum").innerHTML) + 1
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
        document.getElementsByClassName("dnums")[2].style.display = "grid"
    })
    document.querySelector("#aw .dminus").addEventListener("click", () => {
        document.querySelector("#aw .dnum").innerHTML = Number(document.querySelector("#aw .dnum").innerHTML) - 1
    })
    document.querySelector("#aw .dplus").addEventListener("click", () => {
        document.querySelector("#aw .dnum").innerHTML = Number(document.querySelector("#aw .dnum").innerHTML) + 1
    })
    document.querySelector("#ms .dminus").addEventListener("click", () => {
        document.querySelector("#ms .dnum").innerHTML = Number(document.querySelector("#ms .dnum").innerHTML) - 1
    })
    document.querySelector("#ms .dplus").addEventListener("click", () => {
        document.querySelector("#ms .dnum").innerHTML = Number(document.querySelector("#ms .dnum").innerHTML) + 1
    })
    document.querySelector("#sa .dminus").addEventListener("click", () => {
        document.querySelector("#sa .dnum").innerHTML = Number(document.querySelector("#sa .dnum").innerHTML) - 1
    })
    document.querySelector("#sa .dplus").addEventListener("click", () => {
        document.querySelector("#sa .dnum").innerHTML = Number(document.querySelector("#sa .dnum").innerHTML) + 1
    })
}