import { UserModel } from 'lib/shared/models/User.model';
import { firebaseAdmin } from 'lib/firebase/firebase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getMe(userId: string): Promise<UserModel> {
    const userRecord = await firebaseAdmin.auth().getUser(userId);

    return {
      email: userRecord.email || '',
      id: userRecord.uid,
      name: userRecord.displayName || '',
      photoUrl: userRecord.photoURL || '',
    };
  }
}
