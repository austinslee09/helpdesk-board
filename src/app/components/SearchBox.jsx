'use client';
import React, { useState } from 'react';
 export default function SearchBox ({ value, options = [], onChange }) {

    // creates search box
 return(
    <label className='box1'>
        <span> Search </span>
        <input type="text"value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
 )
}