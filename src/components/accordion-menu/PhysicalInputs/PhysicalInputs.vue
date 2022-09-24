<template>
  <MenuMain>
    <template #interfaces>
      <div class="interface-main">
        <div class="interfaces-h">
          ASI интерфейсы
        </div>
        <ul class="asi-interfaces">
          <li
            v-for="AsiInterface in physicalInputs.AsiInterfaces"
            :key="AsiInterface.name"
            class="asi-interface"
          >
            <div
              class="header"
              :style="getAsiInterfaceStyle(AsiInterface.name)"
              @click="asiInterfaceSelectHandler(AsiInterface)"
            >
              <img
                height="25"
                alt="PC-board"
                src="@/assets/svg/menu/PC-board.svg"
              >
              {{ AsiInterface.name }}
            </div>
            <ul class="ports">
              <li
                v-for="port in AsiInterface.ports"
                :key="port.id"
                class="port"
                :style="getPortStyles(port, AsiInterface.name)"
                @click="portSelectHandler(port, AsiInterface.name)"
              >
                <div class="port-name">
                  <img
                    height="15"
                    style="margin-right: 5px;"
                    alt="PC-board"
                    src="@/assets/svg/menu/port-icon.svg"
                  >
                  Port#{{ port.name ? port.id+'_'+port.name : port.id }}
                </div>
                <img
                  v-if="port.in"
                  style="margin-right: 20px;"
                  height="15"
                  alt="in"
                  src="@/assets/svg/menu/port-in.svg"
                >
                <img
                  v-else
                  style="margin-right: 20px;"
                  height="15"
                  alt="out"
                  src="@/assets/svg/menu/port-out.svg"
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="interfaces-h ">
          IP интерфейсы
        </div>
        <ul class="ip-interface">
          <li
            v-for="IpInterface in physicalInputs.IpInterfaces"
            :key="IpInterface.id"
            class="header"
            :style="getIpInterfaceStyle(IpInterface.name)"
            @click="ipInterfaceSelectHandler(IpInterface)"
          >
            <img
              style="margin-right: 5px;"
              height="15"
              alt="Eth-icon"
              src="@/assets/svg/menu/Eth-icon.svg"
            >
            Eth#{{ IpInterface.name ? IpInterface.id+'_'+IpInterface.name : IpInterface.id }}
          </li>
        </ul>
      </div>
    </template>

    <template #description>
      <SelectedAsiInterface
        v-if="selectedAsiInterface"
        :selected-asi-interface="selectedAsiInterface"
      />
      <SelectedPort
        v-else-if="selectedPort"
        :selected-port="selectedPort"
        :selected-asi-interface-name="selectedAsiInterfaceName"
      />
      <SelectedIpInterface
        v-else-if="selectedIpInterface"
        :selected-ip-interface="selectedIpInterface"
      />
    </template>

    <template #conflicts>
      Установленное значение превышает производительность карты
    </template>
  </MenuMain>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
import sassVar from '@/assets/sass/_var.module.sass';
import usePhysicalInputsStore from '@/store/menu/physicalInputs';
import MenuMain from '../MenuMain.vue';
import SelectedIpInterface from './SelectedIpInterface.vue';
import SelectedPort from './SelectedPort.vue';
import SelectedAsiInterface from './SelectedAsiInterface.vue';

const physicalInputs = usePhysicalInputsStore();

interface portInterface {
  id:number,
  name:string,
  in:boolean
}
interface IpInterfaceInterface {
  id: number,
  name: string,
  board: string
}

interface AsiInterfaceInterface {
  name: string,
  serialNumber: string,
  poVer: string,
  slot: string,
  ports: {
    id: number,
    name: string,
    in: boolean,
  }[];
}

const selectedPort:Ref<portInterface| null> = ref(null);
const selectedAsiInterfaceName:Ref<string|null> = ref(null);
const selectedAsiInterface:Ref<AsiInterfaceInterface|null> = ref(null);
const selectedIpInterface:Ref<IpInterfaceInterface | null> = ref(null);

const getPortStyles = (port:portInterface, AsiInterfaceName:string) => {
  const selectedItem = selectedPort.value && selectedAsiInterfaceName.value
    && selectedPort.value.id === port.id && selectedAsiInterfaceName.value === AsiInterfaceName;
  if (port.in) {
    if (selectedItem) {
      return { background: sassVar.colorHover, color: sassVar.whiteFont };
    }
    return { color: sassVar.whiteFont };
  }
  if (selectedItem) {
    return { background: sassVar.colorHover };
  }
  return undefined;
};

const getAsiInterfaceStyle = (name:string) => (selectedAsiInterface.value && name
=== selectedAsiInterface.value.name ? { background: sassVar.colorHover } : {});

const getIpInterfaceStyle = (name:string) => (selectedIpInterface.value && name
=== selectedIpInterface.value.name ? { background: sassVar.colorHover } : {});

const portSelectHandler = (port:portInterface, asiInterfaceName:string) => {
  selectedPort.value = port;
  selectedAsiInterfaceName.value = asiInterfaceName;
  selectedAsiInterface.value = null;
  selectedIpInterface.value = null;
};
const asiInterfaceSelectHandler = (asiInterface:AsiInterfaceInterface) => {
  selectedAsiInterface.value = asiInterface;
  selectedPort.value = null;
  selectedIpInterface.value = null;
};
const ipInterfaceSelectHandler = (IpInterface:IpInterfaceInterface) => {
  selectedIpInterface.value = IpInterface;
  selectedPort.value = null;
  selectedAsiInterface.value = null;
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_var.module.sass"
.interface-main
  padding-left: 15px
.interfaces-h
  color: $whiteFont
  font-weight: 600
  font-size: 24px
.asi-interfaces
  position: relative
  overflow: hidden
.header
  position: relative
.header::before
  content: ""
  display: block
  position: absolute
  left: -17px
  bottom: .5em
  width: 20px
  height: 0
  border-bottom: 1px solid $lineColor

.asi-interfaces::before
  content: ""
  position: absolute
  height: 1000px
  left:  8px
  width: 1px
  background: $lineColor
.ip-interface
  position: relative
  overflow: hidden

.ip-interface:before
  content: ""
  position: absolute
  height: 1000px
  width: 1px
  background: $lineColor
  left: 8px

.ip-interface,
.asi-interface
  margin-top: 5px
  padding-left: 25px
  cursor: pointer
  .header
    margin-top: 3px
  .header:hover
    background: $colorHover
  .ports
    margin-left: 5px
    overflow: hidden
    position: relative
    &:before
      content: ""
      position: absolute
      height: 1000px
      width: 0.5px
      background: $lineColor
    .port
      margin-top: 3px
      cursor: pointer
      position: relative
      padding-left: 17px
      display: flex
      justify-content: space-between
      align-items: center
      &:hover
        background: $colorHover
      &::before
        content: ""
        display: block
        position: absolute
        left: 0
        bottom: .5em
        width: 20px
        height: 0
        border-bottom: 1px solid $lineColor
      .port-name
        display: flex
        align-items: center
</style>
