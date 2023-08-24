const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from banco_meteroroli.dispositivo;', (error, results) =>{
                if(error) { rejeitado(error); return;}
                aceito(results)
            });
        });
    },
    findById: (codigo) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('select * from banco_meteroroli.dispositivo as dd where dd.codigo_disp  = ?', [codigo], (error, results) => {
                if(error) { rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    }

}