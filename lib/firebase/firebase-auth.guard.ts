// firebase-auth.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { admin } from './firebase';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Token de autenticação não encontrado');
    }

    const [, token] = authHeader.split(' ');

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      request.user = decodedToken; // Adiciona o usuário na requisição para usar depois
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
