// write js code here corresponding to matches.html
var matchArr=JSON.parse(localStorage.getItem("schedule"))
console.log(matchArr)
displaydata(matchArr)
favouriteArr=JSON.parse(localStorage.getItem("favourites"))|| []
function displaydata(data){
matchArr.forEach(function(elem){
    var tr=document.createElement("tr");
    var th1=document.createElement("th");
    th1.innerText=elem.matchnumber
    var th2=document.createElement("th");
    th2.innerText=elem.teamA
    var th3=document.createElement("th");
    th3.innerText=elem.teamB
    var th4=document.createElement("th");
    th4.innerText=elem.date
    var th5=document.createElement("th");
    th5.innerText=elem.venue
    var th6=document.createElement("th");
    th6.innerText="Favourite";
    th6.style.color="Green";
    th6.style.cursor="pointer";
    th6.addEventListener("click",function(){
        favouritefunction(elem)
    })
    tr.append(th1,th2,th3,th4,th5,th6);
    document.querySelector("tbody").append(tr);
    
});
}
function favouritefunction(elem){
    favouriteArr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
}