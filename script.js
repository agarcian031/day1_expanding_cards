// bring in ALL panels - query selector will just bring in the first one, need all the panels in a node list 
const panels = document.querySelectorAll('.panel')

// add an event listener to each panel that will remove the active class from the previous card and add the active class to the clicked card 
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // console.log('clicked')
    removeActiveClasses() 
    panel.classList.add('active')

  })
})

function removeActiveClasses()   {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}