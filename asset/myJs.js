window.onload = function(){
    let thetxt = document.getElementById('tXt');
    let word = thetxt.value;
    document.getElementById('btn').onclick = function(){
        let request = new.XMLHttpRequest();
        request.open("GET","/music/search/唐人/1/10")
        request.send(word);
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