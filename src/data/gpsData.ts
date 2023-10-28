export type GpsData = {
  deviceId: string;
  deviceType: 'Aircraft' | 'Personal' | 'Asset';
  timestamp: string;
  location: 'L1' | 'L2' | 'L3' | 'L4' | 'L5' | 'L6';
};

export const gpsData: GpsData[] = [
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '2022-08-31T10:05', location: 'L1' },
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '2022-08-31T10:10', location: 'L1' },
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '2022-08-31T10:15', location: 'L1' },
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '2022-08-31T10:20', location: 'L1' },
  { deviceId: 'D-1567', deviceType: 'Aircraft', timestamp: '2022-08-31T10:25', location: 'L2' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '2022-08-31T10:05', location: 'L3' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '2022-08-31T10:10', location: 'L3' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '2022-08-31T10:15', location: 'L3' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '2022-08-31T10:20', location: 'L3' },
  { deviceId: 'D-1568', deviceType: 'Personal', timestamp: '2022-08-31T10:25', location: 'L3' },
  { deviceId: 'D-1569', deviceType: 'Asset', timestamp: '2022-08-31T10:15', location: 'L4' },
  { deviceId: 'D-1569', deviceType: 'Asset', timestamp: '2022-08-31T10:20', location: 'L4' },
  { deviceId: 'D-1569', deviceType: 'Asset', timestamp: '2022-08-31T10:30', location: 'L1' },
  { deviceId: 'D-1569', deviceType: 'Asset', timestamp: '2022-08-31T10:35', location: 'L1' },
  { deviceId: 'D-1570', deviceType: 'Personal', timestamp: '2022-08-31T10:35', location: 'L5' },
  { deviceId: 'D-1571', deviceType: 'Aircraft', timestamp: '2022-08-31T10:05', location: 'L2' },
  { deviceId: 'D-1571', deviceType: 'Aircraft', timestamp: '2022-08-31T10:10', location: 'L2' },
  { deviceId: 'D-1571', deviceType: 'Aircraft', timestamp: '2022-08-31T10:15', location: 'L2' },
  { deviceId: 'D-1571', deviceType: 'Aircraft', timestamp: '2022-08-31T10:20', location: 'L2' },
  { deviceId: 'D-1572', deviceType: 'Aircraft', timestamp: '2022-08-31T10:10', location: 'L1' },
  { deviceId: 'D-1572', deviceType: 'Aircraft', timestamp: '2022-08-31T10:15', location: 'L1' },
  { deviceId: 'D-1572', deviceType: 'Aircraft', timestamp: '2022-08-31T10:10', location: 'L1' },
  { deviceId: 'D-1573', deviceType: 'Asset', timestamp: '2022-08-31T10:15', location: 'L4' },
  { deviceId: 'D-1573', deviceType: 'Asset', timestamp: '2022-08-31T10:20', location: 'L5' },
  { deviceId: 'D-1574', deviceType: 'Personal', timestamp: '2022-08-31T10:10', location: 'L6' },
  { deviceId: 'D-1574', deviceType: 'Personal', timestamp: '2022-08-31T10:15', location: 'L6' },
  { deviceId: 'D-1575', deviceType: 'Asset', timestamp: '2022-08-31T10:05', location: 'L6' },
  { deviceId: 'D-1575', deviceType: 'Asset', timestamp: '2022-08-31T10:10', location: 'L6' },
  { deviceId: 'D-1575', deviceType: 'Asset', timestamp: '2022-08-31T10:15', location: 'L6' },
];

export function createSortStringFunc(key: keyof GpsData, transformFunc?: typeof Date.parse) {
  return (a: GpsData, b: GpsData) => {
    if (transformFunc) {
      return transformFunc(a[key]) > transformFunc(b[key]) ? 1 : -1;
    } else {
      return a[key] > b[key] ? 1 : -1;
    }
  };
}

export const keysData = {
  deviceId: {
    name: 'Device Id',
  },
  deviceType: {
    name: 'Device Type',
  },
  timestamp: {
    name: 'Timestamp',
  },
  location: {
    name: 'Location',
  },
};
