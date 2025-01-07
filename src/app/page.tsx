"use client";

import { Book, BookFormData } from "@/types/types";
import { useEffect, useState } from "react";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookToEdit, setBookToEdit] = useState<Book | undefined>(undefined);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Une erreur de recupération", error);
    }
  };

  const handleAddBook = async (data: BookFormData) => {
    setIsLoading(true);
    try {
      await fetch("/api/books", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      await fetchBooks();
    } catch (error) {
      console.error("une erreur pour l'enregistrement ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteBook = async (id: number) => {
    if (!window.confirm("êtes vous sûr de supprimer ce livre ?")) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`/api/books/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Livre non supprimer");
      }

      await fetchBooks();
    } catch (error) {
      console.error("Erreur de suppression");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditBook = async (data: BookFormData) => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/books/${bookToEdit?.id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Livre non modifier");
      }
      setBookToEdit(undefined);
      await fetchBooks();
    } catch (error) {
      console.error(`Erreur pour la modification ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <h1>Test du html</h1>
    </>
  );
}
