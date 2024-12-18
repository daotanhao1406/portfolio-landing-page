import Image from 'next/image'

export default function MoreQuestionCard() {
  return (
    <div className='flex rounded-xl gap-4 w-full max-w-2xl bg-questions-card bg-center bg-no-repeat bg-cover'>
      <div className=' flex flex-col text-center py-12 sm:px-6 px-2'>
        <p className='text-base font-medium'>Do you have more Questions?</p>
        <p className='text-xl font-bold'>Just Drop a Message!</p>
        <div className='flex gap-4 mt-6'>
          <button className='flex items-center justify-start gap-2 text-sm sm:text-base bg-green-500 text-white pl-2 pr-5 py-1 rounded-full'>
            <Image src={'/whatsapp-white-icon.svg'} width={32} height={32} alt='whatsapp' /> WhatsApp
          </button>
          <button className='flex items-center text-sm sm:text-base justify-start gap-2 bg-red-500 text-white pl-2 pr-5 py-1 rounded-full'>
            <Image src={'/gmail-icon.svg'} width={32} height={32} alt='whatsapp' /> Email
          </button>
        </div>
      </div>
    </div>
  )
}
