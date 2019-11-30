window.onload = function(){
  let thetxt = document.getElementById('tXt');
  let react = thetxt.value;
  let Ul = document.querySelector('ul');
  document.getElementById('btn').onclick = function(){
      let request = new XMLHttpRequest();
      request.open("GET","https://api.github.com/search/repositories?q=react+in:name&sort=stars&order=desc");
      request.send(react);
      request.onreadystatechange = function(){
      if(request.readyState === 4){
          if(request.status === 200){
              let json = JSON.parse(request.responseText);
            
             console.log(json);
            
             
            

            let Li = document.createElement('li')
             Ul.appendChild(Li);
           Li.innerText = request.responseText
            
            
          }
        }
          }
      }
  }
