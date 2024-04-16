mainContainer = document.createElement("div")
mainContainer.classList.add("mainContainer")
body = document.querySelector("body")
body.appendChild(mainContainer)

function createSubContainer(mainContainer) {
    subContainer = document.createElement("div")
    subContainer.classList.add("subContainer")
    mainContainer.appendChild(subContainer)
    return subContainer
}

function createBlock(subContainer) {
    block = document.createElement("div")
    block.classList.add("block")
    subContainer.appendChild(block)
}

