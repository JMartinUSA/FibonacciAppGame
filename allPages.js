showAllPages('Index');

function showAllPages(IDName){
	var containerNameLength = document.getElementsByClassName("container").length;
	var iAllContainerHide = 0;
	while(iAllContainerHide < containerNameLength){
		document.getElementsByClassName("container")[iAllContainerHide].style.display="none";
		iAllContainerHide++;
	}
	console.log(IDName);
	var containerName = 'container'+IDName;
	console.log(containerName);
	document.getElementById(containerName).style.display="block";
}
