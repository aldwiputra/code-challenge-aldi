import { GpsData } from '../data/gpsData';

type DeviceDataType = Record<string, number>;

export const createDeviceTypeData = (data: GpsData[]) => {
  const deviceData: DeviceDataType = {};

  data.forEach((element) => {
    if (deviceData[element.deviceType]) {
      deviceData[element.deviceType]++;
    } else {
      deviceData[element.deviceType] = 1;
    }
  });

  return deviceData;
};
