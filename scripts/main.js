document.body.onload = async () => {
    const router = await import('./router.js');
    new router.default();
}