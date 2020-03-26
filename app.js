document.querySelector("#button1").addEventListener("click",getApi);

function getApi(){
    fetch("https://picsum.photos/v2/list?page=1&limit=10").then(function(response){
        return response.json();
    }).then(function(article){

        var output = "<ul>";
        
        article.forEach(function(article){

            output += `<li><p>Author : ${article.author}</p><h3>Photograph Link : <a href="${article.url}">${article.url}</a></h3><br><h4>Photograph Download Link : <a href="${article.download_url}">${article.download_url}</a></h4></li>`;
            
        });
        output += "</ul>";
        document.getElementById("section-b").innerHTML += output;

    });
    button1.style.visibility = "hidden";
}