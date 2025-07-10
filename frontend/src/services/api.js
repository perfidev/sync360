export const buscarUsuarios = async () => {
  const res = await fetch("http://localhost:3000/api/v1/usuarios");
  const data = await res.json();
  return data;
};

export const buscarUsuario = async (id) => {
  const res = await fetch(`http://localhost:3000/api/v1/usuarios/${id}`);
  const data = await res.json();
  return data.data.user;
};

export const criarUsuario = async (data) => {
  const res = await fetch("http://localhost:3000/api/v1/usuarios", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) console.log("erro ao criar usuario!");

  return await res.json();
};

export const atualizarUsuario = async (id, data) => {
  const res = await fetch(`http://localhost:3000/api/v1/usuarios/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) console.log("erro ao atualizar usuario!");

  return await res.json();
};

export const deletarUsuario = async (id) => {
  const res = await fetch(`http://localhost:3000/api/v1/usuarios/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) console.log("erro ao deletar usuario!");

  return true;
};
