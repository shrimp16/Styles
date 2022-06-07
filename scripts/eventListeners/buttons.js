export default class Buttons {
    constructor() {
        document.getElementById('go-back').addEventListener('click', () => {
            window.location.hash = '#home'
        })
    }
}