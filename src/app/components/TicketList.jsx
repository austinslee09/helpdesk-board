import TicketCard from './TicketCard';

// Renders a list of tickets with stable keys (ticket.id).
export default function TicketList({ tickets, onAddToQueue }) {

  return (
    <div>
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
              updatedAt={t.updatedAt}
              onAddToQueue={onAddToQueue}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

