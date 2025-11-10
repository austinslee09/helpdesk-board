export async function GET() {
const tickets = [
  { id: 1, priority: "High", status: "Open" },
  { id: 2, priority: "Medium", status: "In Progress" },
  { id: 3, priority: "Low", status: "Open" },
  { id: 4, priority: "High", status: "Open" },
  { id: 5, priority: "High", status: "In Progress" },
  { id: 6, priority: "Medium", status: "Open" },
  { id: 7, priority: "Low", status: "Closed" },
  { id: 8, priority: "High", status: "Open" },
  { id: 9, priority: "Critical", status: "On hold" },
  { id: 10, priority: "Medium", status: "In Progress" },
  { id: 11, priority: "Low", status: "Closed" },
  { id: 12, priority: "High", status: "Closed" },
  { id: 13, priority: "Medium", status: "Open" },
  { id: 14, priority: "High", status: "In Progress" },
  { id: 15, priority: "Low", status: "Open" },
  { id: 16, priority: "High", status: "Open" }
];
 return Response.json(tickets);
}