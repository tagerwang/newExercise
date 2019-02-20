(function(window, document, $){
	$(function(){
		var $target;

		function createPopupOverlay() {
			var $overlay = $('.wrapper .popup-overlay');
			if ($overlay.length <= 0) {
				$overlay = $('<div class="popup-overlay"></div>').appendTo('.wrapper');
			}
			$overlay.on('click', function(){
				if ($target) {
					hide();
				}
			})
			return $overlay;
		}

		function showPopupOverlay() {
			var $overlay = createPopupOverlay();
			$overlay.css('display', 'block');
		}

		function hidePopupOverlay() {
			var $overlay = createPopupOverlay();
			$overlay.css('display', 'none');
		}

		function show() {
			$target.css('display', 'block');
			addBodyHeight();
			showPopupOverlay();
		}

		function addBodyHeight() {
			var _th = $target.outerHeight();
			var _bh = $('.wrapper').outerHeight();
			// 200 is popup top add bottom.
			_th += 200;
			if (_th > _bh) {
				$('.wrapper').css('height', _th);
			}
		}

		function hide() {
			$target.css('display', 'none');
			hidePopupOverlay();
			$($target).off('click');
			$('.wrapper').css('height', 'auto');
		}

		$(document).on('click', '[data-toggle="popup"]', function(event) {
			event.stopPropagation();
			var $this = $(this)
			var _target = $this.data('target');
			$target = $(_target);
			show();
			$($target).on('click', '[data-dismiss="popup"]', hide);
		});
		$.fn.showDialog=function(options){
    		
		};
	})
})(window, document, window.jQuery);
