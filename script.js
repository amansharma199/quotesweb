let quotes = document.getElementById('quotes');
let author = document.getElementById('author');
let qbtn = document.getElementById('qbtn');



async function data() {

// function demo(){console.log('1')}


    let api = await fetch('https://goquotes-api.herokuapp.com/api/v1/all/quotes');
    let realData = await api.json();

    // console.log(realData.quotes.length)
    // console.log(realData.quotes[20].text);
    // console.log(realData.quotes[20].author);

    let qoutesLength = realData.quotes.length;
    let randomNum = Math.floor(Math.random()*qoutesLength);
    finalQuotes = realData.quotes[randomNum].text;
    finalAuthor = realData.quotes[randomNum].author;
    // console.log(randomNum);

    quotes.innerText = finalQuotes;
    author.innerText = `By : ${finalAuthor}`;


}


qbtn.addEventListener('click', data);

qbtn.addEventListener('click', ()=>{
    quotes.innerText = 'Loading... Please Wait '
    author.innerText = '';
})
