// import React from 'react';

function Introduction() {
  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='h-[120px] border-r-[1px] border-gray-300 mt-[-20px]' />
      <div className='w-[10px] h-[10px] bg-red-950 rounded-full mt-[-5px]' />
      <h2 className='mt-5 text-black font-medium text-[13px] tracking-widest'>
        HELLO MY NAME IS</h2>
      <h2 className='text-[70px] font-bold text-black tracking-widest mt-5'>ALMINA<br></br>TANGLAO</h2>
      <img src="/avatar.jpg" className='w-[160px] h-[160xp] bg-gray-200 p-7 rounded-full mt-7' />
    </div>
  );
}

export default Introduction;
