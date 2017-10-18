var mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);
mainDiv.setAttribute("id","mainDiv");

for(var i=0;i<16;i++){
	var myDiv = document.createElement("div");
	//create random numbers to be included in each div
	var random1 = Math.round(Math.random()*10000);
	myDiv.setAttribute("class","red");
	myDiv.innerHTML = "$"+random1;
	mainDiv.appendChild(myDiv);

}

function highlight(e){
	e.stopPropagation();
	if(e.currentTarget != e.target){
		e.target.classList.add("highlight");
	}
}

function noHighlight(e){
	e.stopPropagation();
	if(e.currentTarget != e.target){
		e.target.classList.remove("highlight");
	}
}

mainDiv.addEventListener("mouseover",highlight,false);
mainDiv.addEventListener("mouseout",noHighlight,false);



