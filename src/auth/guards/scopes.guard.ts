import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ScopesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const scopes = this.reflector.get<string[]>('scopes', context.getHandler());
    if (!scopes) return true;

    const request = context.switchToHttp().getRequest();
    const { user } = request;

    const userScope: string = request.user && request.user.scope;
    //as a string e.g: 'create:user update:user'
    if (!userScope) {
      //if there is no user or no scope associated with user
      return false;
    }

    const hasScope = () =>
      user.scope.every((scope: string) => scopes.includes(scope));
    return hasScope();
  }
}
