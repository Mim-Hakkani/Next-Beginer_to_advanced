import Link from 'next/link';
import React from 'react';

const Clints = () => {
    const clints =[
        {
            id:1,
            name:'ehasn marketing'
        },
        {
            id:2,
            name:'ehasn Education'
        }
    ]
    return (
        <div>
            <h1>I am Main Clint of Ehsan Marketing</h1>

            {
                clints.map(clint=>
                    <ul key={clint.id}>
                        <li><Link href={`clints/${clint.id}/`}>{clint.name}</Link></li>
                        
                  </ul>)
            }
        
        </div>
    );
};

export default Clints;