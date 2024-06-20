var app = document.getElementById('slogan');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Inovação Sustentável!')
    .pauseFor(2500)
    .deleteChars(12)
    .typeString('<strong>Tecnológica!</strong>')
    .pauseFor(2500)
    .start();

     //envio de dados para a api
     const form = document.getElementById('form');
    const nomeForm = document.getElementById('formNome');
    const emailForm = document.getElementById('formEmail');
    const telefoneForm = document.getElementById('formTel');
    const comentarioForm = document.getElementById('formComen');

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
        name: nomeForm.value.trim(),
        email: emailForm.value.trim(),
        telefone: telefoneForm.value.trim(),
        comentario: comentarioForm.value.trim(),
    };

    if (!formData.name || !formData.email || !formData.telefone || !formData.comentario) {
        console.error("Todos os campos são obrigatórios!!");
        return;
    }

    try {
        const response = await fetch('http://localhost:8080/usuarios', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            console.log("Os dados foram enviados com sucesso!");
            alert("deu certo")
            location.reload()
        } else {
            console.error("Algum erro foi encontrado", await response.json());
        }
    } catch (error) {
        console.error("Erro:", error);
    }
});
    //filtro de busca

    filterSelection("all")
    function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("cardCtg");
    if (c == "all") c = "";
    // adicionar o show nos elementos com a ctg
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "showCtg");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "showCtg");
    }
    }

    // mostrar os elementos com a ctg
    function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
        }
    }
    }

    // esconder os outros
    function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
    }
        
    // mudar o efeito de selecionado das categorias
    var btnContainer = document.getElementById("tdsCtg");
    var btns = btnContainer.getElementsByClassName("ctg");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    }

    function menuHamburguer(){
        const menu = document.querySelector('.menu');
        if (menu.style.display === "flex" || menu.style.display === "") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }
    
    }

    //scroll
    const myObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    });
    
    const elements = document.querySelectorAll('.hidden');
    
    elements.forEach((element) => myObserver.observe(element));