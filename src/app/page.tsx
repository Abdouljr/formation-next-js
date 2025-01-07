"use client";

import { Book } from "@/types/types";
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
    } catch (error) {
      console.error("Une erreur de recupération", error);
    }
  };
  return (
    <>
      <h1>Test du html</h1>
    </>
  );
}
