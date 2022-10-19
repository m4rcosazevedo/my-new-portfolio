import { motion } from 'framer-motion'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function ContactMe ({}: Props) {
  return (
    <div
      className="
        h-screen relative flex flex-col text-center md:text-left
        md:flex-row max-w-7xl justify-evenly mx-auto items-center
      "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I Have just what you need{' '}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+5577981378010</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Developer Lane</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">m4rcos.azevedo@gmail.com</p>
          </div>
        </div>

        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            placeholder="Message"
            className="contactInput"
          />

          <button className="
            bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold
            text-lg 
          ">Submit</button>
        </form>

      </div>

    </div>
  )
}