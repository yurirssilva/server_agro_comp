import {
  getFazendas,
  createFazenda,
  updateFazenda,
  deleteFazenda
} from "./fazenda";
import { createUser, login } from "./user";

const rootResolver = {
  getFazendas,
  createFazenda,
  updateFazenda,
  deleteFazenda,
  createUser,
  login
};
module.exports = rootResolver;
