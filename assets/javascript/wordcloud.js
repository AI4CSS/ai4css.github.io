const wordFreq = [
  ["AI4CSS", 150],
  ["Computational Social Science", 80],
  ["CS", 80],
  ["Social Science", 80],
  ["Computer Science", 70],
  ["Social-Network", 70],
  ["NLP", 70],
  ["Human-AI Interaction", 40],
  ["Public-Health", 50],
  ["Public-Opinion", 40],
  ["Collective Intelligence", 70],
  ["Trustworthiness", 40],
  ["Fairness", 40],
  ["Bias", 50],
  ["Python", 50],
  ["AI", 50],
  ["LLM", 50],
  ["Data", 50],
  ["Culture-Evolution", 25],
  ["Toxicity", 30],
  ["Psychology", 30],
  ["Well-Being", 30],
  ["Moderation", 20],
  ["Ethics", 40],
  ["Misinformation", 30],
  ["Crowd Wisdom", 20],
  ["Echo Chamber", 20],
  ["Data Mining", 40],
  ["Machine Learning", 40],
  ["Deep Learning", 40],
];

const canvas = document.getElementById('wordcloud');

// Color themes
const themes = [
  { bg: "#fff4ee", color: (word, weight) => (weight === 150 ? "rgba(170, 16, 16, 0.8784313725)" : "rgba(164,52,58,.8)") },  // ← UChicago Maroon
  { bg: "#ffe0e0", color: (word, weight) => (weight === 150 ? "#f02222" : "#c09292") },
  { bg: "#ffffff", color: (word, weight) => (weight === 150 ? "#0b5394" : "#3c78d8") },
  { bg: "#000000", color: (word, weight) => (weight === 150 ? "#ffdd00" : "#dddddd") },
  { bg: "#e0ffe0", color: (word, weight) => (weight === 150 ? "#228B22" : "#32CD32") },
];

let themeIndex = 0;

function renderCloud() {
  const theme = themes[themeIndex];
  WordCloud(canvas, {
    list: wordFreq,
    shape: 'circle',
    gridSize: Math.round(16 * canvas.width / 1024),
    weightFactor: function (size) {
      return Math.pow(size, 0.96) * canvas.width / 1024;
    },
    fontFamily: 'Times, serif',
    color: theme.color,
    rotateRatio: 0,
    rotationSteps: 2,
    backgroundColor: theme.bg,
    shuffle: false
  });
}

// Initial render
renderCloud();