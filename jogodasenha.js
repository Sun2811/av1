var counter=0;
function randomNumber(){
var number= Math.floor(Math.random()*10);
return number
}
function computerNumber(){
var fourth= randomNumber();
for (var i;i=1;i++) {
	var third= randomNumber();
	var second= randomNumber();
	var first= randomNumber();
	if(third!=fourth && second!=fourth && second!=third && first!=fourth && first!=third && first!=second){break}
}
var rnd=fourth.toString()+third.toString()+second.toString()+first.toString();
console.log(rnd);
return rnd;
}
function verifyEntry(number){
	number=number.toString();
	verif=true;
	for (var i=0;i<4;i++){
		if (number.lastIndexOf(number.charAt(i))!=i){
			verif=false;
			break;
		}
	}
	return verif;
}
rnd = computerNumber();

function check(){
	var userNumber=$("#try").val().toString();
	var vache=0;
	var toreau=0;
	if (verifyEntry(userNumber)===false){$("#console").prepend(userNumber+" - Numero invalido ou repetido, tente de novo\r\n")} else {
	for (var n=0; n<4; n++){
		for (var i=0; i<4; i++){
		if (userNumber.charAt(i) === rnd.charAt(n) && i==n)
			{toreau++;} else {if(userNumber.charAt(i) === rnd.charAt(n)) {vache++;}}

		}
	}
		counter++;
		if (toreau===4){
			$("#console").prepend(userNumber+ " - 4 bulls, VOCÊ GANHOU depois de "+counter+" tentativas.\r\n"+"Um novo numero foi setado, jogue de novo!\r\n");
			rnd=computerNumber();
			counter=0;}
		else{$("#console").prepend(userNumber+ " - " + vache +" vaca(s) "+toreau+" touro(s), tentativas: "+counter+"\r\n");}}
		$("#try").val("");
}