// Tramada · scripts del sitio
console.log('Tramada cargado');

// Servicios expandibles — mostrar/ocultar ejemplos
document.querySelectorAll('.service-expand').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    var example = this.nextElementSibling;
    var isHidden = example.hasAttribute('hidden');
    example.toggleAttribute('hidden', !isHidden);
    this.setAttribute('aria-expanded', String(isHidden));
  });
});