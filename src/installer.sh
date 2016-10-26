if [ ! -d "sails" ]; then

	exec /usr/local/bin/node /usr/local/bin/appdev install sails --develop settings:settings.js
else 
	echo "sails folder exist"
fi