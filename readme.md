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
*also check "sourcetree", the graphical version*

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
*array.split(character to extract)*--->is used to split a string into a substrings array if is (''). Also used to extract characters from a string. 
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
*array.from(object, or argument)*--->Transform an object to array  
*array.map(function)*--->Go on an array and operete all the content one by one for the operation function. Introduce all the results in a new array.  
*array.filter(function)*---> Return all the content that meet the function condition(must be a boolean)  
*array.reduce(function)*--->reduce an array to a single element, based on the function whitin.  
*array.toString*--->Introduce all the content of an array into a String   
*array.some(function)*---> Comprobation of elements inside the array, beeing true or false(depend of the function). If anyone is true, returns true.  
*array.every*---> The same than some, but just returns true if all of them are true.  
*array.prototype.(method)*---> Possible to use methods of array  
        >example: array.prototype.slice.call(arguments)  
        >call is used to apply methods not in this array    
*Math.max(...arr)* ---> Return the largest number from any array.


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
-Transform an object to a string on method JSON.stringify(object)    
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
                    this.getFullname = function() { return this.name + ' ' this.surname; };
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
  
  
##DAY 4

    -Review of objects and prototypes
    -RegExp
    -Pollyfill  
    -Clouseres  
    -Functional Programming

##RegExp  
-Regular expressions allow us to search and manipulate text in a very powerful way.  
-In Javascript we have available regular expressions objects that we can create   
- the expression allways are between '/..../'  
- If whe put ^ behaind th / means 'starts with...'  
- RegExp is case sensitive  
- a '+' behaind the list[...] means one or more characters (/[]+/)      
- /i at the end of the expression = ignoreCase  
- RegExp is really extensive.  
- s/ count the white-spaces  
- S/ count the non-white characters
  
##More prototyping  
-Method .call is used for act on a concret object. function/or first constructor/.call(newObject/or this/, propertyName, secondproperty....)  
- We can give attributes to a prototype like:  
name.prototype.nameoffunction=function(parameter){  
this._parameter=parameter}    
***Example***
        // prototyping inheritance

                function Animal(species, name) {
                    this.setSpecies(species);
                    this.setName(name);
                }
                Animal.prototype.setSpecies = function(species) {
                    this._species = species;
                };
                Animal.prototype.getSpecies = function() {
                    return this._species;
                };
                Animal.prototype.setName = function(name) {
                    this._name = name;
                };
                Animal.prototype.getName = function() {
                    return this._name;
                };
                Animal.prototype.heal = function() {
                    console.log('healing...');
                };
                Animal.prototype.eat = function () {
                    console.log('eating...');
                };
                Animal.prototype.pee = function () {
                    console.log('pssssing....');
                };
                Animal.prototype.poo = function() {
                    console.log('poofffffff....');
                };
                Animal.prototype.sleep = function() {
                    console.log('Zzzz');
                };


                function Tiger(name, speed) {
                    Animal.call(this, 'tiger', name);
                    this.setSpeed(speed);
                }

                Tiger.prototype = new Animal();
                Tiger.prototype.setSpeed = function(speed) {
                    this._speed = speed;
                };
                Tiger.prototype.getSpeed = function() {
                    return this._speed;
                };

  
#Polyfill  
-Is used for give new methods to any other object, like new functions to all arrays.  
One example:  
// polyfills

            Array.prototype.random = function random() {
                return this[Math.floor(Math.random() * this.length)];
            }

            function randomArg() {
                 return Array.prototype.random.call(arguments);
            }
  
#Clousure  
-Are the scopes limit  
-Information's accecss from the deepest function to the father is possible, but not from father to son.  
**example**
// closures

            function SafeBox(thing) {
                var secret = thing;
                return function(password) {
                    if (password === 'dame un besito') {
                        return secret;
                    }
                    return 'no comprendo';
                } 
            }
  
  
#Functional Programming  
-The code is divided in small parts, usually divided in functions.  

***Important links***
-https://regex101.com/  
-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp  


-search about webstorm
-use confirm en consola
###DAY 5

        -Introducction to test (TDD & TBB)  
        -

TDD is the testing oriented programming:
it means that we start over the test, and it drives how we will code the software and how is it's going to act'.

TBB refears to resolv the test independent about the implementation, that means, not be conditionated about susosition and make a test that try the programming independent of his variables.  
  

