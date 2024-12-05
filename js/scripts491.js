const slides = ['slide491']


$(document).ready(function () {
    // modal
	$('.openModal').on('click', () => {
		$('.modal').css('display', 'block')
		localStorage.setItem('slide491', 'true')
		$('.puntero').css('display', 'none')

		const exist = []

		slides.forEach((item) => {
			if (localStorage.getItem(item) === 'true') {
				exist.push(item)
			}
		})

		if (exist.length === 4) {
			$('.boton-next').show()
			$('.vutom-col').hide()
		}
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		$('.modal').css('display', 'none')
	})

})
