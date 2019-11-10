import models from "../models";

export const createArea = async (args, req) => {

    try {
        /*if (!req.isAuth) {
          throw new Error("Acesso Negado!!");
        }*/
        const area = await models.Area.create({
            ...args
        });
        return area;
    } catch (err) {
        throw err;
    }
};

export const getAreas = async args => {
    const area = await models.Area.findAll({
        where: {
            fazendaId: args.fazendaId
        }
    });
    return area;
};

export const updateArea = async (args, req) => {
    try {
        /*if (!req.isAuth) {
          throw new Error('Acesso Negado!!');
        }*/
        const existingArea = await models.Area.findOne({
            where: { id: args.id }
        });
        if (!existingArea) {
            throw new Error("Area não encontrada");
        }

        await models.Area.update(
            {
                nome: args.nome,
                mapa: args.mapa,
                fertilidadeSolo: args.fertilidadeSolo,
                observacao: args.observacao,
                capimId: args.capimId
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

export const deleteArea = async (args, req) => {
    try {
        await models.Area.destroy({
            where: { id: args.id }
        });
        return true;
    } catch (err) {
        throw err;
    }
};