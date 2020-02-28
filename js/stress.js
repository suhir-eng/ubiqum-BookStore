let arr =[];
let txt ="";
let loading = true;
  fetch("https://api.myjson.com/bins/zyv02",
   {method:"GET",
    dataType: 'json'})
    .then(response => {
      console.log(response);
      let json = response.json();
      return json;
    })
    .then(result => {
      loading = false;
     arr=result.books;
    books(arr);
     
    })
    .catch(error => console.log(error));
	
 
 function books(arr){
   for (i=0;i<arr.length;i++){
  let image=document.createElement("img");
  image.setAttribute("data-fancybox","image");
  image.setAttribute("src",arr[i]["cover"]);
 image.setAttribute("width","240 px");
  image.setAttribute("height","290px");
  let divflip =document.createElement("div");
  let divflipinner =document.createElement("div");
  let divflipfront =document.createElement("div");
  divflip.setAttribute("class","flip-card");
  divflipinner.setAttribute("class","flip-card-inner");
  divflipfront.setAttribute("class","flip-card-front");
  divflipfront.appendChild(image);
 let divflipback=document.createElement("div");
 divflipback.setAttribute("class","flip-card-back");
 //title
  let h3 =document.createElement("h3");
  let title =document.createTextNode(arr[i]["title"]);
  h3.appendChild(title);
  //description
  let p =document.createElement("p");
  let desc =document.createTextNode(arr[i]["description"]);
  p.appendChild(desc);
  // the button
  
  let button=document.createElement("button");
  button.setAttribute("class","btn-primary");
  let buttontext=document.createTextNode("more pics");
  button.appendChild(buttontext);
 button.setAttribute("data-fancybox","preview");
 button.setAttribute("data-src","#det"+i);
 //detail img
  let details=document.createElement("img");
  details.setAttribute("src",arr[i]["detail"]);
  details.setAttribute("id","det"+i);
  details.setAttribute("width","240 px");
  details.setAttribute("height","290 px");
  details.setAttribute("style","display: none;");
  
  button.appendChild(details);
  
  divflipback.appendChild(h3);
  divflipback.appendChild(p);
  divflipback.appendChild(button);
  divflipinner.appendChild(divflipfront);
  divflipinner.appendChild(divflipback);
  divflip.appendChild(divflipinner);
  document.getElementById("fancy-box").appendChild(divflip);}
}
  

 function search(){
document.getElementById("fancy-box").innerHTML="";
  let input, filter, i, txtValue;
  let sorted=[];
  let j=0;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  for (i = 0; i < arr.length; i++) {
    let fleter= arr[i]["title"];
    if (fleter.toUpperCase().startsWith(filter)) {
       sorted[j]= arr[i];
       j++;
    }  
    
 }
if(sorted !=[]){
  
 books(sorted);}
else {window.alert("none");}}



/* $('[data-fancybox="preview"]').fancybox({
  toolbar: "true",
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
  thumbs : {
    autoStart : true
  }
 }); */