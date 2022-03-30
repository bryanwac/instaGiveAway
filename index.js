const instaTouch = require('instatouch');

require ('dotenv').config();

const fs = require('fs'); //UTILIZAR FILESYSTEM PARA CRIAR O JSON

/*
getComments using instaTouch to acess the comments from an specific pub. need a validation, so
we have to use our session.id from instagram to authenticate, here the session. id is inside our
.env file
*/

async function getComments() 
{
    try {
        const options = {
            count: 10, // here you can set the number of comments u will pick up from the pub
            session: process.env.INSTAGRAM_SESSION_ID
        }; //https://www.instagram.com/p/CbQEcR1ji0_/   <- in this case the link for the pub is: CbQEcR1ji0_
        const comments = await instaTouch.comments(' CbQEcR1ji0_ ', options); // paste here the last element of the pub URL
        return comments.collector;
    } catch (error) {
        console.log(error);
    }
}



/*
selectWinner sellect a random number for the AllParticipants array with Math random function
*/
function selectWinner(participants) 
{
    const allParticipants = participants.length;
    const pickedTicket = Math.floor(Math.random() * allParticipants);
    const pickedWinner = participants[pickedTicket];
    return pickedWinner;
}


/*
exportWinner creates a .json file with the only one selected comment from the previous created array 
*/
function exportWinner(winner) 
{
    fs.writeFile('winnerComment.json', 
                  JSON.stringify(winner, null, 2), 
                  function (err) {
        if (err) console.log(err);
    })
}

async function main() 
{
    const participants = await getComments();
    const winnerComment = selectWinner(participants);
    exportWinner(winnerComment);
}

main();