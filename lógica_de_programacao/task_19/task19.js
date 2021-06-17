var duration = 666666

var hours = parseInt(duration / 3600)
console.log(hours)
var time = (duration - (hours * 3600))

var minutes = parseInt(time / 60)
console.log(minutes)
var time = (duration - ((minutes * 60) + (hours * 3600)))

console.log(time)