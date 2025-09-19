function sendEmail(event) {
  event.preventDefault(); // Impede o envio tradicional do form
  window.location.href = "mailto:veralfveiga@gmail.com";
}

  // Dicionário de contactos
  const contacts = {
    noivo: "351914847723",
    noiva: "351917450935"
  };

  function downloadMissal() {
    document.getElementById('downloadMissal').click();
  }
  
  // Data do casamento - 20 de setembro de 2025, horário de Lisboa
  const weddingDate = new Date('2025-09-20T00:00:00+01:00');
  
  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }
  
  // Atualizar a cada segundo
  setInterval(updateCountdown, 1000);
  updateCountdown(); // Chamar imediatamente para evitar atraso inicial

// ===== CONTRIBUIÇÕES =====


// Download da imagem do IBAN
const saveIbanBtn = document.getElementById('saveIbanBtn');
if (saveIbanBtn) {
  saveIbanBtn.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'img/iban-veranelson.png';
    link.download = 'IBAN-Vera-Nelson.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Feedback visual
    const originalText = saveIbanBtn.innerHTML;
    saveIbanBtn.innerHTML = '<i class="bi bi-check-circle me-1"></i>Guardado!';
    setTimeout(() => {
      saveIbanBtn.innerHTML = originalText;
    }, 2000);
  });
}
  
