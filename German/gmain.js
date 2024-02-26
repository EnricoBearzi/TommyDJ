function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}