
function a(){
    var err = _error;

    // comment

    /* block comment
     *
     */
    
    var obj = {
        hello: "Hello World!",
        goodbye: "Goodbye World!"
    };

    function blahMe(a, b){
        var a = a < 2 ? a : 3;
        return(a + b);
    }

    blahMe(1, 2, null, undefined);

    this.blah(function(a, b){

        var self = this;

        var results = [];
        _.each({a: "a", b: "b"}, function(val, key){
            if(key !== "a"){
                result.push(val);
            }else{
                result.push(val);
                result.push(val);
            }
        });

        for(var i = 0; i < [].length; i++){

        }

        if(true){ var a = arguments[0]; }
        else if(false){ var a = arguments[1]; }
        
        if(arguments.length){
            rpc._error = arguments[0];
        }else{
            rpc._error = self.statusCodes().error();
        }
    });

    await{ this.async("a", 'b', 123, 123.4, defer(var result)); }

    function User(){}

    var u = new User();

    User.prototype.userName = function(name){
        if(name === undefined){
            return(this._userName);
        }else{
            this._userName = name;
            return(this);
        }
    };
}
 
