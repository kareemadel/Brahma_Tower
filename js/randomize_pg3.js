var Chrtr = document.getElementsByClassName("chr")[0];

function setText(txt) {
    for (var i = 0; i < 4; i++) {
        document.getElementsByClassName("talktext")[0].children[i].style.display = 'none';
    }
    document.getElementsByClassName("talktext")[0].children[txt - 1].style.display = '';
}

function randomMsg() {
    var R = Math.ceil(Math.random() * 4);
    setText(R);
    switch (R) {
        case 1:
            Chrtr.src = "assets/images/004Charmander_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png";
            break;

        case 2:
            Chrtr.src = "assets/images/Cute_pikachu_with_hat_by_mlpochea-d63xlom.png";
            break;

        case 3:
            Chrtr.src = "assets/images/001Bulbasaur_Pokemon_Mystery_Dungeon_Explorers_of_Sky.png";
            break;

        case 4:
            Chrtr.src = "assets/images/squirtle33.png";
            break;
    }
}

randomMsg();
