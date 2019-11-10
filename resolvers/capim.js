import models from "../models";

export const createCapim = async (args, req) => {

    try {
        /*if (!req.isAuth) {
          throw new Error("Acesso Negado!!");
        }*/
        const capim = await models.Capim.create({
            ...args
        });
        return capim;
    } catch (err) {
        throw err;
    }
};

export const getCapims = async args => {
    const capims = await models.Capim.findAll({
        where: {
            id: args.id
        }
    });
    return capims;
};
export const getAllCapims = async args => {
    const capims = await models.Capim.findAll();
    return capims;
};

export const updateCapim = async (args, req) => {
    try {
        /*if (!req.isAuth) {
          throw new Error('Acesso Negado!!');
        }*/
        const existingCapim = await models.Capim.findOne({
            where: { id: args.id }
        });
        if (!existingCapim) {
            throw new Error("Capim não encontrado");
        }

        await models.Capim.update(
            {
                tipo: args.tipo,
                alturaEntrada: args.alturaEntrada,
                alturaSaidaMaiorFert: args.alturaSaidaMaiorFert,
                alturaSaidaMenorFert: args.alturaSaidaMenorFert,
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

export const deleteCapim = async (args, req) => {
    try {
        await models.Capim.destroy({
            where: { id: args.id }
        });
        return true;
    } catch (err) {
        throw err;
    }
};