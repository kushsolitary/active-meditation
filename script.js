var beginSession = function() {
	setTimeout(function () {
		$(".primary").fadeOut(50, function() {
			$('.thumb').removeClass('thumb--hold')
			$('.bar--front').addClass('bar--up')
			$(this).text("Breathe In").fadeIn(50)
		})
	}, 0)

	setTimeout(function () {
		$(".primary").fadeOut(50, function() {
			$('.thumb').addClass('thumb--hold')
			$('.bar--front').removeClass('bar--up')
			$(this).text("Hold Breath").fadeIn(50)
		})
	}, 4000)

	setTimeout(function () {
		$(".primary").fadeOut(50, function() {
			$('.thumb').removeClass('thumb--hold')
			$('.bar--front').addClass('bar--down')
			$(this).text("Breathe Out").fadeIn(50)
		})
	}, 5500)
	
	setTimeout(function () {
		$(".primary").fadeOut(50, function() {
			$('.thumb').addClass('thumb--hold')
			$('.bar--front').removeClass('bar--down')
			$(this).text("Hold Breath").fadeIn(50)
		})
	}, 9500)
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
		
		$('.hint').fadeOut(50, function() {
			$(this).addClass('hint--green')
			$(this).text("You're doing great!").fadeIn(50)

		})

		setInterval(function () {
			beginSession()
		}, 11000)
	}, 1400)
})

$('.thumb').draggable({
	axis: 'y',
	containment: '.bar--front',
	scroll: false,
})
