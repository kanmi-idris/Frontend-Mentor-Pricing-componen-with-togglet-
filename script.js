const toggleBtn = document.getElementById('toggle');
const changePlanType = document.getElementById('changePlanType');

toggleBtn.addEventListener('change', e => {
    e.preventDefault();
    
    changePlanType.classList.toggle('show-monthly')
})