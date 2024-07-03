document.querySelector("body").addEventListener("mousemove", function (details) {
    // console.log(details.clientX, details.clientY);
    document.querySelector(".cursor-move").style.top = `${details.clientY}px`
    document.querySelector(".cursor-move").style.left = `${details.clientX}px`
});

document.querySelector(".part-3").addEventListener("mouseenter", function () {
    document.querySelector(".cursor-move").style.display = "flex"
})

document.querySelector(".part-3").addEventListener("mouseleave", function () {
    document.querySelector(".cursor-move").style.display = "none"
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)