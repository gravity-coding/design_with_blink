document.querySelector("body").addEventListener("mousemove", function (details) {
    // console.log(details.clientX, details.clientY);
    document.querySelector(".cursor-move").style.top = `${details.clientY}px`
    document.querySelector(".cursor-move").style.left = `${details.clientX}px`
});

