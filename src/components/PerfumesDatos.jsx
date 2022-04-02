
export const perfumesGeneral = [
    {   id:1,
        titulo:'CH Carolina Herrera',
        img: '../images/ch.jpeg',
        precio:'$25',
        tipo: 'woman',
    },

    
    {   id:2,
        titulo:'Shakira',
        img: '../images/shakira.jpeg',
        precio:'$25',
        tipo: 'woman',
    },
    {   id:3,
        titulo:'Givenchy',
        img: '../images/givenchy.webp',
        precio:'$25',
        tipo: 'woman',
    },
    {
        id: 4,
        titulo: '212 VIP',
        img: '../images/212-VIP-woman.jpg',
        precio: '$35',
        tipo: 'woman',        
    },
    {
        id: 5,
        titulo: 'Amor Amor',
        img: '../images/Amor-Amor.jpg',
        precio: '$35',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        tipo: 'woman',        
    },
    {
        id: 6,
        titulo: 'Kenzo Flower',
        img: '../images/kenzo-flower.jpg',
        precio: '$35',
        tipo: 'woman',        
    },
    {
        id: 7,
        titulo: 'Tommy Hilfiger',
        img: '../images/tommy-hilfiger-man.jpg',
        precio: '$35',
        tipo: 'man',        
    },
    {
        id: 8,
        titulo: '212 VIP Men',
        img: '../images/212-VIP-men.jpg',
        precio: '$40',
        tipo: 'man',
    },
    {
        id: 9,
        titulo: 'The secret templation edt Antonio Banderas',
        img: '../images/',
        precio: '$40',
        tipo: 'man',
    },
    {
        id: 10,
        titulo: ' Invictus Legend Paco Rabanne',
        img: '',
        precio: '$40',
        tipo: 'man',
    },
    {
        id: 11,
        titulo: 'Dior',
        img: '',
        precio: '$40',
        tipo: 'man',
    },
    {
        id: 12,
        titulo: 'Mujercitas',
        img: '',
        precio: '$40',
        tipo: 'niños',
    },
    {
        id: 13,
        titulo: 'Paco',
        img: '',
        precio: '$40',
        tipo: 'niños',
    },
    {
        id: 14,
        titulo: 'Paula Cahen Dánvers',
        img: '',
        precio: '$40',
        tipo: 'niños',
    },
    {
        id: 15,
        titulo: 'Little paris baby boy',
        img: '',
        precio: '$40',
        tipo: 'niños',
    },
    {
        id: 16,
        titulo: 'Colonia',
        img: '',
        precio: '$40',
        tipo: 'niños',
    }
];


export const traerPerfumes = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(perfumesGeneral);
    }, 5000);
});