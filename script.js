function updateCountdown() {
    const targetDate = new Date('December 31, 2025 23:59:59').getTime();
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        document.querySelector('h1').textContent = 'Contrato Finalizado!';
        document.querySelector('.subtitle').textContent = 'O contrato de Abel Ferreira com o Palmeiras chegou ao fim.';
    }
}

updateCountdown();

setInterval(updateCountdown, 1000);