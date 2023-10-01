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
	
	async function getamzn(){
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
				'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
			}
		};	
		try {
			const response = await fetch(url + "amzn" + urlEnd , options);
			const result = await response.json();
	
			console.log(result);
			document.querySelector('.stock3').innerText = `$${result.price}`;
			
		} catch (error) {
			console.error(error);
		}}
		getamzn()
	
		// TSLA
		async function gettsla(){
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
					'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
				}
			};	
			try {
				const response = await fetch(url + "tsla" + urlEnd , options);
				const result = await response.json();
		
				console.log(result);
				document.querySelector('.stock2').innerText = `$${result.price}`;
				
			} catch (error) {
				console.error(error);
			}}
			gettsla()
	
			// spy
			async function getspy(){
				const options = {
					method: 'GET',
					headers: {
						'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
						'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
					}
				};	
				try {
					const response = await fetch(url + "spy" + urlEnd , options);
					const result = await response.json();
			
					console.log(result);
					document.querySelector('.stock1').innerText = `$${result.price}`;
					
				} catch (error) {
					console.error(error);
				}}
				getspy()
	
				// META
				async function getMeta(){
					const options = {
						method: 'GET',
						headers: {
							'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
							'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
						}
					};	
					try {
						const response = await fetch(url + "meta" + urlEnd , options);
						const result = await response.json();
				
						console.log(result);
						document.querySelector('.stock4').innerText = `$${result.price}`;
						
					} catch (error) {
						console.error(error);
					}}
					getMeta()
	
				// PLTR
				async function getPltr(){
					const options = {
						method: 'GET',
						headers: {
							'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
							'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
						}
					};	
					try {
						const response = await fetch(url + "pltr" + urlEnd , options);
						const result = await response.json();
				
						console.log(result);
						document.querySelector('.stock5').innerText = `$${result.price}`;
						
					} catch (error) {
						console.error(error);
					}}
					getPltr()
	
					//RIVN
					async function getRivn(){
						const options = {
							method: 'GET',
							headers: {
								'X-RapidAPI-Key': 'aaf412f001mshb16825a0d5065e6p181d8ajsn4a009ea4951a',
								'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
							}
						};	
						try {
							const response = await fetch(url + "rivn" + urlEnd , options);
							const result = await response.json();
					
							console.log(result);
							document.querySelector('.stock6').innerText = `$${result.price}`;
							
						} catch (error) {
							console.error(error);
						}}
						getRivn()