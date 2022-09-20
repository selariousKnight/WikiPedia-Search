let searchInputEle = document.getElementById("searchInput");
let spinnerEle = document.getElementById('spinner')
let dynamicContainer = document.getElementById("searchItemsContainer");


function createAndAppend(result_Ele){

    let {title,link,description} = result_Ele;

    let itmsContainer = document.createElement("div");
    itmsContainer.classList.add("itemsContainer")
    dynamicContainer.appendChild(itmsContainer)

    let titleEle = document.createElement("a");
    titleEle.classList.add("title");
    titleEle.textContent = title;
    titleEle.href = link;
    titleEle.target = "_blank"
    itmsContainer.appendChild(titleEle);

    let breakEle1 = document.createElement("div")
    itmsContainer.appendChild(breakEle1)

    let linkEle = document.createElement('url');
    linkEle.classList.add("link-item");
    linkEle.textContent = link;
    linkEle.href = link;
    linkEle.target = "_blank"
    itmsContainer.appendChild(linkEle);

    let breakEle2 = document.createElement("div")
    itmsContainer.appendChild(breakEle2)

    let descriptionEle = document.createElement("p");
    descriptionEle.textContent = description;
    
    descriptionEle.classList.add("description");
    itmsContainer.appendChild(descriptionEle);
}


function display(search_results){
    for(let result_Ele of search_results){
    createAndAppend(result_Ele)
    }
}


function searchResults(event){
    if(event.key === "Enter"){
        spinnerEle.classList.toggle('d-none')
        dynamicContainer.textContent = ""
        let searchValue = searchInputEle.value;
        spinnerEle.classList.remove("d-none");
        let url = "https://apis.ccbp.in/wiki-search?search="+ searchValue

        let configuraiton = {
            method : "GET"
        }
       fetch(url,configuraiton)
       .then((response) => response.json())
       .then(function(data){
        let {search_results} = data
        spinnerEle.classList.toggle('d-none')
        display(search_results)
       })
    }
}

searchInputEle.addEventListener('keydown',searchResults)
