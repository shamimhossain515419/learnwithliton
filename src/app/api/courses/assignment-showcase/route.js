import { generateRandomFileName } from "@/utility/generateRandomFileName";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
const fs = require("fs").promises;
import { unlink } from "fs/promises";
//  create method assignmentShowcase
export async function POST(req, res, next) {
  try {
    const data = await req.formData();
    const file = data.get("photo") || File;
    const name = data.get("name") || "";
    const course_id = Number(data.get("course_id")) || 0;
    // upload file menter
    if (!file?.name) {
      return NextResponse.json({ status: false });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const randomFileName = generateRandomFileName(file.name);
    const path = `public/uploads/images/${randomFileName}`;
    await fs.writeFile(path, buffer);
    const result = await prisma.assignmentShowcase.create({
      data: {
        name: name,
        course_id: course_id,
        photo: randomFileName,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: "  assignmentShowcase successfully created",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}
//  get  assignmentShowcase
export async function GET(req, res, next) {
  try {
    let { searchParams } = new URL(req.url);
    let course_id = parseFloat(searchParams.get("id"));
    let name = searchParams.get("name");
    const result = await prisma.assignmentShowcase.findMany({
      where: {
        course_id: course_id,
        name: {
          contains: name,
        },
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: " assignmentShowcase   get successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}

// update assignmentShowcase

export async function PUT(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    const id = parseInt(searchParams.get("id"));
    const data = await req.formData();
    const file = data.get("photo") || null;
    const name = data.get("name") || "";
    const course_id = Number(data.get("course_id")) || 0;

    const existing = await prisma.assignmentShowcase.findUnique({
      where: { id: id },
    });
    if (!existing) {
      return NextResponse.json({
        status: "fail",
        data: "assignmentShowcase not found ",
      });
    }
    let imagePath = ""; // Variable to store the path of the new image
    let randomFileName = existing.photo; // Initialize with the current image filename

    if (file?.name) {
      // Delete the old image file
      imagePath = `public/uploads/images/${existing.photo}`;
      await unlink(imagePath);
      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = `public/uploads/images/${randomFileName}`;
      await fs.writeFile(newPath, buffer);
      imagePath = newPath; // Update the imagePath with the path of the new image
    }

    const result = await prisma.assignmentShowcase.update({
      where: { id },
      data: { photo: randomFileName, course_id, name },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
//  delete assignmentShowcase
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    const findAssignmentShowcase = await prisma.assignmentShowcase.findUnique({
      where: { id },
    });

    let imagePath = `public/uploads/images/${findAssignmentShowcase.photo}`;
    await unlink(imagePath);

    const findCourse = await prisma.assignmentShowcase.findUnique({
      where: { id },
    });
    if (!findCourse) {
      return NextResponse.json({
        status: "fail",
        data: "assignmentShowcase not found",
      });
    }
    const result = await prisma.assignmentShowcase.delete({
      where: { id },
    });
    return NextResponse.json({
      status: "success",
      message: "success delete",
      data: result,
    });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error?.message });
  }
}
