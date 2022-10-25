// banca dati
const team = [
    {
        nome : 'Wayne Barnett',
        role : 'Founder & CEO',
        profile : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        role : 'Chief Editor',
        profile : 'angela-caroll-chief-editor.jpg'
    },
    {
        nome : 'Walter Gordon',
        role : 'Office Manager',
        profile : 'walter-gordon-office-manager.jpg'
    },
    {
        nome : 'Angela Lopez',
        role : 'Social Media Manager',
        profile : 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome : 'Scott Estrada',
        role : 'Developer',
        profile : 'scott-estrada-developer.jpg'
    },
    {
        nome : 'Barbara Ramos',
        role : 'Graphic Designer',
        profile : 'barbara-ramos-graphic-designer.jpg'
    },
];

// prendo la row dove andrò ad inserire la card
const lista = document.querySelector('.row');


// stampo le informazioni della banca dati
for(let indice in team){

    const member = team[indice];
    // creo la constante output inserendo i vari valori 
    const output = `
<div class="col-lg-4 col-sm-6 py-4">
        <div class="card overflow-hidden" style="width: 18rem;">
        <div class="overflow-hidden">
            <img src="../img/${member.profile}" class="card-img-top" alt="${member.nome}">
        </div>
            <div class="card-body">
            <h4>${member.nome}</h4>
            <h5>${member.role}</h5>
            </div>
        </div>
</div>`;
// verifiico 
    console.log(output);

    // stampo in pagina con progressione tutta la mia banca dati
    lista.innerHTML  += output;
}

