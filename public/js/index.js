const addBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const modal = document.getElementById('modal');
const waitingContainer = document.getElementById('waiting');
const onGoingContainer = document.getElementById('onGoing');
const finishedContainer = document.getElementById('finished');



const statusRevItens = document.querySelectorAll('.statusReserva');
let waiting = 0
let onGoing = 0
let finished = 0

statusRevItens.forEach(statusRevItem => {
  if (statusRevItem.value === '0') {
    statusRevItem.value = 'Em espera';
    statusRevItem.style.backgroundColor = '#B87457';
    waiting++
  } else if (statusRevItem.value === '1') {
    statusRevItem.value = 'Em andamento';
    statusRevItem.style.backgroundColor = '#4585A8';
    onGoing++
  } else if (statusRevItem.value === '2') {
    statusRevItem.value = 'Finalizada';
    statusRevItem.style.backgroundColor = '#3C9786';
    finished++
  } else{
    statusRevItem.value = 'Algo de errado';
    statusRevItem.style.backgroundColor = '#6C6C6C';
  }
});

if (waiting <1){
    waitingContainer.innerHTML = `Não existe Nenhuma reserva em espera`
}else{
    waitingContainer.innerHTML = `Existem ${waiting} reservas que estão na fila de espera`
}

if (onGoing<1){
    onGoingContainer.innerHTML = `Não existe Nenhuma reserva em endamento`
}else{
    onGoingContainer.innerHTML = `Existem ${onGoing} reservas que estão em processo de andamento`
}

if (finished<1){
    finishedContainer.innerHTML = `Não existe Nenhuma reserva concluída`
}else{
    finishedContainer.innerHTML = `Existem ${finished} reservas que foram finalizadas com sucesso`
}




addBtn.addEventListener('click',()=>{
    modal.style.display = 'flex'
})
cancelBtn.addEventListener('click',()=>{
    modal.style.display = 'none'
})
