db.produtos.countDocuments({ $expr: { $eq: [{ $size: "$ingredientes" }, 4] } });

// ref: https://cursos.alura.com.br/forum/topico-recuperar-documento-com-tamanho-de-array-2-mongodb-101408