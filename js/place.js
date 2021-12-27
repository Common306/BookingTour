function toggleText(aTag) {
    var content = aTag.parentNode.getElementsByClassName("place_left-day-sub-description")[0];
    var icon = aTag.parentNode.getElementsByClassName("plus-icon")[0];
    if (content.style.display == "block") {
        content.style.display = 'none';
        icon.classList.add("fa-plus-square");
        icon.classList.remove("fa-minus-square");
    } else {
        content.style.display = 'block';
        icon.classList.add("fa-minus-square");
        icon.classList.remove("fa-plus-square");

    }
}