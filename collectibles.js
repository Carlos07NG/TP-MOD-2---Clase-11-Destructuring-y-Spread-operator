const fs=require('fs');

const importar=(marca)=>{

    return JSON.parse(fs.readFileSync(`./datos/figura${marca}.json`,'utf-8'))


}

module.exports = importar;