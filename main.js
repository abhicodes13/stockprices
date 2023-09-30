const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const url = 'https://twelve-data1.p.rapidapi.com/price?symbol=';
const urlEnd = '&format=json&outputsize=30';

async function getStocks(name){
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
		'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url + name + urlEnd , options);
	const result = await response.json();
const price = result.price;
    console.log(price);
    document.querySelector(".price").innerHTML=`<h1>Current price ${name.toUpperCase()}<h2>$${price}</h2></h1>`;
} catch (error) {
	console.error(error);
}
}
searchBtn.addEventListener('click', ()=>{
    getStocks(searchBox.value);
    
})