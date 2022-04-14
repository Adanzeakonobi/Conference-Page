document.addEventListener('DOMContentLoaded', () => {
    const section3 = document.querySelector('.feature-speaker');
    const speakerGrid = document.createElement('main');
  
    section3.appendChild(speakerGrid);
  
    speakerGrid.classList.add('speaker-grid');
  
    const speakerArray = [
      {
        name: 'Okoye Adaobi',
        title: 'Project manager',
        description: 'Damini Ebunoluwa Ogulu, known professionally as Burna Boy, is a Nigerian singer and rapper. He is one of the biggest and most successful African artists.',
        image: 'img/viv.PNG',
      },
      {
        name: 'Abdullahi Olatunji',
        title: 'Drive Test Engineer',
        description: 'Born in Hammarsdale, Zikode was a backing singer for several years. She has collaborated with DJ Ganyani on their hit single "Emazulwini".',
        image: 'img/olatunji.PNG',
      },
      {
        name: 'Abiodun Ogunleke',
        title: 'Logfile Analyst',
        description: 'Ayodeji Ibrahim Balogun, known professionally as Wizkid is a Nigerian singer and songwriter.',
        image: 'img/abiodun.PNG',
      },
      {
        name: 'Damilare Soetan',
        title: 'KPI Monitoring',
        description: 'Davido rose to fame after releasing "Dami Duro", the second single from his debut studio album Omo Baba Olowo. In 2012, Davido won the Next Rated award at The Headies',
        image: 'img/dami1.PNG',
      },
      {
        name: 'Samuel Idowu',
        title: 'KPI Monitoring',
        description: 'Charles Nii Armah Mensah Jr., is a Ghanaian reggae-dancehall artist. He is known by his stage name Shatta Wale, formerly Bandana. His best-known singles are "Dancehall King", my level and we taking over',
        image: 'img/samuel.PNG',
      },
      {
        name: 'Yusuf Teju',
        title: 'KPI Optimisation',
        description: ' Born in Isale Eko, she relocated to London at the age of 11 for her secondary education. Five years later, she began her music career doing backup vocals for artists such as George Michael and Mary J. Blige.',
        image: 'img/yusuf.PNG',
      },
    ];
  
    for (let i = 0; i < speakerArray.length; i += 1) {
      const speaker = speakerArray[i];
  
      document.querySelector('.speaker-grid').innerHTML
              += ` 
              <div class="speaker-cont">
              <img class="speaker-img" src="${speaker.image}" alt="Speaker Image">
              <div class="speaker-text">
                  <h3>${speaker.name}</h3>
                  <p class="speaker-title">${speaker.title}</p>
                  <hr>
                  <p class="speaker-des">${speaker.description}</p>
              </div>
              </div>
              `;
    }
  });