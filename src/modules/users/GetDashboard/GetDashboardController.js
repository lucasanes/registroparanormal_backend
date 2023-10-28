const GetDashboardUseCase = require("./GetDashboardUseCase");

class GetDashboardController {
    async handle(request, response) {
        const getDashboardUseCase = new GetDashboardUseCase();

        const {id} = request.params

        const dashboard = await getDashboardUseCase.execute({id});
        response.json(dashboard);
    }
}

module.exports = GetDashboardController;