const addBtn = document.getElementById('addBtn');
const cancelBtn = document.getElementById('cancelBtn');
const modal = document.getElementById('modal');

addBtn.addEventListener('click',()=>{
    modal.style.display = 'flex'
})
cancelBtn.addEventListener('click',()=>{
    modal.style.display = 'none'
})
