//TRADUCCIÓN DE LAS PÁGINAS

const cambiarIdioma = async language => {
    const lecturaJson = await fetch(`/languages/urano/${language}.json`)
    const textos = await lecturaJson.json()

    console.log(textos)
}

$("#banderas").on("click", (e) => {
    cambiarIdioma(e.target.parentElement.dataset.language)
})