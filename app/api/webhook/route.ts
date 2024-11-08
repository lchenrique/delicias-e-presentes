import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const event = await req.json();

  switch (event.type) {
    case "order.placed":
      // Handle order placed
      break;
    case "order.shipment_created":
      // Handle shipment created
      break;
    default:
      return NextResponse.json({ message: "Unhandled webhook event" }, { status: 400 });
  }

  return NextResponse.json({ message: "Webhook processed" });
}