
let currentIndex = 0;
let left, right;
let currentList = [];
let ranking = [];

document.getElementById("startbutton").onclick = () => {
  currentList = [...dataSet[dataSetVersion].options];
  shuffle(currentList);
  currentIndex = 0;
  ranking = [];
  document.getElementById("startbutton").style.display = "none";
  document.getElementById("sorting").style.display = "block";
  nextPair();
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function nextPair() {
  if (currentIndex < currentList.length - 1) {
    left = currentList[currentIndex];
    right = currentList[currentIndex + 1];
    document.getElementById("left").innerText = left[0];
    document.getElementById("right").innerText = right[0];
  } else {
    showResult();
  }
}

function selectOption(choice) {
  if (choice === "left") {
    ranking.push(left[0]);
  } else if (choice === "right") {
    ranking.push(right[0]);
  } else if (choice === "both") {
    ranking.push(left[0], right[0]);
  }
  currentIndex += 2;
  nextPair();
}

document.getElementById("left").onclick = () => selectOption("left");
document.getElementById("right").onclick = () => selectOption("right");
document.getElementById("both").onclick = () => selectOption("both");
document.getElementById("none").onclick = () => { currentIndex += 2; nextPair(); };

function showResult() {
  document.getElementById("sorting").style.display = "none";
  document.getElementById("result").style.display = "block";
  let list = document.getElementById("resultlist");
  list.innerHTML = "";
  let count = {};
  ranking.forEach(name => {
    count[name] = (count[name] || 0) + 1;
  });
  let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  sorted.forEach(([name]) => {
    let li = document.createElement("li");
    li.innerText = name;
    list.appendChild(li);
  });
}
