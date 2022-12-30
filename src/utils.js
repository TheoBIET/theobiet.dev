export const scrollTo = (className, toTop = false) => {
    let element = document.querySelector(`.${className}`);
    if(toTop) element = document.querySelector(`#App`);
    element.scrollIntoView({ behavior: 'smooth' });
};