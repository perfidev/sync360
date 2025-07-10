import { deletarUsuario } from "../services/api";

function ModalConfirmacao({ onMostrarModal, deletarId, onAtualizarUsuarios }) {
  const handleCancelar = (e) => {
    e.stopPropagation();
    onMostrarModal(false);
  };

  const handleExcluir = async (e) => {
    e.stopPropagation();
    try {
      await deletarUsuario(deletarId);
      await onAtualizarUsuarios();
      onMostrarModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center px-6">
      <div className="p-8 rounded-lg bg-white">
        <span className="inline-block mb-2 text-2xl font-bold leading-8 tracking-[-0.5px] text-[#0c0e16]">
          Confirmar Exclusao
        </span>
        <p className="mb-5 text-[0.8125rem] font-medium leading-[22px] tracking-[-0.1px] text-[#888eb0]">
          Voce tem certeza que deseja excluir o usuario? Esta acao nao pode ser
          desfeita
        </p>

        <div className="flex items-center justify-end gap-2">
          <button
            className="px-6 py-4 border-0 rounded-[24px] cursor-pointer bg-[#f9fafe] text-[#7e88c3] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px]"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
          <button
            className="px-6 py-4 border-0 rounded-[24px] cursor-pointer bg-[#ec5757] text-white text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px]"
            onClick={handleExcluir}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmacao;
