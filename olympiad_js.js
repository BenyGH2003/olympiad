// Demographic data
var demographics = [
    {attribute: "Age", answer: "30"},
    {attribute: "Gender", answer: "Male"},
    {attribute: "Race", answer: "Caucasian"}
  ];
  
  // Symptom data
  var symptoms = [
    {attribute: "Fever", answer: "Yes"},
    {attribute: "Cough", answer: "No"},
  ];
  
  // Function to show demographic data
  function showDemographic(index) {
    var attribute = demographics[index].attribute;
    var answer = demographics[index].answer;
    document.getElementById(attribute.toLowerCase()).innerHTML = answer;
  }
  
  // Function to show symptom data
  function showSymptom(index) {
    var attribute = symptoms[index].attribute;
    var answer = symptoms[index].answer;
    document.getElementById(attribute.toLowerCase()).innerHTML = answer;
  }