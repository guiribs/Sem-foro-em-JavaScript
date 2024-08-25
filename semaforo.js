const lights = {
    red: document.querySelector('.red'),
    yellow: document.querySelector('.yellow'),
    green: document.querySelector('.green')
};

let automaticInterval = null;

const turnOn = color => {
    Object.keys(lights).forEach(light => {
        lights[light].classList.toggle('active', light === color);
    });
};

const control = action => {
    clearInterval(automaticInterval); // Para o modo automático se estiver rodando

    const actions = {
        red: () => turnOn('red'),
        yellow: () => turnOn('yellow'),
        green: () => turnOn('green'),
        automatic: () => {
            let colors = ['red', 'yellow', 'green'];
            let index = 0;
            automaticInterval = setInterval(() => {
                turnOn(colors[index]);
                index = (index + 1) % colors.length;
            }, 1000);
        }
    };

    actions[action] ? actions[action]() : console.error('Ação inválida');
};
