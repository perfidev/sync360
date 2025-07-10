import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaUsuarios from "./pages/ListaUsuarios";
import FormularioUsuarios from "./pages/FormularioUsuarios";
import UsuarioDetalhes from "./pages/UsuarioDetalhes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaUsuarios />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
        <Route path="/usuarios/novo" element={<FormularioUsuarios />} />
        <Route path="/usuarios/editar/:id" element={<FormularioUsuarios />} />
        <Route path="/usuarios/:id" element={<UsuarioDetalhes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
