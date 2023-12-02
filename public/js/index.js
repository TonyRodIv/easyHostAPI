const addBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const modal = document.getElementById('modal');

const statusRevItens = document.querySelectorAll('.statusReserva');
statusRevItens.forEach(statusRevItem => {
  if (statusRevItem.value === '0') {
    statusRevItem.value = 'Em espera';
    statusRevItem.style.backgroundColor = '#B87457';
  } else if (statusRevItem.value === '1') {
    statusRevItem.value = 'Em andamento';
    statusRevItem.style.backgroundColor = '#4585A8';
  } else if (statusRevItem.value === '2') {
    statusRevItem.value = 'Finalizada';
    statusRevItem.style.backgroundColor = '#3C9786';
  } else{
    statusRevItem.value = 'Algo de errado';
    statusRevItem.style.backgroundColor = '#6C6C6C';
  }
});


addBtn.addEventListener('click',()=>{
    modal.style.display = 'flex'
})
cancelBtn.addEventListener('click',()=>{
    modal.style.display = 'none'
})
