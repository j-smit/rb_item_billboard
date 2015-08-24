define([
	'intern!object',
	'intern/chai!expect',
	'intern/order!component-helpers/js/object-assign',
	'intern/order!https://boffinhouse.github.io/rawblock/sources/js/libs/dom.js',
	'intern/order!https://boffinhouse.github.io/rawblock/sources/js/libs/rb-utils.js',
	'intern/order!https://boffinhouse.github.io/rawblock/sources/js/libs/rb-life.js',
	'intern/order!sources/js/modules/rb_item_billboard',
], function(registerSuite, expect) {
	/* jshint expr: true */
	var widgetElement, widget;

	registerSuite({
		name: 'item_billboard tests',
		setup: function () {},
		teardown: function () {},
		beforeEach: function () {
			widgetElement = document.createElement('div');
			document.body.appendChild(widgetElement);

			widget = rb.life.create(widgetElement, rb.life._behaviors.item_billboard);
		},
		afterEach: function () {},

		'basic tests': function() {
			expect(rb.life._behaviors.item_billboard, '').to.exist;
		},

	});
});
