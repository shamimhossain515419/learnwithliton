import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
const fs = require("fs").promises;
import { unlink } from "fs/promises";
import { generateRandomFileName } from "@/utility/generateRandomFileName";
export async function POST(req, res, next) {
  try {
    const data = await req.formData();
    const file = data.get("photo_url") || File;
    const discount = parseFloat(data.get("discount")) || 0;
    const price = parseInt(data.get("price")) || 0;
    const name = data.get("name") || "";
    const description = data.get("description") || "";
    const video_url = data.get("video_url") || "";
    if (!file?.name) {
      return NextResponse.json({ status: false });
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const randomFileName = generateRandomFileName(file.name);
    const path = `public/uploads/courses/${randomFileName}`;
    await fs.writeFile(path, buffer);
    const result = await prisma.courses.create({
      data: {
        name: name,
        description: description,
        video_url: video_url,
        photo_url: randomFileName,
        price,
        discount,
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: "  course successfully created",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}
//  get  courses
export async function GET(req, res, next) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name") || "";
    const result = await prisma.courses.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      include: {
        batch: {
          where: { status: "running" },
        },
      },
    });
    return NextResponse.json({
      status: "success",
      data: result,
      meassge: "  course get successfully ",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", meassge: error?.meassge });
  }
}

// update courses

export async function PUT(req, res) {
  try {
    const data = await req.formData();
    const file = data.get("photo_url") || File;
    const discount = parseFloat(data.get("discount")) || 0;
    const price = parseInt(data.get("price")) || 0;
    const name = data.get("name") || "";
    const description = data.get("description") || "";
    const video_url = data.get("video_url") || "";
    if (!file?.name) {
      return NextResponse.json({ status: false });
    }

    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));

    const existing = await prisma.courses.findUnique({
      where: { id: id },
    });
    if (!existing) {
      return NextResponse.json({
        status: "fail",
        data: "mentors not found ",
      });
    }

    let imagePath = ""; // Variable to store the path of the new image
    let randomFileName = existing.photo_url; // Initialize with the current image filename

    if (file?.name) {
      // Delete the old image file
      imagePath = `public/uploads/courses/${existing.photo_url}`;
      await unlink(imagePath);
      // Upload the new image
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      randomFileName = generateRandomFileName(file.name);
      const newPath = `public/uploads/courses/${randomFileName}`;
      await fs.writeFile(newPath, buffer);
      imagePath = newPath; // Update the imagePath with the path of the new image
    }

    const result = await prisma.courses.update({
      where: { id },
      data: {
        name: name,
        description: description,
        video_url: video_url,
        photo_url: randomFileName,
        price,
        discount,
      },
    });
    if (result) {
      return NextResponse.json({
        status: "success",
        data: result,
        meassge: "  course successfully updated",
      });
    } else {
      return NextResponse.json({
        status: "fail",
        data: result,
        meassge: "  course not updated",
      });
    }
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
export async function DELETE(req, res) {
  try {
    let { searchParams } = new URL(req.url);
    let id = parseFloat(searchParams.get("id"));
    const findCourse = await prisma.courses.findUnique({
      where: { id },
    });
    if (!findCourse) {
      return NextResponse.json({
        status: "fail",
        data: "course not found",
      });
    }
    if (findCourse.photo_url) {
      let imagePath = `public/uploads/courses/${findCourse.photo_url}`;
      await unlink(imagePath);
    }

    const result = await prisma.courses.delete({
      where: { id },
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error?.message);
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
