function calcular(tipo, valor) {
	//console.log(tipo, valor)

	let visor = document.getElementById('visor')

	if (tipo === 'valor') {

		if (visor.value != 0) {
			visor.value += valor
		} 
		else if (visor.value == 0) {
			visor.value = valor
		}
	}

	if (tipo === 'operacao') {

		if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
			visor.value += valor
		}

		if(valor === 'C') {
			visor.value = '0'
		}

		if (valor === '=') {
			
			let conta = visor.value
			visor.value = eval(conta)
		}

	}
}
