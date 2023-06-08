const meterioServices = require('../services/meterioServices')


module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let dados = await meterioServices.buscarTodos();

        for(let i in dados){
            json.result.push({
                codigo: dados[i].codigo_dados,
                humidade: dados[i].humidade_dado,
                temperatura: dados[i].tempertatura_dado,
                dispositivo: dados[i].codigo_disp,
                dataHora: dados[i].datahora_dado,
            });
        }

        res.json(json);
    },
    buscarTodosByDispositivo: async (req, res) => {
        let json = {error:'', result:[]};
        let dispositivo = req.params.dispositivo;
        let dados = await meterioServices.buscarTodosByDispositivo(dispositivo);

        for(let i in dados){
            json.result.push({
                codigo: dados[i].codigo_dados,
                humidade: dados[i].humidade_dado,
                temperatura: dados[i].tempertatura_dado,
                dispositivo: dados[i].codigo_disp,
                dataHora: dados[i].datahora_dado,
            });
        }

        res.json(json);
    },

    maisAtual: async (req, res) => {
        let json = {error:'', result:[]};

        let dispositivo = req.params.dispositivo;

        let dados = await meterioServices.maisAtual(dispositivo);

        for(let i in dados){
            json.result.push({
                codigo: dados[i].codigo_dados,
                humidade: dados[i].humidade_dado,
                temperatura: dados[i].tempertatura_dado,
                dispositivo: dados[i].codigo_disp,
                dataHora: dados[i].datahora_dado,
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
    findByIdDispositivo: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let dispositivo = req.params.dispositivo;

        let dados = await meterioServices.findById(codigo, dispositivo);

        if(dados){
            json.result = dados;
        }

        res.json(json);

    },

    inserir: async (req, res) => {
        let json = {error:'', result:{}};

        let humidade = req.body.humidade;
        let temperatura = req.body.temperatura;
        let dispositivo = req.body.dispositivo;

        console.log(humidade + " - " + temperatura + " - " + dispositivo);


        if(humidade && temperatura  && dispositivo){
            let codigo = await meterioServices.inserir(humidade, temperatura, dispositivo);
            json.result = {
                codigo_dados: codigo,
                humidade,
                temperatura,
                dispositivo
            };
        }else{
            json.error = 'Campos não enviado'
        }

        res.json(json);
    },
}