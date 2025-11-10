import TicketCard from './TicketCard';

// Ticket List of items
export default function TicketList({ tickets, onAddToQueue }) {

  return (
    <div className='list'>
        <br />
      <h2>Tickets</h2>
      <ul>
        {tickets.map((t) => (
          <li key={t.id}>
            <TicketCard
              id={t.id}
              title={t.title}
              priority={t.priority}
              status={t.status}
              description={t.description}
              assignee={t.assignee}
              updateAt={t.updatedAt}
              onAddToQueue={onAddToQueue}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

