export interface Sensor {
  fTimestamp: string;
  fDeviceSN: string;
  sensorSerialNumber: string;
  sensorName: string;
  isAssociated: boolean;
  fDeviceLogicalName: string;
  fSensorType: number;
  fSensorTypeDescription: string;
  fSensorIndex: string;
  fSensorValue: string;
  fSensorState: string;
  fSensorRSSI: string;
  fSensorVoltage: string;
}
