import fs from 'node:fs'

const json = {
  posts: [{ id: 1, title: 'json-server', author: 'typicode' }],
  comments: [{ id: 1, body: 'some comment', postId: 1 }],
  profile: { name: 'typicode' },
}

// Write the JSON object to the `db.json` file
fs.writeFileSync('db.json', JSON.stringify(json))

console.log('The JSON data has been inserted into the `db.json` file.')
