const dispositivoService = require('../services/dispositivoService')


module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let dados = await dispositivoService.buscarTodos();

        for(let i in dados){
            json.result.push({
                codigo_disp: dados[i].codigo_disp,
                nome_disp: dados[i].nome_disp,
                
            });
        }

        res.json(json);
    },

    findById: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;

        let dados = await meterioServices.findById(codigo);

        if(dados){
            json.result = dados;
        }

        res.json(json);

    },


}