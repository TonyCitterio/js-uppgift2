const inputField = document.getElementById("search");
const resultsArea = document.getElementById("search-results");

function findResult(query) {
    return RESULTS.filter(function (item) {
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        return title.includes(query) || description.includes(query);
    });
}

function createResultElement(list) {
    return list.map(function (item) {
        const moviebox = document.createElement("li");
        moviebox.innerHTML = `
        <article class="search-result">
        <header class="search-result-header search-result-section">
        ${item.title}
        </header>
        <div class="search-result-body search-result-section">
        ${item.description}
        </div>
        </article>
        `
        return moviebox;
    });
}

inputField.addEventListener("keyup", function (event) {
    const inputText = event.target.value;

    resultsArea.innerHTML = "";

    if (inputText.length >= 2) {
        const text = findResult(inputText.toLowerCase());
        createResultElement(text).forEach(function (elements) {
            resultsArea.appendChild(elements);
        });
    }
});