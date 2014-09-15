# Datepicker Test
This app demonstrates the maxharris9:datepicker package.

## Installation
I'm waiting a little while (for better CSS and complete unit tests) to push these packages up to the public meteor package server. In the meantime, you'll have to work a little harder to use this:

	git clone https://github.com/maxharris9/maxharris9-template-instance-utils.git
	git clone https://github.com/maxharris9/maxharris9-datepicker.git
	git clone https://github.com/maxharris9/datepicker-test.git
	git clone https://github.com/maxharris9/maxharris9-textfield.git
	cd datepicker-test/packages/
	ln -s ../../maxharris9:template-instance-utils .
	ln -s ../../maxharris9:datepicker .
	ln -s ../../maxharris9:textfield .
	meteor add maxharris9:template-instance-utils
	meteor add maxharris9:datepicker
	meteor add maxharris9:textfield
	cd ..
	
## Running

	meteor
