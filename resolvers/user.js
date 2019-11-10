import models from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import fazenda from "./fazenda"

require('dotenv/config');

export const createUser = async args => {
  try {
    const existingUser = await models.User.findOne({
      where: { email: args.email }
    });
    if (existingUser) {
      throw new Error("Usuário já cadastrado");
    }
    const hashedPassword = await bcrypt.hash(args.password, 12);

    const user = await models.User.create({
      ...args,
      password: hashedPassword
    });
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.PASSWORD_SECRET,
      {
        expiresIn: "1h"
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  } catch (err) {
    throw err;
  }
};

export const getUser = async (args, req) => {
  try {
    
    const user = await models.User.findByPk(args.id);
    //user.fazendas = fazenda.getFazendas(args.id);
    if (!user) {
      throw new Error("Usuário não existente");
    }

    return user;
  } catch (err) {
    throw err;
  }
};
export const login = async args => {
  const user = await models.User.findOne({
    where: { email: args.email }
  });
  if (!user) {
    throw new Error("Usuário não existente");
  }
  const isEqual = await bcrypt.compare(args.password, user.password);
  if (!isEqual) {
    throw new Error("Senha incorreta");
  }
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.PASSWORD_SECRET,
    {
      expiresIn: "1h"
    }
  );
  return { userId: user.id, token: token, tokenExpiration: 1 };
};
