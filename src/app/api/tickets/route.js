export async function GET() {
const tickets = [
  { id: 1, title: "Database Migration Issue", priority: "High", status: "Open", assignee: "Bob", updatedAt: "12/23/24", description: "Miss File"},
  { id: 2, title: "Frontend Layout Bug", priority: "Medium", status: "In Progress", assignee: "Bob", updatedAt: "10/1/24", description: "Broken Links"},
  { id: 3, title: "Report Generation Slow", priority: "Low", status: "Open", assignee: "Ted", updatedAt: "10/19/25", description: "Restart Needed"},
  { id: 4, title: "API Authentication Failure", priority: "Critical", status: "Open", assignee: "Ted", updatedAt: "10/30/25", description: "Error In Code" },
  { id: 5, title: "New Feature: Dark Mode", priority: "High", status: "In Progress", assignee: "Ted", updatedAt: "1/1/25", description: "Need to be Built"},
  { id: 6, title: "Typo in Footer", priority: "Medium", status: "Closed", assignee: "Bill" , updatedAt: "2/29/25", description: "Spelling Error"},
  { id: 7, title: "Old User Account Cleanup", priority: "Low", status: "Open", assignee: "Ted", updatedAt: "3/9/25" , description: "User Profile Update"},
  { id: 8, title: "Server Load Spikes", priority: "High", status: "On hold", assignee: "Bill", updatedAt: "10/16/25" , description: "Reset"},
  { id: 9, title: "Broken Link in Documentation", priority: "Critical", status: "Open", assignee: "Bob", updatedAt: "4/6/25", description: "Broken Link"},
  { id: 10, title: "Update Links", priority: "Medium", status: "In Progress", assignee: "Bill", updatedAt: "8/19/25", description: "Input New Links"},
  { id: 11, title: "Color Scheme", priority: "Low", status: "Closed", assignee: "Bob", updatedAt: "9/19/25", description: "Change Colors" },
  { id: 12, title: "Security Patch", priority: "High", status: "Open" , assignee: "Bill", updatedAt: "10/15/25", description: "Remove Editing Abilities"}
];
 return Response.json(tickets);
}