import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userToTurnAdmin = this.usersRepository.findById(user_id);

    if (userToTurnAdmin === undefined) {
      throw new Error("User doesn't exists.");
    }

    return this.usersRepository.turnAdmin(userToTurnAdmin);
  }
}

export { TurnUserAdminUseCase };
