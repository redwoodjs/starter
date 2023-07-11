const fs = require('fs');

// Read the content of schema.prisma file
fs.readFile('api/db/schema.prisma', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Replace the provider value with "postgresql"
  const updatedContent = data.replace('provider = "sqlite"', 'provider = "postgresql"');

  // Write the modified content back to the file
  fs.writeFile('schema.prisma', updatedContent, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('schema.prisma file updated successfully!');
  });
});
