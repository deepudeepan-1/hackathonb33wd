
async  function foo()
{
try 
{
    let res = await fetch("https://www.anapioficeandfire.com/api/books");
    let res1 = await res.json();
   return res1;
}
catch (error)
{
console.log(error);
}
}



async function display()
{
    try {

     let booksData = await  foo(); 
      booksData.forEach((data)=>{
          let dataContainer = document.createElement("div");
          dataContainer.className = "container";
          let rel = data.released;
          let released = rel.split("T");
          dataContainer.innerHTML = `
        <p><h2>NAME : ${data.name}</h2>
        <h2>ISBN:${data.isbn}</h2>
        <h2>PAGES : ${data.numberOfPages}</h2>
        <h2>AUTHORS : ${data.authors[0]}</h2>
        <h2>PUBLISHER : ${data.publisher}</h2>
        <h2>RELEASED_DATE : ${released[0]}</h2>
        <h2> CHARACTERS 
        <ol>
        <li>${data.characters[0]}</li>
        <li>${data.characters[1]}</li>
        <li>${data.characters[2]}</li>
        <li>${data.characters[3]}</li>
        <li>${data.characters[4]}</li></ol>
        </h2>
       </p>
        
          `;
          document.body.append(dataContainer);
      });
    

    }
    catch (error)
    {
        console.log(error);
    }
}
display();







