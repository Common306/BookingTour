function displayFilter() {
    var filter = document.getElementsByClassName('filter-list')[0];
    filter.style.display = "inline-flex";
}

function hiddenFilter() {
    var filter = document.getElementsByClassName('filter-list')[0];
    filter.style.display = "none";
}

var slider = document.getElementById("package_range-slide");
var output = document.getElementById("price_filter");

slider.oninput = function() {
    output.innerHTML = this.value * 750 / 50;
}

function openSubMenuSearch2(sub) {
    var content = sub.parentNode.getElementsByClassName("search2_more")[0];
    var icon = sub.parentNode.getElementsByClassName("search2-icon-down")[0];
    if (content.style.display === "flex") {
        content.style.display = 'none';
        icon.classList.add("fa-angle-down");
        icon.classList.remove("fa-angle-up");
    } else {
        content.style.display = 'flex';
        icon.classList.add("fa-angle-up");
        icon.classList.remove("fa-angle-down");
    }
}

function filter(e) {
    const animals = document.querySelectorAll(".search2_right-item-place");
    let filter = e.target.dataset.filter;
    animals.forEach(animal => {
        animal.classList.contains(filter) ?
            animal.classList.remove('hidden') :
            animal.classList.add('hidden');
    });
};


var btnContainer = document.getElementsByClassName("filters")[0];
var btns = btnContainer.getElementsByClassName("filter-option");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-btn-num");
        current[0].className = current[0].className.replace(" active-btn-num", "");
        this.className += " active-btn-num";
    });
}