// TRAINING ITEMS (3)
newTrial("train1_feu", 
    newTimer(50).start().wait(),
    newText("spacebar", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'><i> Appuyez sur la barre </i>Espace<i> pour faire défiler le dialogue.</i>")
        .center().print(), 
    newText("space", "_________ ").center().print(), 
    newKey("spacebar"," ").wait(), 
    newText("u1", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>MAMAN :  il regarde ?")
        .center().print(), newKey("u1"," ").wait(),   
    newText("u2", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>ENFANT :  mhm.")
        .center().print(), newKey("u2"," ").wait(),
    newText("u3", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>MAMAN :  les pompiers.")
      .center().print(), newKey("u3"," ").wait(),
    newText("u4", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>ENFANT :  regarde les pinpom !")
       .center().print(), newKey("u4"," ").wait(),
    newText("u5", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>MAMAN :  vite, vite, vite")
       .center().print(), newKey("u5"," ").wait(),
    newText("u6", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>MAMAN :  branchez les lances...")
       .center().print(), newKey("u6"," ").wait(),
    newText("u7", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>MAMAN :  ouvrez les vannes,  et arrosez.")
       .center().print(), newKey("u7"," ").wait(),
    newText("u8", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>MAMAN :  allez on envoie plein d'eau dans la maison de Germaine pour arrêter ______ feu.")
       .center().print(), 
    newText("ans1", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:110; height: 50; margin:4px'> <p style ='color:black;'><font size='4'> un  </p> </td></tr></table>"),
    newText("ans0", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:110; height: 50; margin:4px'> <p style ='color:black;'><font size='4'> le </p> </td></tr></table>"),
    newCanvas("side-by-side", 400,400)
            .add( 70, 20, getText("ans1"))
            .add(210, 20, getText("ans0"))
            .center().print(),
    newSelector("selection")
        .add(getText("ans1"), getText("ans0"))
        .shuffle().log().once().wait(),
    clear(),
    newText("correct", "<p align='center'> <font size='4'> La bonne réponse était LE.  </p>")
        .center().print(),        
    newButton("wait2", "OK")
        .center().print().wait()
) 

newTrial("train2_uncalin",
    newTimer(50) .start() .wait(),
    newText("spacebar", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'><i> Appuyez sur la barre </i>Espace<i> pour faire défiler le dialogue.</i>")
        .center().print(), 
    newText("space", "_________ ").center().print(), 
    newText("u1", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  allez alors on range.")
        .center().print(), newKey("u1"," ").wait(),
    newText("u2", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN : allez viens ?")
        .center().print(), newKey("u2"," ").wait(),
    newText("u3", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  je vais t'enlever ça si tu veux.")
      .center().print(), newKey("u3"," ").wait(),
    newText("u4", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  on enlève ça ?")
       .center().print(), newKey("u4"," ").wait(),
    newText("u5", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> ENFANT :  mh.")
       .center().print(), newKey("u5"," ").wait(),
    newText("u6", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  allez.")
       .center().print(), newKey("u6"," ").wait(),
    newText("u7", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  qu'est-ce qu'il y a mon pépère ?")
       .center().print(), newKey("u7"," ").wait(),
    newText("u8", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  tu veux ______ câlin ?")
       .center().print(), 
    newText("ans1", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:110; height: 50; margin:4px'> <p style ='color:black;'><font size='4'> un  </p> </td></tr></table>"),
    newText("ans0", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:110; height: 50; margin:4px'> <p style ='color:black;'><font size='4'> le </p> </td></tr></table>"),
    newCanvas("side-by-side", 400,400)
            .add( 70, 20, getText("ans1"))
            .add(210, 20, getText("ans0"))
            .center().print(),
    newSelector("selection")
        .add(getText("ans1"), getText("ans0"))
        .shuffle().log().once().wait(),
    clear(),
    newText("correct", "<p align='center'> <font size='4'> La bonne réponse était UN.  </p>")
        .center().print(),        
    newButton("wait2", "OK")
        .center().print().wait()
)

newTrial("train3_unbruit",
    newTimer(50) .start() .wait(),
    newText("spacebar", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'><i> Appuyez sur la barre </i>Espace<i> pour faire défiler le dialogue.</i>")
        .center().print(), 
    newText("space", "_________ ").center().print(), 
    newText("u1", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  non c'est juste le réfrigérateur. ")
        .center().print(), 
    newKey("u1"," ").wait(),
    newText("u2", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> ENFANT : ...")
        .center().print(), 
    newKey("u2"," ").wait(),
    newText("u3", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  il arrête pas de faire du bruit. ")
      .center().print(), 
    newKey("u3"," ").wait(),
    newText("u4", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  tiens tu entends ?")
       .center().print(), 
    newKey("u4"," ").wait(),
    newText("u5", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  c'est le réfrigérateur.")
       .center().print(), 
    newKey("u5"," ").wait(),
    newText("u6", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> ENFANT :  mm.")
       .center().print(), 
    newKey("u6"," ").wait(),
    newText("u7", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  le tonnerre ça fait, ça fait pas ce bruit-là.")
       .center().print(), 
    newKey("u7"," ").wait(),
    newText("u8", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'> MAMAN :  ça fait ______ bruit plus fort.")
       .center().print(), 
    newKey("u8"," ").wait(),
    newText("ans1", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:110; height: 50; margin:4px'> <p style ='color:black;'><font size='4'> un  </p> </td></tr></table>"),
    newText("ans0", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:110; height: 50; margin:4px'> <p style ='color:black;'><font size='4'> le </p> </td></tr></table>"),
    newCanvas("side-by-side", 400,400)
            .add( 70, 20, getText("ans1"))
            .add(210, 20, getText("ans0"))
            .center().print(),
    newSelector("selection")
        .add(getText("ans1"), getText("ans0"))
        .shuffle().log().once().wait(),
    clear(),
    newText("correct", "<p align='center'> <font size='4'> La bonne réponse était UN.  </p>")
        .center().print(),        
    newButton("wait2", "OK")
        .center().print().wait()
)