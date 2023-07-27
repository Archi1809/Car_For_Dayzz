import Image from "next/image";
import Car from "./Car";

const Carlist = () => {
  return (
    <div className='home__cars-wrapper'>
      <Car make="Hyundai" model="Teko" fuel="gas" mpg={24} transmission="Automatic" drive="14km/hr" noofperson={5} img="/car-logo.jpeg" carRent={100} />
      <Car make="Hyunda" model="Teko" fuel="gas" mpg={24} transmission="Automatic" drive="14km/hr" noofperson={5} img="/car-logo.jpeg" carRent={100}/>
      <Car make="Hyunda" model="Teko" fuel="gas" mpg={24} transmission="Automatic" drive="14km/hr" noofperson={5} img="/car-logo.jpeg" carRent={100}/>
      <Car make="Hyunda" model="Teko" fuel="gas" mpg={24} transmission="Automatic" drive="14km/hr" noofperson={5} img="/car-logo.jpeg" carRent={100}/>
      <Car make="Hyunda" model="Teko" fuel="gas" mpg={24} transmission="Automatic" drive="14km/hr" noofperson={5} img="/car-logo.jpeg" carRent={100}/>
      <Car make="Hyunda" model="Teko" fuel="gas" mpg={24} transmission="Automatic" drive="14km/hr" noofperson={5} img="/car-logo.jpeg" carRent={100}/>
      <Car make="Hyunda" model="Teko" fuel="gas" mpg={24} transmission="Automatic" drive="14km/hr" noofperson={5} img="/car-logo.jpeg" carRent={100}/>
      <Car make="Hyunda" model="Teko" fuel="gas" mpg={24} transmission="Automatic" drive="14km/hr" noofperson={5} img="/car-logo.jpeg" carRent={100}/>
      
    </div>
  )
}

export default Carlist
