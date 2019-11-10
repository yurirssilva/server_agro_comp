import {
  getFazendas,
  createFazenda,
  updateFazenda,
  deleteFazenda
} from "./fazenda";
import { createUser, login } from "./user";
import { createArea, getAreas, updateArea, deleteArea } from "./area";
import { createCapim, getCapims, updateCapim, deleteCapim } from "./capim";
import { createLancamento, getLancamentos, updateLancamento, deleteLancamento } from "./lancamento";
import { createDadosManuais, getDadosManuais, updateDadosManuais, deleteDadosManuais } from "./dadosManuais";
import { createDadosAutomaticos, getDadosAutomaticos, updateDadosAutomaticos, deleteDadosAutomaticos } from "./dadosAutomaticos";

const rootResolver = {
  getFazendas,
  createFazenda,
  updateFazenda,
  deleteFazenda,
  createUser,
  login,
  createArea,
  getAreas,
  updateArea,
  deleteArea,
  updateArea,
  createCapim, 
  getCapims, 
  updateCapim, 
  deleteCapim,
  createLancamento, 
  getLancamentos, 
  updateLancamento, 
  deleteLancamento,
  createDadosManuais, 
  getDadosManuais, 
  updateDadosManuais, 
  deleteDadosManuais,
  createDadosAutomaticos, 
  getDadosAutomaticos, 
  updateDadosAutomaticos, 
  deleteDadosAutomaticos
};
module.exports = rootResolver;
