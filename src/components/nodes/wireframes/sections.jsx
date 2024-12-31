import { LuCheckCheck, LuDownload, LuFileImage, LuHand, LuImage, LuMousePointerClick, LuPictureInPicture, LuUser, LuUser2, LuVideo } from 'react-icons/lu';

export const Navigation = () => {
  return(
    <div className='bg-gray-100 p-1 py-1 flex justify-between items-center rounded-sm'>
      <div className='h-1 bg-gray-300 w-3 rounded-sm'></div>
      <div className='flex gap-0.5'>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-1 rounded-sm'></div>
      </div>
    </div>
  )
}

export const Comments = () => {
  return(
    <div className='px-3 py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      {/* <span className='font-semibold text-gray-600 text-[6px]'>Comments</span> */}
      <div className='w-full flex items-center gap-0.5'>
        <div className='w-3'>
          <LuUser2 className='text-gray-400' size={9}/>
        </div>
        <div className='h-2 flex-1 bg-gray-200 rounded-sm'>
        </div>
      </div>
      <div className='w-full flex items-center gap-0.5'>
        <div className='h-2 flex-1 bg-gray-200 rounded-sm'>
        </div>
        <div className='w-3'>
          <LuUser2 className='text-gray-400' size={9}/>
        </div>
      </div>
      <div className='w-full flex items-center gap-0.5'>
        <div className='w-3'>
          <LuUser2 className='text-gray-400' size={9}/>
        </div>
        <div className='h-4 flex-1 bg-gray-200 rounded-sm'>
        </div>
      </div>
      
    </div>
  )
}

export const User = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-0.5 items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px] mb-0.5'><LuUser2 className='text-gray-400' size={14}/></span>
      <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
    </div>
  )
}

export const ThankYou = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-0.5 items-center justify-center rounded'>
      <LuCheckCheck className='text-blue-500 mb-0.5' size={14}/>
      <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-8 rounded-sm'></div>
    </div>
  )
}

export const Frame = () => {
  return(
    <div className='h-10 bg-gray-100 flex items-center justify-center rounded'><LuImage className='text-gray-400' size={14} /></div>
  )
}

export const SignIn = ({data}) => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-semibold text-gray-600 text-[6px]'>Sign In</span>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-blue-500 w-5 rounded-sm'></div>
    </div>
  )
}

export const Register = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-semibold text-gray-600 text-[6px]'>Register</span>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-blue-500 w-5 rounded-sm'></div>
    </div>
  )
}

export const Form = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-semibold text-gray-600 text-[6px]'>Form</span>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-white w-8 rounded-sm'></div>
      <div className='h-1 bg-blue-500 w-8 rounded-sm'></div>
    </div>
  )
}

export const Survay = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-semibold text-gray-600 text-[6px]'>Question</span>
      <div className='flex flex-col gap-1'>
        <div className='h-1 bg-white w-10 rounded-sm'></div>
        <div className='h-1 bg-white w-10 rounded-sm'></div>
        <div className='h-3 bg-white w-10 rounded-sm'></div>
      </div>
      
      <div className='h-1 bg-blue-500 w-6 rounded-sm'></div>
    </div>
  )
}

export const Video = () => {
  return(
    <div className='h-10 bg-gray-100 flex items-center justify-center rounded'><LuVideo className='text-gray-400' size={14} /></div>
  )
}

export const Download = () => {
  return(

    <div className='py-2 bg-gray-100 flex flex-col gap-px items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px] mb-1'><LuDownload className='text-gray-400' size={14} /></span>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-4 rounded-sm'></div>
    </div>
  )
}

export const Calendar = () => {
  return(
    <div className='p-2.5 bg-gray-100 rounded'>
      <div className='font-semibold px-1 py-0.5 bg-gray-200 text-gray-600 text-center text-[4px] rounded-t-sm'>Calendar</div>
      <div className='flex flex-col gap-px'>
        <div className='h-1.5 flex items-stretch justify-items-stretch gap-px'>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
        </div>
        <div className='h-1.5 flex items-stretch justify-items-stretch gap-px'>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
        </div>
        <div className='h-1.5 flex items-stretch justify-items-stretch gap-px'>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
        </div>
        <div className='h-1.5 flex items-stretch justify-items-stretch gap-px'>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-white flex-1'></div>
          <div className='bg-gray-300 flex-1'></div>
          <div className='bg-gray-300 flex-1'></div>
        </div>
      </div>
    </div>
  )
}

export const TextBlock = () => {
  return(
    <div className='h-8 bg-gray-100 flex items-center justify-center rounded'>
      <span className='font-bold text-gray-400 text-[8px]'>Section</span>
    </div>
  )
}

export const Hero = () => {
  return(
    <div className='py-2 bg-gray-100 flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px]'><LuImage className='text-gray-400' size={14} /></span>
      <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
    </div>
  )
}



export const Hero2 = () => {
  return(
    <div className='py-2 bg-white flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px]'><LuImage className='text-gray-400' size={14} /></span>
      <div className='h-1 bg-gray-300 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
    </div>
  )
}

export const Hero3 = () => {
  return(
    <div className='p-2 py-3 bg-gray-100 flex gap-1 items-center justify-between rounded'>
      <div className='flex flex-col gap-1'>
        <div className='h-1 bg-gray-300 w-7 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
      </div>
      <div>
        <LuImage className='text-gray-400' size={16} />
      </div>
    </div>
  )
}

export const CallToAction = () => {
  return(
    <div className='py-2 bg-white flex flex-col gap-1 items-center justify-center rounded'>
      <span className='font-bold text-gray-600 text-[8px]'><LuMousePointerClick className='text-gray-400' size={14} /></span>
      <div className='h-1 bg-blue-500 w-8 rounded-sm'></div>
      <div className='h-0.5 bg-gray-300 w-6 rounded-sm'></div>
    </div>
  )
}

export const Footer = () => {
  return(
    <div className='bg-gray-100 p-1 py-1.5 flex justify-between items-center rounded-sm'>
      <div className='flex gap-0.5 flex-col'>
        <div className='h-0.5 bg-gray-300 w-4 rounded-sm'></div>
        <div className='h-0.5 bg-gray-300 w-2 rounded-sm'></div>
      </div>
      <div className='flex gap-0.5'>
      <div className='flex gap-px flex-col'>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2.5 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-1.5 rounded-sm'></div>
        </div>
        <div className='flex gap-px flex-col'>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2.5 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-1.5 rounded-sm'></div>
        </div>
        <div className='flex gap-px flex-col'>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2.5 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-2 rounded-sm'></div>
          <div className='h-px bg-gray-300 w-1.5 rounded-sm'></div>
        </div>
      </div>
    </div>
  )
}