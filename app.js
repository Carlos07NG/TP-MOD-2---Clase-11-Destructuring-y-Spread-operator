const mostrarFiguras=require('./collectibles');

const hotToy=mostrarFiguras(1);
const bandai=mostrarFiguras(2);
const starWars=mostrarFiguras(3);

console.log(starWars);


const unifiedCollectibles=[
    ...hotToy,
    ...bandai,
    ...starWars
]
const collectibles={
    figuras: unifiedCollectibles,

    listFigures:function(array=this.figuras){
        array.forEach(({marca,nombre,precio,stock,}) => {
            console.log(`
            MARCA: ${marca}
            NOMBRE: ${nombre}
            PRECIO: $${precio}
            STOCK: ${stock}
            `);
        });
    },

    figuresByBrand:function(marca){
        const marcas=this.figuras.filter((figura)=>figura.marca === marca);
        this.listFigures(marcas);
    },
};
// console.log(collectibles.figuras);
// collectibles.listFigures();
// collectibles.figuresByBrand("Star Wars");

module.exports = collectibles;