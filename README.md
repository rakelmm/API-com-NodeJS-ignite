# Cadrastro de carro

**RF** => Requisitos funcionais 

**RN** => Regra de negócio

**RNF** => Requesitos não funcionais 
****

**RF**
- Deve ser possível cadastrar um novo carro.
- Deve ser possível listar todas as categorias.

**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível alterar a placa de um carro já cadastrado.
- O carro deve ser cadastrado, por padrão,  com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# listagem de carros 
**RF**
- Deve ser possível listar os carros disponíveis.
- Deve ser possível listar os carros disponíveis pelo nome da categoria.
- Deve ser possível listar os carros disponíveis pelo nome da marca.
- Deve ser possível listar os carros disponíveis pelo nome do carro.

**RN**
- O usuário não precisa estar logado no sistema.

# Cadastro de Especificações no carro 

**RF**

- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificações.
- Deve ser possível listar todos os carros.

**RN**

- Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadatro de imagens do carro

**RF**

- Deve ser possível cadastrar a imagem do carro.
- Deve se possível listar todos os carros.

**RNF**

Utilizar o multer para upload dos arquivos.

**RN**

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Alugel de carro

**RF**

- Deve ser possível cadastrar um aluguel 

**RN**

- O aluguel deve ter duração mínima de 24 horas.
- Não deve se possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
- Não deve se possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
