import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/users'),
    );
    return data;
  }
}
