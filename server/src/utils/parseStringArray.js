/**
 * Split and trim a string array
 * 
 * Example:
 * parseStringArray("ReactJS,React Native,   Node.js")
 * => ['ReactJS', 'React Native', 'Node.js']
 * 
 * @param {string} arrayAsString 
 */
module.exports = function parseStringArray(arrayAsString) {
  return arrayAsString.split(',').map(item => item.trim());
}