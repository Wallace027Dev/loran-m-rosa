import delay from "../utils/delay";

class UsersService {
  async listUsers(orderBy) {
    const response = await fetch(
      `http://localhost:3001/users?orderBy=${orderBy}`,
    );

    await delay(500);

    return response.json();
  }
};

export default new UsersService();
