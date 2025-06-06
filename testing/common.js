const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const q = urlParams.get('q');

function getData(q){
    fetch('data/'+ q + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text(); // or response.json() for JSON files
        })
        .then(fileContent => {
            console.log(fileContent); // Use the file content
            return fileContent;
        })
        .catch(error => {
            console.error('Fetch error:', error);
    });
}

let content;
if ( q ){
    content = getData( q );
}else{
    content = getData( 'frontpage' );
}

const myDiv = document.getElementById('content');
myDiv.innerHTML = content;