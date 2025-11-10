'use client';
export default function StatusFilter({value, onChange}) {
    const options = ['Open', 'Closed', "In Progress", "On hold"];

    return (
    <label>
        <span >Status Filter: </span>
        <select value={value}onChange={(e) => onChange(e.target.value)}>
                {options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
         </select>
    </label>
   )
}