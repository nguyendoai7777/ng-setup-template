import { Injectable } from '@angular/core';
import env from '../../../../env.app.config.json' with { type: 'json' };
import { EnvServerConfig } from './app-config.types';

@Injectable({ providedIn: 'root' })
export class AppConfigServerService {
  readonly env = env as EnvServerConfig;
}
