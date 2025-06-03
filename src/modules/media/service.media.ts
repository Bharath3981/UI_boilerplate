// services/media.service.ts

import RestClient from '../../api/RestClient';
import type { Media } from './types.media';

export const getMedia = () => RestClient.get<Media[]>('/media');