function maskVerb(text) {
    return text.replace(/\b(know|knew|think|thought)\b/gi, "______");
}



// TEST ITEMS
Template("extracted_output_processed.csv", row => 
newTrial("test", 
    newTimer(50).start().wait(), 
    newText("space", "_________ <br>").center().print(), 
    
    // Context sentences
    newText("u1", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_1)
        .center().print(), newKey("u1"," ").wait(),
    newText("u2", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_2)
        .center().print(), newKey("u2"," ").wait(),
    newText("u3", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_3)
      .center().print(), newKey("u3"," ").wait(),
    newText("u4", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_4)
       .center().print(), newKey("u4"," ").wait(),
    newText("u5", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_5)
       .center().print(), newKey("u5"," ").wait(),
    newText("u6", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_6)
       .center().print(), newKey("u6"," ").wait(),
    newText("u7", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_7)
       .center().print(), newKey("u7"," ").wait(),
    newText("u8", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_8)
       .center().print(), newKey("u8"," ").wait(),
    newText("u9", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_9)
       .center().print(), newKey("u9"," ").wait(),
    newText("u10", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.context_pre_10)
       .center().print(), newKey("u10"," ").wait(),
    
    
    // Target utterance with masked verb
    
    newText("target_line", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>" + maskVerb(row.target_line))
   .center().print(), newKey("target_line"," "),

    // newText("target_line", "<table> <tr> <td style='border:white 1px; padding:0px; width:400; height: 20; margin:4px'>"+row.target_line)
    //   .center().print(), newKey("target_line"," "),
    
    // Answer Selection
    newText("know_option", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:7em; height: 50; margin:4px'> <p style ='color:black;'><font size='4'>" + row.know_option + "</p> </td></tr></table>"),
    newText("think_option", "<table> <tr> <td align='center' style='border:solid black 1px; padding:1px; width:7em; height: 50; margin:4px'> <p style ='color:black;'><font size='4'>" + row.think_option + "</p> </td></tr></table>"),
    newCanvas("side-by-side", 400,200)
            .add( 70, 20, getText("know_option"))
            .add(210, 20, getText("think_option")).center().print(),
        newSelector("selection")
            .add(getText("know_option"), getText("think_option")).log().shuffle() // .once()
            .wait()
    )
    .log("ID", getVar("ID") )
    // .log("group", row.group)
    .log("unique_id", row.unique_id)
    .log("know_option", row.know_option)
    .log("think_option", row.think_option)
    .log("target_line", row.target_line)
)