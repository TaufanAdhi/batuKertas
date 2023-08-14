// const gunting = document.querySelector('.gunting')
const user = document.querySelectorAll('.container .player div');
const final = document.querySelector('h1');
const musuh = document.querySelector('.lawan')
const team = document.getElementById('scorPlayer');
const enemy = document.getElementById('scorLawan');
let angkaTeam = 0;
let angkaEnemy = 0;
let pilihan;
// for (let i = 0; i < user.length; i++) {

//     user[i].addEventListener('click', function () {

//         switch (i) {
//             case 0:
//                 pilihan = 'gunting';
//                 utama(pilihan);
//                 break
//             case 1:
//                 pilihan = 'batu';
//                 utama(pilihan);
//                 break
//             case 2:
//                 pilihan = 'kertas';
//                 utama(pilihan);
//                 break
//         }
//     })
// }





function putar() {
    const hasil = ['draw', 'anda menang', 'anda kalah'];
    let i = 0;
    const waktu = new Date().getTime();


    setInterval(() => {


        if (new Date().getTime() - waktu > 1000) {

            return

        }



        if (i === 3) {
            i = 0;
        }


        switch (i) {

            case 0:
                musuh.style.backgroundImage = 'url(gunting-lawan.png)';
                break
            case 1:
                musuh.style.backgroundImage = 'url(batu-lawan.png)';
                break
            case 2:
                musuh.style.backgroundImage = 'url(kertas-lawan.png)';
                break
        }
        final.innerHTML = hasil[i++];

    }, 100)



}

const nama = document.getElementById('nama')
const btn = document.getElementById('btn')
const kotak = document.querySelector('.kotak')
const warning = document.querySelector('.warning')

nama.addEventListener('change', (e) => {
    let input = e.target.value;
    btn.onclick = function () {
        kotak.style.display = "none";

    }


    for (let i = 0; i < user.length; i++) {

        user[i].addEventListener('click', function () {
    
            switch (i) {
                case 0:
                    pilihan = 'gunting';
                    utama(pilihan);
                    break
                case 1:
                    pilihan = 'batu';
                    utama(pilihan);
                    break
                case 2:
                    pilihan = 'kertas';
                    utama(pilihan);
                    break
            }
        })
    }

    function utama(pilihan) {
        // setingan user
        let user = pilihan

        // setingan komputer 
        let lawan;
        let comp = Math.random();
        console.log(comp)
        if (comp < 0.3) {
            lawan = 'gunting';
        } else if (comp < 0.6) {
            lawan = 'batu';
        } else {
            lawan = 'kertas';
        }




        putar();

        // gameplay 
        console.log(user)
        console.log(lawan)

        setTimeout(function () {



            switch (lawan) {

                case 'gunting':
                    musuh.style.backgroundImage = 'url(gunting-lawan.png)';
                    break
                case 'batu':
                    musuh.style.backgroundImage = 'url(batu-lawan.png)';
                    break
                case 'kertas':
                    musuh.style.backgroundImage = 'url(kertas-lawan.png)';
                    break
            }

            if (user === lawan) {

                final.innerHTML = 'draw'

            } else if (user == 'batu') {
                (user == 'batu' && lawan == 'gunting') ? final.innerHTML = 'anda menang' : final.innerHTML = 'anda kalah';
            } else if (user == 'kertas') {
                (user == 'kertas' && lawan == 'batu') ? final.innerHTML = 'anda menang' : final.innerHTML = 'anda kalah';
            } else {
                (user == 'gunting' && lawan == 'kertas') ? final.innerHTML = 'anda menang' : final.innerHTML = 'anda kalah';
            }

            if (final.innerHTML === 'anda menang') {
                angkaTeam++
                team.innerHTML = angkaTeam;
            } else if (final.innerHTML === 'anda kalah') {
                angkaEnemy++
                enemy.innerHTML = angkaEnemy;
            }


            if (angkaEnemy >= 3 || angkaTeam >= 3) {

                warning.style.display = 'block'
                const last = document.getElementById('last');
                
                if(angkaEnemy === 3){
                    
                    last.innerHTML = `HAHAHAHAHA GOBLOK LU ${input} Kalah sama BOT`
                }else {

                    
                    last.innerHTML = `HAHAHAHAHA HOKI LU ${input}`
                }

                angkaTeam = 0
                team.innerHTML = angkaTeam;
                angkaEnemy = 0
                enemy.innerHTML = angkaEnemy;


                setTimeout(function(){

                    warning.style.display = 'none' 

                }, 1000)

            }


        }, 1000)



    }


})



// function utama(pilihan) {
//     // setingan user
//     let user = pilihan

//     // setingan komputer 
//     let lawan;
//     let comp = Math.random();
//     console.log(comp)
//     if (comp < 0.3) {
//         lawan = 'gunting';
//     } else if (comp < 0.6) {
//         lawan = 'batu';
//     } else {
//         lawan = 'kertas';
//     }




//     putar();

//     // gameplay 
//     console.log(user)
//     console.log(lawan)

//     setTimeout(function () {



//         switch (lawan) {

//             case 'gunting':
//                 musuh.style.backgroundImage = 'url(gunting-lawan.png)';
//                 break
//             case 'batu':
//                 musuh.style.backgroundImage = 'url(batu-lawan.png)';
//                 break
//             case 'kertas':
//                 musuh.style.backgroundImage = 'url(kertas-lawan.png)';
//                 break
//         }

//         if (user === lawan) {

//             final.innerHTML = 'draw'

//         } else if (user == 'batu') {
//             (user == 'batu' && lawan == 'gunting') ? final.innerHTML = 'anda menang' : final.innerHTML = 'anda kalah';
//         } else if (user == 'kertas') {
//             (user == 'kertas' && lawan == 'batu') ? final.innerHTML = 'anda menang' : final.innerHTML = 'anda kalah';
//         } else {
//             (user == 'gunting' && lawan == 'kertas') ? final.innerHTML = 'anda menang' : final.innerHTML = 'anda kalah';
//         }

//         if (final.innerHTML === 'anda menang') {
//             angkaTeam++
//             team.innerHTML = angkaTeam;
//         } else if (final.innerHTML === 'anda kalah') {
//             angkaEnemy++
//             enemy.innerHTML = angkaEnemy;
//         }


//         if (angkaEnemy >= 3 || angkaTeam >= 3) {




//         }


//     }, 1000)



// }

// input user 























