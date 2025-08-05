
const markFeature = document.querySelectorAll('.feature img')[2]
markFeature.addEventListener('click', function() {
  if (markFeature.style.opacity === "0.5") {
    markFeature.style.opacity = "1"
  } else {
    markFeature.style.opacity = "0.5"
  }
})

let cursorCount = 0
document.getElementById("countBtn").addEventListener("click", function() {
  cursorCount += 1
  document.getElementById("cursorCount").textContent = cursorCount
  if(cursorCount % 3 === 0){
    document.getElementById("cursorCount").style.background = "#ffee88"
  } else {
    document.getElementById("cursorCount").style.background = "#e1eaf7"
  }
})

const pinDiv = document.querySelector('.feature')
pinDiv.addEventListener('mouseenter', function() {
  pinDiv.style.background = "#dbf5ff"
})
pinDiv.addEventListener('mouseleave', function() {
  pinDiv.style.background = "#f1f6ff"
})
let workflowCount = 0
let totalProductivityTime = 0

document.getElementById("workflowBtn").addEventListener("click", function() {
  workflowCount++
  totalProductivityTime += Math.floor(Math.random() * 60) + 30
  updateProductivityStats()
  
  const btn = this
  const originalText = btn.textContent
  btn.textContent = "Workflow tracked!"
  btn.style.background = "#45a049"
  
  setTimeout(() => {
    btn.textContent = originalText
    btn.style.background = "#4caf50"
  }, 1500)
})

document.getElementById("resetStatsBtn").addEventListener("click", function() {
  workflowCount = 0
  totalProductivityTime = 0
  updateProductivityStats()
  
  const btn = this
  const originalText = btn.textContent
  btn.textContent = "Stats reset!"
  btn.style.background = "#d32f2f"
  
  setTimeout(() => {
    btn.textContent = originalText
    btn.style.background = "#f44336"
  }, 1500)
})

function updateProductivityStats() {
  const statsDiv = document.getElementById("productivityStats")
  const avgTime = workflowCount > 0 ? Math.round(totalProductivityTime / workflowCount) : 0
  
  statsDiv.innerHTML = `
    Workflows completed: <strong>${workflowCount}</strong><br>
    Total productive time: <strong>${totalProductivityTime} minutes</strong><br>
    Average session: <strong>${avgTime} minutes</strong><br>
    ${workflowCount >= 5 ? "You're a PowerToys power user!" : ""}
  `
}

const quizQuestions = [
  {
    question: "What's the shortcut to pin a window on top?",
    options: ["Ctrl+Win+T", "Win+Shift+P", "Alt+Tab", "Ctrl+Alt+P"],
    correct: 0
  },
  {
    question: "Which PowerToys feature helps you find your mouse cursor?",
    options: ["MouseSeeker", "CursorFinder", "Find My Mouse", "PointerSpot"],
    correct: 2
  },
  {
    question: "What does OCR stand for in PowerToys?",
    options: ["Optical Character Recognition", "Online Content Reader", "Open Code Repository", "Object Color Recognition"],
    correct: 0
  },
  {
    question: "whats the shortcut for PowerToys Run?",
    options: ["Win+R", "Alt+Space", "Ctrl+Shift+R", "Win+Space"],
    correct: 1
  },
  {
    question: "Which feature helps organize windows into zones?",
    options: ["WindowSnap", "FancyZones", "GridLayout", "ZoneManager"],
    correct: 1
  }
]

let currentQuiz = 0
let quizScore = 0
let quizStarted = false

document.getElementById("nextQuizBtn").addEventListener("click", function() {
  if (!quizStarted) {
    quizStarted = true
    currentQuiz = 0
    quizScore = 0
    showQuizQuestion()
    this.textContent = "next question"
  } else {
    currentQuiz++
    if (currentQuiz < quizQuestions.length) {
      showQuizQuestion()
    } else {
      showQuizResults()
    }
  }
})

function showQuizQuestion() {
  const question = quizQuestions[currentQuiz]
  document.getElementById("quizQuestion").textContent = `Q${currentQuiz + 1}: ${question.question}`
  
  const optionsDiv = document.getElementById("quizOptions")
  optionsDiv.innerHTML = ""
  
  question.options.forEach((option, index) => {
    const button = document.createElement("button")
    button.textContent = option
    button.style.cssText = "margin: 0.2rem; padding: 0.4rem 0.8rem; background: #fff; border: 2px solid #ff8c00; border-radius: 4px; cursor: pointer;"
    
    button.addEventListener("click", function() {
      const allButtons = optionsDiv.querySelectorAll("button")
      allButtons.forEach(btn => btn.disabled = true)
      
      if (index === question.correct) {
        quizScore++
        this.style.background = "#4caf50"
        this.style.color = "white"
      } else {
        this.style.background = "#f44336"
        this.style.color = "white"
        allButtons[question.correct].style.background = "#4caf50"
        allButtons[question.correct].style.color = "white"
      }
      
      setTimeout(() => {
        if (currentQuiz < quizQuestions.length - 1) {
          document.getElementById("nextQuizBtn").style.display = "inline-block"
        } else {
          document.getElementById("nextQuizBtn").textContent = "See Results"
          document.getElementById("nextQuizBtn").style.display = "inline-block"
        }
      }, 1500)
    })
    
    optionsDiv.appendChild(button)
  })
  
  document.getElementById("nextQuizBtn").style.display = "none"
}

function showQuizResults() {
  const percentage = Math.round((quizScore / quizQuestions.length) * 100)
  let message = ""
  
  if (percentage >= 80) {
    message = "PowerToys expert! You know your stuff"
  } else if (percentage >= 60) {
    message = "Good job! You're getting there"
  } else {
    message = "Keep learning, PowerToys has so much to offer"
  }
  
  document.getElementById("quizQuestion").textContent = `Quiz complete! You scored ${quizScore}/${quizQuestions.length}`
  document.getElementById("quizOptions").innerHTML = ""
  document.getElementById("quizScore").innerHTML = `${message}<br>Score: ${percentage}%`
  document.getElementById("nextQuizBtn").textContent = "Restart Quiz"
  document.getElementById("nextQuizBtn").style.display = "inline-block"
  
  quizStarted = false
}

window.addEventListener("DOMContentLoaded", function() {
  updateProductivityStats()
})
