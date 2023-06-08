const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from banco_meteroroli.dados_dispositivo;', (error, results) =>{
                if(error) { rejeitado(error); return;}
                aceito(results)
            });
        });
    },

    buscarTodosByDispositivo: (dispositivo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from banco_meteroroli.dados_dispositivo dd where dd.codigo_disp = ? ', [dispositivo],(error, results) =>{
                if(error) { rejeitado(error); return;}
                aceito(results)
            });
        });
    },

    maisAtual: (dispositivo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from banco_meteroroli.dados_dispositivo dd where dd.codigo_disp = ? ORDER BY codigo_dados DESC limit 1', [dispositivo],(error, results) =>{
                if(error) { rejeitado(error); return;}
                aceito(results)
            });
        });
    },

    findById: (codigo) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('select * from banco_meteroroli.dados_dispositivo as dd where dd.codigo_dados = ?', [codigo], (error, results) => {
                if(error) { rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    findByIdDispositivo: (codigo, dispositivo) => {
        return new Promise((aceito, rejeitado)=>{
            db.query('select * from banco_meteroroli.dados_dispositivo as dd where dd.codigo_dados = ? and dd.codigo_disp = ?', [codigo, dispositivo], (error, results) => {
                if(error) { rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (humidade, temperatura, dispositivo) => {
        return new Promise((aceito, rejeitado)=>{
            db.query(' INSERT INTO banco_meteroroli.dados_dispositivo(humidade_dado , tempertatura_dado, codigo_disp ) VALUES (?,  ?, ?)  ', 
            [humidade, temperatura, dispositivo], (error, results) => {
                if(error) { rejeitado(error); return;}
                aceito(results.insertId);
                
            });
        });
    }
};