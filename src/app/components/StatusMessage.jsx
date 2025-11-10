'use client';

// Priority
export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading) {
    return (
      <div >
        Loading tickets
      </div>
    );
  }
  if (error) {
    return (
      <div >
        {error}
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div className="mess">
        No match 
      </div>
    );
  }
  return null;
}