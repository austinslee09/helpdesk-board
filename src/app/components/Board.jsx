'use client';


import { useEffect, useMemo, useState } from 'react';
import TicketCard from './TicketCard';
import TicketList from './TicketList';
import StatusMessage from "./StatusMessage";


export default function Board(params) {
   const [tickets, setTickets] = useState([])
   const [loading, setLoading] = useState(true);
   const filters = { status: 'All', priority: 'All' };
   const search = '';
   const [error, setError] = useState(null);
   const [queue, setQueue] = useState([])



   useEffect(() => {
       fetch('/api/tickets')
           .then(r => r.json())
           .then(setTickets)
           .catch(console.error);
   }, [])
  
   return (
       <ul>
           {tickets.map(t => (
               <li key={t.id}> ID:{t.id}: {t.description}: {t.priority}: {t.status}: {t.assignee}: {t.updatedAt}</li>
           ))}
       </ul>
   );
  
}
