import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {BiRightArrow} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const TabsComponent = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.3, // When 30% of the element is in view
      });    
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

                <motion.div
                            ref={ref}      
                            initial={{ opacity: 0, y: 50 }} 
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 1 }} 
                >
                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px] md:max-w-[1000px]'>
                    Worked along side creative directors to lead the research, development & architecture of tethral solutions to fulfil business requirements
                    </p>
                </div>

                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px] md:max-w-[1000px]'>
                    collaborated with designers, product managers & other engineers to transform creative concepts into production realities for clients & stakeholders
                    </p>
                </div>

                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px] md:max-w-[1000px]'>
                    Deliver high quality codes and manage companies social media activities to create awareness and improve brand marketing.
                    </p>
                </div>
                </motion.div>

            </div>
          </TabPanel>
          <TabPanel  className=''>
          <div>
                <p className='text-[18px]'>Frontend engineer <span className='text-golden'>@ Healthstarks</span></p>
                <p className='text-[14px] text-gray-500'>september 2023 - present(per-time)</p>
                <motion.div
                        ref={ref}      
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                        transition={{ duration: 1 }} 

                >
                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px] md:max-w-[1000px]'>
                    Developed and styled interractive web componenets to meet company needs and satisfaction.
                    </p>
                </div>

                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px] md:max-w-[1000px]'>
                    contributed to the development of companies webpage design and implementation.
                    </p>
                </div>
                </motion.div>

            </div>
          </TabPanel>
          <TabPanel  className=''>
          <div>
                <p className='text-[18px]'>Product Researcher <span className='text-golden'>@ Baicart</span></p>
                <p className='text-[14px] text-gray-500'>April 2023 - december 2023</p>
                <motion.div
                    ref={ref}      
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 1 }} 
                >
                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px] md:max-w-[1000px]'>
                    Responsible for product research at Baicart stores to improve quality of products and increase sales.
                    </p>
                </div>

                <div className='flex items-start justify-center gap-5 py-5'>
                    <BiRightArrow className='text-golden text-[1rem]'/>
                    <p className='max-w-[300px] md:max-w-[1000px]'>
                    Buit and designed technical solutions according to the stakeholders business requirements.
                    </p>
                </div>
                </motion.div>
            </div>
          </TabPanel>
          {/* Add corresponding content for more tabs */}
        </Tabs>
      );
    }


export default TabsComponent