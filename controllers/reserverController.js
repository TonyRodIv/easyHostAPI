const acomodacao = require('../models/acomodacao.js')

const ControleReservas = async (req, res) => {
    const { nome_acomodacao, nome_hospede, status_reserva, data_entrada, data_saida } = req.body;

    await acomodacao.create({ nome_acomodacao, nome_hospede, status_reserva, data_entrada, data_saida })

    res.redirect("/")
}

const listTable = async (req, res) => {
    let reservas = await acomodacao.findAll({ raw: true, limit: 6 });

    reservas = reservas.map((reserva) => {

        const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        const data_entrada = new Date(reserva.data_entrada);
        const data_saida = new Date(reserva.data_saida);
        reserva.data_entrada = `${data_entrada.getDate()} de ${meses[data_entrada.getMonth()]} de ${data_entrada.getFullYear()}`;
        reserva.data_saida = `${data_saida.getDate()} de ${meses[data_saida.getMonth()]} de ${data_saida.getFullYear()}`;

        return reserva
    })

    res.render("home", { reservas })
}
const historicoGeral = async (req, res) => {
    let reservas = await acomodacao.findAll({ raw: true });

    reservas = reservas.map((reserva) => {
        const data_entrada = new Date(reserva.data_entrada);
        const data_saida = new Date(reserva.data_saida);
        reserva.data_entrada = `${data_entrada.getDate()}/${data_entrada.getMonth()}/${data_entrada.getFullYear()}`
        reserva.data_saida = `${data_saida.getDate()}/${data_saida.getMonth()}/${data_saida.getFullYear()}`

        return reserva
    })
    res.render('history', { reservas })
}

module.exports = { ControleReservas, listTable, historicoGeral }