'use client';
import React, { useState } from 'react';
 export default function SearchBox ({ value, options = [], onChange }) {

    // creates search box
 return(
    <div className='search'>
    <label>
        <span> Search </span>
        <input type="text"value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
    </div>
 )
}