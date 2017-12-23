var beginSession = function() {
	setTimeout(function () {
		$(".primary").fadeOut(100, function() {
			$('.thumb').removeClass('thumb--hold')
			$('.bar--front').addClass('bar--up')
			$(this).text("Breathe In").fadeIn(100)
		})

		$('.hint').fadeOut(100, function() {
			$(this).addClass('hint--green')
			$(this).text("You're doing great!").fadeIn(100)

		})
	}, 0)

	setTimeout(function () {
		$(".primary").fadeOut(100, function() {
			$('.thumb').addClass('thumb--hold')
			$('.bar--front').removeClass('bar--up')
			$(this).text("Hold Breath").fadeIn(100)
		})
	}, 4000)

	setTimeout(function () {
		$(".primary").fadeOut(100, function() {
			$('.thumb').removeClass('thumb--hold')
			$('.bar--front').addClass('bar--down')
			$(this).text("Breathe Out").fadeIn(100)
		})
	}, 8000)
	
	setTimeout(function () {
		$(".primary").fadeOut(100, function() {
			$('.thumb').addClass('thumb--hold')
			$('.bar--front').removeClass('bar--down')
			$(this).text("Hold Breath").fadeIn(100)
		})
	}, 12000)
}

var isSessionStarted = false

$('.thumb').on('touchstart', function (e) {
	if (isSessionStarted) {
		return
	}

	isSessionStarted = true
	$(this).removeClass('thumb--hold')
	$('.wave').addClass('wave--moving')

	setTimeout(function() {
		beginSession()

		setInterval(function () {
			beginSession()
		}, 16000)
	}, 2400)
})

$('.thumb').draggable({
	axis: 'y',
	containment: '.bar--front',
	scroll: false,
})
