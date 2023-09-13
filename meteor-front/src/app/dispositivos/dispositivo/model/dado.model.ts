export class dado {
    public codigo: number;
    public humidade: number;
    public temperatura: number;
    public dispositivo: number;
    public dataHora: Date;



    constructor(codigo: number, humidade: number,  temperatura: number, dispositivo: number, dataHora: Date){
        this.codigo = codigo;
        this.humidade = humidade;
        this.temperatura = temperatura;
        this.dispositivo = dispositivo;
        this.dataHora = dataHora;

    }
}