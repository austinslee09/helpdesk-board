'use client';
// Creates cards
export default function TicketCard({ id, title, priority, status, assignee, updatedAt, description, onAddToQueue, inQueue }) {
    return ( <div>
        <div className="card">
        <br />
            <h3 > Title: {title}</h3>
            <br />
             <div>Update Date: {updatedAt}</div>
             <div>Status:{status}</div>
             <div>Description: {description}</div>
             <div>Priority: {priority}</div>
             <div>Assignee: {assignee}</div>
             <br />
        </div>
         <button onClick={() => onAddToQueue(id)}>Add to Queue</button>
      </div>
    )
}