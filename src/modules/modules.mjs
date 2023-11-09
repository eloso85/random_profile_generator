function toggleReadMore() {
    let dots = document.getElementById("lead__dots")
    let moreText = document.getElementById("lead__more")
    let btnText = document.getElementById("readMoreBtn")

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
export default toggleReadMore;