###DAY 6###
 ##the day  
       -Review of TDD:  
       -HTML  


    describe('passwordValidation', function() {
    // beforeEach(function() {
    // });
    it('checks if the size is equal to config parameter', function() {        
        expect(passwordValidation('123456789A#')).toBeTruthy();
        expect(passwordValidation('1234A')).toBeFalsy();
    });
    it('checks if the number of uppercase letters is equal to config parameter', function() {
        expect(passwordValidation('1234567890A#')).toBeTruthy();
        expect(passwordValidation('1234567890a')).toBeFalsy();
    });
    it('checks if there are numbers in the pwd equal to config parameter', function() {
        expect(passwordValidation('1234567890A#')).toBeTruthy();
        expect(passwordValidation('Abcdefghadw$ndiwdw')).toBeFalsy();
    });
    it('checks for special characters provided in the config parameter', function() {
        expect(passwordValidation('123456789A#')).toBeTruthy();
        expect(passwordValidation('12345678Awskqws')).toBeFalsy();
    });
    it('accepts an alternative config object if passed', function () {
        var altConfig = {
            size: 5,
            uppercase: 2,
            numbers: 3,
            special: "#%&!"
        }
        expect(passwordValidation('123AF#', altConfig)).toBeTruthy();
        expect(passwordValidation('14A#', altConfig)).toBeFalsy();   
      });
    });
    function passwordValidation(pwd, obj) {
        var config = obj ||{
            size: 10,
            uppercase: 1,
            numbers: 2,
            special: "$#%&-!?"
        };
        if (pwd.length < config.size) {
            return false }
        if (pwd.replace(/[^A-Z]/g, '').length < config.uppercase) {
            return false }
        if (pwd.replace(/[^0-9]/g, '').length < config.numbers) {
            return false }
        if (!(/[\$#%&\-!\?]/.test(pwd))) {
            return false }
    return true;
    }


another example:

    describe("RockPaperScissors", function() {
      
      
      beforeEach(function() {
        
      });
      function getRandomValue () {
        var values = ['ROCK', 'PAPER', 'SCISSORS']
        return values[Math.floor(Math.random()*3)]
      }
      it("Decides the correct winner between two random values", function() {
        val1 = getRandomValue();
        val2 = getRandomValue();
        var players = [val1, val2];
        players.sort()
        var result = ''
        if (val1 === val2) {
          result = val1 + ' vs ' + val2 + ' => tie!'
        } else if (players[0] === 'PAPER' && players[1] === 'ROCK') {
          result = val1 + ' vs ' + val2 + ' => PAPER wins!'
        } else if (players[0] === 'PAPER' && players[1] === 'SCISSORS') {
          result = val1 + ' vs ' + val2 + ' => SCISSORS wins!'
        } else {
          result = val1 + ' vs ' + val2 + ' => ROCK wins!'
        }
        expect(game.rockPaperScissors(val1, val2)).toBe(result);
      });
      it("If the function is called with 'PAPER' the move of the second player is randomly generated", function() {
        val1 = 'PAPER'
        result1 = 'PAPER vs PAPER => tie!'
        result2 = 'PAPER vs SCISSORS => SCISSORS wins!'
        result3 = 'PAPER vs ROCK => PAPER wins!'
        expect(game.rockPaperScissors(val1) === (result1 || result2) || result3).toBeTruthy();
      });
      it("If the function is called with 'ROCK' the move of the second player is randomly generated", function() {
        val1 = 'ROCK'
        result1 = 'ROCK vs ROCK => tie!'
        result2 = 'ROCK vs SCISSORS => ROCK wins!'
        result3 = 'ROCK vs PAPER => PAPER wins!'
        expect(game.rockPaperScissors(val1)).toBe((result1 || result2) || result3);
      });
      it("If the function is called with 'SCISSORS' the move of the second player is randomly generated", function() {
        val1 = 'SCISSORS'
        result1 = 'SCISSORS vs SCISSORS => tie!'
        result2 = 'SCISSORS vs ROCK => ROCK wins!'
        result3 = 'SCISSORS vs PAPER => SCISSORS wins!'
        expect(game.rockPaperScissors(val1)).toBe((result1 || result2) || result3);
      });
      it("Ranking sums ok if the winner is player1", function() {
        var count1 = game.player1
        game.rockPaperScissors('ROCK', 'SCISSORS')
        expect(game.player1).toBe(count1+1);
      });
      it("Ranking sums ok if the winner is player2", function() {
        var count2 = game.player2
        game.rockPaperScissors('ROCK', 'PAPER')
        expect(game.player2).toBe(count2+1);
      });
      it("The ranking does not add up to the player1 if there is a tie", function() {
        var value = getRandomValue();
        var count1 = game.player1
        game.rockPaperScissors(value, value)
        expect(game.player1).toBe(count1);
      });
      it("The ranking does not add up to the player2 if there is a tie", function() {
        var value = getRandomValue();
        var count2 = game.player2
        game.rockPaperScissors(value, value)
        expect(game.player2).toBe(count2);
      });
      it("Shows the correct winner", function() {
        var player1 = game.player1;
        var player2 = game.player2;
        result = ''
        if (player1 === player2) {
          result = 'There is a tie!'
        } else if (player1 > player2) {
          result = 'Player1 is winning!'
        } else {
          result = 'Player2 is winning!'
        }
        expect(game.winner()).toBe(result);
      });
    });
    var game = {
      player1: 0,
      player2: 0,
      rockPaperScissors : function (val1, val2) {
        if (val2 === undefined) {
            val2 = getValue()
        }
        var values = [val1, val2];
        values.sort();
        if (val1 === val2) {
            return val1 + ' vs ' + val2 + ' => tie!'
        } else if (values[0] === 'PAPER' && values[1] === 'ROCK') {
            (val1 === values[0]) ? game.player1+=1 : game.player2+=1
            return val1 + ' vs ' + val2 + ' => PAPER wins!'
        } else if (values[0] === 'PAPER' && values[1] === 'SCISSORS') {
            (val1 === values[0]) ? game.player2+=1 : game.player1+=1
            return val1 + ' vs ' + val2 + ' => SCISSORS wins!'
        } else {
            (val1 === values[0]) ? game.player1+=1 : game.player2+=1
            return val1 + ' vs ' + val2 + ' => ROCK wins!'
        }
      }, 
      winner: function() {
        if (this.player1 === this.player2) {
            return 'There is a tie!'
        } else if (this.player1 > this.player2) {
            return 'Player1 is winning!'
        } else {
            return 'Player2 is winning!'
        }
      }
    }
    function getValue () {
        var values = ['PAPER', 'ROCK', 'SCISSORS']
        return values[Math.floor(Math.random()*3)]
    }



***HTML5***  
-El Doctype define la version y si los atributos están todos vigentes o cuenta con alguno depreciado.  
- Lang especifica el idioma, Dir indica la dirección del texto.  
- Meta date gives usefull indormation to the brownser  
-ID references an exclusive element and Class is a public attribute  
- DIV and SPAN are groupers to give some attribute to the content    
- Semantic is important on the website, tags that have some extra information by himselfs  
- Required,(on form) must be some content to submit.  
- Placeholder, (on form) disappears the initial text inside the text area  
- Usually, the browsers check the forms(email, phone...) on the client side, but is usually and correct to check it in server-side.  
- Figure, hace referencia a una imagen o gráfica y ficaption es texto que le referencia  
- 




*Usefull links*  
-https://www.w3.org/TR/html401/struct/global.html  
-https://www.diigo.com/annotated/0ec7a7e13ad9c32a222e40dfad1fab47  
-https://www.w3schools.com/HTML/html5_new_elements.asp  
-https://schema.org/docs/gs.html     
-https://threejs.org
  

###DAY 7  
  
        -CSS  
        -  
        -  
        -  

  
**REGLAS**  
 -If there are two selectors of the same level, the style is decide about the las attribute declared.  
 -Allways is stronger the smallest selector than the global one.  
 - **ID selector** --> is an individial selector, used to give some attribute to any indiviual element. Also connects with JS.  (declared #idselector// id='idselector');
 - **.class** --> is used to give some attribute to all Elements whit that  
 - **child selector**--> all elements inside another one (div p{})  
 - **direct child selector**--> the child next to the father (div > p{})    
 - **brother selector** --> All the brothers on the same level (h2 ´ p {})  
 - **Just the first brother**-->The first brother on the level (h2+p{})  
 - **attribute selector**-->all elements whit the specific attribute (a[attribute])  
 - **pseudo-classe**--> the different states of the element( a:hover, a:active, a:focus), (input: !enabled, !disabled)  
 - **first-child, last-child, only-child** --> just the first child, the last child or the only child (div:only-child{})  
 - **first-of-type, last-of, only-of...**--> the same than childs, but with type(div:only-of-type{})--> in that case, the first div  
 - **nth-child(3n)**---> the child number nº  
 - **nth-child(-2n+5)**-->search  
 - **target pseudo-class**--> select an element that has some element equal to the target url (section[target])  
 - **div:not(.awasome){}**--->select the element that NO contains this class  
 - **.class:first-letter, first-line**-->select the first element or line  
 - **a:after, a:before**--> put some element before or after any element  
   

**Attributes**  
- **font-size**-->font-size  
- **font**-->font type  
- **font-weight**--> bold  
- **font-variant**-->   
- **line-height**--> Height between lines  
  
**Box-sizing**  
- **border-box** --> the border and the padding are included in the element  
- **Keep searching  
- **inherit** --> absorbs the properties from the father  
- **initial** --> reset the properties to the default value 
  

**Flexbox**  [1]
- Used to display a direction of a "line-block"  
- felx-wrap --> \n automatic.    
  
**Responsive**  
--*mediaQuery*--  
-Use the CSS for all mediaa and smaller than :: media="all and (max-width: 1024px)"  
- or change some part of the css :: @media all and (max-width: 1024px){}  
- or import css from another style --> @import url(style.css) all and (max-width: 1024px){}  
- by orientation --> @media all and (orientation: portrait){}  
- by ratio hight and width --> @media all and (min-device-aspect-ratio: 16/9){}

***Important links***  
-http://learn.shayhowe.com/html-css/buil    ding-your-first-web-page/    
-https://color.adobe.com/es/  
-https://skylabcoders.github.io/bootcamp-julio2017/?full#83  
-https://css-tricks.com/centering-css-complete-guide/    
-https://css-tricks.com/snippets/css/a-guide-to-flexbox/ [1]   
-http://www.sketchingwithcss.com/samplechapter/cheatsheet.html [1]
-https://codepen.io/enxaneta/full/adLPwv