var mainDiv = document.createElement("div");
document.body.appendChild(mainDiv);
mainDiv.setAttribute("id","mainDiv");

for(var i=0;i<16;i++){
	var myDiv = document.createElement("div");
	mainDiv.appendChild(myDiv);
	myDiv.setAttribute("class","red");
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



