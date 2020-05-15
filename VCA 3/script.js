function ajax(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status ==200){
        var response=JSON.parse(this.responseText);
        console.log(response);
        var Jgrocerylist = response.grocerylist;
        console.log(Jgrocerylist);
        var output="";
        
        for(var i=0;i<Jgrocerylist.length;i++)
        output +="<td>" + Jgrocerylist[i].SerialNumber + "</td>";
        output +="<td>" + Jgrocerylist[i].Name + "</td>";
        output +="<td>" + Jgrocerylist[i].Quantity + "</td>";
        output +="<td>" + Jgrocerylist[i].Unit + "</td>";
        output +="<td>" + Jgrocerylist[i].Department + "</td>";
        output +="<td>" + Jgrocerylist[i].Notes + "</td>";
}
document.getElementById("demo").innerHTML=output;
};
xhttp.open("GET","shopping.json",true);
xhttp.send();
}
