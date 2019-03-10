$(function() {
	$('.slider').slick({
		arrows: false,
		dots: true,
		centerMode: true,
		slidesToShow: 1,
		centerPadding: '0px',
		autoplay: true,
		autoplaySpeed: 3000,
		draggable: false
	});
	$('.sliderImg').on('click', function() {
		var dataId = $(this).attr('data-id');
		if (dataId == 187 || dataId == 188) {
			layer.open({
				type: 2,
				title: '',
				shadeClose: false,
				shade: 0.8,
				area: ['980px', '598px'],
				offset: '5px',
				content: '/index/video?id=' + dataId,
				maxmin: true,
				cancel: function(index) {}
			});
		}
	});

});
