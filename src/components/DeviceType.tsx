type DeviceTypeProps = {
  deviceType: string;
};

export const DeviceType = ({ deviceType }: DeviceTypeProps) => {
  return (
    <span
      className={` block text-sm font-medium mr-2 px-2.5 py-0.5 rounded w-fit ${
        deviceType === 'Aircraft'
          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
          : deviceType === 'Personal'
          ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
          : 'bg-red-100 text-red-800  dark:bg-red-900 dark:text-red-300'
      }`}>
      {deviceType}
    </span>
  );
};
