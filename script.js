const IMAGES = [
    "https://i.pinimg.com/736x/86/e2/10/86e2102f0d9afcb4f47bdead10ab7cf1.jpg",
    "https://i.pinimg.com/564x/f0/7b/af/f07bafe1d402c7158c1bc15a1a84a8ec.jpg",
    "https://i.pinimg.com/564x/d8/e8/56/d8e85696363809cd85f8e747a76cc4cd.jpg",
    "https://i.pinimg.com/564x/ae/9b/9d/ae9b9df65fa5109f11d83d2382024e57.jpg"
];

function generateImage() {
    let randomNumber = Math.floor(Math.random() * (IMAGES.length));
    document.body.style.backgroundImage = `url(${IMAGES[randomNumber]})`;
}
