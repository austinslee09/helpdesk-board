'use client';

export default function TicketCard({ id, title, priority, status, assignee, updatedAt, description, addToQueue, inQueue }) {
    return ( <div>
        <div>
            <h3 > Title: {title}</h3>
             <div>Update Date: {updatedAt}</div>
             <div>Status:{status}</div>
             <div>Description: {description}</div>
             <div>Priority: {priority}</div>
             <div>Assignee: {assignee}</div>
        </div>

         <button onClick={() => addToQueue(id)}>Add to Queue</button>
      </div>
    )
}