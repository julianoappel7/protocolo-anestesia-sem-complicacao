// Pré-visualização interativa de fotos nos espaços reservados do site
document.addEventListener('DOMContentLoaded', () => {
  const fileInputs = document.querySelectorAll('.slot-file-input');

  fileInputs.forEach((input) => {
    input.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const frame = input.closest('.photo-frame');
      if (!frame) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        let img = frame.querySelector('img.uploaded-preview');
        if (!img) {
          img = document.createElement('img');
          img.className = 'uploaded-preview';
          img.alt = 'Foto do Protocolo';
          frame.appendChild(img);
        }
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    });
  });
});

