const pobup = [
    {
       title: 'Tonic',
       discription:  'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
       imageLink: 'Images&Icons/SnapshootPortfolio.png',
       tags: ['HTML', 'CSS', 'Javascript'],
       company: 'Canopy',
       year: '2015',
       sourceLink: '',
       demoLink: '',
    },
    {
        title: 'Multi-post Stories',
        discription:  'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
        imageLink: 'Images&Icons/SnapshootPortfolio.png',
        tags: ['HTML', 'CSS', 'Javascript'],
        company: 'Canopy',
        year: '2015',
        sourceLink: '',
        demoLink: '',
     },
     {
        title: 'Tonic',
        discription:  'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
        imageLink: 'Images&Icons/SnapshootPortfolio.png',
        tags: ['HTML', 'CSS', 'Javascript'],
        company: 'Canopy',
        year: '2015',
        sourceLink: '',
        demoLink: '',
     },
     {
        title: 'Multi-post Stories',
        discription:  'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
        imageLink: 'Images&Icons/SnapshootPortfolio.png',
        tags: ['HTML', 'CSS', 'Javascript'],
        company: 'Canopy',
        year: '2015',
        sourceLink: '',
        demoLink: '',
     }
]
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset);
    console.log(modal);
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.pop-up1.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}