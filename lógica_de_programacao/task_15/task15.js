const notification = index => {
    let alert = ''
    if (index >= 0.3 && index < 0.4) {
        alert = 'group 1 suspend activities'
    } else if (index >= 0.4 && index < 0.5) {
        alert = 'group 1 and 2 suspend activities'
    } else if (index >= 0.5) {
        alert = 'all industries paralyze activities'
    }
    return alert
}

console.log(notification(0.5))
