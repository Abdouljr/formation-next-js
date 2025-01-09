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
    } else {
      setFormData(initialFormData);
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

  if (!isOpen) return null;
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
          <div>
            <label
              htmlFor="auteur"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Auteur
            </label>
            <input
              type="text"
              id="auteur"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500  transition-all focus:border-transparent"
              value={formData.auteur}
              onChange={(e) =>
                setFormData({ ...formData, auteur: e.target.value })
              }
            />
            {erorrs.auteur && (
              <p>
                <span className="text-red-500 mt-1 text-sm">
                  {erorrs.auteur}
                </span>
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="reference"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Réference
            </label>
            <input
              type="text"
              id="reference"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500  transition-all focus:border-transparent"
              value={formData.reference}
              onChange={(e) =>
                setFormData({ ...formData, reference: e.target.value })
              }
            />
            {erorrs.reference && (
              <p>
                <span className="text-red-500 mt-1 text-sm">
                  {erorrs.reference}
                </span>
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="prix"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Prix unitaire (en cfa)
            </label>
            <input
              type="number"
              id="prix"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500  transition-all focus:border-transparent"
              value={formData.prix}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  prix: e.target.value === "" ? 0 : parseInt(e.target.value),
                })
              }
            />
            {erorrs.prix && (
              <p>
                <span className="text-red-500 mt-1 text-sm">{erorrs.prix}</span>
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500  transition-all focus:border-transparent"
              value={formData.stock}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  stock: e.target.value === "" ? 0 : parseInt(e.target.value),
                })
              }
            />
            {erorrs.stock && (
              <p>
                <span className="text-red-500 mt-1 text-sm">
                  {erorrs.stock}
                </span>
              </p>
            )}
          </div>
          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-300 transition-all duration-300"
              onClick={handleClose}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-200"
            >
              {bookToEdit ? "Modifier" : "Ajouter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
