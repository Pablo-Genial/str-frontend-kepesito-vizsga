function changeOuterLinks() {
    const links = document.querySelectorAll('nav#link-list a');
    links.forEach(link => {
        if (link.innerHTML.includes('outer-link')) {
            link.setAttribute('target', '_blank');
            link.innerHTML = `<strong>${link.innerHTML}</strong>`;
            }
        })
    document.querySelectorAll('nav').forEach((link) => {
        link.style.display = 'flex';
        link.style.flexDirection = 'column';
        link.style.width = '30%';
        link.style.margin = '0px auto';
        link.style.border = '1px solid blue';
        link.style.padding = '16px';
    });
}

export { changeOuterLinks };