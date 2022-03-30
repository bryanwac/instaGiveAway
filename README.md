# instaGiveAway
Script for instagram giveaway using comments

<h1> Instalattion </h1>
  
  <ul>
    <li> type on terminal: npm init </li>
    <li> type on terminal: npm i instatouch </li>
    <li> type on terminal: npm i dotenv </li>
    <li> To run your code type: node index.js </li>
  </ul>
  
 <h1> About the .env file </h1>
 <p> You have to create a file with the name '.env' at the root folder of the project.  <br> Inside this file you have to create a variable with named INSTAGRAM_SESSION_ID.</p>
 
 <h1> About your SESSION ID </h1>
 <p> There are many ways to find your own session ID on instagram, u can find one that is easier for you on internet/youtube ! </p>
 <h3> I found this tutorial on internet </h3>
 
 ### Get Session Id
In order to access comments data you need an active session cookie value!
This value can be taken from the instagram web(you need to be authorized in the web version)
- Open inspector (for example in Google Chrome browser) then right click on the web page -> inspector -> Network
- Refresh the page
- In the "Network" section you will see the request, select it, scroll down to the "Request Headers" section and look for the "cookie:" section, there you will find this value "sessionid=BLAHLBAH"
- Use it on your .env file
- The content will be something like this:
```
INSTAGRAM_SESSION_ID = 'sessionid=YourSessionIdHere;'
```
