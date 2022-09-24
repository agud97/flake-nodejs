import { defineStore } from 'pinia';

const usePhysicalInputsStore = defineStore('PhysicalInputs', {
  state: () => ({
    AsiInterfaces: [{
      name: 'FD788_FED_MUX1',
      serialNumber: 'IDS_56992234j43',
      poVer: 'V457899_t',
      slot: 'PCI#1',
      ports: [
        { id: 1, name: 'SAT1_MUX1', in: true },
        { id: 2, name: '', in: true },
        { id: 3, name: '', in: false },
        { id: 4, name: '', in: false },
        { id: 5, name: 'SAT2_MUX1', in: true },
        { id: 6, name: '', in: true },
        { id: 7, name: '', in: false },
        { id: 8, name: '', in: false },
      ],
    }, {
      name: 'FD788_REG_MUX1',
      serialNumber: 'IDS_56992234j43',
      poVer: 'V457899_t',
      slot: 'PCI#1',
      ports: [
        { id: 1, name: 'SAT1_MUX1', in: true },
        { id: 2, name: '', in: true },
        { id: 3, name: '', in: false },
        { id: 4, name: '', in: false },
        { id: 5, name: 'SAT2_MUX1', in: true },
        { id: 6, name: '', in: true },
        { id: 7, name: '', in: false },
        { id: 8, name: '', in: false },
      ],
    }],
    IpInterfaces: [
      { id: 1, name: 'Synterra_TVO', board: ' Intel Eth 8816' },
      { id: 2, name: 'VGTRK_REG_main', board: ' Intel Eth 8816' },
      { id: 3, name: 'R24_REG_main', board: ' Intel Eth 8816' },
      { id: 4, name: '', board: ' Intel Eth 8816' },
    ],
  }),
  getters: {
  },
  actions: {
  },
});
export default usePhysicalInputsStore;
