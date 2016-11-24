if [ ! -d "test_sails" ]; then

	exec appdev install test_sails --develop settings:settings.js
else 
	echo "test_sails folder exist"
fi