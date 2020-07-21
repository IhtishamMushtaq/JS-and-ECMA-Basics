const person = {
  name: "Ihtisham",
  Street: "Mustafa Abad",
  Age: 21,
};
function ShowData() {
  for (key in person) {
    console.log(`Key is ${key} and value is ${person[key]}`);
  }
}

ShowData();
