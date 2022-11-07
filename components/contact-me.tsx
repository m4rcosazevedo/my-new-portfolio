import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Title } from './ui'

type Props = {
  contact: Contact
}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactMe ({ contact }: Props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:m4rcos.azevedo@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  if (!contact) return <p>Carregando...</p>

  return (
    <div
      className="
        h-screen relative flex flex-col text-center md:text-left
        md:flex-row max-w-7xl justify-evenly mx-auto items-center
      "
    >
      <Title>Contact</Title>
      
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center" dangerouslySetInnerHTML={{ __html: contact.title }} />

        <div className="space-y-10">
          {!!contact.phone && (
            <div className="flex items-center space-x-5 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{contact.phone}</p>
            </div>
          )}

          {!!contact.address && (
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{contact.address}</p>
            </div>
          )}

          {!!contact.email && (
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
              <p className="text-2xl">{contact.email}</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register('message')} placeholder="Message" className="contactInput" />

          <button className="
            bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold
            text-lg 
          ">Submit</button>
        </form>

      </div>

    </div>
  )
}