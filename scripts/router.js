export default class Router {
    constructor() {

        this.body = document.getElementById('body');

        this.routeChangeHandler();

        window.addEventListener('hashchange', () => {
            this.routeChangeHandler();
        })

    }

    async routeChangeHandler() {
        let hash = window.location.hash.substring(1);

        if(hash === ''){
            return;
        }

        this.body.innerHTML = '';

        await fetch(`../pages/${hash}.html`)
            .then(response => response.text()
                .then((response) => {
                    this.body.innerHTML = response;
                }))
    }
}