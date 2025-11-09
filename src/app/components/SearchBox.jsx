'use client';
import React, { useState } from 'react';
 const [searchTerm, setSearchTerm] = useState('');
 return(
    <label className='box1'>
        <input type="text"
        value={value}
         onChange={(e) => onChange(e.target.value)} />
    </label>
 )