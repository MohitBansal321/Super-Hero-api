// For Referecne 
// https://superheroapi.com/api/access-token/character-id


// Global scope for accessing element
const BASE_URL='https://superheroapi.com/api.php/2656376694495994'
const newHeroButton=document.getElementById('newHeroButton')
const searchButton=document.getElementById('searchButton')
const heroImageDiv=document.getElementById('SuperHeroImage')

// Get Random Super function
const getRandomSuperHero=(id,name)=>{
  fetch(`${BASE_URL}/${id}`)
     .then(response => response.json())
     .then(json =>{
       const SuperHero=json
       getStatsHTML(SuperHero)})
}
const statEmoj={
  intelligence:'🧠',
  strength:'💪',
  speed:'⚡',
  durability:'🏋️‍♂️',
  power:'📊',
  combat:'⚔',
}
const getStatsHTML=(character)=>{
  const superName=`<h2>${character.name}</h2>`
  const img=`<img src="${character.image.url}"/>`
  const stats=Object.keys(character.powerstats).map(stat=>{
    return `<p>${statEmoj[stat]} ${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
  }).join('')
  heroImageDiv.innerHTML=`${superName}${img}${stats}`
}
// Getting random id of superhero
const heroNum = () => {
  const numberOfHero=731
  return Math.floor(Math.random()*numberOfHero)+1
}
// click button for random SuperHero 
newHeroButton.onclick=()=>getRandomSuperHero(heroNum())



// get superHero by name 
const getSuperHero=(name)=>{
  fetch(`${BASE_URL}/search/${name}`)
     .then(response => response.json())
     .then(json => {
       const SuperHero=json.results[0]
       getStatsHTML(SuperHero)
     })
}
// input value of for name by super hero
const inputvalue=document.getElementById('getInputValue')
// click button for search super hero by name
searchButton.onclick=()=>getSuperHero(inputvalue.value)