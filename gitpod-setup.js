const fs = require('fs')

// Read the content of schema.prisma file
fs.readFile('api/db/schema.prisma', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  // Replace the provider value with "postgresql"
  const updatedContent = data.replace(
    'provider = "sqlite"',
    'provider = "postgres"'
  )

  // Write the modified content back to the file
  fs.writeFile('api/db/schema.prisma', updatedContent, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('schema.prisma file updated successfully!')
  })
})

fs.readFile('.gitpod.yml', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  // Replace the Create Redwood Command
  const updatedContent = data.replace(
    'yarn create redwood-app . --overwrite --yarn-install --typescript --git-init=false',
    ''
  ) // Replace the script that runs the node script
  .replace(
    'node gitpod-setup.js',
    ''
  )

  // Write the modified content back to the file
  fs.writeFile('.gitpod.yml', updatedContent, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('.gitpod.yml file updated successfully!')
  })
}