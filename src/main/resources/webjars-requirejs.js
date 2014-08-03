requirejs.config({
    paths: { "angular-feeds": webjars.path("angular-feeds", "angular-feeds") },
    shim: { "angular-feeds": [ "angular" ] }
});
