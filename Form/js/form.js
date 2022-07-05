
// Logic to hide site input field
function specifyClient() {
    var type = document.getElementById('customer').checked
    if (type === true){
        document.getElementById('siteLabel').style.display = "none"
        document.getElementById('site').style.display = "none"
        document.getElementById('site').value = "";
    }
    else {
        document.getElementById('siteLabel').style.display = "block"
        document.getElementById('site').style.display = "block"
    }
}

