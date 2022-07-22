const openPopup = document.querySelector('.model');
const closePopup = document.querySelector('.close-button');
const seeProject = document.querySelectorAll('.seeProject');

const popup = [
  {
    title: 'Tonic',
    discription: 'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
    imageLink: 'Images&Icons/SnapshootPortfolio.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    title: 'Multi-post Stories',
    discription: 'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
    imageLink: 'Images&Icons/SnapshootPortfolio.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    company: 'Canopy',
    year: '2022',
    sourceLink: '',
    demoLink: '',
  },
  {
    title: 'Tonic',
    discription: 'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
    imageLink: 'Images&Icons/SnapshootPortfolio.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
  {
    title: 'Multi-post Stories',
    discription: 'Lorem ipsum, dolor sit amet consectetur adipisici the dog hit the man and it really did hurt a lot and this is it for this description',
    imageLink: 'Images&Icons/SnapshootPortfolio.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    company: 'Canopy',
    year: '2015',
    sourceLink: '',
    demoLink: '',
  },
];

popup.forEach((element) => {
  const works = document.querySelector('.works');
  const oneCard = document.createElement('div');
  oneCard.innerHTML = `${oneCard.innerHTML}
   <img class="Mobile-banners" src="$" alt="">
   <img class="work-banners" src="" alt="Portfolio image" />
   <div class="text">
     <h2 class="Tonic">Tonic</h2>

     <div class="desc-list">
       <ul>
         <li class="CANOPY">CANAPY</li>
         <li>
           <a href=""><img src="Images&Icons/Counter.png" alt="" /></a>
         </li>
         <li>Back End Dev</li>
         <li>
           <a href=""><img src="Images&Icons/Counter.png" alt="" /></a>
         </li>
         <li>2022</li>
       </ul>
     </div>

     <p>
       A daily selection of privately personalized reads; no accounts
       sign-ups required
     </p>
     <div class="button-list">
       <ul>
         <li><a href="">HTML</a></li>
         <li><a href="">CSS</a></li>
         <li><a href="">JAVASCRIPT</a></li>
       </ul>
     </div>
     <div class="btn">
       <button data-close-button="0" class="seeProject" type="button">See project</button>
     </div>
   </div>`;
  oneCard.classList.add('Projects');
  oneCard.classList.add('foi1');
  oneCard.classList.add('foo1');
  works.appendChild(oneCard);
});

// popup.forEach(() => {
//   const popCard = document.querySelector('.model')
//   openPopup.innerHTML=` <!-- <div class="model-container">
//   <div class="model-headline">
//     <h2 class="tonic">Tarik</h2>
//     <button data-close-button class="close-button">&times;</button>
//   </div>
//   <div class="desc-list">
//     <ul>
//       <li class="canopy">CANAPY</li>
//       <li>
//         <a href=""><img src="Images&Icons/Counter.png" alt="" /></a>
//       </li>
//       <li>Back End Dev</li>
//       <li>
//         <a href=""><img src="Images&Icons/Counter.png" alt="" /></a>
//       </li>
//       <li class="year">2022</li>
//     </ul>
//   </div>
//   <img class="Mobile-banners" src="Images&Icons/PortoflioCard2/SnapshootPortfolio.svg" alt="">
//   <img class="work-banners" src="Images&Icons/SnapshootPortfolio.png" alt="Portfolio image" />

//   <p class="descriptionist">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//     Voluptatibus id deserunt deleniti quia aliquam earum amet inventore magnam!
//     Corporis ipsa ullam ex quasi similique sit, praesentium alias doloremque dignissimos
//   </p>

//     <ul class="button-list">
//       <li><a href="">HTML</a></li>
//       <li><a href="">CSS</a></li>
//       <li><a href="">JAVASCRIPT</a></li>
//     </ul>

//   <div class="btn">
//     <button class="dogWater" type="button">See live</button>
//     <button class="catWater" type="button">See Source</button>
//   </div>

// </div> -->`
//   openPopup.classList.add('.model')
//   popCard.append(openPopup)
// })

function popupFunction(work) {
  const projectDetails = popup[work];
  document.querySelector('.tonic').innerHTML = projectDetails.title;
  document.querySelector('.discriptionist').innerHTML = projectDetails.discription;
  document.querySelector('.model .workbanners').href = projectDetails.imageLink;
  document.querySelector('.model .button-list').innerHTML = listButton(popup, work);
  document.querySelector('.canopy').innerHTML = projectDetails.company;
  document.querySelector('.year').innerHTML = projectDetails.year;
  document.querySelector('.dogWater').href = projectDetails.sourceLink;
  document.querySelector('.catWater').href = projectDetails.demoLink;
}

seeProject.forEach((element) => {
  element.addEventListener('click', (event) => {
    popupFunction(event.dataset.work);
    openPopup.style.display = 'block';
  }, false);
});

closePopup.addEventListener('click', () => {
  openPopup.style.display = 'none';
});