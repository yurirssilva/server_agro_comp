import models from "../models";

export const createDadosManuais = async (args, req) => {

    try {
        /*if (!req.isAuth) {
          throw new Error("Acesso Negado!!");
        }*/
        const dado = await models.DadosManuais.create({
            ...args
        });
        return dado;
    } catch (err) {
        throw err;
    }
};

export const getDadosManuais = async args => {
    const dados = await models.DadosManuais.findAll({
        where: {
            lancamentoId: args.lancamentoId
        }
    });
    return dados;
};

export const updateDadosManuais = async (args, req) => {
    try {
        /*if (!req.isAuth) {
          throw new Error('Acesso Negado!!');
        }*/
        const existingDado = await models.DadosManuais.findOne({
            where: { id: args.id }
        });
        if (!existingDado) {
            throw new Error("Dado não encontrado");
        }

        await models.DadosManuais.update(
            {
                altura: args.altura,
                localizacao: args.localizacao,
                observacoes: args.observacoes
            },
            {
                where: { id: args.id },
                returning: true,
                plain: true
            }
        );

        return true;
    } catch (err) {
        throw err;
    }
};

export const deleteDadosManuais = async (args, req) => {
    try {
        await models.DadosManuais.destroy({
            where: { id: args.id }
        });
        return true;
    } catch (err) {
        throw err;
    }
};