import { GpsData } from '../data/gpsData';

export const transformDataWithUniqueId = (data: GpsData[]) => {
  const dataWithUniqueId: GpsData[] = [] as GpsData[];

  data.forEach((entry) => {
    const foundDeviceIdIndex = dataWithUniqueId.findIndex(
      (element) => element.deviceId === entry.deviceId
    );

    if (foundDeviceIdIndex < 0) {
      dataWithUniqueId.push(entry);
    } else {
      if (
        Date.parse(entry.timestamp) > Date.parse(dataWithUniqueId[foundDeviceIdIndex].timestamp)
      ) {
        dataWithUniqueId[foundDeviceIdIndex] = entry;
      }
    }
  });

  return dataWithUniqueId;
};
