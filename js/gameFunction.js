const handleShowCurrentBox = (box) => {
    const responses = JSON.parse(localStorage.getItem('responses'));
    
    if (box === 0 && !responses) {
        document.querySelector(`.caja`).style.display = "block"
    } else {
        console.log(responses.length)
        document.querySelector(`.caja${responses.length - 1 === 0 ? "" : (responses.length - 1)}`).style.display = "none"
        document.querySelector(`.caja${responses.length === 0 ? "" : responses.length}`).style.display = "block"
    }
    
}

const handleOptionCorrectShow = (className) =>
    document.querySelector(className).style.display = "block"

const handleChangeView = (number) =>
    window.location.href = `./index${number}.html`

const handleSaveCorrectQuestion = (number) => {
    const responses = JSON.parse(localStorage.getItem('responses'));

    if (!responses) {
        localStorage.setItem("responses", JSON.stringify([number]));
    } else {
        if(!responses.includes(number)) localStorage.setItem("responses", JSON.stringify([...responses, number]));
        
    }
}

const showBoxes = () => {
    const responses = JSON.parse(localStorage.getItem("responses"));

    if (responses) {
        if (document.querySelector(`.caja${(responses.length - 1) === 0 ? "" : responses.length - 1}`)) {
            document.querySelector(`.caja${(responses.length - 1) === 0 ? "" : responses.length - 1}`)
            .style.display = "block";
        }
    }
}

const handleCheckResults = () => {
    const responses = JSON.parse(localStorage.getItem("responses"))

    if (!responses) {
        localStorage.setItem("total", "0");
        window.location.href = "./index553.html"
    }
    else {
        localStorage.setItem("total", JSON.stringify(responses.length));

        if (responses.length > 8) window.location.href = "./index552.html"
        else window.location.href = "./index553.html"
    }
}