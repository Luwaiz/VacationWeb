function hotel(){
    document.getElementById("where-text").innerHTML="Stay somewhere great"
}
function ToDo(){
    document.getElementById("where-text").innerHTML="Do something fun"
}
function search(){
    document.getElementById("where-text").innerHTML="Where to?"
}
function vacation(){
    document.getElementById("where-text").innerHTML="Explore places to rent"
}
function restaurant(){
    document.getElementById("where-text").innerHTML="Find places to eat"
}

function moveRight(){
    let right=document.getElementById("hotels-cont")
    right.scrollLeft= right.offsetWidth
}
function trending1(){
   let travel= document.getElementById("travel")
   let newContent=`
   <div class="travel-cont">
        <p class="travel-text">Nashville</p>
        <p class="travel-text">Charleston</p>
        <p class="travel-text">Sedona</p>
        <p class="travel-text">New Orleans</p>
        <p class="travel-text">Washington DC</p>

    </div>
    <div class="travel-cont">
        <p class="travel-text">Rome</p>
        <p class="travel-text">Prague</p>
        <p class="travel-text">Santorini</p>
        <p class="travel-text">Budapest</p>
        <p class="travel-text">Copenhagen</p>

    </div>
    <div class="travel-cont">
        <p class="travel-text">Costa Rica</p>
        <p class="travel-text">Maui</p>
        <p class="travel-text">Belize</p>
        <p class="travel-text">Puerto Vallarta</p>
        <p class="travel-text">Cabo San Lucas</p>
    </div>
    <div class="travel-cont">
        <p class="travel-text">Tokyo</p>
        <p class="travel-text">Madrid</p>
        <p class="travel-text">Bermuda</p>
        <p class="travel-text">Maldives</p>
        <p class="travel-text">Mexico city</p>

    </div>
   `
    travel.innerHTML=newContent
}

function trending2(){
    let travel= document.getElementById("travel")
    let newContent=`
    <div class="travel-cont">
         <p class="travel-text">Olympics Travel Guide</p>
         <p class="travel-text">Paris Trip Planner</p>
         <p class="travel-text">Paris Travel Forum</p>
         <p class="travel-text">Paris Metro Guide</p>
         <p class="travel-text">Paris Airport Guide</p>
 
     </div>
     <div class="travel-cont">
         <p class="travel-text">Best Paris Tours</p>
         <p class="travel-text">Best Paris Hotels</p>
         <p class="travel-text">Best Paris Attractions</p>
         <p class="travel-text">Best Paris Restaurants</p>
         <p class="travel-text">Best Restaurants Near the Eiffel Tower</p>
 
     </div>
     <div class="travel-cont">
         <p class="travel-text">Accor Arena</p>
         <p class="travel-text">Parc des Princes</p>
         <p class="travel-text">Roland Garros</p>
         <p class="travel-text">Stade de France</p>
         <p class="travel-text">Grand Palais</p>
     </div>
     <div class="travel-cont">
         <p class="travel-text">Seine River</p>
         <p class="travel-text">Palace of Versailles</p>
         <p class="travel-text">Le Golf National</p>
         <p class="travel-text">Paris La Défense Arena</p>
         <p class="travel-text">Saint-Quentin-en-Yvelines Velodrome</p>
 
     </div>
    `
     travel.innerHTML=newContent
 }
