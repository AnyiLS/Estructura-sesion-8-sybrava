$(document).ready(function () {
	showBoxes()
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(551);
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleShowCurrentBox(8);
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(9)

		setTimeout(() => {
			handleChangeView(551);
		}, 2500)
	})
})
