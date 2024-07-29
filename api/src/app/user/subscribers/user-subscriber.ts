import { UserEntity } from 'src/app/user/models/user.entity';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { generateHash } from '../providers/generate-hash';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<UserEntity> {
  // Defined to only trigger UserEntity Events
  listenTo() {
    return UserEntity;
  }

  // Treating user registration data(password && email) before recording
  async beforeInsert({ entity }: InsertEvent<UserEntity>): Promise<any> {
    if (entity.password) {
      entity.password = await generateHash(entity.password);
    }

    if (entity.email) {
      entity.email = entity.email.toLocaleLowerCase();
    }
  }

  async beforeUpdate({
    entity,
    databaseEntity,
  }: UpdateEvent<UserEntity>): Promise<any> {
    if (entity.password) {
      entity.password = await generateHash(entity.password);
    }

    if (entity.password !== databaseEntity?.password) {
      entity.password = entity.password;
    }

    if (entity.email) {
      entity.email = entity.email.toLocaleLowerCase();
    }
  }
}
