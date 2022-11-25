const GetParticipanteBySessaoIdUseCase = require("./GetParticipanteBySessaoIdUseCase");

class GetParticipanteBySessaoIdController {
    async handle(request,response) {
        const getParticipanteBySessaoIdUseCase = new GetParticipanteBySessaoIdUseCase();

        const {id} = request.params

        const participantes = await getParticipanteBySessaoIdUseCase.execute({id});
        response.status(200).json(participantes);
    }
}

module.exports = GetParticipanteBySessaoIdController;