import axios from "axios";
import cookie from "react-cookies";

const baseUrl = "http://localhost:4000";
const pass = cookie.load("pass");

export const getAllUsers = async () => {
  const res = await axios.get(`${baseUrl}/users`);
  return res.data;
};

export const getAllTodos = async () => {
  if (pass) {
    const res = await axios.get(`${baseUrl}/todos`, {
      auth: {
        username: `${pass?.filtered[0].username}`,
        password: `${pass?.filtered[0].password}`,
      },
    });
    return res.data;
  }
};

export const updateTodo = async (id) => {
  const res = await axios.put(
    `${baseUrl}/todos/${id}`,
    {},
    {
      auth: {
        username: `${pass?.filtered[0].username}`,
        password: `${pass?.filtered[0].password}`,
      },
    }
  );
  return res.data;
};

export const addTodo = async (body) => {
  const res = await axios.post(
    `${baseUrl}/todos`,
    { task: body },
    {
      auth: {
        username: `${pass?.filtered[0].username}`,
        password: `${pass?.filtered[0].password}`,
      },
    }
  );
  return res.data;
};

export const deleteTodo = async (id) => {
  const res = await axios.delete(`${baseUrl}/todos/${id}`, {
    auth: {
      username: `${pass?.filtered[0].username}`,
      password: `${pass?.filtered[0].password}`,
    },
  });
  return res.data;
};
