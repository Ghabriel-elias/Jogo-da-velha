const coluna1 = document.getElementById('coluna1')
const coluna2 = document.getElementById('coluna2')
const coluna3 = document.getElementById('coluna3')

let checkPlayer1 = ''
let checkPlayer2 = ''

document.getElementById('submit').addEventListener('click', function(ev){

  ev.preventDefault()
  
  let player1 = document.getElementById('name1').value
  let player2 = document.getElementById('name2').value

  document.querySelectorAll('input[name="firstInput"]:checked').forEach(function(item){ 
    checkPlayer1 = item.dataset.player1
  })
  document.querySelectorAll('input[name="secondInput"]:checked').forEach(function(item){ 
    checkPlayer2 = item.dataset.player2
  })

  const btn1 = document.createElement('button')
  btn1.id = 'um'
  btn1.className = 'btnGame'
  btn1.innerText = 0
  const btn2 = document.createElement('button')
  btn2.id = 'dois'
  btn2.className = 'btnGame'
  btn2.innerText = 1
  const btn3 = document.createElement('button')
  btn3.id = 'tres'
  btn3.className = 'btnGame'
  btn3.innerText = 2
  const btn4 = document.createElement('button')
  btn4.id = 'quatro'
  btn4.className = 'btnGame'
  btn4.innerText = 3
  const btn5 = document.createElement('button')
  btn5.id = 'cinco'
  btn5.className = 'btnGame'
  btn5.innerText = 4
  const btn6 = document.createElement('button')
  btn6.id = 'seis'
  btn6.className = 'btnGame'
  btn6.innerText = 5
  const btn7 = document.createElement('button')
  btn7.id = 'sete'
  btn7.className = 'btnGame'
  btn7.innerText = 6
  const btn8 = document.createElement('button')
  btn8.id = 'oito'
  btn8.className = 'btnGame'
  btn8.innerText = 7
  const btn9 = document.createElement('button')
  btn9.id = 'nove'
  btn9.className = 'btnGame'
  btn9.innerText = 8

  const reiniciar = document.createElement('button')
  reiniciar.id = 'reiniciar'
  reiniciar.innerText = 'Reiniciar'
  reiniciar.className = 'btn btn-primary'

  if(checkPlayer1 === checkPlayer2){
    document.querySelectorAll('input[name="secondInput"]:checked').forEach(function(item){
      let remove = item
      remove.checked = false
    })
  } else if(player1 !== '' && player2 !== '' && checkPlayer1 !== '' && checkPlayer2 !== ''){
    // Removendo os inputs e o título
    const inputs = document.getElementById('inputs')
    const title = document.getElementById("title")
    title.remove()
    inputs.remove()
    // Colunas que foram adicionadas os botões
    coluna1.append(btn1, btn2, btn3)
    coluna2.append(btn4, btn5, btn6)
    coluna3.append(btn7, btn8, btn9)
  }

  const divReiniciar = document.getElementById('btn-reinicar')
  const main = document.getElementById("main")
  const round = document.getElementById("titlesMsg")
  const RoundFilho = document.createElement('h4')  
  const placar = document.getElementById('placar')
  let cont1 = 0
  let cont2 = 0
  let cont3 = 0

  //Adicionando o placar
  const contPlacar = document.createElement('h5')
  contPlacar.innerText = player1 + " " + cont1 + " x " + cont2 + " " + player2

  //Função do botão reiniciar
  function reinicar(){
       document.getElementById('reiniciar').addEventListener('click', function(){
        main.dataset.escolha = checkPlayer1
        contPlacar.innerText = player1 + " " + cont1 + " x " + cont2 + " " + player2
        RoundFilho.innerText = "É a vez de " + player1 + "!"
        divReiniciar.removeChild(reiniciar)
        cont3 = 0
    document.querySelectorAll('.btnGame').forEach(function(ev, i){
      ev.innerText = i
      console.log(ev.innerText)
    })
    document.querySelectorAll('.btnGame').forEach(function(ev){
     ev.classList.remove('verde')
   })
   document.querySelectorAll('.btnGame').forEach(function(ev){
     ev.classList.remove('vermelho')
   })
   document.querySelectorAll('.btnGame').forEach(function(ev){
     ev.removeAttribute('disabled', true)
   })
   })
  }

document.querySelectorAll('.btnGame').forEach(function(ev){

  main.dataset.escolha = checkPlayer1
  const verificacao = main.dataset.escolha 
  round.id = 'msg'
  placar.appendChild(contPlacar)
  round.appendChild(RoundFilho)
  RoundFilho.innerText = "É a vez de " + player1 + "!"
   ev.addEventListener('click', function(){
     if(verificacao == 'X'){
      RoundFilho.innerText = "É a vez de " + player1 + "!"
      if (main.dataset.escolha === "X") {
         ev.innerText = 'X'
         ev.classList.add('verde')
         RoundFilho.innerText = "É a vez de " + player2 + "!"
         ev.setAttribute('disabled', true)
         main.dataset.escolha = "O"
       } else if(main.dataset.escolha === "O") {
         ev.innerText = 'O'
         ev.classList.add('vermelho')
         RoundFilho.innerText = "É a vez de " + player1 + "!"
         ev.setAttribute('disabled', true)
         main.dataset.escolha = "X"
       }
      } else if(verificacao == 'O'){
        RoundFilho.innerText = "É a vez de " + player1 + "!"
        if (main.dataset.escolha === "X") {
          ev.innerText = 'X'
          ev.classList.add('verde')
          RoundFilho.innerText = "É a vez de " + player1 + "!"
          ev.setAttribute('disabled', true)
          main.dataset.escolha = "O"
        } else if(main.dataset.escolha === "O") {
          ev.innerText = 'O'
          ev.classList.add('vermelho')
          RoundFilho.innerText = "É a vez de " + player2 + "!"
          ev.setAttribute('disabled', true)
          main.dataset.escolha = "X"
        }
      }

      const um = document.getElementById('um').innerText
      const dois = document.getElementById('dois').innerText
      const tres = document.getElementById('tres').innerText
      const quatro = document.getElementById('quatro').innerText
      const cinco = document.getElementById('cinco').innerText
      const seis = document.getElementById('seis').innerText
      const sete = document.getElementById('sete').innerText
      const oito = document.getElementById('oito').innerText
      const nove = document.getElementById('nove').innerText

      // Verificações na horizontal
      if(um == dois && um == tres){
        document.querySelectorAll('.btnGame').forEach(function(ev){
         ev.setAttribute('disabled', true)
        })
        divReiniciar.appendChild(reiniciar)
        reinicar()
        if(um == 'O'  &&  checkPlayer1 == 'O' || um == 'X'  &&  checkPlayer1 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player1
          cont1++
          cont3++
          
        } else if (um== 'O'  &&  checkPlayer2 == 'O' || um == 'X'  &&  checkPlayer2 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player2
          cont2++
          cont3++
        }
      } else if(quatro == cinco && quatro == seis){
        document.querySelectorAll('.btnGame').forEach(function(ev){
         ev.setAttribute('disabled', true)
        })
        divReiniciar.appendChild(reiniciar)
        reinicar()
        if(quatro == 'O'  &&  checkPlayer1 == 'O' || quatro == 'X'  &&  checkPlayer1 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player1
          cont1++
          cont3++
        } else if (quatro == 'O'  &&  checkPlayer2 == 'O' || quatro == 'X'  &&  checkPlayer2 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player2
          cont2++
          cont3++
        }
      } else if (sete == oito && sete == nove){
        document.querySelectorAll('.btnGame').forEach(function(ev){
         ev.setAttribute('disabled', true)
        })
        divReiniciar.appendChild(reiniciar)
        reinicar()
        if(sete == 'O'  &&  checkPlayer1 == 'O' || sete == 'X'  &&  checkPlayer1 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player1
          cont1++
          cont3++
        } else if (sete == 'O'  &&  checkPlayer2 == 'O' || sete == 'X'  &&  checkPlayer2 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player2
          cont2++
          cont3++
        }
      }

      //Verificações na vertical
      if(um == quatro && um == sete){
        document.querySelectorAll('.btnGame').forEach(function(ev){
         ev.setAttribute('disabled', true)
        })
        divReiniciar.appendChild(reiniciar)
        reinicar()
        if(um == 'O'  &&  checkPlayer1 == 'O' || um== 'X'  &&  checkPlayer1 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player1
          cont1++
          cont3++
        } else if (um == 'O'  &&  checkPlayer2 == 'O' || um == 'X'  &&  checkPlayer2 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player2
          cont2++
          cont3++
        }
      } else if(dois == cinco && dois == oito){
        document.querySelectorAll('.btnGame').forEach(function(ev){
         ev.setAttribute('disabled', true)
        })
        divReiniciar.appendChild(reiniciar)
        reinicar()
        if(dois == 'O'  &&  checkPlayer1 == 'O' || dois == 'X'  &&  checkPlayer1 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player1
          cont1++
          cont3++
        } else if (dois == 'O'  &&  checkPlayer2 == 'O' || dois == 'X'  &&  checkPlayer2 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player2
          cont2++
          cont3++
        }
      } else if (tres == seis && tres == nove){
        document.querySelectorAll('.btnGame').forEach(function(ev){
         ev.setAttribute('disabled', true)
        })
        divReiniciar.appendChild(reiniciar)
        reinicar()
        if(tres == 'O'  &&  checkPlayer1 == 'O' || tres == 'X'  &&  checkPlayer1 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player1
          cont1++
          cont3++
        } else if (tres == 'O'  &&  checkPlayer2 == 'O' || tres == 'X'  &&  checkPlayer2 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player2
          cont2++
          cont3++
        }
      }

      //Verificações na diagonal
      if(um == cinco && um == nove){
        document.querySelectorAll('.btnGame').forEach(function(ev){
         ev.setAttribute('disabled', true)
        })
        divReiniciar.appendChild(reiniciar)
        reinicar()
        if(um == 'O'  &&  checkPlayer1 == 'O' || um == 'X'  &&  checkPlayer1 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player1
          cont1++
          cont3++
        } else if (um == 'O'  &&  checkPlayer2 == 'O' || um == 'X'  &&  checkPlayer2 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player2
          cont2++
          cont3++
        }
      } else if(tres == cinco && tres == sete){
        document.querySelectorAll('.btnGame').forEach(function(ev){
         ev.setAttribute('disabled', true)
        })
        divReiniciar.appendChild(reiniciar)
        reinicar()
        if(tres == 'O'  &&  checkPlayer1 == 'O' || tres == 'X'  &&  checkPlayer1 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player1
          cont1++
          cont3++
        } else if (tres == 'O'  &&  checkPlayer2 == 'O' || tres == 'X'  &&  checkPlayer2 == 'X'){
          RoundFilho.innerText = 'O(a) vencedor(a) é ' + player2
          cont2++
          cont3++
        }
      } 
      // Verificação de empate
      else if(um !== '0' && dois !== '1' && tres !== '2' && quatro !== '3' && cinco !== '4' && seis !== '5' && sete !== '6' && oito !== '7' && nove !== '8' && cont3 == 0){
          RoundFilho.innerText = 'EMPATE'
          divReiniciar.appendChild(reiniciar)
          reinicar()
      }
})})
})