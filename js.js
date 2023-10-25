const API_URL = "https://cvrapi.dk/api?search="

async function search(){
    let input = document.getElementById("input-search")
    let value = input.value
    let request = new Request(API_URL + value + "&country=dk");


    let reponse = await fetch(request);
    let data = await reponse.json();
    console.log(data);

    let resultatelement = document.getElementById("resultat")
    resultatelement.innerHTML = ""
    
    let nameElement = document.createElement("h1")
    nameElement.innerHTML = data.name

    let industrydescElement = document.createElement("h1")
    industrydescElement.innerHTML = data.industrydesc

    let emailElement = document.createElement("h1")
    emailElement.innerHTML = "Email " + data.email
    
    let phoneElement = document.createElement("h1")
    phoneElement.innerHTML = "Telefon " + data.phone

    let cityElement = document.createElement("h1")
    cityElement.innerHTML = data.city + " " + data.zipcode


    let addressElement = document.createElement("h1")
    addressElement.innerHTML = data.address
    
    resultatelement.append(nameElement)
    resultatelement.append(industrydescElement)
    resultatelement.append(emailElement)
    resultatelement.append(phoneElement)
    resultatelement.append(cityElement)
    resultatelement.append(addressElement)
   

}

