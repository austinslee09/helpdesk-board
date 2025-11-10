'use client';
// Priority Filter
export default function PriorityFilter({value, onChange}) {
    const options = ['Low', 'Medium', 'High', 'Critical'];
   return (

    <label>
        <span>Priority Filter:</span>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map(opt => ( <option key={opt} value={opt}>{opt}</option>
                ))}
         </select>
    </label>
   )
}