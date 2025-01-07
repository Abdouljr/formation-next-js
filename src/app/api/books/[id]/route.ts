import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(context: { params: { id: string } }) {
  try {
    const { id } = await context.params;
    const bookId = parseInt(id);

    if (isNaN(bookId)) {
      return NextResponse.json(
        { error: "id du livre est invalide" },
        { status: 400 }
      );
    }

    await prisma.book.delete({
      where: {
        id: bookId,
      },
    });

    return NextResponse.json(
      { message: "Livre supprimer avec succes" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur de suppression du livre ${error}` },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = await context.params;
    const bookId = parseInt(id);

    if (isNaN(bookId)) {
      return NextResponse.json(
        { error: "l'id du livre est invalide" },
        { status: 400 }
      );
    }
    const data = await request.json();
    const book = await prisma.book.update({
      where: {
        id: bookId,
      },
      data: {
        titre: data.titre,
        auteur: data.auteur,
        reference: data.reference,
        prix: data.prix,
        stock: data.stock,
      },
    });

    return NextResponse.json(
      { message: "Livre modifier avec succes", book },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur pour la modification du livre ${error}` },
      { status: 500 }
    );
  }
}
