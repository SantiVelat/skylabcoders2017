#TODO _list_

##DAY 1

###the day
    *Tools installation 
    *Initiation to cmder
    *Learning Markdown 
    *Cration and use of a repository(GIT)
        [Git init, Git add, Git commit, Git log, Git status, Git remote, Git push, Git clone, Git pull, Git add --all// Git add -A]

###keep doing
***more about cmder***
https://www.codecademy.com/learn/learn-the-command-line

***more about git***
https://skylabcoders.github.io/bootcamp-julio2017/?full#10
https://dotfiles.github.io/
*also check the sourcetree, graphical version*

***************************************************

##DAY 2

###the day
    *Initiation to JavaScript
    *The Scopes 
    *Operators(+, -, *, /, %)
    *Logical operators(&, &&, |, ||, ==, ===)
    *Conditionals and loops (if...else, switch, while, for, for...in, for...each)
    *Ternary operator
    *Functions
    *Closures 

###keep doing

**************************************************

##DAY 3

###the day
    *Consolidation of concepts
    *Array methods and function
    *Objects
    *Constructors and prototyping

**ARRAY METHODS AND FUNCTIONS**
*array.length*--->(Is a property)Count the lenght of the array. Is posible to force the array to any concret length(usually used for delete the array content of the memory)
*array.concat*---> Used to unify more than one arrays in a new array(the original array still been equal)
*array.join(character/s between the content)*---> Used to unify into a string all the content of any array
*array.split*--->Used to inverse the join.
*array.forEach*--->Used to go on an objects array
*array.sort*--->Used to sort the content of an array
*array.reverse*--->
*array.push*---> Insert a new parameter to the array
*array.pop*---> Delete/Return the last object
*array.shift*---> Return the first object
*array.unshift*--->Insert at the beginning of the array
*array.indxOf*--->Know the index of an object
*array.splice*--->Delete a concret element and/or introduce some new element.
*array.slice*--->Copy any part of the array and introduce it into another array. The origin array stills equeal
*array.from*--->Transform an object to array
*array.map(function)*--->Go on an array and operete all the content one by one for the operation function. Introduce all the results in a new array.
*array.filter(function)*---> Return all the content that meet the function condition(must be a boolean)
*array.reduce(function)*--->reduce an array to a single element, based on the function whitin.
*array.toString*--->Introduce all the content of an array into a String 
*array.some(function)*---> Comprobation of elements inside the array, beeing true or false(depend of the function). If anyone is true, returns true.
*array.every*---> The same than some, but just returns true if all of them are true.

***important and helpfull links***
-https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
-https://www.w3schools.com/js/js_array_methods.asp
-https://www.w3schools.com/jsref/jsref_obj_array.asp
-http://exploringjs.com/es6/ch_arrays.html

**OBJECTS**

-Allways have a property and values
-The contruction is   -var a={}-
-.jason is javascript object notation
-A value of a property is a method 
-We can't access to an element by the index of the property object[number] whe should do by the name: object.nameofproperty or object['nameofproperty']
-Is posible to transform an object to a string on method JSON.stringify(object)
-var newObject=JSON.parse(string)
-An object can contain other objects
    >To acces: firstObject.secondObject.property=
               firstObject['secondObject']['Property']=
               firstObject['secondObject'].Property=
               ....
-We can define an empty object, and add the methods and propertys latter
-This.property means the property inside the object

*constructors*
-Used to create a "pre-made" objects.
    >An example is:
        function Hero(name) {
             this.name = name;
             this.occupation = 'Ninja';
             this.whoAreYou = function() {
             return "I'm " + this.name + " and I'm a " + this.occupation;}}
    >We call the contructor like: var name= new Contructor();

*Prototyping*
-Make posible to create contructors that can absorb the properties of another contructor.
-to Connect both contructors:
    >contstructorSecondary.prototype=new constructorPrimary();
    >We should create the object like: var name=contructorSecondary();
-Just create an instance of the original object, but the non-primary variables are not inicializated.

Example of prototyping
·····················
         function Human(name, surname, weight, height, gender, eyesColor, skinColor, nationality) {
                    this.name = name;
                    this.surname = surname;
                    this.age = 0;
                    this.height = height;
                    this.weight = weight;
                    this.smelling = 'baby';
                    .eyesColor = eyesColor;this
                    this.skinColor = skinColor;
                    this.gender = gender;
                    this.occupation = 'none';
                    this.nationality = nationality;
                    this.maritalStatus = 'single';
                    this.criminalRecords = 'none';
                    this.cry = function() { console.log('buahhhh'); };
                    this.pop = function() { console.log('ppppppopp! prrrr!'); };
                    this.pee = function() { console.log('pssssssss'); };
                    this.eat = function(food) { console.log('eating ' + food); };
                    this.sleep = function() { console.log('Zzzzz'); };
                    this.getFullname = function() { return this.name + ' ' + this.surname; };
            }

            var manu = new Human('Manuel', 'Barzi', 3200, 0.4, 'male', 'olive', 'white', 'argentinian');

            function Programmer(workingCompany) {
                this.workingCompany = workingCompany;
                this.program = function(language) { console.log('tktkt tktkt tktkt ' + language); };
            }

            Programmer.prototype = new Human();
-------------------------------------------------------------------------------
            function Animal(name) {
                this._name = name; 
                this.setName = function(name) { this._name = name; };
                this.getName = function() { return this._name; };
                this.heal = function() { console.log('healing...'); };
            }

            function healAnimal(animal) {
               if (!(animal instanceof Animal)) {
                  console.error('this is not an animal!!!');
               } else {
                     animal.heal();
               }
            }

***important and helpfull links***
-https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/05-arrays-objects
-

###keep doing
-Learn bit more about hexadecimal
-Some practic exercise
-Install node.js, It's needed to use the sublime plugg.

other information:
instanceof "type"--> return true/false