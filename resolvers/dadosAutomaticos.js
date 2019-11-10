import models from "../models";

export const createDadosAutomaticos = async (args, req) => {

    try {
        /*if (!req.isAuth) {
          throw new Error("Acesso Negado!!");
        }*/
        const dado = await models.DadosAutomaticos.create({
            ...args
        });
        return dado;
    } catch (err) {
        throw err;
    }
};

export const getDadosAutomaticos = async args => {
    const dados = await models.DadosAutomaticos.findAll({
        where: {
            lancamentoId: args.lancamentoId
        }
    });
    return dados;
};

export const updateDadosAutomaticos = async (args, req) => {
    try {
        /*if (!req.isAuth) {
          throw new Error('Acesso Negado!!');
        }*/
        const existingDado = await models.DadosAutomaticos.findOne({
            where: { id: args.id }
        });
        if (!existingDado) {
            throw new Error("Dado não encontrado");
        }

        await models.DadosAutomaticos.update(
            {
                imagem: args.imagem,
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

export const deleteDadosAutomaticos = async (args, req) => {
    try {
        await models.DadosAutomaticos.destroy({
            where: { id: args.id }
        });
        return true;
    } catch (err) {
        throw err;
    }
};