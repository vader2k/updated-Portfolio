import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {BiRightArrow} from 'react-icons/bi'

const TabsComponent = () => {    
    return (
        <Tabs>
          <TabList className='flex gap-10  border-b border-golden pt-5'>
            <Tab  >Tethral </Tab>
            <Tab>HealthStarks</Tab>
            <Tab>Baicart</Tab>
            {/* Add more tabs as needed */}
          </TabList>
    
          <TabPanel className='pt-10' >
            <div>
                <p className='text-[18px]'>Software engineer <span className='text-golden'>@ Tethral</span></p>
                <p className='text-[14px] text-gray-500'>March 2023 - present</p>
                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px]'>
                    Worked along side creative directors to lead the research, development & architecture of tethral solutions to fulfil business requirements
                    </p>
                </div>

                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px]'>
                    collaborated with designers, product managers & other engineers to transform creative concepts into production realities for clients & stakeholders
                    </p>
                </div>

                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px]'>
                    Deliver high quality codes and mmanage companies social media activities
                    </p>
                </div>
            </div>
          </TabPanel>
          <TabPanel  className=''>
          <div>
                <p className='text-[18px]'>Frontend engineer <span className='text-golden'>@ Healthstarks</span></p>
                <p className='text-[14px] text-gray-500'>september 2023 - present</p>
                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px]'>
                    Developed and styled interractive web componenets to meet company needs and satisfaction.
                    </p>
                </div>

                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px]'>
                    contributed to the development of companies webpage design and implementation.
                    </p>
                </div>
            </div>
          </TabPanel>
          <TabPanel  className=''>
          <div>
                <p className='text-[18px]'>Product Researcher <span className='text-golden'>@ Baicart</span></p>
                <p className='text-[14px] text-gray-500'>september 2023 - present</p>
                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px]'>
                    Responsible for product research at Baicart stores to improve quality of products and increase sales.
                    </p>
                </div>

                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px]'>
                    Buit and designed technical solutions according to the stakeholders business requirements.
                    </p>
                </div>
            </div>
          </TabPanel>
          {/* Add corresponding content for more tabs */}
        </Tabs>
      );
    }


export default TabsComponent