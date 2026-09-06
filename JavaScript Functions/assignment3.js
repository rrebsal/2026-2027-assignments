const numbers = [];

while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");

  if (input === "done") {
    break;
  }

  numbers.push(Number(input));
}

const output = document.getElementById("output");
const evenNumbers = [];

for (const number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

if (evenNumbers.length > 0) {
  output.innerHTML += `<p>Even Numbers: ${evenNumbers.join(", ")}</p>`;
} else {
  output.innerHTML += `<p>Even Numbers: None</p>`;
}

output.innerHTML += `<p>Weeeeeeeeeeee.</p>`;
