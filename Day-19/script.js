function waterReminder(m, h) {
    let minutes = m * 1000 * 60
    let hours = h * 1000 *60 * 60
    let water_reminder = setInterval(() => {
        alert("Drink water and be hydrated")
    }, minutes);

    setTimeout(() => {
        clearInterval(water_reminder)
    },hours)
}

let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let min = document.getElementById('min').value
    let hour = document.getElementById('hour').value
    waterReminder(min,hour)
    alert("water reminder is set")
})