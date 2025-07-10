import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { buscarUsuario, criarUsuario, atualizarUsuario } from "../services/api";
import Loader from "../ui/Loader";

function FormularioUsuarios() {
  const [camposForm, setCamposForm] = useState({
    nome: "",
    idade: "",
    rua: "",
    bairro: "",
    estado: "",
    biografia: "",
    imagem: "",
  });

  const [carregando, setCarregando] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const carregarUsuario = async () => {
      setCarregando(true);
      try {
        const data = await buscarUsuario(id);
        setCamposForm(data);
      } catch (err) {
        console.log(err);
      } finally {
        setCarregando(false);
      }
    };

    if (id) {
      carregarUsuario();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCamposForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await atualizarUsuario(id, camposForm);
      } else {
        await criarUsuario(camposForm);
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <section className="h-full">
        {carregando ? (
          <Loader />
        ) : (
          <>
            <form
              id="form-usuario"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 px-6"
            >
              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]"
                  htmlFor="nome"
                >
                  Nome completo:
                </label>
                <input
                  className="h-12 px-5 py-[1.125rem] rounded-[4px] border border-[#dfe3fa] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16]"
                  type="text"
                  id="nome"
                  name="nome"
                  value={camposForm.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]"
                  htmlFor="idade"
                >
                  Idade:
                </label>
                <input
                  className="h-12 px-5 py-[1.125rem] rounded-[4px] border border-[#dfe3fa] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16]"
                  type="number"
                  id="idade"
                  name="idade"
                  value={camposForm.idade}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]"
                  htmlFor="rua"
                >
                  Rua:
                </label>
                <input
                  className="h-12 px-5 py-[1.125rem] rounded-[4px] border border-[#dfe3fa] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16]"
                  type="text"
                  id="rua"
                  name="rua"
                  value={camposForm.rua}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]"
                  htmlFor="bairro"
                >
                  Bairro:
                </label>
                <input
                  className="h-12 px-5 py-[1.125rem] rounded-[4px] border border-[#dfe3fa] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16]"
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={camposForm.bairro}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]"
                  htmlFor="estado"
                >
                  Estado:
                </label>
                <input
                  className="h-12 px-5 py-[1.125rem] rounded-[4px] border border-[#dfe3fa] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16]"
                  type="text"
                  id="estado"
                  name="estado"
                  value={camposForm.estado}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]"
                  htmlFor="biografia"
                >
                  Biografia:
                </label>
                <textarea
                  className="h-16 px-5 py-[1.125rem] rounded-[4px] border border-[#dfe3fa] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16]"
                  id="biografia"
                  name="biografia"
                  value={camposForm.biografia}
                  onChange={handleChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.8125rem] font-medium leading-[15px] tracking-[-0.1px] text-[#7e88c3]"
                  htmlFor="imagem"
                >
                  URL da imagem:
                </label>
                <input
                  className="h-12 px-5 py-[1.125rem] rounded-[4px] border border-[#dfe3fa] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px] text-[#0c0e16]"
                  type="url"
                  id="imagem"
                  name="imagem"
                  value={camposForm.imagem}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>

            <div className="flex items-center justify-end gap-2 px-6 py-5 bg-white">
              <Link
                to="/"
                className="px-6 py-4 border-0 rounded-[24px] cursor-pointer bg-[#f9fafe] text-[#7e88c3] text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px]"
              >
                Cancelar
              </Link>
              <button
                form="form-usuario"
                type="submit"
                className="px-6 py-4 border-0 rounded-[24px] cursor-pointer bg-[#7c5dfa] text-white text-[0.9375rem] font-bold leading-[15px] tracking-[-0.25px]"
              >
                Salvar
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default FormularioUsuarios;
