class Combinator {
    constructor(){
        // Fields to combine
        this.fields = {};
        // Already taken indexes
        this.taken = [];
        // Default combination if too many collisions
        this.default = null;
        // Auto reset index on collision
        this.autoReset = false;
    }
    addField(fieldName, fieldValues){
        this.fields[fieldName] = fieldValues;
    }
    setDefault(def){
        this.default = def;
    }
    // Resets already taken list
    reset(){
        console.log("reset");
        this.taken = [];
    }
    enableAutoReset(){this.autoReset = true;}
    disableAutoReset(){this.autoReset = false;}
    /* Random Index generator
        Returns object with .index & .string    (string version of index)
    */
    generateRandomIndex(){
        var index = {index:{}, string: ""};
        for(var field in this.fields){
            var i = (Math.floor(Math.random() * this.fields[field].length) );
            index.index[field] = i;
            index.string += i.toString() + ".";
        }
        return index;
    }
    /*
        Given an index, retrieves the values of the field list
    */
    generateCombination(index){
        var combination = {};
        for( var field in this.fields){
            combination[field] = this.fields[field][index[field]]; //index[field]
        }
        return combination;
    }
    /*  Returns object with field combination
        This object have specified fields in init
    */
    getCombination(){

        var found = false;
        var itCount = 0;
        var index = {};
        var combination = {};

        //While not found or too many iterations
        while(!found && itCount < 100 ){
            ++itCount;
            var stringIndex = "";

            //Choose random index
            var indexAux = this.generateRandomIndex();
            index = indexAux.index;
            stringIndex = indexAux.string;

            if(this.taken.includes(stringIndex) ){
            }else {
                this.taken.push( stringIndex );
                found = true;
            }
        }

        if(found){
            combination = this.generateCombination(index);
        } else {
            combination = this.default;
            if(this.autoReset) this.reset();
        }
        return combination;

    }


}
