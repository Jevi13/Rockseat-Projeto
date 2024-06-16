function toggleMode(){
    const html = document.documentElement

    /* if (html.classList.contains('light')){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    } */

        // Comando para realizar a alteração do modo dark ou light, basicamente ao cliclar ele adiciona ou remove a class light! //
        html.classList.toggle('light')

        // Criando função para realizar a troca da imagem também! //


        const img = document.querySelector("#profile img")

        // criando condição para alterar a imagem//

        if (html.classList.contains("light")){
            img.setAttribute("src", "./assets/Jean_light.png")
        }else {
            img.setAttribute("src", "./assets/Jeanfotoprojeto.png")
        }
}