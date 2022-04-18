function calcularMediaAritmetica (lista) {


    const sumalista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promediolista = sumalista / lista.length;

    return promediolista;