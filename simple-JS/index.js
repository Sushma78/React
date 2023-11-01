
const input = document.getElementById("input");
function findMax() {
  let states = [];
  let population = [];

  readXlsxFile(input.files[0]).then((rows) => {
    console.log(rows);
    for (let i = 1; i < rows.length; i++) {
      let row = rows[i];
      if (typeof row[0] === "string" && typeof row[1] === "number") {
        states.push(row[0]);
        population.push(row[1]);
      }
    }

    console.log(states);
    console.log(population);

    let Max = population[0];

    for (let i = 1; i < population.length; i++) {
      if (population[i] > Max) {
        Max = population[i];
      }

    }
    let MaxIndex = population.indexOf(Max);

    let stateWithMax = states[MaxIndex];
    output.innerHTML = `State with the highest population is -> ${stateWithMax} <br> ` + `Population = ${Max}`;
  });
}
input.addEventListener("change", findMax);