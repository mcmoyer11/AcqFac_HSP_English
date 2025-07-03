PennController.ResetPrefix(null)
DebugOff()

Sequence(
    // "consent", 
    // "ask_ID", 
    // "instructions", 
    // randomize(startsWith('train')), "transi_test",
    rshuffle("test"),
    // randomize(seq(
    //     pick(startsWith("control"), 20),
    //     pick(startsWith("test_N"), 10),
    //     pick(startsWith("test_P"), 10))), 
   "ask_comment", "send", "end")

// function pick(predicate, amount) {
//     return {
//         args: [predicate],
//         run(arrays) {
//             let array = arrays[0]
//             let indices = Array.from(array.keys())
//             fisherYates(indices)
//             indices = indices.slice(0, amount).sort()
//             return indices.map(i => array[i])
//         }
//     }
// }

// Consent form
newTrial("consent",
    newText("consentform_p1", "<h2> <p align=center><b>Bonjour et bienvenue ! </p>").center().print(),
    newText("text_1", "Pour participer à l'étude,  veuillez avant tout entrer les informations ci-dessous et  lire attentivement la <i>Note d'information</i> suivante.<br><br>").center().print(),
    newText("text_l0", "____________________________________________").center().print(),
     newText("text_2", "<br>").print(),
    newText("ask_initials", "Initiales :"),
    newTextInput("input_initials").log(),
    newText("ask_age", "Age :"),
    newTextInput("input_age").log(),
    newText("ask_gender", "Genre :"),
    newTextInput("input_gender").log(),    
    newText("ask_educ", "Niveau d'éducation :"),
    newTextInput("input_educ").log(),    
    newText("ask_nativeL", "Langue maternelle :"),
    newTextInput("input_nativeL").log(),  
    newText("ask_otherL", "Parlez-vous d'autres langues ?"),
    newTextInput("input_otherL").log(),    
    newText("ask_otherLlist", "Si oui, lesquelles ?"),
    newTextInput("input_otherLlist").log(),  
    newCanvas("info_part", 600,170)
        .add( 1, 35, getText("ask_age"))
        .add(230, 35, getTextInput("input_age"))
        .add( 1, 60, getText("ask_gender"))
        .add(230, 60, getTextInput("input_gender"))//
        .add( 1, 85, getText("ask_educ"))
        .add(230, 85, getTextInput("input_educ"))
        .add( 1, 110, getText("ask_nativeL"))
        .add(230, 110, getTextInput("input_nativeL"))
        .add( 1, 135, getText("ask_otherL"))
        .add(230, 135, getTextInput("input_otherL"))
        .add( 1, 160, getText("ask_otherLlist"))
        .add(230, 160, getTextInput("input_otherLlist"))
        .add( 1, 10, getText("ask_initials"))
        .add(230, 10, getTextInput("input_initials"))
        .center().print(),
    newText("text_l1", "<br> ____________________________________________").center().print(),
    newText("text_c", "<br> <b>Note d'information</b> ").center().print(),
    newText("text_a", "<br><b>Participation au projet ModFR de compréhension de la parole</b>").center().print(),
    newText("text_b", "<br>Laboratoire de Linguistique Formelle, Paris<br>").center().print(),
    newHtml("consentform_p2", "consent.html")
       .cssContainer({"width":"600px"})
        .print(),
   newText("text_l0", "____________________________________________").center().print(),
    newHtml("consent_form_p3", "consent_end.html")
        .cssContainer({"width":"600px"})
        .checkboxWarning("Vous devez consentir avant de continuer.").print(),
    newButton("continue", "Cliquez ici pour continuer")
        .center().print()
        .wait(getHtml("consent_form_p3").test.complete()
                  .failure(getHtml("consent_form_p3").warn())
    )
)

// Ask ID
newTrial("ask_ID",
    defaultText.cssContainer({"margin-bottom":"1em"}).center(),
    newText("instructions-id", "Veuillez entrer votre identifiant Prolific et cliquer sur le bouton ci-dessous pour commencer.").print(),
    newTextInput("input_ID").log().cssContainer({"margin-bottom":"1em"}).center().print(),
    newText("warning", "<br> Veuillez entrer votre identifiant Prolific.").color("red").bold(),    
    newButton("wait", "Cliquez pour commencer.").center().print()
    .wait(getTextInput("input_ID")
        .testNot.text("").failure( getText("warning").print() )),
    newVar("ID").global().set(getTextInput("input_ID"))
)


SendResults( "send" )

.setOption( "countsForProgressBar" , false )
