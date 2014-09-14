Dates = new Mongo.Collection("dates");

if (Meteor.isClient) {
	Template.hello.helpers({
		rendered: function () {
			for (var i = 0; i < 10; i++) {
				Template.datePicker.setup('12/2/1980', function (date) {
					Dates.insert( { 'newDate': date } );
					console.log('saved, with this date:', date);
				}, 'editableDateControl', 12, 32);
			}
		}
	});
}