if [ ! -d "sails" ]; then

	exec /usr/local/bin/node /usr/local/bin/appdev install sails settings:settings.js
	# --docker 'plugins:appdevdesigns/[app_builder]' settings:/src/app/settings/settings.js
fi