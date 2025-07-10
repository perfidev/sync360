# Sync360 - Teste Técnico

A aplicação permite realizar operações de criação, listagem, edição e exclusão de usuários (CRUD completo), com backend desenvolvido em Node.js e Express e frontend em React com TailwindCSS para uma interface moderna e responsiva.

Escolhi essas tecnologias porque são as que tenho mais domínio no momento e com as quais me sinto mais confortável e confiante para desenvolver com qualidade.

O foco foi criar uma estrutura clara, funcional e fácil de entender, priorizando boas práticas de organização, separação de responsabilidades e usabilidade — sempre pensando na experiência de quem vai utilizar e avaliar o projeto.

## 🚀 Tecnologias Utilizadas

### Frontend
- React
- TailwindCSS

### Backend
- Node.js
- Express
- MySQL

## ⚙️ Como configurar e rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/sync360.git
cd sync360
```

### 2. Instalar dependências

Frontend:
```bash
cd frontend/
npm install
```

Backend:
```bash
cd backend/
npm install
```
### 3. Configurar variáveis de ambiente
No diretório do backend, crie um arquivo config.env com o seguinte conteúdo:

```.env
PORT=3000
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```
### 4. Executar o projeto

Iniciar o Frontend:
```bash
cd frontend/
npm run dev
```
Iniciar o Backend:
```bash
cd backend/
npm start
```

## 🗄️ Script do Banco de Dados (MySQL)

```sql
CREATE DATABASE IF NOT EXISTS sync360;
USE sync360;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  idade INT,
  rua VARCHAR(100),
  bairro VARCHAR(100),
  estado CHAR(2),
  biografia TEXT,
  imagem TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (nome, idade, rua, bairro, estado, biografia, imagem)
VALUES 
('Emiliana Coimbra Kassab', 32, 'Alameda Adolfo Konder', 'Centro', 'SC', 'Designer apaixonada por experiências simples e funcionais. Ama café, arte e natureza.', 'http://localhost:5173/emiliana.jpg'),
('João Batista Caruso Ximenes', 45, 'Rua Alice Pavão Cariza', 'Jardim Águas do Paiol', 'SP', 'Engenheiro civil com mais de 20 anos de carreira. Curioso por tecnologia e jardinagem nas horas vagas.', 'http://localhost:5173/joao.jpg'),
('Gabriela Cordeiro Belmiro', 20, 'Rua da Caridade', 'Jardim Esperança', 'PR', 'Estudante de Análise de Sistemas. Gamer nas horas livres e entusiasta de UX/UI.', 'http://localhost:5173/gabriela.jpg');

SELECT * FROM users;
```

## 📷 Prints

### 🧾 Lista de Usuários
![Lista de Usuários](./assets/usuarios.png)

### 👤 Página de Usuário Individual
![Usuário Individual](./assets/usuario.png)

### ➕ Criar Usuário
![Criar Usuário](./assets/criar-usuario.png)

### ✏️ Editar Usuário
![Editar Usuário](./assets/atualizar-usuario.png)

### ❌ Excluir Usuário (Modal de Confirmação)
![Excluir Usuário](./assets/excluir-usuario.png)
