import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    setInterval(
      async () => {
        await fetch('https://frendz-back.onrender.com/');
        console.log('Ping enviado!');
      },
      10 * 60 * 250,
    );
  }
}
