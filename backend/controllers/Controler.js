// The logic is here!

//TODO: the control logic can be implemented here

//The sample middleware
proceed = function(req, res, next){
    console.log("router works");
    next();
}

module.exports = {
    proceed:proceed,
}

