function smoothScroll(event) {
    console.log("a")

    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}