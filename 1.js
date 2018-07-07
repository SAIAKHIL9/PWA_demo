"use strict"
function getFile(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status == "200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
getFile("1.json",function(text){
 let data=JSON.parse(text);
 console.log(data);

}
)
