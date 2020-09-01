function copy(){
	console.log('working');
	var link = "https://youtu.be/EkpG8YutJU4";
	link.select();
	link.setSelectionRange(0,99999);
	document.execCommand("copy");
}