/**
 * Created by bhalerao_sa on 5/8/2015.
 */
(function(){
    'use strict';
    module.exports=function(app){
      var index=require('../controller/index.server.controller');
        app.get('/product_list',index.render);
    };
})();