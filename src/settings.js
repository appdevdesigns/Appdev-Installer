module.exports = {

    // DB Adaptor settings
    adaptor:"sails-disk",            // which DB adaptor to use? 
    connectionType: "port",     // connect by port
    socketPath : "na",          // needs to be present, but not used.
    host: "127.0.0.1",          // url of host
    port: "3306",               
    user: "root",
    password: "root", 
    database: "develop",

    wantTest:"n",        // want test adaptor?

    // SSL Settings:
    enableSSL:false,    // no ssl

    // Authentication
    // authType:"local",
    authType:"Local",
    baseURL:"",
    pgtURL:"",
    guidKey:"",

    installLanguages:"en:English",

    // 
    copyConfigs:false,
    configDir:""
}