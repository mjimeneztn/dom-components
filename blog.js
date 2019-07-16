const articleHeader = document.querySelector(".article__header")
articleHeader.textContent = "Welcome to the Michelle blog"

const elArticleHeader = document.querySelectorAll(".article__header")

for (let i = 0; i < elArticleHeader.length; i++) {
    const newHeader = elArticleHeader[i]
    newHeader.classList.add("important");
}

const dashRemove = document.querySelector(".dashed")
dashRemove.classList.remove("dashed")

const footer = document.querySelector(".article__footer")
footer.classList.add("goldenrod")     