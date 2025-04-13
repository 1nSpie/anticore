export interface AutoModel {
  id: string; // Например, "ABARTH_124_SPIDER"
  name: string; // Например, "124 Spider"
  "cyrillic-name": string; // Например, "124 спайдер"
  class: string; // Например, "S"
  "year-from": number; // Например, 2016
  "year-to": number | null; // Например, 2020 или null
  path: Path; // Объект path
}

interface Path {
  "mark-id": string; // Например, "ABARTH"
}

export interface CarBrand {
  id: string; // Например, "ABARTH"
  name: string; // Например, "Abarth"
  "cyrillic-name": string; // Например, "Абарт"
  popular: boolean; // Например, false
  country: string; // Например, "Италия"
  models: AutoModel[]; // Массив моделей
}

export enum EnumType {
    MARKA="Marka", MODEL="Model"
}