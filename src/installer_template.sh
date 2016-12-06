if [ ! -d "#nameDirectory#" ]; then

	exec appdev install #nameDirectory# --develop settings:settings.js
else 
	echo "#nameDirectory# folder exist"
fi