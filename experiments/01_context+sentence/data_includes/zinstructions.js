// Instructions
newTrial("instructions",
    defaultText
        .cssContainer({"margin":"0em"})
        .center().print(),
    newText("instructions_HSPdialogue", "<style type='text/css'>{text-align:center}</style> <table> <tr> <td style='border:white 1px; padding:1px; width:200; height: 400; margin:4px'> <p style ='color:black;'> <font size='5'> <p align='center' > <b> Instructions </b> </p> <p align='justify'> <font size='4'> You will see several extracts of conversations between adults and children between AGES. In these conversations, you will see words that are missing, indicated by ________. </p> <p> Complete the phrase, by choosing the best of two options presented below the conversation. Consider which one is the most nautral sounding, given the dialogue. </p> <p> For example : <br> <div style='border:solid black 2px; padding:10px; width:30em; margin:10px'> <table width = 55% align='center'> <p  > <font size='4'> <br>MAMAN : ils sont dehors ? <br>ENFANT : oui. <br>MAMAN : oh et ça c'est qui ?<br>ENFANT : c'est ma petite madame. <br>MAMAN : une petite madame. <br>ENFANT : ouais. <br>ENFANT : ça c'est qui ? <br>MAMAN : ça c'est un grand garçon qui ________ du basket. <br> </p> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:5em; height: 50; margin:4px'> <p style ='color:black;'> fait </p> </td> <td align='center' style='border: solid black 1px; padding:1px; width:5em; height: 50; margin:4px'> <p style ='color:black;'> donne </p> </td> </tr> </table> <br> <p align='center' ><i> The correct response is 'fait'. </i> </div>"),
    newText("nn", "We will start with several examples.<br><br>").center().print(),
    newButton("wait", "Click to begin")
        .center().print().wait()
)


// TRANSITIONS 
newTrial("transi_training",
    defaultText .center() .print(),
    newText("<p align='center'> <font size='4'> We will start by looking at several examples.</p>"),
    newButton("continue button", "OK").center() .print() .wait()
)
newTrial("transi_test",
    defaultText .center() .print(),
    newText("<p align='center'> <font size='4'> Great Job! <br> <br> Click on the button below to begin.  </p> "),
    newButton("continue button", "OK").center().print().wait()
)

newTrial("end",
    newText("<p align='center'><font size='4'>Thank you for your participation! </p>").center().print(),
    newText("<p align='center'><font size='4'>Your responses have been saved. Please submit the following code to Prolific: C1A003Y4. You may now close this window.")
        .center().print(),
    newButton("void") .wait()  // what does it change to have VOID?
)

newTrial("ask_comment",
    newText("instructions-id", "<p align='center'> <font size='4'>Thank you for your help! <br><br> If you have any comments, please leave them below. <br><br>").center().print(),
    newTextInput("feedback", "Leave any comments here.")
    .center().log().lines(0).size(500, 200).print(),  
    newText("space", "<br><br>").print(),  
    newButton("send", "Click to submit your comments.").center().print().wait()
)