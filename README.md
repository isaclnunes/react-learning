This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## ES6 Notes:

- const => variable that cannot be changed.
- let   => block the scope of a variable to any code block (protects global vars)
    * example withouth let:
    ```js
        var div, 
            container = document.getElementById('container')

        for (var i=0; i<5; i++) {
        div = document.createElement('div')
        div.onclick = function() {
            alert('This is box #' + i)
        }
        container.appendChild(div)
        }
    ```
        i will be 5 for all the boxes created.

    * example with let:
    ```js
        var div, container = document.getElementById('container')
        for (let i=0; i<5; i++) {
        div = document.createElement('div')
        div.onclick = function() {
            alert('This is box #: ' + i)
        }
        container.appendChild(div)
        }
    ```
        'i' has blocked scope

- template strings:
    allow concatenation without using traditional plus signs
    uses ${}, example:
    
    ```js  console.log(`${lastName}, ${firstName} ${middleName}`)```

- default parameters:
    Calling a function without params default to given ones:
    ```js
    function logActivity(name="Shane McConkey", activity="skiing") {
        console.log( `${name} loves ${activity}` )
    }
    ```

- arrow functions:
    create functions without using the 'function' keyword
    ```js
        var lordify = function(firstname) {
            return `${firstname} of Canterbury`
        }
            to:
        var lordify = firstname => `${firstname} of Canterbury`
    ```
    more than one argument should be surrounded by parentheses.
    more than one line of code we need brackets and a return.

- Note: not all browsers support ES6, the only way to be sure that
        the code will run on all browsers is to convert it into 
        ES5 code. To do so we use a process called transpiling.
        One of the most popular tools for transpiling is Babel.
        We should avoid transpiling in the browser as it will slow
        down the application.

## ES6 Objects and Arrays:

- Destructuring Assignment: Allows to use locally scope fields
    within an object and to declare which values will be used.

    Example (We scope bread and meat to be used locally):
    ```js
        var sandwich =  {
            bread: "dutch crunch",
            meat: "tuna",
            cheese: "swiss",
            toppings: ["lettuce", "tomato", "mustard"]
        }

        var {bread, meat} = sandwich

        console.log(bread, meat) // dutch crunch tuna
    ```

    The code pulls bread and meat out of the object and 
    creates local variables for them. Also, the bread and
    meat variables can be changed:
    ```js
        var {bread, meat} = sandwich

        bread = "garlic"
        meat = "turkey"

        console.log(bread) // garlic
        console.log(meat) // turkey

        console.log(sandwich.bread, sandwich.meat) // dutch crunch tuna
    ```

- Object Literal Enhancement: 
    - is the opposite of destructuring. It is the process
      of restructuring or putting back together. With 
      object literal enhancement, we can grab variables
      from the global scope and turn them into an object.

- The Spread Operator: (...)
    - combines the contents of two arrays:
    ```js
        var peaks = ["Tallac", "Ralston", "Rose"]
        var canyons = ["Ward", "Blackwood"]
        var tahoe = [...peaks, ...canyons]
    ```
    - can be uses to get some, or the rest, of items in the array:
    ```js
        var lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]
        var [first, ...rest] = lakes
        console.log(rest.join(", ")) // "Marlette, Fallen Leaf, Cascade"
    ```
    - collect funtion arguments as an array:
    ```js
        function directions(...args) {
            var [start, ...remaining] = args
            var [finish, ...stops] = remaining.reverse()
            ...
        }
    ```
    - can also be used for objects:
    ```js
        var morning = {
        breakfast: "oatmeal",
        lunch: "peanut butter and jelly"
        }

        var dinner = "mac and cheese"

        var backpackingMeals = {
        ...morning,
        dinner
        }

        console.log(backpackingMeals) // {breakfast: "oatmeal",
                                      //  lunch: "peanut butter and jelly",
                                      //  dinner: "mac and cheese"}        
    ```
- Promises:
    gives us a way to make sense out of asynchronous behaviour
    When making an asynchronous request, one of two things 
        can happen: everything goes as we hope or there’s an error.
    There may be several different types of successful 
        or unsuccessful requests. For example, we could try several
        ways to obtain the data to reach success. We could also
        receive multiple types of errors. 
    Promises give us a way to simplify back to a 
        simple pass or fail.             

- Classes:
    ```js
    class Vacation {
        constructor(destination, length) {
            this.destination = destination
            this.length = length
        }    
        print() {
            console.log(`${this.destination} will take ${this.length} days.`)  
        }
    }         

    //can also be extended:
    class Expedition extends Vacation {   
        constructor(destination, length, gear) {
            super(destination, length)
            this.gear = gear
        }     
    ```

 - ES6 Modules:
    A JavaScript module is a piece of reusable code that 
    can easily be incorporated into other JavaScript files.
    Until recently, the only way to work with modular 
    JavaScript was to incorporate a library that could
    handle importing and exporting modules. Now, 
    with ES6, JavaScript itself supports modules.                      

## Functional programming:
   - Immutability:
```js
      let color_lawn = {
         title: "lawn",
         color: "#00FF00",
         rating: 0
      }
```

    Non immutable:
```js
        function rateColor(color, rating) {
            color.rating = rating
            return color
        } 

        console.log(rateColor(color_lawn, 5).rating)     // 5
        console.log(color_lawn.rating)                   // 5
```

    Immutable:
```js
        var rateColor = function(color, rating) {
            return Object.assign({}, color, {rating:rating})
        } 

        console.log(rateColor(color_lawn, 5).rating)      // 5
        console.log(color_lawn.rating)                    // 4
```

    Notes:
        Array.push is not immutable
        Array.concat is immutable
        Alternative use the ES6 spread operator:
            const addColor = (title, list) => [...list, {title}]

   - Pure functions:
      Take at least one argument and return a value or function.
      They do not cause side effects (changing vars/dom).
      The functions should not change or mutate nay of its arguments.

   - Data Transformation:
      * functional programming is all about transforming data from one
    form to another. We will produce transformed copies using
    functions.
       * Two core functions: Array.map and Array.reduce
       * Array.filter is also immutable preferable to Array.pop or Array.splice
       * reduce and reduceRight functions can be used to transform an array into any value, including a number, string, boolean, object or even function.(reduceRight is the same as reduce but starts from the end of the array)

   - Recursion:
      * Compose: takes functions and composes a new function ex:
```js
        const composedFunction = compose (
            function1, 
            function2
        )
```