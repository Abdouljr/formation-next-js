import { bookSchema } from "@/schemas/produit.schema";
import { BookFormData, BookModalProps } from "@/types/types";
import { useEffect, useState } from "react";
import * as yup from "yup";
const initialFormData: BookFormData = {
  titre: "",
  auteur: "",
  reference: "",
  prix: 0,
  stock: 0,
};

export default function BookModal({
  isOpen,
  onSubmit,
  onClose,
  bookToEdit,
}: BookModalProps) {
  const [formData, setFormData] = useState<BookFormData>(initialFormData);
  const [erorrs, setErrors] = useState<
    Partial<Record<keyof BookFormData, string>>
  >({});

  useEffect(() => {
    if (bookToEdit) {
      setFormData({
        titre: bookToEdit.titre,
        auteur: bookToEdit.auteur,
        reference: bookToEdit.reference,
        prix: bookToEdit.prix,
        stock: bookToEdit.stock,
      });
    }
  }, [bookToEdit, isOpen]);

  const handleClose = () => {
    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = await bookSchema.validate(formData, {
        abortEarly: false,
      });
      onSubmit(validatedData);
      handleClose();
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors: Partial<Record<keyof BookFormData, string>> = {};
        error.inner.forEach((err: yup.ValidationError) => {
          if (err.path) {
            newErrors[err.path as keyof BookFormData] = err.message;
          }
          setErrors(newErrors);
        });
      }
    }
  };

  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {" "}
          {bookToEdit ? "Modifier un livre" : "Ajouter un livre"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="titre"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Titre
            </label>
            <input
              type="text"
              id="titre"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500  transition-all focus:border-transparent"
              value={formData.titre}
              onChange={(e) =>
                setFormData({ ...formData, titre: e.target.value })
              }
            />
            {erorrs.titre && (
              <p>
                <span className="text-red-500 mt-1 text-sm">
                  {erorrs.titre}
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
