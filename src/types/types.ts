export interface BookFormData {
  titre: string;
  auteur: string;
  reference: string;
  prix: number;
  stock: number;
}

export interface Book extends BookFormData {
  id: number;
}

export interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: BookFormData) => void;
  bookToEdit?: Book;
}
