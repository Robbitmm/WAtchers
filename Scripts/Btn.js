function Condition_menu() {
    var element = document.getElementById("Btn")

    if (window.screen.width < 1284) {
        if (element.classList.contains('close')) {
            Open()
        }

        else if (element.classList.contains('open')) {
            Close()
        }
    }
}

function Open() {
    var element = document.getElementById("Btn")
    var $Conteudo = document.getElementById("conteudo")

    element.classList.remove("close")
    element.classList.add("open")

    $Conteudo.style.display = 'none'
}

function Close() {
    var element = document.getElementById("Btn")
    var $Conteudo = document.getElementById("conteudo")

    element.classList.remove("open")
    element.classList.add("close")

    $Conteudo.style.display = 'block'
}
    
                /*SEARCH*/


function Condition_search() {
    var search = document.getElementById("search_input")

    if (window.screen.width < 1280) {
        if (search.classList.contains('close')) {
            Open_Search()
        }

        else if (search.classList.contains('open')) {
            Close_Search()
        }
    }
}


function Open_Search() {
    var $OpenMenu = document.getElementById("search_input")
    var $CloseBtn = document.getElementById("BtnMenu")
    var $CloseLogo = document.getElementById("logo")

    $OpenMenu.classList.remove("close")
    $OpenMenu.classList.add("open")

    $OpenMenu.style.display = 'block'

    $CloseBtn.style.display = 'none'
    $CloseLogo.style.opacity = '0'
}

function Close_Search() {
    var $OpenMenu = document.getElementById("search_input")
    var $CloseBtn = document.getElementById("BtnMenu")
    var $ShowLogo = document.getElementById("logo")

    $OpenMenu.classList.remove("open")
    $OpenMenu.classList.add("close")

    $OpenMenu.style.display = 'none'

    $CloseBtn.style.display = 'block'
    $ShowLogo.style.opacity = '100'
}