import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsuarioItem from "../components/UsuarioItem";
import ModalConfirmacao from "../components/ModalConfirmacao";
import Loader from "../ui/Loader";

import { buscarUsuarios } from "../services/api";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [resultados, setResultados] = useState(0);
  const [carregando, setCarregando] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [idUsuarioDeletar, setIdUsuarioDeletar] = useState(null);

  const carregarUsuarios = async () => {
    try {
      setCarregando(true);
      const data = await buscarUsuarios();
      if (data) {
        setUsuarios(data.data.users);
        setResultados(data.results);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <main className="relative min-h-[100dvh]">
      <section className="flex flex-col gap-8 h-full p-8 px-6">
        <header className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold leading-normal tracking-[-0.75px] text-[#0c0e16]">
              Usuarios
            </h2>
            <span className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#888eb0]">
              {resultados} usuarios
            </span>
          </div>

          <Link
            to="/usuarios/novo"
            className="px-6 py-4 border-0 rounded-[24px] cursor-pointer bg-[#7c5dfa] text-white text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px]"
          >
            Adicionar
          </Link>
        </header>

        {carregando ? (
          <Loader />
        ) : usuarios.length > 0 ? (
          <ul className="flex flex-col gap-4 list-none">
            {usuarios.map((usuario) => (
              <UsuarioItem
                key={usuario.id}
                usuario={usuario}
                onMostrarModal={setMostrarModal}
                onDeletarUsuario={setIdUsuarioDeletar}
              />
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center my-auto">
            <span className="text-2xl font-bold leading-normal tracking-[-0.75px] text-[#0c0e16]">
              Nenhum usuario encontrado
            </span>
          </div>
        )}
      </section>

      {mostrarModal && (
        <ModalConfirmacao
          onMostrarModal={setMostrarModal}
          deletarId={idUsuarioDeletar}
          onAtualizarUsuarios={carregarUsuarios}
        />
      )}
    </main>
  );
}

export default ListaUsuarios;
