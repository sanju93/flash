let form = document.getElementsByTagName('form')[0];
let infoDiv = document.getElementById('info');

form.addEventListener("submit",async (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;

    try{
    let res = await fetch(`http://localhost:8000/search/${title}`);
    let data = await res.json();
    console.log(data.data)

    let output = `<p>title : ${data.data.Title} </p>
                <p> type : ${data.data.Type} </p>
                <p> writer : ${data.data.Writer} </p>
                <button id ="favourite"> Favourite </button>
                `
    infoDiv.innerHTML = output;

    let favourite = document.getElementById('favourite');
    favourite.addEventListener('click',async ()=> {
         try{
        let r = await fetch('http://localhost:8000/addFav',{
        method : "POST",
        headers : {
            'Content-Type' : "application/json"
        },
        body : JSON.stringify(data.data)
       })

         let d = await r.status;

         if (d == 200){
            console.log("Added in faviourite");
         }
     
         }catch(err){
           console.log(err);
         }
    })

    }catch(err){
       console.log(err);
    }




})

