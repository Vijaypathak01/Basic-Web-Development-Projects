const body = document.querySelector('body');

body.addEventListener('click', (e)=>{
    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');
    const greetings = ["Hello", "नमस्ते", "Hola", "Bonjour", "Ciao", "Olá","নমস্কার", "こんにちは", "안녕하세요", "你好", "નમસ્તે", "Salam"];
    circleElement.textContent = greetings[Math.floor(Math.random()*12)];

    const color = ['red','blue','green','yellow','orange','pink'];
    circleElement.style.backgroundColor = color[Math.floor(Math.random()*6)];

    circleElement.style.top = `${e.clientY - 25}px`;
    circleElement.style.left = `${e.clientX - 25}px`;

    body.append(circleElement);

    setTimeout(()=>{
        circleElement.remove();
    },5000);

})
