'use client';

import TicketCard from "./TicketCard";

export default function TicketList({ tickets, addToQueue }) {
 if (!tickets?.length) {
   return (
     <div>
       <h2>Tickets</h2>
       <p >No tickets.</p>
     </div>
   );
 }


 return (
   <div>
     <h2 >Tickets</h2>
     <ul>
       {tickets.map((t) => (
         <li key={t.id}>
           <TicketCard
             id={t.id}
             title={t.title}
             priority={t.priority}
             status={t.status}
             assignee={t.assignee}
             updatedAt={t.updatedAt}
             
             addToQueue={onAddToQueue}
           />
         </li>
       ))}
     </ul>
   </div>
 );
}


