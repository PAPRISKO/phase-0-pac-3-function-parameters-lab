function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  console.log(introduction("Jack")); 
  
  
  console.log(introductionWithLanguage("Jack", "Javascript")); 
  
  console.log(introductionWithLanguageOptional("Jack")); 
  
  console.log(introductionWithLanguageOptional("Jack", "Javascipt")); 
  