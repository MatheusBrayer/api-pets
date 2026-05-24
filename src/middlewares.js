export function validacaoPet(req, res, next) {
    const { nome, raca, idade, nomeTutor } = req.body;

    try {
        const erros = [];

        if (!nome) {
            erros.push("O campo 'nome' é obrigatório.");
        }

        if (!raca) {
            erros.push("O campo 'raca' é obrigatório.");
        }

        if (!idade) {
            erros.push("O campo 'idade' é obrigatório.");
        }

        if (!nomeTutor) {
            erros.push("O campo 'nomeTutor' é obrigatório.");
        }

        if (erros.length > 0) {
            return res.status(400).send({
                ok: false,
                mensagens: erros
            });
        }

        next();

    } catch (error) {
        return res.status(400).send({
            ok: false,
            message: "Erro na validação dos dados do pet."
        });
    }
}