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
		handleChangeView(544);
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal1').fadeIn();
		}, 1000)
	})

	// Cerrar modal y redireccionar
	$('.closeModal1').on('click', () => {
		handleChangeView(544);
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound();

		setTimeout(() => {
			$('.modal2').fadeIn();
		}, 1000)
	})

	// Cerrar modal y redireccionar
	$('.closeModal2').on('click', () => {
		handleChangeView(544);
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleShowCurrentBox(1);
		handleOptionCorrectShow('.correcta');
		boxSound();
		handleSaveCorrectQuestion(2)
		showBoxes()

		setTimeout(() => {
			handleChangeView(544);
		}, 2500)
	})
})
