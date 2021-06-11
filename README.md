# Keyword Keyring (KwKr)

KwKr is a password generating app that allows the user to consistently generate passwords by typing in a keyword. It does not store the keyword or the passwords generated anywhere for security purposes.

[KwKr](https://kwkr.herokuapp.com/)

[documentation](https://github.com/EEichen/keyword-keyring/wiki)


## Technologies
---
* React
* Redux
* Flask
* SQL Alchemy
* CSS
* Docker

## Functionality
---
* Generators - Generators are titled, uniquely seeded, and have an iterator for generating the password associated with that specific generator. Users can create generators, change titles, change iterations, and delete generators.

* Constraints - Each generator has a list of default constraints that are created along with the generator. The constraints give the user the ablilty to set the properties for the generated password. Users can edit the constriants for each specific generator.

* Search - Allows users to search through their generators based on title.

* Password Generation - After entering a keyword, users may either generate all their passwords or generate them individualy. Passwords are generated based on the generator seed, the current iteration of the generator, and the constraints associated with that generator.

* Local keyword storage - Users have the option to store the keyword locally on their machine until they turn it off or log out.

* Hover Hints (tooltips) - Toggleable hints on how to use the application appear when the user hovers over specific parts of the application.


### Checking some of the constriants for valid input before sending it to the backend.
```js
const handleSave = () => {
   let errs = []
   const totalRequired = (
      parseInt(reqNumbers) + 
      parseInt(reqSymbols) + 
      parseInt(reqUppercase))

   const defaultLowercase = 'abcdefghijklmnopqrstuvwxyz'
   const defaultUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const defaultNumbers = '1234567890'
   const defaultSymbols = "!# \"$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

   const checkCharacters = (chars, accecpted, type) =>{
      for(let i = 0; i < chars.length; i++){
            if(!accecpted.includes(chars[i])){
               errs.push(`Allowed ${type} only accepts ${type} characters`)
               return
            }
      }
   }

   checkCharacters(lowercase, defaultLowercase, 'lowercase')
   checkCharacters(uppercase, defaultUppercase, 'uppercase')
   checkCharacters(numbers,defaultNumbers, 'number')
   checkCharacters(symbols, defaultSymbols, 'symbol')

   const totalCharaters = (lowercase.length + uppercase.length +           numbers.length + symbols.length)

   if(totalRequired > pwLength) {
      errs.push(`the total number of required characters cannot exceed the password length`)
   }
```
---

### Homepage Example
![homepage]

---
### Hompage on mobile devices example
![SSHomepage]

---

## Future plans
---
* Set up a browser plugin for KwKr
* Create a desktop/mobile app version
* Add local storage keyword encryption