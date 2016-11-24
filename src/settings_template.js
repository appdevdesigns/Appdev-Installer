module.exports = {

    // DB Adaptor settings
    adaptor:"adaptor-value",            // which DB adaptor to use? 
    connectionType: "port",     // connect by port
    socketPath : "na",          // needs to be present, but not used.
    host: "host-value",          // url of host
    port: "port-value",               
    user: "user-value",
    password: "password-value", 
    database: "database-value",

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