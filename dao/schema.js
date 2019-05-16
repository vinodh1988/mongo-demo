var mongoose=require('mongoose');

var years=mongoose.model('year_model',new mongoose.Schema(
    {
      year: String,
      category: String,
      laureates:Object
    }
),'prizes');

module.exports=years;