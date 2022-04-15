document.addEventListener('DOMContentLoaded', () => {
  const section3 = document.querySelector('.feature-speaker');
  const speakerGrid = document.createElement('main');

  section3.appendChild(speakerGrid);

  speakerGrid.classList.add('speaker-grid');

  const speakerArray = [
    {
      name: 'Okoye Adaobi',
      title: 'Project manager',
      description: 'Adaobi is an experienced Project Manager with knowledge of drive test, logfile anysis and KPI monitoring.',
      image: 'img/viv.PNG',
    },
    {
      name: 'Abdullahi Olatunji',
      title: 'Drive Test Engineer',
      description: 'Abdullahi is a renouned RF Engineer with experience ranging from drive test and logfile anysis.',
      image: 'img/olatunji.PNG',
    },
    {
      name: 'Abiodun Ogunleke',
      title: 'Logfile Analyst',
      description: 'Abiodun is a renouned RF Engineer with experience ranging from drive test and logfile anysis.',
      image: 'img/abiodun.PNG',
    },
    {
      name: 'Damilare Soetan',
      title: 'KPI Monitoring',
      description: 'Damilare is a renouned RF Engineer with experience ranging from drive test, logfile anysis, KPI monitoring and optimisation.',
      image: 'img/dami1.PNG',
    },
    {
      name: 'Samuel Idowu',
      title: 'KPI Monitoring',
      description: 'Samuel is a renouned RF Engineer with experience ranging from drive test, logfile anysis, KPI monitoring and optimisation.',
      image: 'img/samuel.PNG',
    },
    {
      name: 'Yusuf Teju',
      title: 'KPI Optimisation',
      description: 'Yusuf is a renouned RF Engineer with experience ranging from drive test, logfile anysis, KPI monitoring and optimisation.',
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
