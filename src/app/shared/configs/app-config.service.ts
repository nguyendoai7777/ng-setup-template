import { Injectable } from '@angular/core';
import { AppInitConfig } from './app-config.types';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  config!: AppInitConfig;
  setConfig(config: AppInitConfig) {
    this.config = config;
  }
}
