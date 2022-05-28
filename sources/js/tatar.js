sources = {
    gta : {
        gallery: [
            {
                img: "",
                alt: ""
            },
        ]
    }
}

const header = document.querySelector("#header");
//const height = documen

function resize() {
    var heights = window.innerHeight;
    header.style.height = heights+"px";
    console.log(heights)
}
window.onload = function() {
    resize();
};
window.onresize = function() {
    resize();
};