//  Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
const cardContainer = document.querySelector('.team-container')
const userData = [
  {
      img : 'wayne-barnett-founder-ceo.jpg',
      name : 'Wayne Barnett',
      job : 'Founder & CEO',
  },
  {
      img: 'angela-caroll-chief-editor.jpg',
      name: 'Angela Caroll',
      job: 'Chief Editor',
  },
  {
      img : 'walter-gordon-office-manager.jpg',
      name : 'Walter Gordon',
      job : 'Office Manager',
  },
  {
      img : 'angela-lopez-social-media-manager.jpg',
      name : 'Angela Lopez',
      job : 'Social Media Manager',
  },
  {
      img : 'scott-estrada-developer.jpg',
      name : 'Scott Estrada',
      job : 'Developer',
  },
  {
      img : 'barbara-ramos-graphic-designer.jpg',
      name : 'Barbara Ramos',
      job : 'Graphic Designer',
  },
]


for(let i = 0; i < userData.length; i++) {
  let thisUser = userData[i];
  const classDraw = `
  <div class="team-card">
          <div class="card-image">
          <img
          src="img/${thisUser.img}"
          alt="${thisUser.name}"
        />
          </div>
          <div class="card-text">
            <h3>${thisUser.name}</h3>
            <p>${thisUser.job}</p>
          </div>
        </div>
  `
  cardContainer.innerHTML += classDraw
}

const btnTest = document.getElementById('addMemberButton')

btnTest.addEventListener('click', insertcose);

function insertcose() {
  const userName = document.querySelector('#name').value
  const userRole = document.querySelector('#role').value
  const img = document.querySelector('#image').value
  
  const classDraw = `
    <div class="team-card">
            <div class="card-image">
            <img
            src="${img}"
            alt="${userName}"
          />
            </div>
            <div class="card-text">
              <h3>${userName}</h3>
              <p>${userRole}</p>
            </div>
          </div>
    `
    cardContainer.innerHTML += classDraw
}