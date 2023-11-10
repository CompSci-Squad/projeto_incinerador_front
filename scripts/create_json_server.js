import fs from 'node:fs'

import { faker } from '@faker-js/faker'

function createProduct() {
  return {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    images: [
      faker.image.urlLoremFlickr(),
      faker.image.urlLoremFlickr(),
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
  products: [],
  events: []
}

for (let i = 0; i < 64; i++) {
  json.products.push(createProduct())
  json.events.push(createEvent())
}

// Write the JSON object to the `db.json` file
fs.writeFileSync('db.json', JSON.stringify(json))

console.log('The JSON data has been inserted into the `db.json` file.')
