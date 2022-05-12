export interface IDialog {
  onClose: () => void;
  isOpen: boolean;
  width?: string;
  hideCloseButton?: boolean;
}

export interface IDialogModal {
  width: string;
}
