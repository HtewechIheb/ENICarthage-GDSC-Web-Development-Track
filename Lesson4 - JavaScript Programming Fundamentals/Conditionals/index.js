console.log('*** Conditionals ***');

const age = 19;

if (age >= 18) {
    console.log('You are an adult.');
}
else {
    console.log('You are not an adult.');
}

console.log('***************************************');
/***************************************/

const accountType = 'Admin';

switch (accountType) {
    case 'User':
        console.log('You are a user.');
        break;

    case 'Moderator':
        console.log('You are a moderator.');
        break;

    case 'Admin':
        console.log('You are an admin.');
        break;
}

console.log('***************************************');
/***************************************/

const grade = 15;
let comment;

/*
if(grade > 10){
    comment = "Good grade.";
}
else {
    comment = "Bad grade.";
}
*/

// The above can be shortened to:

comment = (grade > 10) ? "Good grade." : "Bad grade.";

console.log(comment);