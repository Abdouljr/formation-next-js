import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const books = await prisma.book.findMany();
    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur pour la recupération des books ${error}` },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const book = await prisma.book.create({
      data: {
        titre: data.titre,
        auteur: data.auteur,
        reference: data.reference,
        prix: data.prix,
        stock: data.stock,
      },
    });

    return NextResponse.json(book, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur pour la recupération des books ${error}` },
      { status: 500 }
    );
  }
}
