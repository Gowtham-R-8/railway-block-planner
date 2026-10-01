import { mockBlocks } from "../data/mockBlocks";

export function calculatePriority(request) {
  let score = 0;

  if (request.priority === "Critical") {
    score += 100;
  } else if (request.priority === "High") {
    score += 75;
  } else if (request.priority === "Medium") {
    score += 50;
  } else {
    score += 25;
  }

  if (request.duration <= 60) {
    score += 10;
  }

  return score;
}


export function generateBlockPlan(requests = mockBlocks) {
  const sorted = [...requests].sort(
    (a, b) =>
      calculatePriority(b) -
      calculatePriority(a)
  );

  return sorted.map((request, index) => ({
    ...request,
    plannerScore: calculatePriority(request),
    planOrder: index + 1,
    status:
      request.status === "Pending"
        ? "AI Scheduled"
        : request.status
  }));
}


export function getPlannerSummary(blocks = mockBlocks) {
  const total = blocks.length;

  const approved = blocks.filter(
    (b) => b.status === "Approved"
  ).length;

  const pending = blocks.filter(
    (b) => b.status === "Pending"
  ).length;

  const completed = blocks.filter(
    (b) => b.status === "Completed"
  ).length;

  const totalDuration = blocks.reduce(
    (sum, block) =>
      sum + Number(block.duration || 0),
    0
  );

  return {
    total,
    approved,
    pending,
    completed,
    totalDuration
  };
}