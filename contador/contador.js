/* PROG3 UFCG 2017.2
ALUNO: Gabriel Almeida Azevedo mat - 116210009
*/

var state;
var id = null;

function start(time){
	
	state = 'started';
	if(!id){
		id = setInterval(update, time);
	}
}

function stop(){
	
	state = "stopped";
	clearInterval(id);
	id = null;
}
