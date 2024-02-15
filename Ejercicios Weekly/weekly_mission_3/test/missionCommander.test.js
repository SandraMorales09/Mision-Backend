const MissionCommander = requiere('./../app/MissionCommander')

describe("Unit Test for Mission Commander Class", () => {
    Test('1. Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander('Victoria')
        expect(myMissionCommander.name).toBe('Victoria');
    });
})