testd = {
    'Apple': '100.53',
    'Google': '50.25'
}
console.log(testd);
for (let key in testd){
    testd[key] = parseFloat(testd[key])
}
console.log(testd);
