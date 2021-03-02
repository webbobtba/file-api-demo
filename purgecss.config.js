module.exports = {
  content: [
    './src/index.html'
  ],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
}