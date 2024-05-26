document.addEventListener("mousemove",function(dets){
 document.querySelectorAll(".img").forEach((elem)=>{
    const position = elem.getAttribute("value");
    let x = (window.innerWidth - dets.clientX * position)/100;
    let y = (window.innerHeight - dets.clientY * position)/100;

    elem.style.transform = `translateX(${x}px) translateY(${y}px)`
 })
})