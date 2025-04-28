if(document.getElementById("aw")) {
    document.getElementById("aw").addEventListener("click", () => {
        if(document.querySelector("#aw p").style.display == "none") {
            return;
        }
        document.querySelector("#aw p").style.display = "none"
        document.querySelector("#aw .dnum").innerHTML = Number(document.querySelector("#aw .dnum").innerHTML) + 1
        document.getElementsByClassName("dnums")[0].style.display = "grid"
    })
    document.getElementById("ms").addEventListener("click", () => {
        if(document.querySelector("#ms p").style.display == "none") {
            return;
        }
        document.querySelector("#ms p").style.display = "none"
        document.querySelector("#ms .dnum").innerHTML = Number(document.querySelector("#ms .dnum").innerHTML) + 1
        document.getElementsByClassName("dnums")[1].style.display = "grid"
    })
    document.getElementById("sa").addEventListener("click", () => {
        if(document.querySelector("#sa p").style.display == "none") {
            return;
        }
        document.querySelector("#sa p").style.display = "none"
        document.querySelector("#sa .dnum").innerHTML = Number(document.querySelector("#sa .dnum").innerHTML) + 1
        document.getElementsByClassName("dnums")[2].style.display = "grid"
    })
    function check() {
        if(Number(document.querySelector("#aw .dnum").innerHTML) < 1) {
            document.querySelector(`#aw p`).style.display = "block"
            document.getElementsByClassName("dnums")[0].style.display = "none"
        }
        if(Number(document.querySelector("#ms .dnum").innerHTML) < 1) {
            document.querySelector(`#ms p`).style.display = "block"
            document.getElementsByClassName("dnums")[1].style.display = "none"
        }
        if(Number(document.querySelector("#sa .dnum").innerHTML) < 1) {
            document.querySelector(`#sa p`).style.display = "block"
            document.getElementsByClassName("dnums")[2].style.display = "none"
        }
        requestAnimationFrame(check)
    }
    requestAnimationFrame(check)
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
if(document.getElementById("aw")) {
    document.getElementById("aw").addEventListener("click", () => {
        if(document.querySelector("#aw p").style.display == "none") {
            return;
        }
        document.querySelector("#aw p").style.display = "none"
        document.querySelector("#aw .dnum").innerHTML = Number(document.querySelector("#aw .dnum").innerHTML) + 1
        document.getElementsByClassName("dnums")[0].style.display = "grid"
    })
    document.getElementById("ms").addEventListener("click", () => {
        if(document.querySelector("#ms p").style.display == "none") {
            return;
        }
        document.querySelector("#ms p").style.display = "none"
        document.querySelector("#ms .dnum").innerHTML = Number(document.querySelector("#ms .dnum").innerHTML) + 1
        document.getElementsByClassName("dnums")[1].style.display = "grid"
    })
    document.getElementById("sa").addEventListener("click", () => {
        if(document.querySelector("#sa p").style.display == "none") {
            return;
        }
        document.querySelector("#sa p").style.display = "none"
        document.querySelector("#sa .dnum").innerHTML = Number(document.querySelector("#sa .dnum").innerHTML) + 1
        document.getElementsByClassName("dnums")[2].style.display = "grid"
    })
    function check() {
        if(Number(document.querySelector("#aw .dnum").innerHTML) < 1) {
            document.querySelector(`#aw p`).style.display = "block"
            document.getElementsByClassName("dnums")[0].style.display = "none"
        }
        if(Number(document.querySelector("#ms .dnum").innerHTML) < 1) {
            document.querySelector(`#ms p`).style.display = "block"
            document.getElementsByClassName("dnums")[1].style.display = "none"
        }
        if(Number(document.querySelector("#sa .dnum").innerHTML) < 1) {
            document.querySelector(`#sa p`).style.display = "block"
            document.getElementsByClassName("dnums")[2].style.display = "none"
        }
        requestAnimationFrame(check)
    }
    requestAnimationFrame(check)
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