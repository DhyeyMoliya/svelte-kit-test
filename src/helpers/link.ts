export let redirect = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.style.display = 'none';
    const body = document.getElementsByTagName('body')[0];
    if (body) {
        body.appendChild(a);
        a.click();
        body.removeChild(a);
    }
}

