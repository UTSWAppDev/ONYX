
function getBotResponse(input) {
    //rock paper scissors
    if (["where am i","Where am I ?","where am I?","where am i ?","whats my room number",
    "whats the name of this place"].includes(input)) {
        return "You are at ONYX Healthcare  in Room 506";

    } else if (["why am i here","Why am I here ?","Why am i here?","why","Why here",
    "What happened ?","what happened"].includes(input)) {
        return "You were admitted to treat your 'current condition here'";

    } else if (["when can i go home","how long will i be here","how long","how long is my stay","When can I go home?",
"How long will i be here?","How long will I be here"].includes(input)) {
        return "Currently, we believe you will be here for 2 to 3 days,depending on how well you improve with treatment";
    }
    else if(["What is my condition?","what is my condition","what does the doctor say",
"what does the doctor say is wrong with me","what do my doctors say","what am i being treated for"].includes(input)){
        return "You are being treated with the following medications for your 'current disease state here' medications:x,y,z"
}

    // Simple responses
   // if (input == "hello") {
     //   return "Hello there!";
    //} else if (input ==[bye, goodbye] ) {
       // return "Talk to you later!";
   // } else {
       // return "Sorry, I can't answer that now.";
  

if (["hello", "hey","Hello","How are you","hi","Hi","greetings"].includes(input)){
    return "Hello, how can I help you?"
} else if(["bye","goodbye","So long","so long","adios","adios!","Bye!","Bye","Goodbye!","Goodbye"].includes(input)) {
    return "Goodbye!";
} else {
    return "Sorry, I can't answer that now.";
}
}
