//Sample CasperJS tests

casper.test.begin("Hello, Test!", 2, function(test) {
	casper.start('file:///Users/zachariabachiri/Desktop/Placester/Zach_ProductionTest/index.html', function() {
		test.assertTitle("Zach - Production Test", "title is the one expected");
		test.assertExists('#main-navigation');
		test.done();
	});
});

casper.run();

