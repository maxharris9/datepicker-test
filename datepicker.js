if (Meteor.isClient) {
	Template.hello.helpers({
		rendered: function () {
			for (var i = 0; i < 10; i++) {
				Template.datePicker.setup('12/02/1980', function (date) { console.log('saved, with this date:', date); } );
			}
		}
	});
}