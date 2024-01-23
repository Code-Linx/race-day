function registerRunner() {
  const runnerAgeInput = document.getElementById("runnerAge");
  const isEarlyCheckbox = document.getElementById("isEarly");
  const resultParagraph = document.getElementById("result");

  const age = parseInt(runnerAgeInput.value);
  const registeredEarly = isEarlyCheckbox.checked;

  let raceNumber = Math.floor(Math.random() * 1000);

  if (age > 19 && registeredEarly) {
    raceNumber += 1000;
  } else if (age > 18 && registeredEarly) {
    resultParagraph.textContent = `Your race starts at 9:30 am. Your race number is ${raceNumber}. Good luck!`;
    resultParagraph.style.color = "green";
    return;
  } else if (age > 18 && !registeredEarly) {
    resultParagraph.textContent = `Your race starts at 11:00 am. Your race number is ${raceNumber}. Good luck!`;
    resultParagraph.style.color = "green";
    return;
  } else if (age < 18) {
    resultParagraph.textContent = `Your race starts at 12:30 pm. Your race number is ${raceNumber}. Good luck!`;
    resultParagraph.style.color = "green";
    return;
  } else {
    resultParagraph.textContent = "Please see the registration desk.";
    resultParagraph.style.color = "red";
    return;
  }
}
