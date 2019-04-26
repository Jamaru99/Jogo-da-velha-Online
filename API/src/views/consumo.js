var inputElement = document.querySelector('#consumo input');
var listElement = document.querySelector('#consumo ul');

function getProduct(id){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3001/api/products/' + id);
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4){
                if(xhr.status === 200)
                    resolve(JSON.parse(xhr.responseText));
                else 
                    reject('Produto não encontrado');
            }
        }
    });
}

function showProductTitle(){
    listElement.innerHTML = 'Carregando...'
    getProduct(inputElement.value)
        .then(response => {
            listElement.innerHTML = '';
            repoElement = document.createElement('li');
            repoText = document.createTextNode(response.title);
            repoElement.appendChild(repoText);
            listElement.appendChild(repoElement);
        })
        .catch(error => {
            listElement.innerHTML = error;
        });
}


