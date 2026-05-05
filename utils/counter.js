export const setupCounter = (element) => {
    let counter = 0;
    element.onclick = () => {
        counter += 1;
        element.innerHTML = `Counter ${counter}`;
    }
}