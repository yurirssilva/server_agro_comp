import models from "../models";

export const createLancamento = async (args, req) => {

    try {
        /*if (!req.isAuth) {
          throw new Error("Acesso Negado!!");
        }*/
        const lancamento = await models.Lancamento.create({
            ...args
        });

        return lancamento;
    } catch (err) {
        throw err;
    }
};

export const getLancamentos = async args => {
    const lancamentos = await models.Lancamento.findAll({
        where: {
            areaId: args.areaId
        }
    });
    return lancamentos;
};

export const updateLancamento = async (args, req) => {
    try {
        /*if (!req.isAuth) {
          throw new Error('Acesso Negado!!');
        }*/
        const existingLancamento = await models.Lancamento.findOne({
            where: { id: args.id }
        });
        if (!existingLancamento) {
            throw new Error("Lançamento não encontrado");
        }

        await models.Lancamento.update(
            {
                data: args.data,
                tipo: args.tipo,
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

export const deleteLancamento = async (args, req) => {
    try {
        await models.Lancamento.destroy({
            where: { id: args.id }
        });
        return true;
    } catch (err) {
        throw err;
    }
};