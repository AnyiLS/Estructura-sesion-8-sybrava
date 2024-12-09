$(document).ready(function () {
	showBoxes();
	// const responses = JSON.parse(localStorage.getItem('responses'))
	// if (responses.includes(9)) {
	// 	$('.caja9').show();
	// }
	// $('.caja8').hide();

	// modal 1
	$('.openModal').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1')
			$('.caja1').css('z-index', '1')
			$('.caja2').css('z-index', '1')
			$('.caja3').css('z-index', '1')
			$('.caja4').css('z-index', '1')
			$('.caja5').css('z-index', '1')
			$('.caja6').css('z-index', '1')
			$('.caja7').css('z-index', '1')
			$('.caja8').css('z-index', '1')
			$('.caja9').css('z-index', '1')
		}, 1000)
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		setTimeout(() => {
			handleCheckResults()
		}, 2000)
	})

	// modal 1
	$('.openModal1').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1')
			$('.caja1').css('z-index', '1')
			$('.caja2').css('z-index', '1')
			$('.caja3').css('z-index', '1')
			$('.caja4').css('z-index', '1')
			$('.caja5').css('z-index', '1')
			$('.caja6').css('z-index', '1')
			$('.caja7').css('z-index', '1')
			$('.caja8').css('z-index', '1')
			$('.caja9').css('z-index', '1')
		}, 1000)
	})

	// modal 2
	$('.openModal2').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
			$('.caja').css('z-index', '1')
			$('.caja1').css('z-index', '1')
			$('.caja2').css('z-index', '1')
			$('.caja3').css('z-index', '1')
			$('.caja4').css('z-index', '1')
			$('.caja5').css('z-index', '1')
			$('.caja6').css('z-index', '1')
			$('.caja7').css('z-index', '1')
			$('.caja8').css('z-index', '1')
			$('.caja9').css('z-index', '1')
		}, 1000)
	})
	
	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleShowCurrentBox(9)
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(10)

		setTimeout(() => {
			handleCheckResults()
		}, 2500)
	})
})
