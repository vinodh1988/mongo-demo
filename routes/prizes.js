var express=require("express");
var years=require('../dao/schema');


var route=express.Router();

route.get("/all",function(request,response){
    years.find({},{_id:0},function(err,data){
        if(err)
          response.sendStatus(500);
        else
          response.json(data);
    })
})

route.get("/all/:year",function(request,response){
      let year= request.params.year;
      years.find({year: year},{_id:0},function(err,data){
        if(err)
          response.sendStatus(500);
        else
          response.json(data);
    })
});

route.get("/all-prizes/:category",function(request,response){
    let category= request.params.category;
    years.find({category:category},{_id:0},function(err,data){
      if(err)
        response.sendStatus(500);
      else
        response.json(data);
  })
}
);

route.get("/all-prizes/:category/:year",function(request,response){
    let category= request.params.category;
    let year= request.params.year;
    years.find({$and:[{year:year},{category:category}]},{_id:0},function(err,data){
      if(err)
        response.sendStatus(500);
      else
        response.json(data);
  })
}
);

module.exports=route;
