function results(input1, input2, input3, input4, input5) {
  const total = input1 + input2 + input3 + input4 + input5;

  if(total <=5) {
    language = "ruby";
  } else if (total <=10) {
    language = "go";
  } else {
    langage = "swift";
  }
    return language;
}

$(document).ready(function() {
  $("form#languageQuiz").submit(function() {
    event.preventDefault();

    const syntax = parseInt($("#syntax").val();
    const software = parseInt($("#software").val();
    const employer = parseInt($("#employer").val();
    const con = parseInt($("#con").val();
    const bonus = parseInt($("#bonus").val();
    let language = results(syntax, software, employer, con, bonus);

    if (language === "ruby") {
      $("#answer").text("Ruby");
    } else if (language === "go") {
      $("answer").text("Go");
    } else {
      $("#answer").text(
        "Swift");
      )
    }
    )
    
    
    )
    
    
    )
    
    
    ))
  })
})
