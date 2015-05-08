/**
 * Created by bhalerao_sa on 5/8/2015.
 */
(function(){
    'use strict';
    var express=require('express');
    module.exports=function(){
        var app=express();
            require('../app/routes/index.server.routes')(app);
        return app;
    };
})();