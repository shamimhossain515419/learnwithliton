import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const POST = async (req, res) => {
  const data = {
    price: 33,
    discount: 10
  };
  
  try {
    // Create a new instance of the "nila" model using Prisma
    const result = await prisma.nila.create({
      data: data
    });
  
    // Return the success response
    return NextResponse.json({
      status: "success",
      data: result,
      message: "Instance created successfully"
    });
  } catch (error) {
    // Handle any errors that occur during the creation process
    console.error("Error creating instance:", error);
  
    // Return an error response
    return NextResponse.json({
      status: "fail",
      message: "Error creating instance",
      error: error.message // Optionally, you can include the error message in the response
    });
  }
};
