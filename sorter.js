
document.addEventListener("DOMContentLoaded", () => {
  let current = 0;
  let results = [];

  const container = document.getElementById("sorter");

  function showNext() {
    if (current >= dataSet.options.length - 1) {
      container.innerHTML = "<h2>Tu ranking:</h2><ol>" + results.map(n => "<li>" + n + "</li>").join("") + "</ol>";
      return;
    }

    container.innerHTML = `
      <p>¿Quién prefieres?</p>
      <button id="left">${dataSet.options[current][0]}</button>
      <button id="right">${dataSet.options[current + 1][0]}</button>
    `;

    document.getElementById("left").onclick = () => {
      results.push(dataSet.options[current][0]);
      current++;
      showNext();
    };
    document.getElementById("right").onclick = () => {
      results.push(dataSet.options[current + 1][0]);
      current++;
      showNext();
    };
  }

  showNext();
});
