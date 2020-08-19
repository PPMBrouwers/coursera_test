(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (const name of names) {
    var firstletter = name.toLowerCase().charAt(0);

    if (firstletter == 'j') {
      byeSpeaker.speak(name)
    } else {
      helloSpeaker.speak(name)
    }
  }

})(window);