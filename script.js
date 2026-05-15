// Tramada · scripts del sitio
console.log('Tramada cargado');

// Ejemplos reales — cargar desde JSON
(async function() {
  var grid = document.getElementById('ejemplos-grid');
  if (!grid) return;
  try {
    var res = await fetch('portfolio-ejemplos.json');
    var data = await res.json();
    grid.innerHTML = data.map(function(e) {
      return '<div class="ejemplo-card">' +
        '<div class="card-tipo">' + e.tipo + '</div>' +
        '<h3>' + e.titulo + '</h3>' +
        '<div class="card-desc">' + e.descripcion_corta + '</div>' +
        '<a href="' + e.link_ejemplo + '" class="card-link" target="_blank">Ver web →</a>' +
        '</div>';
    }).join('');
  } catch(err) {
    grid.innerHTML = '<p style="grid-column:1/-1;color:#999;">No se pudieron cargar los ejemplos.</p>';
  }
})();