module.exports = function reverse (n) {
    n = n + ''
    n = n.replace(/[^0-9]/g, '')
    return n.split('').reverse().join('')
    
}
