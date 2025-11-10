'use client';

import { useEffect, useMemo, useState } from 'react';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import SearchBox from './SearchBox';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';


export default function Board(params) {
    const [tickets, setTickets] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [queue, setQueue] = useState([])
  const [search, setSearch] = useState ('')
  const [filters, setFilters] = useState({ status: 'All', priority: 'All'})


   const setStatus = (status) => setFilters(prev => ({...prev, status}));

   const setPriority = (priority) => setFilters(prev => ({...prev, priority}))

    useEffect(() => {
        fetch('/api/tickets')
        .then(r => r.json())
        .then(setTickets)
        .catch(console.error);
        }, []);
  
 const availableTickets = useMemo(() => {
    const q = String(search ?? '').trim().toLowerCase();
    return tickets.filter(t => {
        const matchPriority = filters.priority === 'All' || t.priority === filters.priority
       const title = String(t.title ?? '').toLowerCase()
        const description = String (t.description ?? '').toLowerCase()
        const matchSearch = !q || title.includes(q) || description.includes(q)
        const matchStatus = filters.status === 'All' || t.status === filters.status

        return matchStatus && matchPriority && matchSearch 
    })

}, [tickets, filters, search]);
  const isEmpty = !loading && !error && availableTickets.length === 0;
  const handleAddToQueue = (ticketId) => {const found = tickets.find(t => t.id === ticketId);
    if (!found) return;
  
    setQueue(prev => (prev.includes(ticketId) ? prev : [...prev, ticketId]));};

const handleRemoveFromQueue = (ticketId) => {setQueue(prev => prev.filter(id => id !== ticketId));};

const handleClearQueue = () => {setQueue([]);};

return (
    <main>
       
        <SearchBox value={search} onChange={setSearch} />
        {/* Filers */}
        <StatusFilter value={filters.status} onChange={setStatus} />
        <PriorityFilter value={filters.priority} onChange={setPriority} />

        {!loading && !error && availableTickets.length > 0 && (
        <TicketList tickets={availableTickets} onAddToQueue={handleAddToQueue} />)}

        <StatusMessage loading={loading} error={error} isEmpty={isEmpty} />
       
      {loading && <p>Loading…</p>}
      {error && <p>{error}</p>} 

      <MyQueueSummary queue={queue} tickets={tickets} onRemove={handleRemoveFromQueue} onClear={handleClearQueue} />

      {isEmpty && <p>No tickets match your filters.</p>}

    </main>
  );
}
   
  
