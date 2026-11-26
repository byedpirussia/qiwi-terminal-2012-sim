(function ($) {
	// jQuery plugin definition
	$.fn.jsinclude = function (params) {
		// merge default and user parameters
		params = $.extend({ attr: 'jsinclude', onload: function () { } }, params);

		// traverse all nodes
		this.each(function () {
			$(this).load($(this).attr(params.attr), null, params.onload);
		});
		// allow jQuery chaining
		return this;
	};
})(jQuery);
