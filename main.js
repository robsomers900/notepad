const mainContainer = document.createElement("div")
mainContainer.classList.add("mainContainer")
const body = document.querySelector("body")
body.appendChild(mainContainer)

function createSubContainer(mainContainer) {
    subContainer = document.createElement("div")
    subContainer.classList.add("subContainer")
    mainContainer.appendChild(subContainer)
    return subContainer
}

function createBlock(subContainer) {
    const block = document.createElement("div")
    block.classList.add("block")
    subContainer.appendChild(block)
    block.addEventListener("mouseover", () => {
        block.style.backgroundColor = "black";
    })
}

// sub = createSubContainer(mainContainer)
// createBlock(sub)
// createBlock(sub)

let dimension = 8;
let rowDimension = dimension;

while(rowDimension > 0){
    let colDimension = dimension;
    sub = createSubContainer(mainContainer)
    while(colDimension > 0){
        createBlock(sub);
        colDimension --;
    }
    rowDimension --;
}