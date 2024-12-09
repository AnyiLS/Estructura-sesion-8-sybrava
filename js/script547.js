$(document).ready(function () {
	showBoxes()
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound()

		setTimeout(() => {
			$('.modal').fadeIn()
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(548)
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound()

		setTimeout(() => {
			$('.modal').fadeIn()
		}, 1000)
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound()

		setTimeout(() => {
			$('.modal').fadeIn()
		}, 1000)
	})

	// Seleccion de la respuesta correcta
	$('.opcion').on('click', () => {
		handleShowCurrentBox(5)
		handleOptionCorrectShow('.correcta')
		boxSound()
		handleSaveCorrectQuestion(6)

		setTimeout(() => {
			handleChangeView(548)
		}, 2000)
	})
})
