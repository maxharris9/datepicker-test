Dates = new Mongo.Collection("dates");

if (Meteor.isClient) {
	Template.hello.rendered = function () {
		for (var i = 0; i < 10; i++) {
			Template.datePicker.setup('12/2/1980', function (date) {
				Dates.insert( { 'newDate': date } );
				console.log('saved, with this date:', date);
			}, 'editableDateControl', 12, 32);
		}

		Template.textField.setup('',
			function (text) {
				console.log('saved, with this text:', text);
			}, 'textFieldControl');
	};
}
