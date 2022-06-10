export interface IDialog {
  onClose: () => void;
  isOpen: boolean;
  width?: string;
  hideCloseButton?: boolean;
  background?: string;
}

export interface IDialogModal {
  width: string;
  background?: string;
}
