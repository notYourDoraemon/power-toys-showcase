const tips = [
  "You can install PowerToys using the Microsoft Store",
  "OCR lets you grab text from anywhere on your screen",
  "PowerToys works best on updated Windows 10 or 11 (i use arch linux btw)",
  "PowerRename lets you bulk rename files with regex patterns",
  "Use Win+Shift+C to pick colors from anywhere on your screen"
]

function showRandomTip() {
  const tipDiv = document.getElementById("tip")
  tipDiv.textContent = tips[Math.floor(Math.random() * tips.length)]
}

window.addEventListener("DOMContentLoaded", showRandomTip)
document.getElementById("tip").addEventListener("click", showRandomTip)

const tipDiv = document.getElementById("tip")
tipDiv.addEventListener("mouseenter", () => {
  tipDiv.style.background = "#d2e4fc"
  tipDiv.style.cursor = "pointer"
})
tipDiv.addEventListener("mouseleave", () => {
  tipDiv.style.background = "transparent"
})

document.getElementById("goUsage").addEventListener("click", function() {
  window.location.href = "usage.html"
})
document.getElementById("personalizeBtn").addEventListener("click", function() {
  const userName = document.getElementById("userName").value.trim()
  const messageDiv = document.getElementById("personalMessage")
  
  if (userName) {
    const personalMessages = [
      `Hey ${userName}! Please try PowerToys, trust me - it'll change how you use Windows forever`,
      `${userName}, I'm telling you PowerToys is a game changer! Give it a shot, you won't regret it`,
      `Listen ${userName}, I've been using PowerToys for ages - trust me on this one, it's incredible`,
      `${userName}, do yourself a favor and try PowerToys right now. Seriously, trust me`,
      `${userName}, PowerToys will blow your mind! I promise you, just trust me and give it a try`
    ]
    
    messageDiv.innerHTML = personalMessages[Math.floor(Math.random() * personalMessages.length)]
    messageDiv.style.animation = "fadeIn 0.5s ease-in"
    
    localStorage.setItem('userName', userName)
  } else {
    messageDiv.innerHTML = "Please enter your name first"
    messageDiv.style.color = "#ff6b35"
    
    setTimeout(() => {
      messageDiv.style.color = "#2d5aa0"
    }, 2000)
  }
})
document.getElementById("showcaseBtn").addEventListener("click", function() {
  const showcaseArea = document.getElementById("showcaseArea")
  const magicContent = document.getElementById("magicContent")
  
  if (showcaseArea.style.display === "none" || !showcaseArea.style.display) {
    const showcaseFeatures = [
      {
        title: "PowerToys Run",
        description: "Press Alt+Space to launch anything instantly! No more digging through start menu",
        demo: "Try typing 'calc' and Calculator opens immediately"
      },
      {
        title: "FancyZones", 
        description: "Snap windows into custom layouts. Win+Shift+backtick to set up zones",
        demo: "Drag windows into predefined zones for perfect organization"
      },
      {
        title: "PowerToys Peek",
        description: "Preview files without opening them! Just select and press Ctrl+Space",
        demo: "Perfect for quickly checking file contents"
      },
    ]
    
    const randomFeature = showcaseFeatures[Math.floor(Math.random() * showcaseFeatures.length)]
    
    magicContent.innerHTML = `
      <h3 style="color: #ff6b35; margin-top: 0;">${randomFeature.title}</h3>
      <p style="margin: 0.5rem 0;">${randomFeature.description}</p>
      <div style="background: #fff4e6; padding: 0.8rem; border-radius: 4px; border-left: 3px solid #ff6b35; font-style: italic;">
        ${randomFeature.demo}
      </div>
    `
    
    showcaseArea.style.display = "block"
    showcaseArea.style.animation = "slideDown 0.3s ease-out"
    this.textContent = "show another feature"
  } else {
    const showcaseFeatures = [
      {
        title: "powertoys run",
        description: "press alt space to launch anything instantly no more digging through start menu",
        demo: "try typing calc and calculator opens immediately"
      },
      {
        title: "fancyzones", 
        description: "snap windows into custom layouts win shift backtick to set up zones",
        demo: "drag windows into predefined zones for perfect organization"
      },
      {
        title: "powertoys peek",
        description: "preview files without opening them just select and press ctrl space",
        demo: "perfect for quickly checking file contents"
      },
      {
        title: "shortcut guide",
        description: "hold win key for 1 second to see all available shortcuts",
        demo: "never forget keyboard shortcuts again"
      }
    ]
    
    const randomFeature = showcaseFeatures[Math.floor(Math.random() * showcaseFeatures.length)]
    
    magicContent.innerHTML = `
      <h3 style="color: #ff6b35; margin-top: 0;">${randomFeature.title}</h3>
      <p style="margin: 0.5rem 0;">${randomFeature.description}</p>
      <div style="background: #fff4e6; padding: 0.8rem; border-radius: 4px; border-left: 3px solid #ff6b35; font-style: italic;">
        ${randomFeature.demo}
      </div>
    `
  }
})

window.addEventListener("DOMContentLoaded", function() {
  const savedName = localStorage.getItem('userName')
  if (savedName) {
    document.getElementById("userName").value = savedName
  }
})

const style = document.createElement('style')
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`
document.head.appendChild(style)
