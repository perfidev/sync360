import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { buscarUsuario } from "../services/api";
import Loader from "../ui/Loader";

function UsuarioDetalhes() {
  const [usuario, setUsuario] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const carregarUsuario = async (id) => {
      try {
        setCarregando(true);
        const data = await buscarUsuario(id);
        if (data) setUsuario(data);
      } catch (err) {
        console.log(err);
      } finally {
        setCarregando(false);
      }
    };

    carregarUsuario(id);
  }, [id]);

  return (
    <main className="relative">
      <section className="flex flex-col gap-8 h-full p-8 px-6">
        {carregando ? (
          <Loader />
        ) : (
          <div className="flex flex-col gap-4 p-6 rounded-lg bg-white">
            <picture className="self-center">
              <img
                className="w-16 h-16 rounded-full"
                src={usuario.imagem}
                alt={`Avatar de ${usuario.nome}`}
              />
            </picture>

            <h2 className="text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16]">
              {usuario.nome}
              <span className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]">
                , {usuario.idade} anos
              </span>
            </h2>

            <p className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]">
              {usuario.biografia}
            </p>

            <p className="text-[0.8125rem] font-medium leading-[18px] tracking-[-0.1px] text-[#0c0e16]">
              {usuario.rua} - {usuario.bairro}, {usuario.estado}
            </p>

            <Link
              to="/"
              className="px-6 py-4 border-0 rounded-[24px] cursor-pointer bg-[#f9fafe] text-[#7e88c3] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-center"
            >
              Voltar
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default UsuarioDetalhes;
