export default class Home {
    constructor() {
        document.getElementById('buttons').addEventListener('click', () => {
            window.location.hash = '#buttons';
        })
    }

}