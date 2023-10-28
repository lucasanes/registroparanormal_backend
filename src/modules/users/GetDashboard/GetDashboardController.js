const GetDashboardUseCase = require("./GetDashboardUseCase");

class GetDashboardController {
    async handle(request, response) {
        const getDashboardUseCase = new GetDashboardUseCase();

        const {id, email} = request.body

        const dashboard = await getDashboardUseCase.execute({id, email});
        response.json(dashboard);
    }
}

module.exports = GetDashboardController;