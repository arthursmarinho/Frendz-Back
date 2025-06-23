import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  pingBack() {
    setInterval(
      async () => {
        await fetch('https://frendz-back.onrender.com/');
        console.log('Back Ping');
      },
      10 * 60 * 250,
    );
  }
  pingFront() {
    setInterval(
      async () => {
        await fetch('https://frendz-front.onrender.com');
        console.log('Front Ping');
      },
      10 * 60 * 250,
    );
  }
}
