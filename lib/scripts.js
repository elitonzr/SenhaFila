//https://www.toptal.com/developers/keycode
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

jQuery(document).ready(function($) {

	$("body").on('keydown', function(e) {
		var senhaAtual   = $("#senhaAtualNumero");
		var senhaNormal  = $("#senhaNormal");
		var senhaPrior   = $("#senhaPrioridade");
		var ultimaSenha  = $("#ultimaSenhaNumero");
		var audioChamada = $("#audioChamada");

        if(e.keyCode == 39){
		ultimaSenha.html(senhaAtual.html());
		senha = parseInt(senhaNormal.val()) + 1;
		senhaAtual.html(pad(senha, 3));
		senhaNormal.val(pad(senha, 3));
		audioChamada.trigger("play");
			if(senha > 999){        		
				senha = 0;
				ultimaSenha.html(pad(senha, 3));
				senhaAtual.html(pad(senha, 3));
				senhaNormal.val(pad(senha, 3));
			}
        }
        if(e.keyCode == 78){
		senha = parseInt(senhaNormal.val()) + 1;
		senhaAtual.html(pad(senha, 3));
		senhaNormal.val(pad(senha, 3));
			if(senha > 999){
				senha = 0;
				ultimaSenha.html(pad(senha, 3));
				senhaAtual.html(pad(senha, 3));
				senhaNormal.val(pad(senha, 3));
			}
        }
        if(e.keyCode == 66){
		senha = parseInt(senhaNormal.val()) + 10;
		senhaAtual.html(pad(senha, 3));
		senhaNormal.val(pad(senha, 3));
			if(senha > 999){
				senha = 0;
				ultimaSenha.html(pad(senha, 3));
				senhaAtual.html(pad(senha, 3));
				senhaNormal.val(pad(senha, 3));
			}
        }
        if(e.keyCode == 86){
		senha = parseInt(senhaNormal.val()) + 100;
		senhaAtual.html(pad(senha, 3));
		senhaNormal.val(pad(senha, 3));
			if(senha > 999){
				senha = 0;
				ultimaSenha.html(pad(senha, 3));
				senhaAtual.html(pad(senha, 3));
				senhaNormal.val(pad(senha, 3));
			}
        }
        if(e.keyCode == 67){
            senha = parseInt(senhaNormal.val()) - 1;
            senhaAtual.html(pad(senha, 3));
            senhaNormal.val(pad(senha, 3));
			if(senha < 0){
				senha = 0;
				ultimaSenha.html(pad(senha, 3));            		
				senhaAtual.html(pad(senha, 3));
				senhaNormal.val(pad(senha, 3));
			}
        }
        if(e.keyCode == 88){
		senha = parseInt(senhaNormal.val()) - 10;
		senhaAtual.html(pad(senha, 3));
		senhaNormal.val(pad(senha, 3));
			if(senha < 0){
				senha = 0;
				ultimaSenha.html(pad(senha, 3));            		
				senhaAtual.html(pad(senha, 3));
				senhaNormal.val(pad(senha, 3));
			}
        }
        if(e.keyCode == 90){
		senha = parseInt(senhaNormal.val()) - 100;
		senhaAtual.html(pad(senha, 3));
		senhaNormal.val(pad(senha, 3));
			if(senha < 0){
				senha = 0;
				ultimaSenha.html(pad(senha, 3));            		
				senhaAtual.html(pad(senha, 3));
				senhaNormal.val(pad(senha, 3));
			}
        }
        if(e.keyCode == 38){
		ultimaSenha.html(senhaAtual.html());
		senha = parseInt(senhaPrior.val().replace("P","")) + 1;
		senhaAtual.html("P" + pad(senha, 3));
		senhaPrior.val("P" + pad(senha, 3));
		audioChamada.trigger("play");
			if(senha > 999){
				senha = 0;
				ultimaSenha.html("P" + pad(senha, 3));
				senhaAtual.html("P" + pad(senha, 3));
				senhaPrior.val("P" + pad(senha, 3));
			}
        }
        if(e.keyCode == 72){
		senha = parseInt(senhaPrior.val().replace("P","")) + 1;
		senhaAtual.html("P" + pad(senha, 3));
		senhaPrior.val("P" + pad(senha, 3));
			if(senha > 999){
						senha = 0;
				ultimaSenha.html("P" + pad(senha, 3));
				senhaAtual.html("P" + pad(senha, 3));
				senhaPrior.val("P" + pad(senha, 3));
			}
        }
        if(e.keyCode == 71){
		senha = parseInt(senhaPrior.val().replace("P","")) + 10;
		senhaAtual.html("P" + pad(senha, 3));
		senhaPrior.val("P" + pad(senha, 3));
			if(senha > 999){
						senha = 0;
				ultimaSenha.html("P" + pad(senha, 3));
				senhaAtual.html("P" + pad(senha, 3));
				senhaPrior.val("P" + pad(senha, 3));
			}
        }
        if(e.keyCode == 70){
		senha = parseInt(senhaPrior.val().replace("P","")) + 100;
		senhaAtual.html("P" + pad(senha, 3));
		senhaPrior.val("P" + pad(senha, 3));
			if(senha > 999){
						senha = 0;
				ultimaSenha.html("P" + pad(senha, 3));
				senhaAtual.html("P" + pad(senha, 3));
				senhaPrior.val("P" + pad(senha, 3));
			}
        }
        if(e.keyCode == 40){
		senha = parseInt(senhaPrior.val().replace("P","")) - 1;
		senhaAtual.html("P" + pad(senha, 3));
		senhaPrior.val("P" + pad(senha, 3));
			if(senha < 0){        		
				senha = 0;
				ultimaSenha.html("P" + pad(senha, 3));
				senhaAtual.html("P" + pad(senha, 3));
				senhaPrior.val("P" + pad(senha, 3));
			}
        }
        if(e.keyCode == 68){
		senha = parseInt(senhaPrior.val().replace("P","")) - 1;
		senhaAtual.html("P" + pad(senha, 3));
		senhaPrior.val("P" + pad(senha, 3));
			if(senha < 0){
				senha = 0;
				ultimaSenha.html("P" + pad(senha, 3));
				senhaAtual.html("P" + pad(senha, 3));
				senhaPrior.val("P" + pad(senha, 3));
			}
        }
        if(e.keyCode == 83){
		senha = parseInt(senhaPrior.val().replace("P","")) - 10;
		senhaAtual.html("P" + pad(senha, 3));
		senhaPrior.val("P" + pad(senha, 3));
			if(senha < 0){
				senha = 0;
				ultimaSenha.html("P" + pad(senha, 3));
				senhaAtual.html("P" + pad(senha, 3));
				senhaPrior.val("P" + pad(senha, 3));
			}
        }
        if(e.keyCode == 65){
		senha = parseInt(senhaPrior.val().replace("P","")) - 100;
		senhaAtual.html("P" + pad(senha, 3));
		senhaPrior.val("P" + pad(senha, 3));
			if(senha < 0){
				senha = 0;
				ultimaSenha.html("P" + pad(senha, 3));
				senhaAtual.html("P" + pad(senha, 3));
				senhaPrior.val("P" + pad(senha, 3));
			}
        }
	if(e.keyCode == 79){
		senha = parseInt(senhaNormal.val());
		senhaAtual.html(pad(senha, 3));
        }
	if(e.keyCode == 80){
		senha = parseInt(senhaPrior.val().replace("P",""));
		senhaAtual.html("P" + pad(senha, 3));
        }
	if(e.keyCode == 13){
            audioChamada.trigger("play");
        }
	
    });
});