import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
import { ChevronDownIcon} from "@heroicons/react/20/solid";
import { MapPinIcon } from "lucide-react";
import Button from "../UI/Button";

const Explore = () => {
  return (
    <div className="shadow my-10 border border-zinc-100 rounded-md">
        <h3 className="text-2xl font-medium p-5 ">Explore Neighborhood</h3>
        <div className="p-5 flex lg:flex-row flex-col justify-between items-start gap-3">
          <div className="flex  flex-col gap-5 flex-1">
          <div className="inline-flex items-center justify-center w-full gap-3">
              <div className="flex gap-3">
                <span>
                  <MapPinIcon size={20} className="text-red-500" />
                </span>
                <span className="text-sm">Gokul Village</span>
              </div>
              <label htmlFor="search">To:</label>
              <input
                id="search"
                type="text"
                className="block w-full  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
              />
              <Button title="Search" />
            </div>
            <div className="img-container w-full  overflow-hidden ">
              <img
                src="/dummy.png"
                alt="img"
                className=" w-full object-cover rounded-md "
              />
            </div>
          </div>

          <div className="lg:w-2/5 w-full h-full">
            <TabGroup>
              <TabList className="flex gap-3  items-center w-full justify-between bg-orange-100">
                {["Transport", "Essential", "Utility"].map((tab, index) => (
                  <Tab
                    key={index}
                    className="p-3  text-sm/6 font-semibold text-neutral-900 focus:outline-none  data-[selected]:border-b-2  data-[selected]:border-b-primary  data-[selected]:text-primary  "
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                <TabPanel className="bg-[#FDFAF7] p-5 space-y-2">
                  <Disclosure
                    as="div"
                    className="p-2 border border-zinc-200 rounded-md shadow-sm bg-white"
                    defaultOpen={true}
                  >
                    <DisclosureButton className="group flex w-full items-center justify-between">
                      <span className="text-sm/6 font-semibold  text-neutral-700 group-data-[hover]:text-black">
                        Bus Station
                      </span>
                      <ChevronDownIcon className="size-5 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 text-sm/5 text-neutral-700">
                      <ul>
                        {[
                          {
                            station: "Borivali Railway Station",
                            distance: "1.5 km",
                          },
                          {
                            station: "Mira Road Railway Station",
                            distance: "2.5 km",
                          },
                          {
                            station: "Dahisar Railway Station",
                            distance: "3.5 km",
                          },
                        ].map((station, index) => (
                          <li key={index}>
                            <div className="flex justify-between">
                              <span>{station.station}</span>
                              <span>{station.distance}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    className="p-2 bg-white border border-zinc-200 rounded-md shadow-sm "
                  >
                    <DisclosureButton className="group flex w-full items-center justify-between">
                      <span className="text-sm/6 font-semibold text-neutral-700 group-data-[hover]:text-black">
                        Bus Station
                      </span>
                      <ChevronDownIcon className="size-5 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    className="p-2 bg-white border border-zinc-200 rounded-md shadow-sm "
                  >
                    <DisclosureButton className="group flex w-full items-center justify-between">
                      <span className="text-sm/6 font-medium  text-neutral-700 group-data-[hover]:text-black">
                        Bus Station
                      </span>
                      <ChevronDownIcon className="size-5 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                  </Disclosure>
                  <Disclosure
                    as="div"
                    className="p-2 bg-white border border-zinc-200 rounded-md shadow-sm "
                  >
                    <DisclosureButton className="group flex w-full items-center justify-between">
                      <span className="text-sm/6 font-medium  text-neutral-700 group-data-[hover]:text-black">
                        Bus Station
                      </span>
                      <ChevronDownIcon className="size-5 fill-black group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                    </DisclosureButton>
                  </Disclosure>
                </TabPanel>
                <TabPanel>Content 2</TabPanel>
                <TabPanel>Content 3</TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
  )
}

export default Explore