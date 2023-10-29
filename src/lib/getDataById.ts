import { GpsData } from '../data/gpsData';

export const getGpsDataById = (data: GpsData[], id: string) => {
  return data.filter((entry) => entry.deviceId === id);
};
