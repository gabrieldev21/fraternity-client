const media =
  'https://palcoteatrocinema.files.wordpress.com/2019/04/357508_868484_unicarioca___unidade_rio_comprido.jpg?w=840';

export const posts = [
  {
    id: '0001',
    likes: 1000,
    comments: 523,
    user: {
      photo:
        'https://media-exp1.licdn.com/dms/image/C4D03AQF56johHTDiXg/profile-displayphoto-shrink_800_800/0/1652218834579?e=1659571200&v=beta&t=KPK-rCPJJegCU-SChkuIyqz_Bdujo072CX3COBhOT48',
      name: 'Gabriel Pereira',
      role: 'Estudante',
    },

    content: {
      text: `Gostaria de compartilhar que estou começando em um novo cargo de Front-End Developer na Raro Labs.
      Estou super animado para este novo começo, espero aprender bastante e agregar muito valor. 🚀`,
    },
  },
  {
    id: '0002',
    likes: 12,
    comments: 5,
    user: {
      photo:
        'https://media-exp1.licdn.com/dms/image/C4E03AQHfPT43ijztFQ/profile-displayphoto-shrink_800_800/0/1545339445131?e=1660176000&v=beta&t=0zw-JR-5dal2Pr-a3hNfMJZlvx45XrRSbbSQ7aLjwWg',
      name: 'Alberto Tavares',
      role: 'Professor',
    },
    content: { media },
  },
  {
    id: '0003',
    likes: 15,
    comments: 55,
    user: {
      photo:
        'https://media-exp1.licdn.com/dms/image/C4E03AQFSVo1s5aJdng/profile-displayphoto-shrink_200_200/0/1557411141271?e=2147483647&v=beta&t=Ls8kGtTVN2G1DcKwr8SRW4ca3mUwvF1TvT24aTTrSvk',
      message: `Esta apresentação está incrivel!`,
      name: 'Andre Sobral',
      role: 'Coordenador',
    },
    content: {
      text: `Turmas confirmadas para iniciar em 25/09/21.
    Não percam as condições especiais de preços e formas de pagamento oferecidos pela UniCarioca nesses últimos dias de matrícula.`,
      media: `https://media-exp1.licdn.com/dms/image/C4D22AQEZndnL-KY4jg/feedshare-shrink_1280/0/1631912323079?e=1657756800&v=beta&t=ui93uH9_pCbflD7Sfz9yugpqh_fMQPRVv5ChEDk3KXE`,
    },
  },
];
