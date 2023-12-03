import fs from 'node:fs'

import { faker } from '@faker-js/faker'

function createProduct() {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    images: [
      faker.image.urlPicsumPhotos(),
      faker.image.urlLoremFlickr(),
      faker.image.urlLoremFlickr(),
    ],
  }
}

function createEvent() {
  return {
    id: faker.string.uuid(),
    title: faker.lorem.word(),
    description: faker.lorem.sentence(),
    image: faker.image.urlLoremFlickr(),
    location: {
      number: faker.location.buildingNumber(),
      street: faker.location.street(),
      postalCode: faker.location.zipCode(),
    },
    date: faker.date.anytime(),
  }
}

const json = {
  products: [
    {
      id: faker.string.uuid(),
      title: 'Camiseta solidária',
      price: '30.00',
      description:
        'Camiseta confortável com o logo da Usina Eco-Cultural, feita em 100% algodão vegetal, leve e prática. Para você espalhar nosso movimento! Disponível em tamanhos P, M e G.',
      images: [
        '/images/camisetaSolidaria1.jpg',
        '/images/camisetaSolidaria2.jpg',
        '/images/camisetaSolidaria3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Capinha celular logo',
      price: '18.00',
      description: 'Disponível para todos os celulares lançados oficialmente no Brasil após 2019, 100% de silicone aveludada por dentro, anti queda e com nosso logo, para a Usina Eco Cultural sempre estar com você!',
      images: [
        '/images/capinhaUsina1.jpg',
        '/images/capinhaUsina2.jpg',
        '/images/capinhaUsina3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Capinha Celular Incinerador',
      price: '18.00',
      description: 'Disponível para todos os celulares lançados oficialmente no Brasil após 2019, 100% de silicone aveludada por dentro, anti queda e com a imagem do Incinerador Vergueiro, para você espalhar sua beleza onde você for!',
      images: [
        '/images/capinhaincinerador1.jpg',
        '/images/capinhaincinerador2.jpg',
        '/images/capinhaincinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Calendario Incinerador',
      price: '23.00',
      description: 'Disponível em formato quadrado e redondo, com cola 3M, para decorar e espalhar nosso movimento!',
      images: [
        '/images/calendarioIncinerador1.jpg',
        '/images/calendarioIncinerador2.jpg',
        '/images/calendarioIncinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Mouse Pad Incinerador',
      price: '16.00',
      description: 'Anti derrapante, alta durabilidade e com lindas fotos do nosso querido Incinerador Vergueiro.',
      images: [
        '/images/mousePadIncinerador1.jpg',
        '/images/mousePadIncinerador2.jpg',
        '/images/mousePadIncinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Moltetom Usina Eco-cultural',
      price: '45.00',
      description: 'Feito em 100% de algodão, com tamanhos P, M e G, diversas cores e estampas, desde nosso logo a imagens profissionais do Incinerador. Confortável e quentinho',
      images: [
        '/images/moletomUsina1.jpg',
        '/images/moletomUsina2.jpg',
        '/images/moletomUsina3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Camiseta solidária',
      price: '30.00',
      description:
        'Camiseta confortável com o logo da Usina Eco-Cultural, feita em 100% algodão vegetal, leve e prática. Para você espalhar nosso movimento! Disponível em tamanhos P, M e G.',
      images: [
        '/images/camisetaSolidaria1.jpg',
        '/images/camisetaSolidaria2.jpg',
        '/images/camisetaSolidaria3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Capinha celular logo',
      price: '18.00',
      description: 'Disponível para todos os celulares lançados oficialmente no Brasil após 2019, 100% de silicone aveludada por dentro, anti queda e com nosso logo, para a Usina Eco Cultural sempre estar com você!',
      images: [
        '/images/capinhaUsina1.jpg',
        '/images/capinhaUsina2.jpg',
        '/images/capinhaUsina3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Capinha Celular Incinerador',
      price: '18.00',
      description: 'Disponível para todos os celulares lançados oficialmente no Brasil após 2019, 100% de silicone aveludada por dentro, anti queda e com a imagem do Incinerador Vergueiro, para você espalhar sua beleza onde você for!',
      images: [
        '/images/capinhaincinerador1.jpg',
        '/images/capinhaincinerador2.jpg',
        '/images/capinhaincinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Calendario Incinerador',
      price: '23.00',
      description: 'Disponível em formato quadrado e redondo, com cola 3M, para decorar e espalhar nosso movimento!',
      images: [
        '/images/calendarioIncinerador1.jpg',
        '/images/calendarioIncinerador2.jpg',
        '/images/calendarioIncinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Mouse Pad Incinerador',
      price: '16.00',
      description: 'Anti derrapante, alta durabilidade e com lindas fotos do nosso querido Incinerador Vergueiro.',
      images: [
        '/images/mousePadIncinerador1.jpg',
        '/images/mousePadIncinerador2.jpg',
        '/images/mousePadIncinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Moltetom Usina Eco-cultural',
      price: '45.00',
      description: 'Feito em 100% de algodão, com tamanhos P, M e G, diversas cores e estampas, desde nosso logo a imagens profissionais do Incinerador. Confortável e quentinho',
      images: [
        '/images/moletomUsina1.jpg',
        '/images/moletomUsina2.jpg',
        '/images/moletomUsina3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Camiseta solidária',
      price: '30.00',
      description:
        'Camiseta confortável com o logo da Usina Eco-Cultural, feita em 100% algodão vegetal, leve e prática. Para você espalhar nosso movimento! Disponível em tamanhos P, M e G.',
      images: [
        '/images/camisetaSolidaria1.jpg',
        '/images/camisetaSolidaria2.jpg',
        '/images/camisetaSolidaria3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Capinha celular logo',
      price: '18.00',
      description: 'Disponível para todos os celulares lançados oficialmente no Brasil após 2019, 100% de silicone aveludada por dentro, anti queda e com nosso logo, para a Usina Eco Cultural sempre estar com você!',
      images: [
        '/images/capinhaUsina1.jpg',
        '/images/capinhaUsina2.jpg',
        '/images/capinhaUsina3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Capinha Celular Incinerador',
      price: '18.00',
      description: 'Disponível para todos os celulares lançados oficialmente no Brasil após 2019, 100% de silicone aveludada por dentro, anti queda e com a imagem do Incinerador Vergueiro, para você espalhar sua beleza onde você for!',
      images: [
        '/images/capinhaincinerador1.jpg',
        '/images/capinhaincinerador2.jpg',
        '/images/capinhaincinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Calendario Incinerador',
      price: '23.00',
      description: 'Disponível em formato quadrado e redondo, com cola 3M, para decorar e espalhar nosso movimento!',
      images: [
        '/images/calendarioIncinerador1.jpg',
        '/images/calendarioIncinerador2.jpg',
        '/images/calendarioIncinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Mouse Pad Incinerador',
      price: '16.00',
      description: 'Anti derrapante, alta durabilidade e com lindas fotos do nosso querido Incinerador Vergueiro.',
      images: [
        '/images/mousePadIncinerador1.jpg',
        '/images/mousePadIncinerador2.jpg',
        '/images/mousePadIncinerador3.jpg',
      ],
    },
    {
      id: faker.string.uuid(),
      title: 'Moltetom Usina Eco-cultural',
      price: '45.00',
      description: 'Feito em 100% de algodão, com tamanhos P, M e G, diversas cores e estampas, desde nosso logo a imagens profissionais do Incinerador. Confortável e quentinho',
      images: [
        '/images/moletomUsina1.jpg',
        '/images/moletomUsina2.jpg',
        '/images/moletomUsina3.jpg',
      ],
    },
  ],
  events: [],
}

for (let i = 0; i < 64; i++) {
  json.products.push(createProduct())
  json.events.push(createEvent())
}

// Write the JSON object to the `db.json` file
fs.writeFileSync('db.json', JSON.stringify(json))

console.log('The JSON data has been inserted into the `db.json` file.')
