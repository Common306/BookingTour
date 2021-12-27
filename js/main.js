var overLay = document.getElementById('overlay');
var navBar = document.getElementById('header-child_nav-mobile');



function openNavBar() {
    overLay.style.display = "block";
    navBar.style.display = "block";
}

function closeNavBar() {
    overLay.style.display = "none";
    navBar.style.display = "none";
}

function openSubMenu(sub) {
    var content = sub.parentNode.getElementsByClassName("header-subnav-mobile")[0];
    var icon = sub.parentNode.getElementsByClassName("mobile-icon-down")[0];
    if (content.style.display === "inline-block") {
        content.style.display = 'none';
        icon.classList.add("fa-angle-down");
        icon.classList.remove("fa-angle-up");
    } else {
        content.style.display = 'inline-block';
        icon.classList.add("fa-angle-up");
        icon.classList.remove("fa-angle-down");
    }
}

function openSubSubMenu(sub) {
    var content = sub.parentNode.getElementsByClassName("list-sub-subnav-mobile")[0];
    var icon = sub.parentNode.getElementsByClassName("mobile-icon-down")[0];
    if (content.style.display === "block") {
        content.style.display = 'none';
        icon.classList.add("fa-angle-down");
        icon.classList.remove("fa-angle-up");
    } else {
        content.style.display = 'block';
        icon.classList.add("fa-angle-up");
        icon.classList.remove("fa-angle-down");
    }
}

var e = document.getElementById('info-item-select');

function show() {
    var option = e.options[e.selectedIndex].value;
    var price = document.querySelectorAll(".place_price span")[1];
    var tag = document.getElementsByClassName("place_tag-text")[0];
    if (option == 1) {
        price.innerHTML = "$ 1,000.00"
        tag.innerHTML = "1-People-Bora"
    } else if (option == 2) {
        price.innerHTML = "$ 1,500.00"
        tag.innerHTML = "2-People-Bora"
    } else if (option == 3) {
        price.innerHTML = "$ 1,700.00"
        tag.innerHTML = "3-People-Bora"
    } else if (option == 4) {
        price.innerHTML = "$ 1,800.00"
        tag.innerHTML = "4-People-Bora"
    } else if (option == 5) {
        price.innerHTML = "$ 2,000.00"
        tag.innerHTML = "5-People-Bora"
    }
}
e.onchange = show;
show();



const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});


var stars = $$('.star-review');

stars.forEach((star, index) => {
    star.onclick = function() {
        for (var j = 0; j <= index; j++) {
            stars[j].classList.add("checked");
            for (var z = index + 1; z < 5; z++) {
                stars[z].classList.remove("checked")
            }
        }
    };
});

function changeImg(img) {
    var imgCurrent = $('#imgCurrent');

    var srcImgCurrent = imgCurrent.src;
    var srcImgChange = img.src;

    imgCurrent.src = srcImgChange;
    img.src = srcImgCurrent;

}