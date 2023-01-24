

/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} elemento de retorno imagen
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error('puntosMinimos es requerido.');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;

}