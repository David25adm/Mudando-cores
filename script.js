document.getElementById('mudar-cor').addEventListener('click',function()) {
    let cores = ["#FF69B4","#34A85A","#FFC107","#8E24AA","#4CAF50"];
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
};

