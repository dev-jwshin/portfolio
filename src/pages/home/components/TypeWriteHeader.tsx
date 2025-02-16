import { TypeAnimation } from 'react-type-animation';

export const TypewriterHeader = () => {
  return (
    <div className='col-span-3 md:col-span-4 lg:col-span-6 flex flex-col gap-1 lg:gap-2'>
      <p className='text-white text-xl md:text-4xl font-light'>Hello!</p>
      <div className='text-white text-2xl md:text-5xl font-light'>
        <span className='pr-1'>I'm </span>
        <TypeAnimation
          sequence={[
            'JUNWON SHIN',
            2000,
            'WEB DEVELOPER.',
            2000,
            'APP DEVELOPER.',
            2000,
            'FULL STACK DEVELOPER.',
            2000,
          ]}
          speed={10}
          repeat={Infinity}
          style={{ 
            fontWeight: 'bold', 
            WebkitTextStrokeColor: 'white', 
            WebkitTextStrokeWidth: '1.5px', 
            WebkitTextFillColor: 'transparent' 
          }}
        />
      </div>
    </div>
  );
};