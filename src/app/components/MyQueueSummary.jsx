'use client';
export default function ({ queue = [], tickets =[], onRemove, onClear}) {
    const nameById = new Map(tickets.map(t => [t.id, t.name]))
    const count = queue.length
    const isEmpty = count === 0
 
    return (
        <div >
      <h2>Queue</h2>

      {isEmpty ? (
        <p >Your queue is empty.</p>
      ) : (
        <ul >
          {queue.map((id) => (
            <li key={id} >
              <div>
                {nameById.get(id) ?? id}
              </div>

              <button onClick={() => onRemove?.(id)}  title="Remove from queue"> 
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
       
        <div>
            Queued: <strong>{count}</strong>
            </div>

      <div>
        <button onClick={onClear} disabled={isEmpty}>
          Clear 
        </button>
      </div>
    </div>
  );
}

