async function apiCall(url) {
    //add api call logic here
    
    try{
        let res = await fetch(url);
        let data  = await res.json();
        return data;
    }catch(err){
        console.log(err)
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.array.forEach(element => {
          //let parent  = document.getElementById("main");
          let div = document.createElement("div");

          let title = document.createElement('p');
          title.innerHTML = element.author.title;

          let details =  document.createElement('p')
          details.innerHTML = element.author.description;

          let image = document.createElement("img");
          image.src = element.author.urlToImage;

          div.append(title,details,image);
       
       
         div.onclick=()=>{
            localStorage.setItem("click_image",JSON.stringify(element));
            };
            
            main.append(div)

    });

}

export { apiCall, appendArticles };