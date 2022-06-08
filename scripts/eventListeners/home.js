export default class Home {
    constructor() {

        document.getElementById('headers').addEventListener('click', () => {
            window.location.hash = '#headers'
        })

        document.getElementById('buttons').addEventListener('click', () => {
            window.location.hash = '#buttons';
        })

        document.getElementById('switches').addEventListener('click', () => {
            window.location.hash = '#switches';
        })

        document.getElementById('borders').addEventListener('click', () => {
            window.location.hash = '#borders';
        })

        document.getElementById('imges').addEventListener('click', () => {
            window.location.hash = '#images';
        })

    }

}