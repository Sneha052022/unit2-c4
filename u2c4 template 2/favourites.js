// write js code here corresponding to favourites.html
var favouriteArr=JSON.parse(localStorage.getItem("favourites"));
console.log(favouriteArr);
displaydata(favouriteArr);



function displaydata(data){
    data.forEach(function(elem,index){
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
        th5.innerText=elem.venue;
        var th6=document.createElement("th");
        th6.innerText="Remove as Favourite"
        th6.style.color="green";
        // th6.addEventListener("click",function(){
        //     removeasfavouritefun(elem);
            var th7=document.createElement("th");
            th7.innerText="Delete"
            th7.style.color="red";
            th7.addEventListener("click",function(){
                deletefun(elem,index);

        });
        tr.append(th1,th2,th3,th4,th5,th6,th7);
        document.querySelector("tbody").append(tr);
    });
    function deletefun(elem,index){
        favouriteArr.splice(index,1);
        localStorage.setItem("favourites",JSON.stringify(favouriteArr));
        window.location.reload();

    }
}
// function  removeasfavouritefun(elem){
//     removeasfavouriteArr.push(elem);
//     localStorage.setItem("favourites",JSON.stringify(favouriteArr))