var express=require('express');
var router=express();

router.get('/',function (req,res) {
    // body...
    res.render('index');
});

module.exports=router;
