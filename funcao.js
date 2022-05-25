var texto
var novoTexto

function somentePrimeiraLetraUpper() {

	texto = document.getElementById("conteudo").value
	novoTexto = texto[0].toUpperCase() + texto.substr(1)

	const pai = document.getElementById('resultado')
	
	pai.innerHTML = novoTexto

	contadorCaracter()
	contadorPalavra()
	contadorFrase()

}


function somentePrimeiraLetraLower() {

	texto = document.getElementById("conteudo").value

	novoTexto = texto[0].toLowerCase() + texto.substr(1)

	const pai = document.getElementById('resultado')
	
	pai.innerHTML = novoTexto

	contadorCaracter()
	contadorPalavra()
	contadorFrase()

}


function UpperCase() {

	texto = document.getElementById("conteudo").value

	novoTexto = texto.toUpperCase()

	const pai = document.getElementById('resultado')
	
	pai.innerHTML = novoTexto

	contadorCaracter()
	contadorPalavra()
	contadorFrase()

}


function LowerCase() {

	texto = document.getElementById("conteudo").value

	novoTexto = texto.toLowerCase()

	const pai = document.getElementById('resultado')
	
	pai.innerHTML = novoTexto

	contadorCaracter()
	contadorPalavra()
	contadorFrase()

}

	
function todaPrimeiraLetraUpper() {

	texto = document.getElementById("conteudo").value

	var palavras = texto.split(" ")


	for (var x = 0; x < palavras.length; x++) {

		palavras[x] = palavras[x][0].toUpperCase() + palavras[x].substr(1)
					
	}
				
	palavras = palavras.join(" ")

	const pai = document.getElementById('resultado')
	
	pai.innerHTML = palavras

	contadorCaracter()
	contadorPalavra()
	contadorFrase()

}


function todaPrimeiraLetraLower() {

	var texto = document.getElementById("conteudo").value

	var palavras = texto.split(" ")


	for (var x = 0; x < palavras.length; x++) {

		palavras[x] = palavras[x][0].toLowerCase() + palavras[x].substr(1)
					
	}
				
	palavras = palavras.join(" ")

	const pai = document.getElementById('resultado')
	
	pai.innerHTML = palavras

	contadorCaracter()
	contadorPalavra()
	contadorFrase()

}

			
function fraseUpper() {

	var texto = document.getElementById("conteudo").value

	var palavras = texto.split(" ")


	for (var x = 0; x < palavras.length; x++) {

		lastIndex = palavras[x][palavras[x].length-1]

		if (lastIndex == '.') {

			if (palavras[x+1] !== undefined) {
				palavras[x+1] = palavras[x+1][0].toUpperCase() + palavras[x+1].substr(1)
				console.log(palavras[x+1])
			}

			else {
				palavras[x+1] == undefined
			}
		}

	}
				
	palavras = palavras.join(" ")

	novaspalavras = palavras[0].toUpperCase() + palavras.substr(1)

	const pai = document.getElementById('resultado')
	
	pai.innerHTML = novaspalavras

	contadorCaracter()
	contadorPalavra()
	contadorFrase()

}
			

function contadorCaracter() {

	var texto2 = document.getElementById("conteudo").value

	caracter = texto2.split("")

	qtdCaracter = caracter.length

	const pai2 = document.getElementById('contagem-caracter')
	
	pai2.innerHTML = qtdCaracter
	
}


function contadorPalavra() {

	var texto3 = document.getElementById("conteudo").value

	palavra = texto3.split(" ")

	qtdPalavra = palavra.length

	const pai3 = document.getElementById('contagem-palavra')
	
	pai3.innerHTML = qtdPalavra
	
}


function contadorFrase() {

	var texto4 = document.getElementById("conteudo").value

	frase = texto4.split(".")

	qtdFrase = frase.length - 1

	const pai4 = document.getElementById('contagem-frase')
	
	pai4.innerHTML = qtdFrase
	
}


function removeTexto() {

	location.reload()

}

