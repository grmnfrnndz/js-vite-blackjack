
/**
 * 
 * @param {array<String>} deck es un arreglo de string
 * @returns String retorna la carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}