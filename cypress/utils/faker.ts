import { faker } from '@faker-js/faker'


class MockData {

    generateRandomUsername() {
        return faker.internet.userName()
    };

    generateRandomBio() {
        return faker.name.jobTitle()
    };

};

const mockData = new MockData();
export default mockData;