import { useNavigate } from "react-router-dom";

function UsuarioItem({ usuario, onMostrarModal, onDeletarUsuario }) {
  const navigate = useNavigate();

  const handleVerDetalhes = () => {
    navigate(`/usuarios/${usuario.id}`);
  };

  const handleEditar = (e) => {
    e.stopPropagation();
    navigate(`/usuarios/editar/${usuario.id}`);
  };

  const handleExcluir = (e) => {
    e.stopPropagation();
    onMostrarModal(true);
    onDeletarUsuario(usuario.id);
  };

  return (
    <li
      className="flex flex-col gap-4 p-6 rounded-lg bg-white"
      onClick={handleVerDetalhes}
    >
      <div className="flex items-center gap-6">
        <picture>
          <img
            className="w-12 h-12 rounded-full"
            src={usuario.imagem}
            alt={`Avatar de ${usuario.nome}`}
          />
        </picture>

        <h2 className="text-[0.9375rem] font-medium leading-[15px] tracking-[-0.1px] text-[#858bb2]">
          {usuario.nome}
        </h2>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          className="px-6 py-4 border-0 rounded-[24px] cursor-pointer text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] bg-[#f9fafe] text-[#7e88c3]"
          onClick={handleEditar}
        >
          Editar
        </button>
        <button
          className="px-6 py-4 border-0 rounded-[24px] cursor-pointer text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] bg-[#ec5757] text-white"
          onClick={handleExcluir}
        >
          Excluir
        </button>
      </div>
    </li>
  );
}

export default UsuarioItem;
