//  Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
const cardContainer = document.querySelector('.team-container')
console.log(cardContainer)
const userData = [
    {
        img : `<img
        src="img/wayne-barnett-founder-ceo.jpg"
        alt="Wayne Barnett"
      />`,
        name : 'Wayne Barnett',
        job : 'Founder & CEO',
    },
    {
        img: `<img
        src="img/angela-caroll-chief-editor.jpg"
        alt="Wayne Barnett"
      />`,
        name: 'Angela Caroll',
        job: 'Chief Editor',
    },
    {
        img : `<img
        src="img/walter-gordon-office-manager.jpg"
        alt="Wayne Barnett"
      />`,
        name : 'Walter Gordon',
        job : 'Office Manager',
    },
    {
        img : `<img
        src="img/angela-lopez-social-media-manager.jpg"
        alt="Wayne Barnett"
      />`,
        name : 'Angela Lopez',
        job : 'Social Media Manager',
    },
    {
        img : `<img
        src="img/scott-estrada-developer.jpg"
        alt="Wayne Barnett"
      />`,
        name : 'Scott Estrada',
        job : 'Developer',
    },
    {
        img : `<img
        src="img/barbara-ramos-graphic-designer.jpg"
        alt="Wayne Barnett"
      />`,
        name : 'Barbara Ramos',
        job : 'Graphic Designer',
    },
]

for(let i = 0; i < userData.length; i++) {
    let thisUser = userData[i];
    const classDraw = `
    <div class="team-card">
            <div class="card-image">
              ${thisUser.img}
            </div>
            <div class="card-text">
              <h3>${thisUser.name}</h3>
              <p>${thisUser.job}</p>
            </div>
          </div>
    `
    cardContainer.innerHTML += classDraw
}
