let myPoints=3

//create 2 functions, add3Points and remove1Point and have them remove and add points to and from mypoints variable
function add3Points(){
    myPoints +=3
}

function remove1Point(){
    myPoints-=1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
//call the functions to that the line below logs out 10
console.log(myPoints)


//challenge.  render the error message
    // when the user clicks the purchase button, render out "something went wrong, please try again" in the paragraph that has error id

    //solution

    let errorEl = document.getElementById('error')

    function purchase(){

        let error = "Ooops! Something went wrong, please try again!"
        errorEl.innerText = error
    
    }


//calculator challenge
    let num1 = 10
    let num2 = 4

    document.getElementById("num1-el").innerText = num1
    document.getElementById("num2-el").innerText = num2

            ///youre supposed to create four functions; add(), subtract(), divide() and multiply()
            //call the correct function when the user clicks on one of the buttons
            //perform the given calculations using num1 and num2
            //render the result of the calculation in the paragtraph with id="sum-el" e.g if the user clicks on the plus button you should render sum:14 since 10+4 =14, inside the paragrsaph with id="sum"

            //solution
    let sumEl = document.getElementById('sum-el')

    let sum = 0
    function add(){
       sum = num1 + num2
       sumEl.textContent = 'sum:'  + sum
       sum = 0


    }
    add()

    function subtract(){
      sum = num1 - num2
      sumEl.textContent = 'sum:' +  sum
      sum = 0
    }
            
    function divide(){
       sum = num1 / num2
       sumEl.textContent = 'sum:' +  sum
       sum = 0
                
    }
            
    function multiply(){
       sum = num1 * num2
       sumEl.textContent = 'sum:' + sum
       sum = 0
                
    }


    //blackjack game app

    //required
        /// create two variables, firstCard and secondCard and set their values to a random number between 2-11
            
            //let firstCard = 10
            //let secondCard = 9

        /// create a variable, sum, and set it to the sum of the two cards
            //let total = firstCard + secondCard

            //console.log(total)


        ///if --else conditionals

        //if (total  <= 20) {  // here, this code states if the total cards is less than 21, you are asked to draw another card
           // console.log('do you want to draw another card?')
        //} else if(total === 21){ ///here, the code states if the total cards is same as 21, you won
           // console.log("you got blackjak")
       // }else {///here code states if the total cards are greater than 21, you are out of the game
            //console.log('you are out of the game')
       // }


                    ///exercise 2
                        ///check if the person is old enough to enter the nightclub
                        //log a suitable message to the console in boith cases

                        //let age = 22
                       // if (age < 21){
                           // console.log('you are not allowed')
                       // }else{
                           // console.log('welcome')
                        //}

    ////if/else--- if/else statement
                /// check if the person is ekloigible for a birthdsay card from the king! (100)
                //let aged = 100
                // if(aged < 100){ //therefore, if less than 100, not eligible
                    //console.log("not eligible")

                //} else if(aged === 100){  //else if exactly 100, 'here is your birthday card from the king'
                    //console.log("here is your birthdsy card from king!")

               // } else {//else (theyre over 100 years), not eligible, youve already gotten one
                  //  console.log('not eligible, already received one')
              //  }


////adding variable to the game

//let fCard = 10
//let sCard = 9
//let tot = fCard+sCard
//let hasBlackJack = false
    /// required
             //create a variable called isAlive and assign it to true
//let isAlive = true
             //flip its value to false in the appropriate code block

//if (tot <= 20){
    //hasBlackJack = false
//}else if(tot === 21){
    //hasBlackJack = true
//}else {
    //isAlive = false
//}

////boolean conditions
    console.log(4===3)//false
    console.log(5>2)   //true 
    console.log(12>12)   //false 
    console.log(3<0)  //false 
    console.log(3>=3)//true
    console.log(11<=11)   //true 
    console.log(3<=2)//false

    /// adding message to thre variable
        //required
            // declare a variable called message and assign its value to empty string
            //reassign message variable to the string 'we are logging out'

            //solution
                //let firCard = 10
                //let secCard = 11
               // let toto = firCard + secCard

                //let message = ''
                //if (toto <= 20){
                    //message = 'do you want to draw another card'
               // }else if (toto === 21){
                   // message = 'we are logging out'
                //}else{
                   // message = 'you are out of the game'
               // }
                //console.log(message)


        ////real game

        //create a startGame() function and move the conditional 
    
        //let firstCard = getRandomCard()
        //let secondCard = getRandomCard()
        let hasBlackJack = false
        let isAlive =  false
        let sumCard = 0 
        //ceate an array of cards
        let cards = [] //an array of ordered list(cards)

        let message = ''
        ///displaying the message
                //require
                    //store the message message-el paragraph in the variable called messageEl
        let messageEl = document.getElementById('message-el')
                //displaying sum
                    //required
                        //store the sum paragraph in a variable called sumcardEl
        let sumcardEl = document.querySelector('#sumcard-el') // getElementById can be replaced by querySelector because its the most dynamic way to grab html elements. but remember, while using querySelector, we need to specify what we are actually grabbing, for this case the id='sumcard-el. so we will need to to write the code as follows; let sumcardEl = document.querySelector('#sumcard-el')
        //displaying the cards
            ///required
                ///store the cards paragraph in a variable called cardsEl
        let cardsEl = document.querySelector('#cards-el')

        let player = {
            name: 'Fred',
            chips: 400
        }
        let playerEl = document.querySelector('#player-el')
        playerEl.textContent = player.name +  ': Kshs' + '. ' + player.chips

        ///using a function to set card values////
        ///required: create a function, getRandomCard(), that always returns the number 5
        

        function getRandomCard(){
            ///completing the getRandomNumber() function
            let random =Math.floor(Math.random() * 13) + 1 //this returns a number btn 1-13

            if ( random ===1) {  //require: if number is 1 return 11
                return 11
            } else if (random > 10){// if number is btn 11 - 13, return 10

                return 10
            } else {
                return random

            }

        }        
        ///renaming the startgame function
            //create a new function called startGame() that calls renderGame()

            function startGame(){
                isAlive = true
                //required: generate two random numbers
                            //reassign the cards and sum variables so that the game can start
                let firstCard = getRandomCard()
                let secondCard = getRandomCard()
                cards = [firstCard, secondCard]   
                sumCard = firstCard + secondCard      
                renderGame()

            }

        function renderGame(){
            ///render the cards on the page using format 'cards: 10 4"
            cardsEl.textContent = 'Cards: ' // +  cards[0] + ',' + cards[1] //we use array index to collect the list of cards, whereby the array at index [0] represents the very first item in the list and card at index [1] represents the second item in an array            //rendering cards in array
                //required
                    //create a for loop that renders out all the cards instead of just two

            for (let i = 0; i < cards.length; i ++){
                cardsEl.textContent += cards[i]  +  ' '
            }

            ///render the sumcard on the page using this formart "sum:14"
            sumcardEl.textContent = 'Sum: ' + sumCard
            if (sumCard <= 20){
                message = 'Do you want to draw another card?'
            } else if (sumCard === 21){
                message= ' Hurrayy!!! You got blackjack!'
                hasBlackJack = true

            }else {
                message = 'Oops! You are out of the game'
                isAlive = false
            }

            //display the message in the messageEl using messageEl.textContent
            messageEl.textContent = message

        }


        ///create newCard function that logs out drawing a new car

        function newCard(){
            
            console.log('drawing a new card? ')

            //required: create a function that only allow the player to get a new card if she is alive and does not have blackjack
         if (isAlive === true && hasBlackJack === false){
            //add to the sum when new card is clicked
                //required
                    //create a card variable, and hard code its value to a number (2-11)
                    let card = getRandomCard()
                    //add the new card to the sum variable
                    sumCard = sumCard + card

                    ///push the newcard to the cards array///
                    cards.push(card)
                    //call startGame()
                    renderGame()

         }

            
        }

/// NOTES ON ARRAYS
 // arrays are ordered list of items
        ///rendering the card by use of array
           // we use array variable to store(list of all items) the number of all cards and this makes it easy to render the all cards
           //arrays are zero indexed. they start at zero
           // 
///challenge
 //required: create an array that lists your expperience, education, licenses, skills or similar
 // the items of the array should be strings
      //let myExperience = [
           // 'Software Engineer, Remit', 
            //'Research Assistant, IPA', 
            //'Technical Consultant, Classical Cyber' /// arrays are zero indexed. this means, for example if you want to fecth software engineer experiece, we do this; console.log(myExperience[0])
    //]

     // let myEducation = [
           // 'Software Developer, Moringa School',  ///0 index
            //'Project Management, Rongo University', /// 1 index
            //'KCSE, St. Pauls' ///2 index
    //]
      //let myLicences = [
           // 'Certified Software Engineer', 
            //'Certified AWS', 
            //'Certified DevOps Engineer', 
            //'Certified Project Manager'
    //]
      //let mySkills = [
           // 'HTML & CSS', 
           // 'JQuery & JavaScript', 
            //'Bootstrap', 
           // 'AngularJS', 
            //'NodeJs', 
            //'ReactJS', 
            //'Python Flask', 
            //'Python Django'
    //]

    //NOTE: Array lenght takes the number og list items in an array. for example, the length of mySkills arrays will be 8 because it has 8 items in the list. console.log(mySkills.length). we count the lenth of array starting from index 1.

    //Arrays with multiple data types
      //arrays can include any data type in the item list. they can be numbers, strings, boolean etc (composite or complex data type)
        // required: create an array thsat describes yourself. use the string, number and boolean. it should contain your name(string), age (number) and whether you like pizza (boolean)
            //let mySelf = ['Fred', 26, true]

    /// primitive data types ; strings, numbers and boolean. arrays are not primitve data types

    //////////////adding and removing items from arrays////////////////
           //for example//
      //.push method = adds items to the array // 
      // for example:
            //let cardss = [7,4]
           // cardss.push(6)
           // console.log(cardss) // 6 is added at the end of array

            //challenge .push()
                //required: push the newMessage to the message array and then log out the array
                 //let messages = [
                   // 'hey, how is it going?',
                   // 'i am great, thank you! How about you?',
                    //'all good. been working on my portfolio lately.'
                 //]

                 //let newMessage = 'same here'

                 //messages.push(newMessage)

                 //console.log(messages)

                 //.pop method = removes the last items in an array//
                    //for example//
                   // let cars = [7,8,9,10]
                   // cars.pop()
                    //console.log(cars)

////COUNTING IN JAVASCRIPT////
        //use of for loops//
            //required: count to ten//
            // we need to specify ...//
                //1. where should we START counting?//
                //2. where is the FINISH line?//
                //3. whats the STEP SIZE we should use?//


           // START         FINISH      STEP SIZE
        for (let count = 1; count < 11; count += 1 ) {  /// we can 'i' to represent count
                console.log(count)

        }

        /////challenge on for loop/////
            ///required: create a for loop that counts from 10 to 100 in steps of 10 then console.log out the numbers
        for (let i = 10; i < 101; i += 10) {
            console.log(i)
        }


////////for loops and arrays//////////
                //example///
         let mySkills = [
            'HTML & CSS', 
            'JQuery & JavaScript', 
            'Bootstrap', 
            'AngularJS', 
            'NodeJs',   
            'ReactJS', 
            'Python Flask', 
            'Python Django'
    ]

    for (let i = 0; i < 8; i += 1) {
        console.log(mySkills[i]) //this loads the string of skills
        console.log(i) // this loads the index
    }
///we can also use the array property lenght
  ///for example///
    for (let i = 0; i < mySkills.length; i+=1){  /// this makes sure that the loop counts to the final end of array.
        console.log(mySkills[i]) //this loads the string of skills
        console.log(i) // this loads the index

    }

    ////challenge .length property//
        //required: create a for loop that logs out all the carrrrs in an array then use carrrs.length to specify how long the loop should run
          let carrrs = [7,3,6,8,9] 
          for (let i = 0; i < carrrs.length; i  +=1 ) { //or i++ which is the same as i +=1
            console.log(carrrs[i])
          }

    ///////FOR LOOPS, ARRAYS AND DOM///

    let sentence = ['Hello,',   'my',  'name',  'is',  'Fred!']

    let greetingEl = document.querySelector('#greeting-el')
    //required: render the sentence in the greetingEl paragraph using a for loop and .textContent
     for ( let i = 0; i < sentence.length; i++){
        greetingEl.textContent += sentence[i]  + ' ' // we concanate '' to add spaces btn the array items.
     }



     ////how to avoid hard-code card values///

            //to avoid this, we creat a function, getRandomCard(), that always returns a random number 
                    // to learn///
                        // returning values in functions
                          //example//

                          let player1Time = 90
                          let player2Time = 100
                          //required:  create a function that returns the fastest racing time
                          function getFastestRaceTime(){
                            if (player1Time < player2Time){   //if player1time is faster than player2time, return player1time because he finished fast
                                return player1Time
                            } else if (player2Time < player1Time){ // else if player2time is less thsan player1time, return player2time
                                return player2Time
                            } else { ///else if the two player times are equal, return either player1time or player2time
                                return player1Time
                            }
                          }
                          let fastestRace = getFastestRaceTime() ///there4 we create a variable fastet race and assign it to the valeu that the function getFastetstRaceTime will return and then console.log fastestrace
                          console.log( fastestRace)

                          ///challenge///
                          //write a function that returns the total race, call or invoke the function and store the returned value in a new variable. finally log the variable out.

                          let playerr1Time = 90
                          let playerr2Time = 100

                          ///solution///
                          function totalRaceTime(){
                            return player1Time + player2Time
                            
                          }
                          let totalTime = totalRaceTime()
                          console.log(totalTime)


                          ////generating numbers with math.random method javascript

                          let randooomNumber = Math.random()
                          console.log(randooomNumber)  ///Math.random js method generates random number between 0 and 1 (not inclusive of 1)
                        
                          ///Math.random()*6/ 
                          let randoomNumberr = Math.random() * 6
                          console.log(randoomNumberr)

                          //nb: math.random() gives numbers btn 0.000 to 0.999
                               // Math.random()*6 gives numbers btn 0.000 to 5.999
                               //math.floor() removes decimal points from the number
                               //Math.floor(Math.random() * 6) gives random whole numbers from o - 5

                        
                          ///flooring trhe number with math.random()
                          let floorNumber = Math.floor(3.45632) //math.floor js method removes the decimals 
                          console.log(floorNumber)

                          ///using Math.random() and math.floor() to create a dice

                          let randommNumberr = Math.floor (Math.random() * 6 )
                          console.log(randommNumberr) //the possible values randommNumberr are 0,3,2, 4, 1
                        
                          //completing the dice function//
                          //required: modify the expression so that we get a range from 1 to 6

                          let randoommNumberr = Math.floor (Math.random() * 6 ) + 1
                          console.log(randoommNumberr)

                          ///challenge
                          //required: create a function rollDice(), that returns a random number between 1 and 6
                          
                          let rolliDice = Math.floor(Math.random() * 6) + 1
                          function rollDice() {
                            return rolliDice
                          }

////the logical AND operator (&&)

                          let hasCompletedCourse = true  ///required: check if both of the conditions are true, and thats when youll be able to generate a certificate
                          let givesCertificate = true

                          /// if (hasCompletedCourse === true){
                                //if (givesCertificate === true){
                                    //generateCertificate()
                                //}

                          //}

                          if (hasCompletedCourse === true && givesCertificate === true){ ///if hascompletedcourse is equal to true AND givescertificate is true, generATE certitificate
                            generateCertificate()

                          }
                          function generateCertificate(){
                            console.log('Generating certificate')
                          }

                          ///challenge///
                          let hasSolvedChallenge = false
                          let hasHintsLeft = false

                          ///required: creat an if statement that checks that both variables are false. if so, run the showSolution() function
                          if (hasSolvedChallenge === false && hasHintsLeft === false){
                            showSolution()
                          }
                            function showSolution(){
                                console.log('showing the solution ......')
                            }

                ////the logical OR operartor (||)
                 //challenge
                 //required: create two boolean variables, likesDocumentaries and likesStartups, then use an OR statement (||) to call recommendedMovies() function if either of those variables are true

                 let likesDocumentaries = true
                 let likesStartups = false
                
                 if (likesDocumentaries === true || likesStartups === false){ ///for this code to work or for you to use OR operator, one of the conditions need to be true or both conditions to be true
                    recommendedMovies()
                 }



                  function recommendedMovies(){
                    console.log('Hey, check out this new film. We think you will like!')
                  }
        


                  //OBJECTS//
                  //objects are complex/composite data types

                  let course = {
                    title: 'lean js for free',
                    lessons: 17,
                    creator: 'Fred Papa',
                    length: 60,
                    level: 'intermediate',
                    isFree: true,
                    tags: ['html', 'css', 'js']
                  }
                  //in objects, we access data using the dot(.) notation or bracket[] notation e.g console.log(course['length']) returns 60


                  //e.g console.log(course.length) returns 60

                  //console.log(course.tags[0]) returns html
                  //console.log(course['length']) 



        ///Recap Practice//
        // challenge 1: methods and functions//
             // required: create a person object that contains three keys: name, age and country
             // use yourself as an example to set the values for name, age and country
             // create a function, logData(), that uses the person object to create a string in the following format; 'Fred is 26 years old and lives in Kenya'
             // call the logData() function to verify it works.

                    ////solution//
                    let person = {
                        name: 'Fred',
                        age: 26,
                        country: 'Kenya'
                    }

                    function logData(){
                        console.log(person.name + ' is ' + person.age + ' years old and lives in ' + person.country)
                        
                    }
                    logData()

                ///challenge 2 if--else statements

                    let age = 100

                    //less then 6 years old -> free
                    // 6 to 17 years old -> child discount
                    // 18 t0 26 yesars old -> student discount
                    // 27 t0 66 years old -> full price
                    // over 66 years old -> senior citizen discount
                // required: create a conditional statement (if/else/else if) that logfs out the discount the passenger will get based upon the value of age varibale

                  if (age < 6){
                    console.log('free') 
                  } else if (age < 18){
                    console.log('child discount') 
                  }else if (age < 27){
                    console.log('student discount')
                  }else if (age < 67){
                    console.log('full price')
                  }else {
                    console.log('senior citizen discount') 
                  }

            

            ///challenge 3: Loops and arrays
                  let largeCountries = ['china', 'india', 'USA', 'indonesia', 'pakistan']

                /*required: use a for loop to log out the foillowing to thje console
                    The 5 largest countries in the world
                        -china
                        -india
                        -USA
                        -indonesia
                        -pakistam
                */

                            //solution//
                        for (let i = 0; i < largeCountries.length; i++){
                            console.log('-' + largeCountries[i])

                        }

            /// challenge 4: push(), pop(), unshift(), shift().

                    let largeCountriess = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']

                //required: you need to help fix up the largeCountires array so that china and pakistan are added back to their respective places
                        // use push() and pop() and their counterparts unshift() and shift()

                        //solution//

                        largeCountriess.pop() 
                        largeCountriess.shift()  /// .shift() removes items at 0 index in an array and .unshift() adds items in 0 index of san array
                        largeCountriess.unshift('china')
                        largeCountriess.push('pakistan')
                        console.log(largeCountries)

            ///challenge 5: logical operators
              let dayOfMonth = 13
              let weekday = 'friday'

              // required: if it is friday, log out: WOOW!. use the logical 'AND' (&&)) operator
                if(dayOfMonth === 13 && weekday ==='friday'){
                 console.log('WOOW!')
                }
       //// challenge 6: rock paper scissor game
            let hand = ['rock', 'paper', 'scissor']

            // required: create a function that returns a random item from the array
            function getHand(){
                let randomI = Math.floor(Math.random() * 3)
                return hand [randomI]
            }
            console.log(getHand())


        //// challenge 7: sorting fruits
            let fruits = ['mango', 'orange', 'mango', 'mango', 'orange']

            let mangoShelf = document.querySelector('#mango-shelf')
            let orangeShelf = document.querySelector('#orange-shelf')

            //required: create a function that puts mangoes into mangoShelf and oranges into orangeShelf. use for loop, conditional statement and textContent property.
            function sortFruits(){
                for (let i = 0; i < fruits.length; i++){
                    if (fruits[i] === 'mango'){
                        mangoShelf.textContent += ' ' + 'Mango' + ',' + ' '
                    } else if (fruits[i] === 'orange'){
                        orangeShelf.textContent += ' ' + 'Orange' + ',' + ' '
                    }
                }
            }
            sortFruits()

        /// challenge 8: Building chrome extension

        





        








                   




                           
                          
                         
             
      