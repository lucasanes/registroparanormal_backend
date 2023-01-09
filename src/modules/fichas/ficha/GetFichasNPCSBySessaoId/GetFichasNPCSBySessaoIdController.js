const GetFichasNPCSBySessaoIdUseCase = require("./GetFichasNPCSBySessaoIdUseCase");

class GetFichasNPCSBySessaoIdController {
    async handle(request, response) {
        const getFichasNPCSBySessaoIdUseCase = new GetFichasNPCSBySessaoIdUseCase();

        const { id } = request.params

        const fichasNPCS = await getFichasNPCSBySessaoIdUseCase.execute({ id });
        response.status(200).json(fichasNPCS);
    }
}

module.exports = GetFichasNPCSBySessaoIdController;