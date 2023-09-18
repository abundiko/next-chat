"use server";

import { NextResponse } from "next/server";

export async function POST(req) {
  const formdata = req.body;
  console.log(formdata);
  return NextResponse.json({ test: "hello world" });
}
