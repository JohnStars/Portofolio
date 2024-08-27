function toggleNav() {
    var nav = document.getElementById("mobile-nav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

function closeNav() {
    document.getElementById("mobile-nav").style.display = "none";
}

var xValues = ["HTML", "CSS", "JS", "Photograph", "Media Editor"];
var yValues = [60, 49, 9, 54, 43];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Skill chart display"
    }
  }
});