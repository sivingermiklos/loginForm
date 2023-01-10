function login() {
    if (document.getElementById("user").value == "admin" &&
    document.getElementById("pass").value == "admin1234" &&
    document.getElementById("feltetelek").checked){
        document.getElementById("egesz").style.display = "none"
        document.getElementById("udv").style.display = "block"
    }
    else {
        document.getElementById("egesz").style.display = "none"
        document.getElementById("nemjo").style.display = "block"
    }
}