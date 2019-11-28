window.onload = function(){
    let thetxt = document.getElementById('tXt');
    let keyword = thetxt.value;
    document.getElementById('btn').onclick = function(){
        let request = new XMLHttpRequest();
        request.open("GET","https://api.github.com/search/repositories?q=${keyword}+in:name&sort=stars&order=desc")
        request.send();
        request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status === 200){
                const json = JSON.parse(request.responseText);
                console.log(json);
                console.log(request.responseText);
             }
            }
        }
    }
}
