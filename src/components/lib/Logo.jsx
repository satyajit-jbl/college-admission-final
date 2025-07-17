import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
             <Link href={'/'}>
                        <div className='flex items-center gap-2 border py-1 pr-2 pl-1 rounded-r-4xl rounded-l-full btn  text-white'>
                            <Image src={'/assets/logo-AddAid.jpg'} width={30} height={30} alt='logoImage' className='rounded-full' />
                            <p className='font-bold '>Admission Aid</p>
                        </div>
                    </Link>
        </div>
    );
};

export default Logo;