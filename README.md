#READ ME
This is an installer for the Appdev OpsPortal project.

### Developer Setup

To install and prepare the code:
```sh
$ npm install -g grunt-cli
$ cd [your/development/directory]
$ git clone https://github.com/appdevdesigns/Appdev-Installer.git
$ cd Appdev-Installer
$ npm update
$ grunt
```

To run the app, double click on the App in `build/Appdev-Installer/osx64`

To run the project in development mode:

- download the [NW.js SDK](https://dl.nwjs.io/v0.18.8/nwjs-sdk-v0.18.8-osx-x64.zip)
- unzip it and store it in `[your/development/directory]`
- rename it `nwjs-sdk` (because you'll get tired of typing that whole thing in)

```sh
$ cd src
$ ../../nwjs-sdk/nwjs.app/Contents/MacOS/nwjs .
```

and for extra credit you can temporarialy add the NW.js path:
```sh
$ cd ../../nwjs-sdk/nwjs.app/Contents/MacOS
$ pwd  											# copy the [path] 
$ PATH=$PATH:[path]								# past the [path] here
$ ../../../../Appdev-Installer/src/
$ nwjs .
```

now when the application runs, you can press `[cmd]-[alt]-[i]` to see the chrome debugger interface.


