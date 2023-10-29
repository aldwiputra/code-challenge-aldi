import { GpsData } from '../data/gpsData';

type DeviceDataType = Record<string, number>;

export const createDeviceTypeData = (data: GpsData[], key: keyof GpsData) => {
  const deviceData: DeviceDataType = {};

  data.forEach((element) => {
    if (deviceData[element[key]]) {
      deviceData[element[key]]++;
    } else {
      deviceData[element[key]] = 1;
    }
  });

  return deviceData;
};
