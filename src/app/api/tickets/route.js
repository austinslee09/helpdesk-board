

export async function GET() {
const tickets = [
  { id: 1, priority: "High", status: "Open" },
  { id: 2, priority: "Medium", status: "In Progress" },
  { id: 3, priority: "Low", status: "Open" },
  { id: 4, priority: "Critical", status: "Open" },
  { id: 5, priority: "High", status: "In Progress" },
  { id: 6, priority: "Medium", status: "Open" },
  { id: 7, priority: "Low", status: "Completed" },
  { id: 8, priority: "Critical", status: "Open" },
  { id: 9, priority: "High", status: "In Review" },
  { id: 10, priority: "Medium", status: "In Progress" },
  { id: 11, priority: "Low", status: "In Review" },
  { id: 12, priority: "Critical", status: "Completed" },
  { id: 13, priority: "Medium", status: "Open" },
  { id: 14, priority: "High", status: "In Progress" },
  { id: 15, priority: "Low", status: "Open" },
  { id: 16, priority: "Critical", status: "In Review" }
];
 return Response.json(tickets);
}