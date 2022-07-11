const search = () => {
    const searchbox = document.getElementById("search_item").value.toUpperCase();
    const product = document.querySelectorAll(".home_product_item")
    const name = document.getElementsByTagName("h4")

    for (var i = 0; i < name.length; i++) {
        let match = product[i].getElementsByTagName('h4')[0];

        if (match) {
           let textValue = match.textContent || match.innerHTML
           if (textValue.toUpperCase().indexOf(searchbox) > -1) {
            product[i].style.display ="list-item";
           } else {
            product[i].style.display ="none";
           }
        }
    }
}