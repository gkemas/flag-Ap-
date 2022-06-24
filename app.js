let data;
let cname;
let capital;
let population;
let flag;
let currency;
let language;
let input;

const getAllCountry = async() =>{
  const response = await fetch('https://restcountries.com/v3.1/all');
   data = await response.json();
  
 let c_names =await data.map(country => country.name.common);
 await c_names.forEach((name)=>{
  document.querySelector('.selectpicker').innerHTML += `
  <option value="${name}">${name}</option>`

 })
//  await $('.selectpicker').selectpicker('refresh');
}
// getAllCountry() = async() =>{
//   input.forEach((item)  => {
//     item.addEventListener('mouseup', (e) =>{
//       e.preventDefault();   
//       cname = e.target.innerText;
//     }) uy
//   }
// )}

getAllCountry() = async =>{
  let countryAll =[];
  data.forEach(e =>{
    const {common} =e.country
    countryAll.push(common);
  })
}