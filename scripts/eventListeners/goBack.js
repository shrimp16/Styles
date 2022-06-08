export default class GoBack {
    constructor() {
        document.getElementById('go-back').addEventListener('click', () => {
            window.location.hash = '#home'
        })
    }
}