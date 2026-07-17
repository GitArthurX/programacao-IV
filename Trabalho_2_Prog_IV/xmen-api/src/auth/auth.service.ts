import {Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(username: string, pass: string): Promise<any> {4
    if (username !== 'Arthur' || pass !== 'Arthur23') {
      throw new UnauthorizedException('Usuário ou senha incorretos!');
    }
    
    const payload = { sub: 1, username: username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}